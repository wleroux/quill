import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {ulid} from "ulid";
import {CharacterID} from "@/model/character/CharacterID";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {unretireCharacter} from "@/core/character/unretireCharacter";

export async function POST(
  request: Request,
  {params}: {params: Promise<{characterID: CharacterID}>}
): Promise<Response> {
  const authorizingUserID = await getUserID();
  if (authorizingUserID === undefined || !(await isScribe())) return new Response("Unauthorized", {status: 403});

  const {characterID} = await params;
  const result = await withMetadata({
    userID: authorizingUserID,
    workflow: "UNRETIRE-CHARACTER",
    requestID: ulid()
  }, () => unretireCharacter(characterID));
  if (result.valid) {
    return Response.json(result.value);
  } else {
    return new Response("Cannot Retire Character", {status: 400});
  }
}