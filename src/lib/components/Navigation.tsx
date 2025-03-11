import NdcLogo from "@/app/ndc-logo.svg";
import {SignedIn} from "@/lib/components/SignedIn";
import {getUserName, Username} from "@/lib/components/Username";
import {SignedOut} from "@/lib/components/SignedOut";
import {Menubar} from "primereact/menubar";
import Link from "next/link";
import Image from "next/image";
import {isAdministrator, isAuthenticated, isGameMaster, isScribe} from "@/lib/authentication/isAuthenticated";
import {getUserID} from "@/lib/authentication/getUserID";
import {MenuItem} from "primereact/menuitem";

const passthrough = {
  root: {
    className: "flex gap-8 items-center",
  },
  action: {
    className: "inline-flex gap-2 items-center text-nowrap h-10 px-2 w-auto"
  },
  menu: {
    className: "inline-flex flex-grow gap-2"
  },
  submenu: {
    className: "bg-[color:var(--background)] rounded-md flex flex-col drop-shadow-lg border border-[color:var(--foreground)]/20"
  },
  button: {
    className: "hidden"
  },
  start: {
    className: "inline-flex flex-row gap-4 items-center"
  },
  end: {
    className: "inline-flex flex-row gap-4 items-center"
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
    model.push({label: "Game Master", items: [
      {label: "My Creatures", url: "/game-master/my-creatures"},
      {label: "My Encounters", url: "/game-master/my-encounters"},
      {label: "My Contracts", url: "/game-master/my-contracts"},
      {label: "My Games", url: "/game-master/my-games"},
    ]});
  }
  if (scribe) {
    model.push({label: "Scribe", items: [
        {label: "Players", url: "/scribe/players"},
        {label: "Games", url: "/scribe/games"}
      ]})
  }
  if (admin) {
    model.push({label: "Admin", items: [
      {label: "Creatures", url: "/admin/regional-creatures"},
      {label: "Encounters", url: "/admin/regional-encounters"},
      {label: "Species", url: "/admin/species"},
      {label: "Backgrounds", url: "/admin/backgrounds"},
      {label: "Classes", url: "/admin/classes"},
      {label: "Items", url: "/admin/items"},
      {label: "Spells", url: "/admin/spells"},
      {label: "Settings", url: "/admin/settings"},
    ]});
  }

  const userID = await getUserID();
  return <div className="container py-2">
    <Menubar
    start={
      <Link href="/" className="inline-flex gap-2 items-center">
        <Image
          alt="NDC Logo"
          width={40}
          height={40}
          src={NdcLogo}
        />
        <span className="text-2xl text-nowrap">
          NDC
        </span>
      </Link>}
    end={<>
      <Link href="https://discord.gg/n2feMpKxmz" className="inline-flex gap-2 items-center">
        <i className="pi pi-discord"/>
        Discord
      </Link>

      <SignedIn>
        <Menubar pt={passthrough} model={[
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
    pt={passthrough}
    model={model} />
  </div>;
}