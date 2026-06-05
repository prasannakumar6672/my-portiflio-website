"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Modal } from "@/components/ui/Modal";
import { Project } from "@/types";
import { categories, getProjectCategories } from "./projectUtils";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
