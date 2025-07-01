import {PropsWithChildren} from "react";
import {isAuthenticated} from "@/lib/authentication/isAuthenticated";

export async function SignedIn({children}: PropsWithChildren<{}>) {
  const authenticated = await isAuthenticated();
  return authenticated ? <>{children}</> : <></>;
}
