import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — Caravan & Motorhome Servicing, North Yorkshire`,
    template: `%s | ${site.name}`,
  },
  description:
    "AWS Approved caravan & motorhome servicing, repairs and upgrades in Malton, North Yorkshire. Workshop & fully mobile.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  formatDetection: { telephone: true },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060f1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
