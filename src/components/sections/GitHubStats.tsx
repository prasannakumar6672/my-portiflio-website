"use client";

import { useEffect, useState } from "react";
import { Github, Star, GitFork, Users, FileCode as BookCode } from "lucide-react";
import { getGitHubStats } from "@/lib/github";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { GitHubStats as GitHubStatsType } from "@/types";

const StatCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) => (
    <Card className="flex flex-col items-center justify-center gap-2 p-6 text-center hover:border-accent/40 transition-colors">
        <div className="text-accent mb-2 opacity-80">{icon}</div>
        <span className="text-3xl font-black text-foreground">{value.toLocaleString()}</span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/30">{label}</span>
    </Card>
);

export const GitHubStats = () => {
    const [stats, setStats] = useState<GitHubStatsType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGitHubStats().then(data => {
            setStats(data);
            setLoading(false);
        });
    }, []);

    if (loading) return null;

    return (
        <section id="github" className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-6">
                <header className="mb-16 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                        Open <span className="text-accent">Source</span> Pulse.
                    </h2>
                    <p className="text-foreground/40 max-w-xl">
                        Live metrics from my GitHub activity. I believe in giving back to the community and building in public.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Stats Cards */}
                    <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <StatCard icon={<Star />} label="Total Stars" value={stats?.stars || 0} />
                        <StatCard icon={<GitFork />} label="Total Forks" value={stats?.forks || 0} />
                        <StatCard icon={<BookCode />} label="Repositories" value={stats?.totalRepos || 0} />
                        <StatCard icon={<Users />} label="Followers" value={stats?.followers || 0} />

                        {/* Language Distribution (CSS-only Donut Mockup) */}
                        <Card className="col-span-full pt-8 h-64 overflow-hidden relative">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6 px-2">Technology Domain</h4>
                            <div className="flex items-center justify-around h-full">
                                <div className="flex flex-col gap-4">
                                    {stats?.languages.map((lang) => (
                                        <div key={lang.name} className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                                            <span className="text-sm font-medium text-foreground/60">{lang.name}</span>
                                            <span className="text-xs text-foreground/30">{lang.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Visual Representation */}
                                <div className="relative w-40 h-40 flex items-center justify-center">
                                    <div className="absolute inset-0 border-8 border-white/5 rounded-full" />
                                    <svg className="w-full h-full transform -rotate-90">
                                        {stats?.languages.map((lang, i) => {
                                            let offset = 0;
                                            for (let j = 0; j < i; j++) offset += stats.languages[j].percentage;
                                            return (
                                                <circle
                                                    key={lang.name}
                                                    cx="50%"
                                                    cy="50%"
                                                    r="70"
                                                    fill="transparent"
                                                    stroke={lang.color}
                                                    strokeWidth="8"
                                                    strokeDasharray={`${lang.percentage * 4.4} 440`}
                                                    strokeDashoffset={-offset * 4.4}
                                                    className="transition-all duration-1000"
                                                />
                                            );
                                        })}
                                    </svg>
                                    <div className="absolute inset-0 flex flex-center flex-col items-center justify-center">
                                        <Github className="text-white/20" size={32} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Activity Placeholder / Extra Info */}
                    <div className="lg:col-span-1">
                        <Card className="h-full border-accent/20 flex flex-col justify-center gap-6 text-center lg:text-left bg-accent/5">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto lg:mx-0 shadow-lg shadow-accent/20">
                                <Github size={32} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-black text-foreground">Commit Quality over Quantity.</h4>
                                <p className="text-white/50 text-sm">
                                    Focusing on meaningful contributions to the ecosystems of Next.js, Framer Motion, and Tailwind CSS.
                                </p>
                            </div>
                            <Button variant="outline" className="w-full">
                                Follow on GitHub
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
