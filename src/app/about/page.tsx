import { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Me | Chirragoni Prasanna Kumar",
  description: "Learn about Chirragoni Prasanna Kumar, an AI/ML Engineer and Full Stack Developer. Explore academic foundations, journey milestones, and professional backgrounds.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-16">
      <About />
    </main>
  );
}
