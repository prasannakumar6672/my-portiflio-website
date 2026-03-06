import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About").then((mod) => mod.About));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((mod) => mod.TechStack));
const Projects = dynamic(() => import("@/components/sections/Projects").then((mod) => mod.Projects));
const Experience = dynamic(() => import("@/components/sections/Experience").then((mod) => mod.Experience));
const Achievements = dynamic(() => import("@/components/sections/Achievements").then((mod) => mod.Achievements));
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}
