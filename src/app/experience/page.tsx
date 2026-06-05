"use client";

import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";

export default function ExperiencePage() {
  return (
    <main className="pt-28 pb-16 space-y-16">
      <Experience />
      <Achievements />
      {/* <GithubSection /> */}
    </main>
  );
}
