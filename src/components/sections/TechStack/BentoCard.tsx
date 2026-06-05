"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { TechCategory } from "@/types";
import { getSkillUseDescription } from "./techStackUtils";
import { SkillCapsule } from "./SkillCapsule";

export const BentoCard = ({ category, idx, isDark }: { category: TechCategory; idx: number; isDark: boolean }) => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const getColSpan = (i: number) => {
        if (i === 0 || i === 1) return "md:col-span-3";
        if (i === 2 || i === 3 || i === 4) return "md:col-span-2";
        return "md:col-span-3";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className={`${getColSpan(idx)} flex`}
        >
            <Card className="w-full p-6 flex flex-col group border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.02] transition-all relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200/50 dark:border-white/5 relative z-20">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-800 dark:text-slate-200">
                            {category.title}
                        </h3>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 dark:text-slate-550 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">
                        {category.skills.length} MODULES
                    </span>
                </div>

                <div className="flex flex-wrap gap-2.5 relative z-20 mb-6 flex-grow items-start content-start">
                    {category.skills.map((skill) => (
                        <SkillCapsule
                            key={skill.name}
                            skill={skill}
                            onHover={setHoveredSkill}
                            isDark={isDark}
                        />
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-200/50 dark:border-white/5 relative z-20 min-h-[42px] flex items-center">
                    <div className="flex items-start gap-2 w-full">
                        <span className="text-accent font-mono text-xs font-bold leading-relaxed select-none">$&gt;</span>
                        <div className="flex-1 min-w-0">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={hoveredSkill || "default"}
                                    initial={{ opacity: 0, x: -3 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 3 }}
                                    transition={{ duration: 0.15 }}
                                    className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-relaxed break-words"
                                >
                                    {hoveredSkill ? (
                                        getSkillUseDescription(hoveredSkill)
                                    ) : (
                                        <span className="text-slate-400 dark:text-slate-550 opacity-60">Hover a skill to inspect system integrations...</span>
                                    )}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};
