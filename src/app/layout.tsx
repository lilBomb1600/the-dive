import { Anton, Space_Grotesk, Lobster } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { BackToTop } from "@/components/layout/BackToTop";
import { AmbientFX } from "@/components/ui/AmbientFX";
import { JsonLd } from "@/components/JsonLd";
import { siteJsonLd } from "@/lib/seo/jsonld";
import { rootMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";

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

const script = Lobster({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = rootMetadata({ title: pageCopy.home.title, description: pageCopy.home.description });

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ink text-cream">
        <JsonLd data={siteJsonLd()} />
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
