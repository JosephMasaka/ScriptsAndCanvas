import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Scripts&Canvas — Web Design, Development & SaaS",
  description:
    "Scripts&Canvas is an IT company specializing in web design, web development, and SaaS development. We build digital products that combine clean code with thoughtful design.",
  keywords: [
    "web design",
    "web development",
    "SaaS development",
    "Scripts&Canvas",
    "IT company",
    "POS system",
    "asset management",
  ],
  openGraph: {
    title: "Scripts&Canvas — Web Design, Development & SaaS",
    description:
      "We build digital products that combine clean code with thoughtful design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
