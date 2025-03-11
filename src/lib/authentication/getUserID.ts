import {getSession} from "@/lib/authentication/getSession";

export async function getUserID() {
  return (await getSession())?.sub;
}
