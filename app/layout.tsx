import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "aight estates - Mehr Zeit für Werte",
  description: "Ihr strategischer Partner für KI-gestützte Automatisierung in der Immobilienbranche. Automatisierte Workflows, intelligente Prozesse und nachhaltige Digitalisierung.",
  keywords: "KI Immobilien, Automatisierung, PropTech, Consulting, Workflow Automation",
  authors: [{ name: "aight estates" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
