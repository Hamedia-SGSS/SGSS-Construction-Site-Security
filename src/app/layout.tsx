import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secure Guard Security Services || Construction Site Security",
  description:
    "Professional construction site security officers, mobile patrols, gate control, and material checks designed to protect equipment, workers, and project progress after hours.",
  keywords: [
    "construction site security",
    "jobsite security",
    "construction security officers",
    "equipment theft prevention",
    "copper theft security",
    "mobile patrols",
    "gate access control",
    "secure guard",
    "after-hours security",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Secure Guard Security Services || Construction Site Security",
    description:
      "Professional construction site security officers, mobile patrols, gate control, and material checks designed to protect equipment, workers, and project progress after hours.",
    type: "website",
  },
};

import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
