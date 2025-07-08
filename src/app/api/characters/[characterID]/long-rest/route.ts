import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {ulid} from "ulid";
import {CharacterID} from "@/model/character/CharacterID";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {tx} from "@/core/DynamoDBClient";
import {LongRestDecision} from "@/model/character/long-rest/LongRestDecision";

export async function POST(
  request: Request,
  {params}: {params: Promise<{characterID: CharacterID}>}
): Promise<Response> {
  const authorizingUserID = await getUserID();
  if (!authorizingUserID) return new Response("Unauthorized", {status: 403});
  const {characterID} = await params;
  const character = await CharacterRepository.getCharacterByID(characterID);
  if ((character.ownerID !== characterID) && !(await isScribe()) ) return new Response("Unauthorized", {status: 403});

  const result = await withMetadata({
    requestID: ulid(),
    workflow: "LONG REST",
    userID: authorizingUserID
  }, tx(async () => {
    const decision = (await request.json()) as LongRestDecision["data"]["decisions"];
    return CharacterRepository.applyToCharacter(character, [
      {type: "long-rest", data: decision}
    ]);
  }));

  if (result.valid) {
    return Response.json(result.value);
  } else {
    return new Response(`Cannot Long Rest Character: ${result.error}`, {status: 400});
  }
}
