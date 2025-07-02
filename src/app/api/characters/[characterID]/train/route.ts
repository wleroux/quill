import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {retireCharacter} from "@/core/character/retireCharacter";
import {ulid} from "ulid";
import {CharacterID} from "@/model/character/CharacterID";
import {ProgressDecision} from "@/model/character/progress/ProgressDecision";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {tx} from "@/core/DynamoDBClient";
import {ErrorResult} from "@/model/processor/Result";

export async function POST(
  request: Request,
  {params}: {params: Promise<{characterID: CharacterID}>}
): Promise<Response> {
  const authorizingUserID = await getUserID();
  if (!authorizingUserID) return new Response("Unauthorized", {status: 403});
  const {characterID} = await params;
  const character = await CharacterRepository.getCharacterByID(characterID);
  if (character.ownerID !== authorizingUserID && !(await isScribe())) return new Response("Unauthorized", {status: 403});

  const result = await withMetadata({
    requestID: ulid(),
    workflow: "TRAIN",
    userID: authorizingUserID
  }, tx(async () => {
    const decision = (await request.json()) as ProgressDecision;
    if (decision.type === "name") {
      return CharacterRepository.applyToCharacter(character, [
        {type: "train", data: [decision]}
      ]);
    } else {
      return ErrorResult.of("Invalid");
    }
  }));

  if (result.valid) {
    return Response.json(result.value);
  } else {
    return new Response("Cannot Train Character", {status: 400});
  }
}