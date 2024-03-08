import type { Metadata } from "next";
import {Quicksand} from 'next/font/google';
import "./globals.css";

const font = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Carla Joumier",
  description: "Mi portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
