import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {createCharacter} from "@/core/character/createCharacter";
import {ulid} from "ulid";

export async function POST(req: Request): Promise<Response> {
  const requestID = ulid();
  const decisions = await req.json();
  const userID = await getUserID();
  if (!userID) return Response.json(undefined, {status: 403});

  const result = await withMetadata(
    {requestID, userID, workflow: "CREATE-CHARACTER"},
    () => createCharacter(userID, decisions)
  );
  if (!result.valid) return Response.json(undefined, {status: 400});
  return Response.json(result.value);
}
