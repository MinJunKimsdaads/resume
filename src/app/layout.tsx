import '@/app/ui/global.css';
import type { Metadata } from "next";
import { notoSansKR } from "./ui/fonts";
import SideNav from "./ui/common/sideNav";

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
      <body className={`${notoSansKR.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav></SideNav>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
