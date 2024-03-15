import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
// import "./globals.css";

const notoSansKR = Noto_Sans_KR({ preload:false });

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
