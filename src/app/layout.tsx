import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import ThemeProvider from "@/theme/ThemeProvider";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "OREBiT Wallet — Dashboard",
  description:
    "OREBiT Web3 Wallet Dashboard. Manage your crypto and fiat wallets, track balances, and earn rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={barlowCondensed.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
