"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "../ui/Badge";
import { Modal } from "../ui/Modal";
import { Project } from "@/types";

/* ─── tiny helpers ─────────────────────────────────────────────────── */
const techColors: Record<string, string> = {
    Python: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    OpenCV: "bg-green-500/10 text-green-400 border-green-500/20",
    ML: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "Web Dashboard": "bg-orange-500/10 text-orange-400 border-orange-500/20",
    "Next.js": "bg-white/10 text-white/70 border-white/10",
    "Node.js": "bg-green-600/10 text-green-400 border-green-600/20",
    "AI Vision": "bg-pink-500/10 text-pink-400 border-pink-500/20",
    LangChain: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    "Vector DB": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    LLM: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    "Tailwind CSS": "bg-sky-500/10 text-sky-400 border-sky-500/20",
    "Framer Motion": "bg-pink-600/10 text-pink-400 border-pink-600/20",
};

const getTechClass = (tech: string) =>
    techColors[tech] ?? "bg-white/5 text-foreground/50 border-white/10";

/* ─── Project Card ─────────────────────────────────────────────────── */
function ProjectCard({
    project,
    index,
    onDetails,
}: {
    project: Project;
    index: number;
    onDetails: () => void;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden transition-all duration-300 hover:border-accent/25 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-accent/5"
        >
            {/* ── Top glow accent on hover ── */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* ── Preview Area ── */}
            <div className="relative h-40 sm:h-44 overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-b border-white/[0.06]">
                {project.image ? (
                    /* Real project screenshot */
                    <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                ) : (
                    /* Fallback initials watermark */
                    <span className="absolute inset-0 flex items-center justify-center font-black text-[5rem] tracking-tighter text-foreground/[0.04] select-none pointer-events-none group-hover:text-foreground/[0.07] transition-colors duration-500 leading-none">
                        {project.title.split(" ").map((w) => w[0]).join("").slice(0, 4)}
                    </span>
                )}

                {/* Gradient overlay — keeps pills readable over photos */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent" />

                {/* Tech pills in preview */}
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                        <span
                            key={t}
                            className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${getTechClass(t)}`}
                        >
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border bg-white/5 text-foreground/30 border-white/10">
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>
            </div>

            {/* ── Content ── */}
            <div className="flex flex-col flex-1 p-5 gap-3">
                {/* Title + description */}
                <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-accent transition-colors duration-200">
                        {project.title}
                    </h3>
                    <p className="text-xs text-foreground/45 leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                </div>

                {/* ── Action Buttons ── */}
                <div className="flex flex-wrap items-center gap-2 pt-3 mt-auto border-t border-white/[0.06]">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
                        >
                            <ExternalLink size={11} />
                            Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-white/[0.04] text-foreground/60 border border-white/10 hover:bg-white/10 hover:text-foreground hover:border-white/20 transition-all duration-200"
                        >
                            <Github size={11} />
                            GitHub
                        </a>
                    )}
                    <button
                        onClick={onDetails}
                        className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-foreground/35 hover:text-accent transition-colors duration-200"
                    >
                        Details
                        <ArrowUpRight size={12} />
                    </button>
                </div>
            </div>
        </motion.article>
    );
}

/* ─── Detail Modal Content ─────────────────────────────────────────── */
function ProjectDetails({ project }: { project: Project }) {
    return (
        <div className="space-y-7">
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${getTechClass(t)}`}
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* Description */}
            <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground/30">About the Project</h4>
                <p className="text-sm text-foreground/60 leading-7">{project.description}</p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
                <div className="space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground/30">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center">
                                    <Check size={9} className="text-accent" />
                                </span>
                                <span className="text-sm text-foreground/55 leading-snug">{f}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-white/[0.06]">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition-colors duration-200 shadow-md shadow-accent/20"
                    >
                        <ExternalLink size={14} />
                        Visit Live Demo
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/[0.06] text-foreground/70 border border-white/10 hover:bg-white/10 hover:text-foreground hover:border-white/20 transition-all duration-200"
                    >
                        <Github size={14} />
                        Source Code
                    </a>
                )}
            </div>
        </div>
    );
}

/* ─── Section ──────────────────────────────────────────────────────── */
export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-20 lg:py-28">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                            My <span className="text-accent">Projects.</span>
                        </h2>
                        <p className="text-foreground/40 max-w-md">
                            AI-powered systems, full-stack platforms, and modern web experiences.
                        </p>
                    </div>
                    <a
                        href="https://github.com/prasannakumar6672"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-foreground/50 border border-white/8 hover:border-white/20 hover:text-foreground transition-all duration-200 flex-shrink-0"
                    >
                        <Github size={14} />
                        All Projects
                    </a>
                </div>

                {/* 2×2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            onDetails={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Details Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title}
                subtitle={selectedProject?.tagline}
            >
                {selectedProject && <ProjectDetails project={selectedProject} />}
            </Modal>
        </section>
    );
};
