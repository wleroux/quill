import type {Metadata} from "next";
import {Audiowide, Roboto} from "next/font/google";
import "./globals.css";
import Page from "@/lib/components/Page";
import {Navigation} from "@/lib/components/Navigation";
import {TailwindPrimeReactProvider} from "@/app/tailwind-prime-react-provider";

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
    <TailwindPrimeReactProvider>
      <html lang="en">
      <head>
        <title>New Dawn Coalition</title>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body className={`${audiowide.variable} ${roboto.variable} antialiased flex flex-col h-screen`}>
      <nav className="font-[family-name:var(--font-audiowide)] justify-center items-center flex border-b border-[color:var(--foreground)]/20 drop-shadow-lg bg-[color:var(--background)]">
        <Navigation />
      </nav>
      <Page>
        {children}
      </Page>
      </body>
      </html>
    </TailwindPrimeReactProvider>
  );
}
