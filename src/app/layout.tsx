import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./sherd/reset.css";
import "./globals.css";
import Footer from "./sherd/Footer";
import Aside from "./sherd/Aside";
import TopNav from "./sherd/topNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <TopNav />
        <Aside props={children} />
        <Footer />
      </body>
    </html>
  );
}
