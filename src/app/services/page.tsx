import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import ServicesCta from "./ServicesCta";

export const metadata: Metadata = {
  title: "Services — Scripts&Canvas",
  description:
    "Web design, web development, AI solutions, agentic workflows, and SaaS development services. We build digital products that combine clean code with thoughtful design.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        number="01"
        title="Our Services"
        subtitle="Code, AI, and design working together. From websites to agentic workflows — here's what we bring to the table."
      />
      <Services />
      <ServicesCta />
    </>
  );
}
