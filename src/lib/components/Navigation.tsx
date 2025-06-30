import NdcLogo from "@/app/ndc-logo.svg";
import {SignedIn} from "@/lib/components/SignedIn";
import {getUserName} from "@/lib/components/Username";
import {SignedOut} from "@/lib/components/SignedOut";
import {Menubar, MenubarPassThroughOptions} from "primereact/menubar";
import Link from "next/link";
import Image from "next/image";
import {isAdministrator, isAuthenticated, isGameMaster, isScribe} from "@/lib/authentication/isAuthenticated";
import {getUserID} from "@/lib/authentication/getUserID";
import {MenuItem} from "primereact/menuitem";

const navigationMenuPassthrough: MenubarPassThroughOptions = {
  root: {
    className: "border-0 flex flex-row gap-4 px-0 items-center py-2"
  },
  button: {
    className: "hidden"
  },
  menu: {
    className: "flex flex-row gap-4 bg-transparent flex-1 relative py-0 sm:flex-row flex-nowrap shadow-none"
  },
  menuitem: {
    className: "relative py-1 w-fit"
  },
  submenu: {
    className: "absolute px-4 py-1 flex flex-col gap-4 drop-shadow-lg bg-[color:var(--background)] border border-[color:var(--foreground)]/20 rounded-md mt-2 w-fit"
  },
  action: {
    className: "text-nowrap flex-inline flex-row gap-2"
  },
  start: {
    className: "flex flex-row items-center"
  },
  end: {
    className: "flex flex-row items-center gap-4"
  }
} as const;

const userManuPassthrough: MenubarPassThroughOptions = {
  ...navigationMenuPassthrough,
  root: {
    className: "border-0 flex flex-row gap-4 px-0 items-center py-0"
  }
};

export async function Navigation() {
  const [player, scribe, gameMaster, admin] = await Promise.all([isAuthenticated(), isScribe(), isGameMaster(), isAdministrator()]);

  const model: MenuItem[] = [];
  if (player) {
    model.push({label: "Player", items: [
      {label: "My Characters", url: "/player/my-characters"}
    ]});
  }
  if (gameMaster) {
    // model.push({label: "Game Master", items: [
    //   {label: "My Games", url: "/game-master/my-games"}
    // ]})
  }
  if (scribe) {
  }
  if (admin) {
    model.push({label: "Admin", items: [
      {label: "Discord", url: "/admin/discord"}
    ]})
  }

  const userID = await getUserID();
  return <div className="container">
    <Menubar
      pt={navigationMenuPassthrough}
    start={
      <Link href="/" className="inline-flex gap-2 items-center">
        <Image
          alt="New Dawn Coalition"
          width={40}
          height={40}
          src={NdcLogo}
        />
      </Link>}
    end={<>
      <Link href="https://discord.gg/n2feMpKxmz" className="inline-flex gap-2 items-center">
        <i className="pi pi-discord"/>
      </Link>
      <SignedIn>
        <Menubar pt={userManuPassthrough} model={[
          {icon: "pi pi-user", label: await getUserName(userID!), items: [
            {icon: "pi pi-sign-out", label: "Sign Out", url: "/auth/signout"}
          ]}
        ]} />
      </SignedIn>
      <SignedOut>
        <Link href="/auth/signin" className="text-nowrap">
          Sign In
        </Link>
      </SignedOut>
    </>}
    model={model} />
  </div>;
}