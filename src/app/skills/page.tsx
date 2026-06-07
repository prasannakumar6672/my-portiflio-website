import { Metadata } from "next";
import { TechStack } from "@/components/sections/TechStack";

export const metadata: Metadata = {
  title: "Technical Skills | Chirragoni Prasanna Kumar",
  description: "Explore the technical stack of Chirragoni Prasanna Kumar including Languages, Frontend frameworks, Backend development, Databases, AI/ML libraries, and Dev Tools.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <main className="pt-28 pb-16">
      <TechStack />
    </main>
  );
}
