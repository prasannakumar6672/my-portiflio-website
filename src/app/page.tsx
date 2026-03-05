import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <GitHubStats />
      <Achievements />
      <Contact />
    </main>
  );
}
