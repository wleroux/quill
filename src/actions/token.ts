import { cookies } from "next/headers";

export async function token() {
  return (await cookies()).get("token")?.value;
}
