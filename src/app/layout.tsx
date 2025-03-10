import type { Metadata } from "next";
import { Audiowide, Roboto} from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any"/>
      <body className={`${audiowide.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
