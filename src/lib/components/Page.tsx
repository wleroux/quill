import {PropsWithChildren} from "react";

export default function Page({children}: PropsWithChildren<{}>) {
  return (<main className="grow flex flex-col items-center">
    <div className="container flex flex-col px-4 py-4 gap-4">
      {children}
    </div>
  </main>);
}
