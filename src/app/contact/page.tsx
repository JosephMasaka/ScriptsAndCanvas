import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Scripts&Canvas",
  description:
    "Get in touch with Scripts&Canvas. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        number="04"
        title="Get in Touch"
        subtitle="Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you."
      />
      <Contact />
    </>
  );
}
