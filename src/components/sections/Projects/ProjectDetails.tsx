"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, AlertTriangle, Cpu, Lightbulb, Compass, Code, Check } from "lucide-react";
import { Project } from "@/types";
import { getTechClass } from "./projectUtils";

export function ProjectDetails({ project }: { project: Project }) {
    const [activeTab, setActiveTab] = useState<"overview" | "technical">("overview");

    return (
        <div className="space-y-6">
            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 pb-4 border-b border-slate-200 dark:border-white/[0.06]">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded border ${getTechClass(t)}`}
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* Glass tab selector */}
            <div className="flex gap-2 bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-1 rounded-xl max-w-fit">
                {(["overview", "technical"] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                            activeTab === tab
                                ? "bg-accent text-white shadow-md shadow-accent/25"
                                : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                        }`}
                    >
                        {tab === "overview" ? "Overview" : "Technical Details"}
                    </button>
                ))}
            </div>

            {/* Tab content panels */}
            <AnimatePresence mode="wait">
                {activeTab === "overview" ? (
                    <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Problem & Solution Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2.5">
                                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-amber-600 dark:text-amber-500 flex items-center gap-1.5">
                                    <AlertTriangle size={13} className="text-amber-600 dark:text-amber-500" />
                                    The Challenge / Problem
                                </h4>
                                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-amber-500/[0.01] dark:bg-amber-500/[0.02] border border-amber-500/20 dark:border-amber-500/10 p-4 rounded-2xl relative overflow-hidden">
                                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-amber-500/5 blur-3xl pointer-events-none" />
                                    {project.problemStatement || "No problem statement specified."}
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-accent flex items-center gap-1.5">
                                    <Lightbulb size={13} className="text-accent" />
                                    The Applied Solution
                                </h4>
                                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-accent/[0.01] dark:bg-accent/[0.02] border border-accent/20 dark:border-accent/10 p-4 rounded-2xl relative overflow-hidden">
                                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-accent/5 blur-3xl pointer-events-none" />
                                    {project.solution || project.description}
                                </div>
                            </div>
                        </div>

                        {/* Core Features */}
                        {project.features && project.features.length > 0 && (
                            <div className="space-y-2.5">
                                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-500 flex items-center gap-1.5">
                                    <Check size={13} className="text-emerald-500" />
                                    Key Features & Scope
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-tight">
                                    {project.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2.5 bg-slate-50 dark:bg-white/[0.01] hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors p-3 border border-slate-200 dark:border-white/5 rounded-xl">
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="technical"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                    >
                        {/* System Architecture */}
                        <div className="space-y-2.5">
                            <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-500 flex items-center gap-1.5">
                                <Cpu size={13} className="text-cyan-500" />
                                Orchestration & Architecture
                            </h4>
                            <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-cyan-500/[0.01] dark:bg-cyan-500/[0.02] border border-cyan-500/20 dark:border-cyan-500/10 p-4 rounded-2xl relative overflow-hidden">
                                <div className="absolute -left-20 -top-20 w-40 h-40 bg-cyan-500/5 blur-3xl pointer-events-none" />
                                {project.architecture || "Orchestrated backend pipelines processing input parameters, with data layers connected to Next.js dynamic user interfaces."}
                            </div>
                        </div>

                        {/* Challenges & Roadmap Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2.5">
                                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-red-655 dark:text-red-500 flex items-center gap-1.5">
                                    <Code size={13} className="text-red-500" />
                                    Technical Obstacles
                                </h4>
                                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-red-500/[0.01] dark:bg-red-500/[0.02] border border-red-500/20 dark:border-red-500/10 p-4 rounded-2xl relative overflow-hidden">
                                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-red-500/5 blur-3xl pointer-events-none" />
                                    {project.challenges || "Calibrating real-time responsive layers, optimizing loading models, and resolving dynamic responsive scaling bugs."}
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-purple-655 dark:text-purple-500 flex items-center gap-1.5">
                                    <Compass size={13} className="text-purple-500" />
                                    Future Roadmap
                                </h4>
                                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-purple-500/[0.01] dark:bg-purple-500/[0.02] border border-purple-500/20 dark:border-purple-500/10 p-4 rounded-2xl relative overflow-hidden">
                                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-purple-500/5 blur-3xl pointer-events-none" />
                                    {project.futureScope || "Scaling models, migrating serverless endpoints, and developing custom developer tools integrations."}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Actions Links */}
            <div className="flex gap-3 pt-5 border-t border-slate-200 dark:border-white/[0.06]">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-accent text-white hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 cursor-pointer"
                    >
                        <ExternalLink size={13} />
                        Visit Live Demo
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 transition-all cursor-pointer"
                    >
                        <Github size={13} />
                        Source Code
                    </a>
                )}
            </div>
        </div>
    );
}
