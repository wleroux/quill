import {AsyncLocalStorage} from "node:async_hooks";
import {PlayerID} from "@/model/player/PlayerID";

type Metadata = {
  requestID: string;
  workflow: string;
  userID: PlayerID;
};

const RequestContext = new AsyncLocalStorage<Metadata>();

export function getMetadata() {
  const metadata = RequestContext.getStore();
  if (metadata === undefined) throw new Error("No metadata provided");
  return metadata;
}
export function withMetadata<ReturnValue>(metadata: Metadata, fn: () => ReturnValue): ReturnValue {
  return RequestContext.run(metadata, fn);
}
