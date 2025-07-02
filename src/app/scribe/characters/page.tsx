import React from "react";
import {ScribeCharacters} from "@/app/scribe/characters/Characters";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {APIGuildMember} from "discord-api-types/v10";
import {getAllMembers} from "@/core/getMembers";

export const dynamic = 'force-dynamic';

export default async function Page() {
  const members: APIGuildMember[] = await getAllMembers();
  const memberNames = Object.fromEntries(members.map(member => [member.user.id, member.nick ?? member.user.global_name ?? member.user.username]));


  const characters = (await isScribe())
    ? await CharacterRepository.getAllCharacters()
    : [];
  return <ScribeCharacters characters={characters} members={memberNames} />
}