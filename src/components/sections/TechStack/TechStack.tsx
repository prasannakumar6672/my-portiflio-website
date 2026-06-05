"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { techStack } from "@/lib/data";
import { BentoCard } from "./BentoCard";

export const TechStack = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? theme === "dark" : true;

    return (
        <section id="skills" className="py-24 bg-transparent transition-colors duration-300 relative">
            <div className="absolute inset-0 bg-[radial-gradient(at_50%_0%,var(--accent-muted)_0px,transparent_60%)] opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                <header className="mb-16 text-center sm:text-left">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block mb-3">{"// core capabilities"}</span>
                    <h2 className="text-4xl sm:text-6xl font-display font-black text-slate-900 dark:text-white leading-tight uppercase">
                        Technical <span className="bg-gradient-to-r from-accent to-[#FF8C00] bg-clip-text text-transparent">Toolkit.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl text-base leading-relaxed">
                        Class-A equipment organized across key engineering domains, focusing on high-performance computations, robust systems, and scalable operations.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {techStack.map((category, idx) => (
                        <BentoCard
                            key={category.title}
                            category={category}
                            idx={idx}
                            isDark={isDark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
