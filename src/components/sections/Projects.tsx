"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { projects } from "@/lib/data";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export const Projects = () => {
    const featuredProject = projects.find(p => p.featured) || projects[0];
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-foreground">
                            Featured <span className="text-accent">Architectures.</span>
                        </h2>
                        <p className="text-foreground/40 max-w-xl">
                            A selection of my recent work, ranging from complex backends to highly interactive frontend experiences.
                        </p>
                    </div>
                    <Button variant="ghost" className="hidden md:flex">
                        View All GitHub <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                </header>

                {/* Featured Project */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <Card className="p-0 border-white/5 relative group overflow-hidden" interactive>
                        <div className="flex flex-col lg:flex-row">
                            {/* Image Side */}
                            <div className="lg:w-3/5 overflow-hidden">
                                <div className="aspect-video relative group-hover:scale-105 transition-transform duration-700">
                                    <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                                    <div className="bg-white/5 w-full h-full flex items-center justify-center">
                                        <span className="text-foreground/80 font-black text-4xl italic">PREVIEW_{featuredProject.title.toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="accent">Featured Project</Badge>
                                    </div>
                                    <h3 className="text-3xl font-black text-foreground">{featuredProject.title}</h3>
                                    <p className="text-foreground/40 font-medium italic">{featuredProject.tagline}</p>
                                </div>

                                <p className="text-foreground/60 leading-relaxed">
                                    {featuredProject.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {featuredProject.tech.map(t => (
                                        <Badge key={t} variant="outline">{t}</Badge>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4">
                                    <Button size="sm">Live Demo</Button>
                                    <Button variant="ghost" size="sm" icon>
                                        <Github className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Other Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {otherProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="h-full flex flex-col gap-6" interactive>
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent">
                                        <Github size={24} />
                                    </div>
                                    <div className="flex items-center gap-4 text-foreground/30 text-xs font-mono">
                                        <span className="flex items-center gap-1"><Star size={12} /> {project.stats?.stars || 0}</span>
                                        <span className="flex items-center gap-1"><GitFork size={12} /> {project.stats?.forks || 0}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{project.title}</h4>
                                    <p className="text-foreground/40 text-sm">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.slice(0, 3).map(t => (
                                        <Badge key={t} variant="default" className="text-[10px]">{t}</Badge>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <a href={project.liveUrl} className="text-foreground/60 hover:text-foreground transition-colors"><ExternalLink size={18} /></a>
                                    <a href={project.githubUrl} className="text-foreground/60 hover:text-foreground transition-colors"><Github size={18} /></a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
