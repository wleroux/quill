import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {retireCharacter} from "@/core/character/retireCharacter";
import {ulid} from "ulid";
import {CharacterID} from "@/model/character/CharacterID";

export async function POST(
  request: Request,
  {params}: {params: Promise<{characterID: CharacterID}>}
): Promise<Response> {
  const authorizingUserID = await getUserID();
  if (!authorizingUserID) return new Response("Unauthorized", {status: 403});

  const {characterID} = await params;
  const result = await withMetadata({
    userID: authorizingUserID,
    workflow: "RETIRE-CHARACTER",
    requestID: ulid()
  }, () => retireCharacter(characterID, authorizingUserID));
  if (result.valid) {
    return Response.json(result.value);
  } else {
    return new Response("Cannot Retire Character", {status: 400});
  }
}