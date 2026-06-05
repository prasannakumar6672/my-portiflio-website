"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Bot } from "lucide-react";
import { Project } from "@/types";
import { getFeaturedBadge, getTechClass } from "./projectUtils";

export function ProjectCard({
    project,
    index,
    onDetails,
}: {
    project: Project;
    index: number;
    onDetails: () => void;
}) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const badge = getFeaturedBadge(project.id);

    return (
        <motion.article
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.01] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-white dark:hover:bg-white/[0.02] hover:shadow-2xl hover:shadow-accent/5"
            style={{
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
            } as React.CSSProperties}
        >
            {/* Custom Spotlight Glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(255, 90, 31, 0.08), transparent 80%)`,
                }}
            />

            {/* Ambient Corner Glow */}
            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none z-0" />

            {/* Card Content Wrapper */}
            <div className="relative z-10 flex flex-col flex-1">
                {/* Preview Area */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-neutral-900 border-b border-slate-200 dark:border-white/[0.06]">
                    {badge && (
                        <span className={`absolute top-3 left-3 px-2.5 py-1 text-[9px] font-bold font-mono uppercase tracking-wider rounded-md border backdrop-blur-md z-20 ${badge.color}`}>
                            {badge.text}
                        </span>
                    )}

                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                            loading="lazy"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-slate-900/40 to-purple-950/20 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                            <div className="absolute w-24 h-24 rounded-full bg-accent/10 blur-2xl animate-pulse" />
                            <Bot size={40} className="text-accent relative z-10 drop-shadow-[0_0_15px_rgba(255,90,31,0.4)]" />
                        </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none" />

                    {/* Quick Tech overlay on image */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((t) => (
                            <span
                                key={t}
                                className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-slate-950/75 text-white/90 border border-white/5"
                            >
                                {t}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-slate-950/85 text-white/50 border border-white/5">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>
                </div>

                {/* Card Info */}
                <div className="flex flex-col flex-grow p-5 gap-3">
                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-accent transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-xs font-mono text-accent/90 tracking-wide font-medium leading-none">
                            {project.tagline}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                            {project.description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-1">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded border ${getTechClass(t)}`}
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/[0.05] mt-auto">
                        <div className="flex gap-2">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-accent transition-all cursor-pointer"
                                >
                                    <Github size={14} />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-accent transition-all cursor-pointer"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                        <button
                            onClick={onDetails}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-accent/20 bg-accent/5 hover:bg-accent hover:text-white text-accent text-xs font-bold transition-all duration-300 cursor-pointer"
                        >
                            Explore Details
                            <ArrowUpRight size={13} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
