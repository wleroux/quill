import type {Metadata} from "next";
import {Audiowide, Roboto} from "next/font/google";
import "./globals.css";
import NdcLogo from "@/app/ndc-logo.svg";
import Image from "next/image";
import {Spacer} from "@/lib/components/Spacer";
import Link from "next/link";
import {SignedOut} from "@/lib/components/SignedOut";
import {SignedIn} from "@/lib/components/SignedIn";
import Page from "@/lib/components/Page";
import {getUserID} from "@/lib/authentication/getUserID";
import {Username} from "@/lib/components/Username";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400"
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "New Dawn Coalition",
  description: "A D&D 5e West March Community",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>New Dawn Coalition</title>
      <link rel="icon" href="/favicon.ico" sizes="any"/>
    </head>
    <body className={`${audiowide.variable} ${roboto.variable} antialiased flex flex-col h-screen`}>
      <nav className="font-[family-name:var(--font-audiowide)] justify-center items-center flex border-b border-white/20">
        <div className="flex py-4 px-4 gap-4 container items-center">
          <Link href="/" className="inline-flex gap-2 items-center'">
            <Image
              alt="NDC Logo"
              width={40}
              height={40}
              src={NdcLogo}
            />
            <span className="text-2xl">
            New Dawn Coalition
          </span>
          </Link>
          <Spacer/>
          <SignedIn>
            <Username userID={(await getUserID())!} />
            <Link href="/auth/signout">
              Sign Out
            </Link>
          </SignedIn>
          <SignedOut>
            <Link href="/auth/signin">
              Sign In
            </Link>
          </SignedOut>
        </div>
      </nav>
      <Page>
        {children}
      </Page>
    </body>
    </html>
  );
}
