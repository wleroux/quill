import {Resource} from "sst";

export async function getGuildID() {
  return Resource.DiscordGuildID.value;
}