import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { BackToTop } from "@/components/layout/BackToTop";
import { AmbientFX } from "@/components/ui/AmbientFX";
import { business } from "@/data/business";

const display = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${business.name} | Bar & Lounge in Walnut Creek, CA`,
  description: business.description,
  metadataBase: new URL("https://the-dive.vercel.app"),
  openGraph: {
    title: `${business.name} | Bar & Lounge in Walnut Creek, CA`,
    description: business.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ink text-cream">
        <AmbientFX />
        <div className="pointer-events-none fixed inset-0 z-[54] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
        <div className="grain-overlay pointer-events-none fixed inset-0 z-[55] opacity-[0.05]" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <BackToTop />
      </body>
    </html>
  );
}
