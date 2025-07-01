import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {createCharacter} from "@/core/character/createCharacter";
import {ulid} from "ulid";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestID = ulid();
  const decisions = req.body;
  const userID = await getUserID(req.cookies["token"]);
  if (!userID) return res.status(403).send("Bad Request");

  const result = await withMetadata(
    {requestID, userID, workflow: "CREATE-CHARACTER"},
    () => createCharacter(userID, decisions)
  );
  if (!result.valid) return res.status(400).send("Bad Request");
  return res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .send(JSON.stringify(result.value));
}
