import { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Chirragoni Prasanna Kumar",
  description: "Get in touch with Chirragoni Prasanna Kumar for collaborations, engineering contracts, or project inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-16">
      <Contact />
    </main>
  );
}
