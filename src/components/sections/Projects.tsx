"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Bot, AlertTriangle, Cpu, Lightbulb, Compass, Code, Check } from "lucide-react";
import { projects } from "@/lib/data";
import { Modal } from "@/components/ui/Modal";
import { Project as ProjectType } from "@/types";

// ─── Project Utilities ───────────────────────────────────────────────────────
const techColors: Record<string, string> = {
    Python: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    OpenCV: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    ML: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    "Web Dashboard": "bg-amber-500/10 text-amber-650 dark:text-amber-450 border-amber-500/20",
    "Next.js": "bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white/70 border-slate-300 dark:border-white/10",
    "Node.js": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    "AI Vision": "bg-pink-500/10 text-pink-650 dark:text-pink-400 border-pink-500/20",
    LangChain: "bg-teal-500/10 text-teal-650 dark:text-teal-400 border-teal-500/20",
    "Vector DB": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    LLM: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    "Tailwind CSS": "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    "Framer Motion": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    "Express.js": "bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20",
    MongoDB: "bg-green-600/10 text-green-700 dark:text-green-400 border-green-600/20",
    JWT: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    Multer: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    Cloudinary: "bg-blue-400/10 text-blue-500 dark:text-blue-300 border-blue-400/20",
    "Roboflow API": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    "TensorFlow (LSTM)": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    "Gemini API": "bg-pink-500/10 text-pink-650 dark:text-pink-400 border-pink-500/20",
    "REST APIs": "bg-teal-500/10 text-teal-600 dark:text-teal-450 border-teal-500/20",
    "React.js": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
};

const getTechClass = (tech: string) =>
    techColors[tech] ?? "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-foreground/50 border-slate-200 dark:border-white/10";

const categories = [
    { id: "all", label: "All" },
    { id: "ai-vision", label: "AI & Computer Vision" },
    { id: "ai-nlp", label: "AI & NLP/RAG" },
    { id: "web-apps", label: "Web Applications" },
];

const getProjectCategories = (id: string): string[] => {
    switch (id) {
        case "water-body-encroachment":
            return ["ai-vision", "web-apps"];
        case "road-damage-detection":
            return ["ai-vision", "web-apps"];
        case "ai-rag-chatbot":
            return ["ai-nlp"];
        case "neurax-hackathon":
            return ["web-apps"];
        case "vital-agent":
            return ["ai-nlp"];
        case "preptrack":
            return ["web-apps"];
        default:
            return [];
    }
};

const getFeaturedBadge = (id: string) => {
    switch (id) {
        case "water-body-encroachment":
            return { text: "SIH Selection", color: "border-amber-500/30 text-amber-500 bg-amber-500/5" };
        case "road-damage-detection":
            return { text: "Smart City AI", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" };
        case "ai-rag-chatbot":
            return { text: "LLM & RAG Agent", color: "border-purple-500/30 text-purple-400 bg-purple-500/5" };
        case "neurax-hackathon":
            return { text: "Guinness Record Venue", color: "border-emerald-500/30 text-emerald-450 bg-emerald-500/5" };
        case "vital-agent":
            return { text: "AI Health Predictor", color: "border-rose-500/30 text-rose-400 bg-rose-500/5" };
        case "preptrack":
            return { text: "Prep Planner", color: "border-blue-500/30 text-blue-400 bg-blue-500/5" };
        default:
            return null;
    }
};

// ─── Project Details Panel Component ──────────────────────────────────────────
const ProjectDetails = ({ project }: { project: ProjectType }) => {
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
                                <div className="text-xs text-slate-750 dark:text-slate-300 leading-relaxed bg-amber-500/[0.01] dark:bg-amber-500/[0.02] border border-amber-500/20 dark:border-amber-500/10 p-4 rounded-2xl relative overflow-hidden">
                                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-amber-500/5 blur-3xl pointer-events-none" />
                                    {project.problemStatement || "No problem statement specified."}
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-accent flex items-center gap-1.5">
                                    <Lightbulb size={13} className="text-accent" />
                                    The Applied Solution
                                </h4>
                                <div className="text-xs text-slate-770 dark:text-slate-300 leading-relaxed bg-accent/[0.01] dark:bg-accent/[0.02] border border-accent/20 dark:border-accent/10 p-4 rounded-2xl relative overflow-hidden">
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
};

// ─── Project Card Component ──────────────────────────────────────────────────
const ProjectCard = ({
    project,
    index,
    onDetails,
}: {
    project: ProjectType;
    index: number;
    onDetails: () => void;
}) => {
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
};

// ─── Main Projects Section Component ──────────────────────────────────────────
export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("all");

    // Filter projects based on mapping
    const filteredProjects = projects.filter((project) => {
        if (activeCategory === "all") return true;
        const projectCats = getProjectCategories(project.id);
        return projectCats.includes(activeCategory);
    });

    return (
        <section id="projects" className="py-24 bg-transparent transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                {/* Section Header */}
                <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div className="space-y-3">
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block mb-3">{"// selected accomplishments"}</span>
                        <h2 className="text-3xl sm:text-6xl font-display font-black text-slate-900 dark:text-white leading-none uppercase">
                            Redefined <span className="bg-gradient-to-r from-accent to-[#FF8C00] bg-clip-text text-transparent">Creations.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm leading-relaxed">
                            Geospatial analysis, full-stack systems, and robust developer models built from scratch.
                        </p>
                    </div>
                    <a
                        href="https://github.com/prasannakumar6672"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4.5 py-2 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:border-slate-350 dark:hover:border-white/20 transition-all cursor-pointer"
                    >
                        <Github size={13} />
                        All Repositories
                    </a>
                </div>

                {/* Glass Filter bar with dynamic highlight */}
                <div className="mb-10 flex justify-center sm:justify-start overflow-x-auto pb-2">
                    <div className="flex gap-1.5 bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-1 rounded-2xl min-w-fit">
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
                                            layoutId="activeCategoryHighlight"
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

                {/* Animated Showcase Grid */}
                <motion.div 
                    layout 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, i) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={i}
                                onDetails={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
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
