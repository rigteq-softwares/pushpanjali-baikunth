import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import DevConsole from "@/components/DevConsole";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.name + " | Premium Luxury Apartments",
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        {children}
        <DevConsole />
      </body>
    </html>
  );
}
