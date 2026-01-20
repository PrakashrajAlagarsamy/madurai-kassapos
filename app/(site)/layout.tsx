import { Inter } from "next/font/google";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Metadata } from "next";
import Proivder from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kassapos - Madurai's Best Billing Software",
  description: "Kassapos is the best billing software in Madurai, designed to streamline your business operations with ease and efficiency. Experience seamless invoicing, inventory management, and customer tracking all in one platform.",
  icons: {
    icon: "https://www.kassapos.in/assets/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <Proivder>{children}</Proivder>
      </body>
    </html>
  );
}
