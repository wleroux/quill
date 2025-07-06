import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {ulid} from "ulid";
import {CharacterID} from "@/model/character/CharacterID";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {tx} from "@/core/DynamoDBClient";
import {RetrainDecision} from "@/model/character/retrain/RetrainDecision";

export async function POST(
  request: Request,
  {params}: {params: Promise<{characterID: CharacterID}>}
): Promise<Response> {
  const authorizingUserID = await getUserID();
  if (!authorizingUserID) return new Response("Unauthorized", {status: 403});
  if (!(await isScribe())) return new Response("Unauthorized", {status: 403});
  const {characterID} = await params;
  const character = await CharacterRepository.getCharacterByID(characterID);

  const result = await withMetadata({
    requestID: ulid(),
    workflow: "RETRAIN",
    userID: authorizingUserID
  }, tx(async () => {
    const decision = (await request.json()) as RetrainDecision;
    return CharacterRepository.applyToCharacter(character, [
      {type: "retrain", data: decision}
    ]);
  }));

  if (result.valid) {
    return Response.json(result.value);
  } else {
    return new Response(`Cannot Retrain Character: ${result.error}`, {status: 400});
  }
}