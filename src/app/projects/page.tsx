import { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects Portfolio | Chirragoni Prasanna Kumar",
  description: "Explore the computer vision, machine learning, and full stack projects developed by Chirragoni Prasanna Kumar, including smart city reporting systems and geospatial monitoring.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-16">
      <Projects />
    </main>
  );
}
