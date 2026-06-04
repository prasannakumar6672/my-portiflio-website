"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { techStack, projects } from "@/lib/data";
import { Card } from "../ui/Card";
import { TechCategory, TechItem } from "@/types";
import * as Icons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

const IconComponent = ({ name, color, size = 20 }: { name: string; color?: string; size?: number }) => {
    const commonProps = { style: { color: color || "currentColor" }, size };

    type IconSet = { [key: string]: React.ComponentType<{ style?: React.CSSProperties; size?: number }> };

    if (name.startsWith("Si")) {
        const Icon = (Icons as unknown as IconSet)[name];
        return Icon ? <Icon {...commonProps} /> : null;
    }
    if (name.startsWith("Fa")) {
        const Icon = (FaIcons as unknown as IconSet)[name];
        return Icon ? <Icon {...commonProps} /> : null;
    }
    if (name.startsWith("Ri")) {
        const Icon = (RiIcons as unknown as IconSet)[name];
        return Icon ? <Icon {...commonProps} /> : null;
    }
    return null;
};

const hexToRgba = (hex: string, alpha: number) => {
    const cleanHex = hex.replace("#", "");
    let r = 0, g = 0, b = 0;
    if (cleanHex.length === 3) {
        r = parseInt(cleanHex[0] + cleanHex[0], 16);
        g = parseInt(cleanHex[1] + cleanHex[1], 16);
        b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else if (cleanHex.length === 6) {
        r = parseInt(cleanHex.substring(0, 2), 16);
        g = parseInt(cleanHex.substring(2, 4), 16);
        b = parseInt(cleanHex.substring(4, 6), 16);
    } else {
        return hex;
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const getSkillColor = (color: string | undefined, isDark: boolean) => {
    if (!color) return "#FF5A1F";
    if (color.toLowerCase() === "#ffffff") {
        return isDark ? "#ffffff" : "#0f172a";
    }
    return color;
};

const getSkillUseDescription = (skillName: string) => {
    const matched = projects.filter(project => {
        return project.tech.some(t => {
            const term1 = t.toLowerCase();
            const term2 = skillName.toLowerCase();
            return term1.includes(term2) || term2.includes(term1) ||
                   (term1 === "ml" && term2 === "ai/ml") ||
                   (term2 === "ai/ml" && term1.includes("ai")) ||
                   (term1 === "ai vision" && term2.includes("opencv"));
        });
    });
    
    if (matched.length > 0) {
        return `Used in: ${matched.map(p => p.title).join(", ")}`;
    }
    
    const lowercaseName = skillName.toLowerCase();
    if (lowercaseName.includes("typescript")) return "Primary language for frontend type-safety and robust logic.";
    if (lowercaseName.includes("javascript")) return "Core scripting language for web interactivity and APIs.";
    if (lowercaseName.includes("java")) return "Enterprise system development and algorithmic foundations.";
    if (lowercaseName.includes("html")) return "Semantic layout structure and responsive core styles.";
    if (lowercaseName.includes("mongodb")) return "NoSQL document storage for flexible schema designs.";
    if (lowercaseName.includes("mysql")) return "Relational database management for structured application data.";
    if (lowercaseName.includes("postgresql")) return "Advanced relational database for complex queries and transactional integrity.";
    if (lowercaseName.includes("firebase")) return "Real-time backend-as-a-service database, hosting, and authentication.";
    if (lowercaseName.includes("aws")) return "Cloud infrastructure deployment and serverless architectures.";
    if (lowercaseName.includes("azure")) return "Cloud solutions hosting and cognitive services integration.";
    if (lowercaseName.includes("git")) return "Version control and collaborative workflow pipelines.";
    if (lowercaseName.includes("vs code")) return "Primary Integrated Development Environment (IDE) configured for speed.";
    if (lowercaseName.includes("docker")) return "Containerization of services for seamless deployment parity.";
    if (lowercaseName.includes("fastapi")) return "High-performance asynchronous APIs for AI model serving.";
    
    return "Foundational tool in my engineering workflow.";
};

const SkillCapsule = ({
    skill,
    onHover,
    isDark
}: {
    skill: TechItem;
    onHover: (name: string | null) => void;
    isDark: boolean;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const color = getSkillColor(skill.color, isDark);

    return (
        <div
            onMouseEnter={() => {
                setIsHovered(true);
                onHover(skill.name);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onHover(null);
            }}
            style={{
                borderColor: isHovered ? hexToRgba(color, 0.3) : undefined,
                boxShadow: isHovered ? `0 0 15px -3px ${hexToRgba(color, 0.15)}` : undefined,
                backgroundColor: isHovered ? hexToRgba(color, 0.08) : undefined
            }}
            className="group flex items-center gap-2.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
        >
            <div
                className="w-5 h-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ color }}
            >
                <IconComponent name={skill.icon} color={color} size={18} />
            </div>
            <span className="text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white">
                {skill.name}
            </span>
        </div>
    );
};

const BentoCard = ({ category, idx, isDark }: { category: TechCategory; idx: number; isDark: boolean }) => {
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
                    <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">
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
                                        <span className="text-slate-400 dark:text-slate-500 opacity-60">Hover a skill to inspect system integrations...</span>
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
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block mb-3">// core capabilities</span>
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
