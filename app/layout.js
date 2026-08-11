import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL("https://ai-creator-hub-woad.vercel.app"),
  title: {
    default: "AI Creator Hub — Discover the Best AI Tools for Creators & Businesses",
    template: "%s | AI Creator Hub",
  },
  description:
    "Explore carefully selected AI tools to create content faster, boost productivity and grow your business. Curated reviews across video, image, writing, productivity and business AI tools.",
  openGraph: {
    title: "AI Creator Hub",
    description:
      "Discover the best AI tools for creators and businesses, researched and kept up to date.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Creator Hub",
    description:
      "Discover the best AI tools for creators and businesses, researched and kept up to date.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
