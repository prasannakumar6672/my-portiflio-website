"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { experience } from "@/lib/data";
import { categories } from "./experienceUtils";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredExperience = experience.filter((exp) => {
        if (activeCategory === "all") return true;
        return exp.type === activeCategory;
    });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                {/* Section Header */}
                <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div className="space-y-3">
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block mb-3">{"// professional work"}</span>
                        <h2 className="text-3xl sm:text-6xl font-display font-black text-slate-900 dark:text-white leading-none uppercase">
                            Experience<span className="bg-gradient-to-r from-accent to-[#FF8C00] bg-clip-text text-transparent">.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md leading-relaxed">
                            Chronology of technical internships, focusing on cloud infrastructures, security parameters, and data pipelines.
                        </p>
                    </div>

                    {/* Interactive Filter Slider */}
                    <div className="flex flex-wrap gap-1.5 bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-1 rounded-2xl max-w-full sm:max-w-fit self-start sm:self-end">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`relative px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                                        isActive
                                            ? "text-white"
                                            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeExperienceHighlight"
                                            className="absolute inset-0 bg-accent rounded-xl -z-10 shadow-lg shadow-accent/25"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Timeline Grid Showcase */}
                <div ref={containerRef} className="relative mt-20 pl-0 md:pl-0 min-h-[300px]">
                    {/* Background track line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/5 -translate-x-1/2" />

                    {/* Scroll-Linked Active Glowing Track */}
                    <motion.div 
                        className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-accent to-[#FF8C00] -translate-x-1/2 origin-top"
                        style={{ scaleY, height: "100%", boxShadow: "0 0 12px var(--accent)" }}
                    />

                    {/* Alternating Cards list */}
                    <div className="space-y-12 relative z-10">
                        <AnimatePresence mode="popLayout">
                            {filteredExperience.map((exp, i) => (
                                <ExperienceCard key={exp.company + exp.role} exp={exp} index={i} />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
