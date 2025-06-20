/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "quill",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const discordClientID = new sst.Linkable("DiscordClientID", {
      properties: {
        value: process.env.DISCORD_CLIENT_ID
      }
    });
    const discordGuildID = new sst.Linkable("DiscordGuildID", {
      properties: {
        value: process.env.DISCORD_GUILD_ID
      }
    });
    const discordClientSecret = new sst.Secret("DiscordClientSecret");
    const discordToken = new sst.Secret("DiscordToken");

    const domain = $app.stage === "production" ? "newdawncoalition.com" : `${$app.stage}.quill.newdawncoalition.com`;
    const redirectUrl = new sst.Linkable("REDIRECT_URL", {
      properties: {
        value: $dev ? "http://localhost:3000" : `https://${domain}`
      }
    });

    const table = new sst.aws.Dynamo("QuillTable", {
      fields: {PK: "string", SK: "string", GS1PK: "string", GS1SK: "string"},
      primaryIndex: { hashKey: "PK", rangeKey: "SK" },
      globalIndexes: {
        GS1: {hashKey: "GS1PK", rangeKey: "GS1SK"}
      }
    })

    const vpc = new sst.aws.Vpc("QuillVPC");
    const cluster = new sst.aws.Cluster("QuillCluster", {vpc});
    const service = new sst.aws.Service("QuillService", {
      cluster,
      loadBalancer: {
        domain: domain,
        ports: [{listen: "80/http", redirect: "443/https"}, {listen: "443/https", forward: "3000/http"}]
      },
      link: [discordClientID, discordClientSecret, discordToken, discordGuildID, redirectUrl, table],
      dev: {
        command: "next dev --turbopack"
      }
    });

    return {
      url: service.url
    };
  }
});
