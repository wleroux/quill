import React from "react";
import {ScribeCharacters} from "@/app/scribe/characters/Characters";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import { Resource } from "sst/resource";

export default async function CharacterPage() {
  const guildMembers = await botDiscordClient.getGuildMembers(Resource.DiscordGuildID.value, {
    limit: 1000
  });
  const members = Object.fromEntries(guildMembers.map(guildMember => [guildMember.user.id, guildMember.nick ?? guildMember.user!.global_name ?? guildMember.user.username]));

  const characters = (await isScribe())
    ? await CharacterRepository.getAllCharacters()
    : [];
  return <ScribeCharacters characters={characters} members={members} />
}