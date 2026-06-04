"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { experience } from "@/lib/data";
import { Card } from "../ui/Card";
import { Calendar, ExternalLink, Briefcase, ChevronDown } from "lucide-react";

// Helper utilities for Company Avatars
const getAvatarInitials = (name: string) => {
    const cleanName = name.replace("EduSkills (with ", "").replace(")", "");
    if (cleanName.toLowerCase().includes("microsoft")) return "MS";
    if (cleanName.toLowerCase().includes("palo alto")) return "PA";
    if (cleanName.toLowerCase().includes("aws")) return "AW";
    if (cleanName.toLowerCase().includes("evores")) return "EV";
    if (cleanName.toLowerCase().includes("cs tech")) return "CS";
    return cleanName.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
};

const getAvatarGradient = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("cs tech")) return "from-blue-500 to-indigo-600";
    if (lower.includes("evores")) return "from-amber-500 to-orange-600";
    if (lower.includes("microsoft")) return "from-cyan-500 to-blue-600";
    if (lower.includes("palo alto")) return "from-red-500 to-rose-600";
    if (lower.includes("aws")) return "from-orange-400 to-amber-500";
    return "from-slate-400 to-slate-600";
};

const categories = [
    { id: "all", label: "All Work" },
    { id: "Industry Internship", label: "Industry Internships" },
    { id: "Virtual Internship", label: "Virtual Internships" },
];

// ─── Inside Card Content Component ───────────────────────────────────────────
const CardContent = ({ exp, index, isEven }: { exp: typeof experience[0]; index: number; isEven: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const initials = getAvatarInitials(exp.company);
    const gradient = getAvatarGradient(exp.company);

    return (
        <Card 
            onMouseMove={handleMouseMove}
            className="border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.02] transition-all duration-300 p-6 shadow-sm hover:shadow-xl relative overflow-hidden group/card"
            style={{
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
            } as React.CSSProperties}
        >
            {/* Spotlight glow overlay */}
            <div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(255, 90, 31, 0.08), transparent 80%)`,
                }}
            />
            
            {/* Ambient corner glow */}
            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-accent/5 blur-2xl group-hover/card:bg-accent/10 transition-colors duration-500 pointer-events-none z-0" />

            <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                        {/* Gradient Avatar Logo */}
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-sm font-bold tracking-wider shadow-sm shrink-0 group-hover/card:scale-105 transition-transform duration-300`}>
                            {initials}
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                                <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                                    {exp.company}
                                </h4>
                                {exp.type && (
                                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                                        exp.type === "Industry Internship" 
                                            ? "text-accent bg-accent/5 border-accent/20" 
                                            : "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10"
                                    }`}>
                                        {exp.type}
                                    </span>
                                )}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold mt-1">
                                {exp.role}
                            </p>
                        </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wide text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 self-start shrink-0">
                        <Calendar size={11} className="text-accent" />
                        {exp.duration}
                    </div>
                </div>

                {/* Brief description lines */}
                <div className="space-y-2">
                    {exp.description.map((item, idx) => (
                        <p key={idx} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item}
                        </p>
                    ))}
                </div>

                {/* Technology Badges */}
                {exp.tech && exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.tech.map((t, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-0.5 text-[9px] font-mono font-bold rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Bottom row actions */}
                <div className="pt-3.5 border-t border-slate-200 dark:border-white/[0.05] flex items-center justify-between gap-3">
                    {exp.certificateUrl ? (
                        <a
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors cursor-pointer"
                        >
                            Verify Credential
                            <ExternalLink size={11} />
                        </a>
                    ) : (
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-wide">
                            {exp.active ? "// Active Engineering role" : "// Internship completed"}
                        </div>
                    )}

                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors cursor-pointer select-none"
                        >
                            {isExpanded ? "Hide Details" : "Show Responsibilities"}
                            <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="inline-block"
                            >
                                <ChevronDown size={14} />
                            </motion.span>
                        </button>
                    )}
                </div>

                {/* Accordion deliverables */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <AnimatePresence initial={false}>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 border-t border-slate-200 dark:border-white/5 mt-3 space-y-3">
                                    <h5 className="text-[9px] font-mono font-bold tracking-[0.2em] text-accent uppercase">
                                        // core deliverables
                                    </h5>
                                    <ul className="space-y-2.5">
                                        {exp.responsibilities.map((resp, idx) => {
                                            const parts = resp.split(": ");
                                            return (
                                                <li key={idx} className="flex gap-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                                                    <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full shrink-0" />
                                                    <span>
                                                        {parts.length > 1 ? (
                                                            <>
                                                                <strong className="text-slate-800 dark:text-slate-200 font-bold">{parts[0]}: </strong>
                                                                {parts.slice(1).join(": ")}
                                                            </>
                                                        ) : (
                                                            resp
                                                        )}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </div>
        </Card>
    );
};

// Alternating Grid Experience Card Component
const ExperienceCard = ({ exp, index }: { exp: typeof experience[0]; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full relative"
        >
            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[1fr_80px_1fr] items-start relative z-10">
                {/* LEFT SIDE (Desktop: Card or Empty) */}
                <div className={`order-2 md:order-1 ${isEven ? "block" : "hidden md:block md:invisible"}`}>
                    {isEven && <CardContent exp={exp} index={index} isEven={isEven} />}
                </div>

                {/* CENTER TIMELINE NODE */}
                <div className="order-1 md:order-2 flex justify-center items-start pt-6 h-full relative">
                    <div 
                        className={`w-10 h-10 rounded-full bg-white dark:bg-[#050505] border-2 flex items-center justify-center transition-all duration-300 z-10 shadow-md ${
                            exp.active 
                                ? "border-green-500 text-green-500 shadow-green-500/10 scale-110" 
                                : "border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-500 hover:border-accent hover:text-accent"
                        }`}
                    >
                        <Briefcase size={14} className={exp.active ? "animate-pulse" : ""} />
                    </div>
                    {exp.active && (
                        <div className="absolute top-6 w-10 h-10 rounded-full bg-green-500/25 animate-ping pointer-events-none z-0" />
                    )}
                </div>

                {/* RIGHT SIDE (Desktop: Card or Empty) */}
                <div className={`order-2 md:order-3 ${!isEven ? "block" : "hidden md:block md:invisible"}`}>
                    {!isEven && <CardContent exp={exp} index={index} isEven={isEven} />}
                </div>
            </div>
        </motion.div>
    );
};

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
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block mb-3">// professional work</span>
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
