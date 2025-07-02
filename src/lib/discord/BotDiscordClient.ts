import {
  APIApplicationCommand,
  APIChannel,
  APIGuildMember,
  APIMessage,
  APIRole,
  RESTPatchAPIChannelJSONBody,
  RESTPostAPIApplicationCommandsJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RouteBases,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import {Resource} from "sst/resource";

const DISCORD_ROUTE_BUCKET_MAP: {[route: string]: string} = {};
const DISCORD_BUCKETS: {[hash: string]: Bucket} = {};
async function discordApiRequest(route: string, init?: RequestInit) {
  const response = await fetch(`${RouteBases.api}${route}`, {
    ...init,
    headers: {
      "Authorization": `Bot ${Resource.DiscordToken.value}`,
      "Content-Type": "application/json",
      ...init?.headers
    }
  });
  const hash = response.headers.get("x-ratelimit-bucket") ?? undefined;
  if (hash !== undefined) {
    DISCORD_ROUTE_BUCKET_MAP[route] = hash;
    if (!DISCORD_BUCKETS[hash]) DISCORD_BUCKETS[hash] = new Bucket();
    const bucket = DISCORD_BUCKETS[hash];
    bucket.limit = parseInt(response.headers.get("x-ratelimit-limit") ?? "0");
    bucket.remaining = parseInt(response.headers.get("x-ratelimit-remaining") ?? "0");
    const resetAfter = parseInt(response.headers.get("x-ratelimit-reset-after") ?? "0");
    bucket.reset = Date.now() + (resetAfter * 1000);
    bucket.refreshRate(); // update refresher with latest data
    if (response.status === 429) {
      console.error(`Rate Limited Exceeded [${hash}]: Retry in ${resetAfter}s`)
      return bucket.request(route, init);
    }
  }

  if (response.ok) return response.json();
  throw new Error(`Failed to execute: ${route}\nStatus: ${response.status}\nResponse: ${await response.text()}`);
}

class Bucket {
  handler?: NodeJS.Timeout;
  queue: {
    route: string;
    init?: RequestInit;
    resolve: (response: any) => void;
    reject: (error: any) => void
  }[] = [];

  limit: number = 1;
  remaining: number = 0;
  reset: number = 0;
  request(route: string, init?: RequestInit) {
    return new Promise((resolve, reject) => {
      if (this.remaining !== 0) {
        this.remaining --;
        return discordApiRequest(route, init).then(resolve).catch(reject);
      } else {
        console.log(`Discord Rate Limit Reached on ${route}.`);
        this.queue.push({route, init, resolve, reject});
      }
    })
  }

  refreshRate() {
    if (!this.handler) clearTimeout(this.handler);
    this.handler = setTimeout(() => {
      this.handler = undefined;
      this.remaining = this.limit;
      const messages = this.queue;
      this.queue = [];
      for (const message of messages) {
        this.request(message.route, message.init).then(message.resolve).catch(message.reject);
      }
    }, this.reset - Date.now());
  }
}

class BotDiscordClient {
  createMessage(channelID: Snowflake, content: RESTPostAPIChannelMessageJSONBody) {
    return this.api(`${Routes.channelMessages(channelID)}`, {
      method: "POST",
      body: JSON.stringify(content)
    });
  }
  listGuildMembers(guildID: Snowflake, options?: {
    limit?: string,
    after?: string
  }): Promise<APIGuildMember[]> {
    return this.api(`${Routes.guildMembers(guildID)}?${new URLSearchParams(options).toString()}`, {
      method: "GET"
    });
  }

  addGuildMemberRole(guildID: Snowflake, memberID: Snowflake, roleID: Snowflake) {
    return this.api(Routes.guildMemberRole(guildID, memberID, roleID), {
      method: "PUT"
    });
  }

  removeGuildMemberRole(guildID: Snowflake, memberID: Snowflake, roleID: Snowflake) {
    return this.api(Routes.guildMemberRole(guildID, memberID, roleID), {
      method: "DELETE"
    });
  }

  getGuildMember(guildID: Snowflake, memberID: Snowflake): Promise<APIGuildMember> {
    return this.api(Routes.guildMember(guildID, memberID), {
      method: "GET"
    });
  }

  getGuildRoles(guildID: Snowflake): Promise<APIRole[]> {
    return this.api(Routes.guildRoles(guildID), {
      method: "GET",
      cache: "force-cache",
      next: {revalidate: 3600}
    });
  }

  getGuildChannels(guildID: Snowflake): Promise<APIChannel[]> {
    return this.api(Routes.guildChannels(guildID), {
      method: "GET"
    });
  }

  getGuildMembers(guildID: Snowflake, options?: {
    limit?: number;
    after?: Snowflake
  }): Promise<APIGuildMember[]> {
    const params = new URLSearchParams();
    if (options?.limit) params.set("limit", `${options?.limit}`);
    if (options?.after) params.set("after", options?.after);
    return this.api(`${Routes.guildMembers(guildID)}?${params.toString()}`, {
      method: "GET",
      cache: "force-cache",
      next: {
        revalidate: 60 * 60
      }
    });
  }

  createGuildApplicationCommands(applicationID: Snowflake, guildID: Snowflake, commands: RESTPostAPIApplicationCommandsJSONBody[]): Promise<APIApplicationCommand> {
    return this.api(Routes.applicationGuildCommands(applicationID, guildID), {
      method: "PUT",
      body: JSON.stringify(commands)
    });
  }

  getChannel(channelID: Snowflake): Promise<APIChannel> {
    return this.api(Routes.channel(channelID), {
      method: "GET"
    });
  }

  async getChannelMessages(channelID: Snowflake): Promise<APIMessage[]> {
    const messages: APIMessage[] = [];
    while (true) {
      const lastMessage = messages.length > 0 ? messages[messages.length - 1] : undefined;
      const params = lastMessage ? new URLSearchParams({before: lastMessage.id}) : undefined;
      const route = params
        ? `${Routes.channelMessages(channelID)}?${params}`
        : Routes.channelMessages(channelID);
      const newMessages = await this.api(route, {
        method: "GET",
      });
      messages.push(...newMessages);
      if (newMessages.length === 0) break;
    }
    return messages;
  }

  async modifyChannel(channelID: Snowflake, value: RESTPatchAPIChannelJSONBody) {
    return this.api(Routes.channel(channelID), {
      method: "PATCH",
      body: JSON.stringify(value)
    })
  }

  private async api(route: string, init?: RequestInit) {
    const hash = DISCORD_ROUTE_BUCKET_MAP[route];
    if (hash === undefined) return discordApiRequest(route, init);
    return DISCORD_BUCKETS[hash].request(route, init);
  }

  async getChannelMessage(channelID: Snowflake, messageID: Snowflake): Promise<APIMessage> {
    return this.api(Routes.channelMessage(channelID, messageID), {
      method: "GET"
    });
  }
}

export const botDiscordClient = new BotDiscordClient();
