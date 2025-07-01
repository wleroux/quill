import {PropsWithChildren} from "react";
import {isAuthenticated} from "@/lib/authentication/isAuthenticated";

export async function SignedOut({children}: PropsWithChildren<{}>) {
  const authenticated = await isAuthenticated();
  return !authenticated ? <>{children}</> : <></>;
}