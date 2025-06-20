import {Snowflake} from "discord-api-types/v10";

export type RefreshDiscordRoles = {
  type: "refresh-discord-roles";
  data: {
    userID: Snowflake;
  }
};

export type QueueMessage =
  | RefreshDiscordRoles
  ;
