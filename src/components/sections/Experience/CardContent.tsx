"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Calendar, ExternalLink, ChevronDown } from "lucide-react";
import { Experience } from "@/types";
import { getAvatarInitials, getAvatarGradient } from "./experienceUtils";

export const CardContent = ({ exp }: { exp: Experience }) => {
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
                                        {"// core deliverables"}
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
