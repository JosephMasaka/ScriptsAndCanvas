import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Scripts&Canvas — Web Design, Development, AI & SaaS",
  description:
    "Scripts&Canvas is an IT company specializing in web design, web development, AI solutions, agentic workflows, and SaaS development. We build digital products that combine clean code with thoughtful design.",
  keywords: [
    "web design",
    "web development",
    "SaaS development",
    "AI solutions",
    "agentic workflows",
    "Scripts&Canvas",
    "IT company",
    "POS system",
    "asset management",
  ],
  openGraph: {
    title: "Scripts&Canvas — Web Design, Development, AI & SaaS",
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
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
