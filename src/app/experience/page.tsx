import { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";

export const metadata: Metadata = {
  title: "Professional Experience | Chirragoni Prasanna Kumar",
  description: "View the career timeline, industry internships, and achievements of Chirragoni Prasanna Kumar, including React/Firebase and AI Tools engineering.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <main className="pt-28 pb-16 space-y-16">
      <Experience />
      <Achievements />
      {/* <GithubSection /> */}
    </main>
  );
}
