import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Cpu, AlertTriangle, Lightbulb, Check, Compass, Code } from "lucide-react";
import { projects } from "@/lib/data";

interface PageProps {
    params: {
        id: string;
    };
}

const idMap: Record<string, string> = {
    "water-body-encroachment-detection": "water-body-encroachment",
    "road-damage-civic-complaint-system": "road-damage-detection",
    "preptrack": "preptrack",
    "neurax-hackathon": "neurax-hackathon",
    "ai-rag-chatbot": "ai-rag-chatbot",
    "vital-agent": "vital-agent",
};

export async function generateStaticParams() {
    return Object.keys(idMap).map((id) => ({
        id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const id = params.id;
    const targetId = idMap[id] || id;
    const project = projects.find((p) => p.id === targetId);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Chirragoni Prasanna Kumar`,
        description: project.tagline || project.description,
        alternates: {
            canonical: `/projects/${id}`,
        },
        openGraph: {
            title: `${project.title} | Chirragoni Prasanna Kumar`,
            description: project.tagline || project.description,
            url: `https://prasannakumar.dev/projects/${id}`,
            type: "article",
            images: project.image ? [{ url: project.image }] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} | Chirragoni Prasanna Kumar`,
            description: project.tagline || project.description,
            images: project.image ? [project.image] : [],
        },
    };
}

export default function ProjectPage({ params }: PageProps) {
    const id = params.id;
    const targetId = idMap[id] || id;
    const project = projects.find((p) => p.id === targetId);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-10">
                {/* Control Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-accent transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Projects
                    </Link>
                    <div className="flex items-center gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-accent text-white hover:bg-accent/90 transition-all shadow-md shadow-accent/25"
                            >
                                <ExternalLink size={12} />
                                Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-foreground/10 hover:border-foreground/30 bg-white/5 hover:bg-white/10 transition-all"
                            >
                                <Github size={12} />
                                Source Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Hero Header */}
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-foreground uppercase">
                        {project.title}
                    </h1>
                    <p className="text-lg font-semibold text-accent font-mono">
                        // {project.tagline}
                    </p>
                </div>

                {/* Technical Stack Badges */}
                <div className="flex flex-wrap gap-2 py-4 border-y border-white/5">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs font-mono font-bold px-3 py-1 rounded-full border border-white/10 bg-white/5 text-foreground/80"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Project Content Sections */}
                <div className="space-y-10">
                    {/* Project Overview */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-display font-bold uppercase tracking-wider text-accent border-b border-accent/20 pb-1.5 flex items-center gap-2">
                            <Cpu size={18} />
                            Project Overview
                        </h2>
                        <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                            {project.description}
                        </p>
                    </section>

                    {/* Problem & Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.problemStatement && (
                            <section className="space-y-3">
                                <h3 className="text-lg font-display font-bold uppercase tracking-wider text-amber-500 flex items-center gap-2">
                                    <AlertTriangle size={16} />
                                    Problem Statement
                                </h3>
                                <p className="text-sm text-foreground/70 leading-relaxed bg-amber-500/[0.02] border border-amber-500/10 p-5 rounded-2xl">
                                    {project.problemStatement}
                                </p>
                            </section>
                        )}
                        {project.solution && (
                            <section className="space-y-3">
                                <h3 className="text-lg font-display font-bold uppercase tracking-wider text-accent flex items-center gap-2">
                                    <Lightbulb size={16} />
                                    Proposed Solution
                                </h3>
                                <p className="text-sm text-foreground/70 leading-relaxed bg-accent/[0.02] border border-accent/10 p-5 rounded-2xl">
                                    {project.solution}
                                </p>
                            </section>
                        )}
                    </div>

                    {/* System Architecture */}
                    {project.architecture && (
                        <section className="space-y-3">
                            <h2 className="text-xl font-display font-bold uppercase tracking-wider text-accent border-b border-accent/20 pb-1.5 flex items-center gap-2">
                                <Code size={18} />
                                System Architecture & Orchestration
                            </h2>
                            <p className="text-sm sm:text-base text-foreground/75 leading-relaxed bg-white/[0.01] border border-white/5 p-5 rounded-2xl">
                                {project.architecture}
                            </p>
                        </section>
                    )}

                    {/* Key Features */}
                    {project.features && project.features.length > 0 && (
                        <section className="space-y-3">
                            <h2 className="text-xl font-display font-bold uppercase tracking-wider text-accent border-b border-accent/20 pb-1.5 flex items-center gap-2">
                                <Check size={18} className="text-emerald-500" />
                                Key Features & Scope
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 p-4 bg-white/[0.01] border border-white/5 rounded-xl text-sm text-foreground/75 leading-snug"
                                    >
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Challenges & Roadmap */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.challenges && (
                            <section className="space-y-3">
                                <h3 className="text-lg font-display font-bold uppercase tracking-wider text-red-500 flex items-center gap-2">
                                    <AlertTriangle size={16} />
                                    Technical Challenges
                                </h3>
                                <p className="text-sm text-foreground/70 leading-relaxed bg-red-500/[0.02] border border-red-500/10 p-5 rounded-2xl">
                                    {project.challenges}
                                </p>
                            </section>
                        )}
                        {project.futureScope && (
                            <section className="space-y-3">
                                <h3 className="text-lg font-display font-bold uppercase tracking-wider text-purple-500 flex items-center gap-2">
                                    <Compass size={16} />
                                    Future Roadmap
                                </h3>
                                <p className="text-sm text-foreground/70 leading-relaxed bg-purple-500/[0.02] border border-purple-500/10 p-5 rounded-2xl">
                                    {project.futureScope}
                                </p>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
