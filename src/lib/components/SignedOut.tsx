import {PropsWithChildren} from "react";
import {isAuthenticated} from "@/lib/authentication/isAuthenticated";
import { cookies } from "next/headers";

export async function SignedOut({children}: PropsWithChildren<{}>) {
  const authenticated = await isAuthenticated((await cookies()).get("token")?.value);
  return !authenticated ? <>{children}</> : <></>;
}