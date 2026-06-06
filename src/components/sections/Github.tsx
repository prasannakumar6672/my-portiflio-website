"use client";

import { GitBranch, Star, GitFork, BookOpen, Activity, Layers } from "lucide-react";
import { Card } from "@/components/ui/Card";

// Generate mock contribution data (53 weeks * 7 days = 371 squares)
const generateContributions = () => {
    return Array.from({ length: 371 }, (_, i) => {
        // Create a realistic contribution pattern with clusters
        const seed = Math.sin(i * 0.15) * Math.cos(i * 0.05);
        let level = 0;
        if (seed > 0.6) level = 4;
        else if (seed > 0.2) level = 3;
        else if (seed > -0.2) level = 2;
        else if (seed > -0.6) level = 1;
        
        // Randomize some zero spots
        if (Math.random() > 0.85) level = 0;
        
        return {
            date: `Day ${i + 1}`,
            level
        };
    });
};

const contributionColor = (level: number) => {
    switch (level) {
        case 4: return "bg-orange-600 dark:bg-orange-500 shadow-sm shadow-orange-500/20";
        case 3: return "bg-orange-500/70 dark:bg-orange-500/70";
        case 2: return "bg-orange-500/40 dark:bg-orange-500/40";
        case 1: return "bg-orange-500/20 dark:bg-orange-500/20";
        default: return "bg-slate-100 dark:bg-white/5";
    }
};

const pinnedRepos = [
    {
        name: "water_Bodies_Encroachment_Detection",
        desc: "AI geospatial segmentation tool to track illegal constructions and water boundary changes.",
        lang: "Python",
        langColor: "bg-blue-500",
        stars: 18,
        forks: 6
    },
    {
        name: "AI-Road-Damage-Civic-Complaint-System",
        desc: "Smart-city computer vision engine automating structural pothole diagnostics.",
        lang: "TypeScript",
        langColor: "bg-blue-600",
        stars: 22,
        forks: 8
    },
    {
        name: "Neurax2.0-Hackthon-Website",
        desc: "Stunning responsive motion portal with Framer Motion transitions and schedule APIs.",
        lang: "JavaScript",
        langColor: "bg-yellow-500",
        stars: 12,
        forks: 3
    }
];

const stats = [
    { label: "Total Commits", value: "1,424", icon: <GitBranch size={16} /> },
    { label: "Stars Earned", value: "52", icon: <Star size={16} /> },
    { label: "Forks Generated", value: "17", icon: <GitFork size={16} /> },
    { label: "Contributions", value: "582 (2026)", icon: <Activity size={16} /> }
];

export const GithubSection = () => {
    const contributions = generateContributions();

    return (
        <section className="py-20 bg-transparent transition-colors duration-300 relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <header className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div className="space-y-3">
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block">{"// open source presence"}</span>
                        <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white uppercase leading-none">
                            GitHub Activity<span className="text-accent">.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
                            Code statistics, repository profiles, and open source contributions.
                        </p>
                    </div>
                    <a
                        href="https://github.com/prasannakumar6672"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer shadow-md"
                    >
                        Follow @prasannakumar6672
                    </a>
                </header>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* ══ LEFT: CONTRIBUTION GRAPH & STATS (8 Cols) ══════════════ */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Contribution graph box */}
                        <Card className="border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01] p-5">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-550 font-mono font-bold">
                                    <span className="flex items-center gap-1.5">
                                        <BookOpen size={12} className="text-accent" />
                                        prasannakumar6672 / contributions
                                    </span>
                                    <span>{contributions.length} days active</span>
                                </div>

                                {/* Heatmap Grid */}
                                <div className="overflow-x-auto pb-2">
                                    <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[640px]">
                                        {contributions.map((day, i) => (
                                            <div
                                                key={i}
                                                className={`w-[8px] h-[8px] rounded-sm transition-all duration-300 hover:scale-125 ${contributionColor(day.level)}`}
                                                title={`${day.date}: Level ${day.level}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="flex items-center justify-end gap-1.5 text-[10px] text-slate-400 dark:text-slate-550 font-mono font-bold pt-2 border-t border-slate-100 dark:border-white/[0.04]">
                                    <span>Less</span>
                                    <div className="w-[8px] h-[8px] rounded-sm bg-slate-100 dark:bg-white/5" />
                                    <div className="w-[8px] h-[8px] rounded-sm bg-orange-500/20" />
                                    <div className="w-[8px] h-[8px] rounded-sm bg-orange-500/40" />
                                    <div className="w-[8px] h-[8px] rounded-sm bg-orange-500/70" />
                                    <div className="w-[8px] h-[8px] rounded-sm bg-orange-500" />
                                    <span>More</span>
                                </div>
                            </div>
                        </Card>

                        {/* Stats Metrics Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map((stat) => (
                                <Card key={stat.label} className="border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01] p-4 flex flex-col justify-between">
                                    <div className="flex items-center justify-between text-slate-400 dark:text-slate-500 pb-2 border-b border-slate-100 dark:border-white/[0.04] mb-2">
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">{stat.label}</span>
                                        <span className="text-accent">{stat.icon}</span>
                                    </div>
                                    <span className="text-xl sm:text-2xl font-display font-black text-slate-900 dark:text-white leading-none mt-2">
                                        {stat.value}
                                    </span>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* ══ RIGHT: PINNED REPOSITORIES & LANGUAGES (4 Cols) ═════════ */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Pinned Repositories */}
                        <div className="space-y-4">
                            <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                                {"// Pinned Repositories"}
                            </span>
                            
                            <div className="space-y-3">
                                {pinnedRepos.map((repo) => (
                                    <a
                                        key={repo.name}
                                        href={`https://github.com/prasannakumar6672/${repo.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group cursor-pointer"
                                    >
                                        <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.02] hover:border-accent/30 transition-all">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-white group-hover:text-accent transition-colors leading-tight">
                                                    <Layers size={13} />
                                                    <span className="truncate">{repo.name}</span>
                                                </div>
                                                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">
                                                    {repo.desc}
                                                </p>
                                                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 dark:text-slate-500 font-bold pt-2 border-t border-slate-100 dark:border-white/[0.04]">
                                                    <span className="flex items-center gap-1">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${repo.langColor}`} />
                                                        {repo.lang}
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <span className="flex items-center gap-0.5"><Star size={10} /> {repo.stars}</span>
                                                        <span className="flex items-center gap-0.5"><GitFork size={10} /> {repo.forks}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Top Languages Percentage Progress */}
                        <Card className="border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01] p-4 space-y-4">
                            <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest block border-b border-slate-100 dark:border-white/[0.04] pb-2">
                                Top Languages
                            </span>
                            <div className="space-y-3">
                                {[
                                    { name: "Python", pct: 45, color: "bg-blue-500" },
                                    { name: "TypeScript", pct: 30, color: "bg-blue-600" },
                                    { name: "JavaScript", pct: 15, color: "bg-yellow-500" },
                                    { name: "Java", pct: 10, color: "bg-orange-500" }
                                ].map((lang) => (
                                    <div key={lang.name} className="space-y-1">
                                        <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400">
                                            <span>{lang.name}</span>
                                            <span>{lang.pct}%</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                                            <div className={`h-full rounded-full ${lang.color}`} style={{ width: `${lang.pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
