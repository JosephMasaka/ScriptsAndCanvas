import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import AboutCta from "./AboutCta";

export const metadata: Metadata = {
  title: "About — Scripts&Canvas",
  description:
    "Learn about Scripts&Canvas — an IT company passionate about building great software through web design, development, and SaaS solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        number="03"
        title="About Us"
        subtitle="We're a small but mighty team passionate about building great software."
      />
      <About />
      <AboutCta />
    </>
  );
}
