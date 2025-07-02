import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {ulid} from "ulid";
import {CharacterID} from "@/model/character/CharacterID";
import {refreshCharacter} from "@/core/character/refreshCharacter";

export async function POST(
  _: Request,
  {params}: {params: Promise<{characterID: CharacterID}>}
): Promise<Response> {
  const authorizingUserID = await getUserID();
  if (!authorizingUserID) return new Response("Unauthorized", {status: 403});

  const {characterID} = await params;
  const result = await withMetadata({
    userID: authorizingUserID,
    workflow: "REFRESH-CHARACTER",
    requestID: ulid()
  }, () => refreshCharacter(characterID, authorizingUserID));
  if (result.valid) return new Response();
  else return new Response(`Cannot Update: ${result.error.map(error => `${error.code} (${error.path.join("/")})`).join(", ")}`, {status: 400});
}