"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen, Briefcase } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Card } from "../ui/Card";

// ─── Stats Counter Component ──────────────────────────────────────────────────
const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const parsed = parseInt(value);
    const isNumber = !isNaN(parsed);
    const target = isNumber ? parsed : 0;

    useEffect(() => {
        if (!isInView || !isNumber) {
            if (!isNumber) setCount(value as any);
            return;
        }
        let start = 0;
        const duration = 1200; // ms
        const stepTime = 16; // ~60fps
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, stepTime);
        return () => clearInterval(timer);
    }, [isInView, target, isNumber, value]);

    return (
        <div ref={ref} className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white leading-none">
                {isNumber ? `${count}+` : value}
            </span>
            <span className="block text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mt-1.5">
                {label}
            </span>
        </div>
    );
};

// ─── Journey Milestones ───────────────────────────────────────────────────────
const milestones = [
    {
        year: "2023",
        title: "Foundation & Inception",
        desc: "Began B.Tech in CSE (Artificial Intelligence & Machine Learning) at CMR Technical Campus. Developed key algorithms, data structure roots, and command-line automation engines.",
        icon: <BookOpen size={16} />
    },
    {
        year: "2024",
        title: "IoT & Cloud Data Pipelines",
        desc: "Earned AWS Academy Cloud Foundations & Data Engineering credentials. Built IoT nodes with NPTEL and established data preprocessing/ETL skills.",
        icon: <Calendar size={16} />
    },
    {
        year: "2025",
        title: "Record Hackathons & Leadership",
        desc: "Participated in Agentathon 2025 earning a Guinness World Record. Led development as Tech Lead for NeuraX and was a national finalist in the Smart India Hackathon (SIH).",
        icon: <Award size={16} />
    },
    {
        year: "2026",
        title: "Industry Internships & AI Cloud",
        desc: "Landed React & Firebase Developer Intern at evoRES and Junior AI Tools Engineer at CS Tech. Completed Microsoft Elevate Azure Cloud Internship.",
        icon: <Briefcase size={16} />
    }
];

export const About = () => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-transparent transition-colors duration-300">
            {/* Soft grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
                {/* Section Header */}
                <header className="mb-16 text-center sm:text-left">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block mb-3">// professional background</span>
                    <h2 className="text-4xl sm:text-6xl font-display font-black text-slate-900 dark:text-white leading-tight uppercase">
                        Building Intelligent <br />
                        <span className="bg-gradient-to-r from-accent to-[#FF8C00] bg-clip-text text-transparent">Systems.</span>
                    </h2>
                </header>

                {/* Bento Grid Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* LEFT COLUMN: Profile and Vitals stacked vertically (col-span-4) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">

                        {/* Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col flex-grow"
                        >
                            <Card className="w-full p-6 flex flex-col flex-grow group border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.02] transition-all relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 pointer-events-none" />

                                {/* Portrait photo */}
                                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-white/10 shadow-sm flex-grow">
                                    <Image
                                        src={personalInfo.avatar}
                                        alt="Prasanna Kumar"
                                        fill
                                        className="object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        priority
                                    />
                                    <div className="absolute bottom-3 right-3 bg-accent text-white px-3 py-1 rounded-lg shadow-lg flex items-center gap-1.5 leading-none">
                                        <GraduationCap size={12} />
                                        <span className="text-[10px] font-mono font-bold tracking-wide">B.TECH '27</span>
                                    </div>
                                </div>

                                {/* Academics progress tracker */}
                                <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-white/5 space-y-2">
                                    <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                                        <span className="text-slate-400 dark:text-slate-500 uppercase tracking-widest">// Academics Progress</span>
                                        <span className="text-accent">75%</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "75%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            className="h-full bg-accent rounded-full"
                                            style={{ boxShadow: "0 0 8px var(--accent)" }}
                                        />
                                    </div>
                                    <p className="text-[9px] font-mono text-slate-400 dark:text-slate-500 leading-normal text-right">
                                        3rd Year Complete • CSE (AI & ML)
                                    </p>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Vitals Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex"
                        >
                            <Card className="w-full p-6 flex flex-col justify-between group border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.02] transition-all relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 pointer-events-none" />

                                <div className="pb-3 mb-4 border-b border-slate-200/50 dark:border-white/5 relative z-20">
                                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block mb-1">// status & metrics</span>
                                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                                        Vitals Grid
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 gap-4 relative z-20">
                                    <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300 group/stat">
                                        <AnimatedCounter value="9" label="Hackathons" />
                                    </div>

                                    <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300 group/stat">
                                        <AnimatedCounter value="5" label="Core Projects" />
                                    </div>

                                    <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300 group/stat">
                                        <AnimatedCounter value="6" label="Collaborations" />
                                    </div>

                                    <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300 group/stat">
                                        <AnimatedCounter value="Now" label="Available" />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Biography Terminal Card (col-span-8) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-8 flex"
                    >
                        <Card className="w-full p-6 flex flex-col group border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.02] transition-all relative overflow-hidden rounded-2xl">
                            {/* Terminal window header */}
                            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200/50 dark:border-white/5 relative z-20">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 ml-2">/home/prasanna/bio.md</span>
                                </div>
                                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500">markdown</span>
                            </div>

                            {/* Bio paragraphs */}
                            <div className="space-y-5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed relative z-20 flex-grow">
                                <p>
                                    I'm <strong className="text-slate-900 dark:text-white">Prasanna Kumar Chirragoni</strong>, an AI/ML developer and Full-Stack engineer. Currently pursuing my Bachelor of Technology in Computer Science (Artificial Intelligence & Machine Learning) at CMR Technical Campus, Hyderabad.
                                </p>
                                <p>
                                    I specialize in building solutions that merge computer vision, machine learning models, and full-stack software architectures. My focus is on turning raw intelligence into usable platforms, such as automatic satellite image segmentation to trace illegal water constructions or real-time road damage diagnostics dashboards.
                                </p>

                                {/* Code block styled quote */}
                                <div className="relative mt-6 p-4 rounded-xl bg-slate-100 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 font-mono text-[11px] text-slate-500 dark:text-slate-450 leading-relaxed">
                                    <span className="text-accent font-bold block mb-1.5">// mission statement</span>
                                    <span className="italic text-slate-700 dark:text-slate-300">
                                        "AI isn't the future - it's the present .My job is to bulid it responsibly."
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* BOTTOM ROW: Journey Timeline - Spans full width (col-span-12) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-12 flex"
                    >
                        <Card className="w-full p-6 flex flex-col group border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.02] transition-all relative overflow-hidden rounded-2xl">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 pointer-events-none" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3 mb-8 border-b border-slate-200/50 dark:border-white/5 relative z-20">
                                <div>
                                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block mb-1">// engineering milestones</span>
                                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                                        Journey Timeline
                                    </h3>
                                </div>
                                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 hidden sm:block">
                                    HOVER MILESTONES TO INSPECT →
                                </span>
                            </div>

                            <div className="relative pt-4 flex-grow flex flex-col justify-center">
                                {/* Horizontal connection line */}
                                <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] bg-slate-200 dark:bg-white/10 hidden md:block" />

                                {/* Glowing active track */}
                                <motion.div
                                    className="absolute top-[28px] left-[12.5%] h-[2px] bg-accent hidden md:block"
                                    initial={{ width: "75%" }}
                                    animate={{
                                        width: hoveredIdx !== null
                                            ? `${(hoveredIdx / 3) * 75}%`
                                            : "75%"
                                    }}
                                    transition={{ type: "spring", stiffness: 70, damping: 14 }}
                                    style={{ boxShadow: "0 0 10px var(--accent)" }}
                                />

                                {/* Horizontal items row (no text clamping for full readability) */}
                                <div
                                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                                    className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 pb-6 md:pb-0"
                                >
                                    {milestones.map((item, idx) => {
                                        const isActive = hoveredIdx !== null ? idx <= hoveredIdx : true;
                                        return (
                                            <div
                                                key={item.year + item.title}
                                                onMouseEnter={() => setHoveredIdx(idx)}
                                                onMouseLeave={() => setHoveredIdx(null)}
                                                className="flex-shrink-0 w-[240px] md:w-auto snap-center flex flex-col items-center text-center group/timeline cursor-pointer"
                                            >
                                                {/* Timeline Node */}
                                                <div
                                                    style={{
                                                        borderColor: isActive ? "var(--accent)" : "var(--border)",
                                                        boxShadow: isActive ? "0 0 15px -3px var(--accent-muted)" : "none",
                                                    }}
                                                    className={`relative z-10 w-12 h-12 rounded-full bg-white dark:bg-[#050505] border-2 flex items-center justify-center transition-all duration-300 group-hover/timeline:scale-110 ${isActive ? "text-accent" : "text-slate-400 dark:text-slate-600"
                                                        }`}
                                                >
                                                    <span className="scale-[0.9]">{item.icon}</span>
                                                </div>

                                                {/* Year Badge */}
                                                <span
                                                    className={`mt-4 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border transition-colors duration-300 ${isActive
                                                            ? "text-accent bg-accent/5 border-accent/20"
                                                            : "text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/5"
                                                        }`}
                                                >
                                                    {item.year}
                                                </span>

                                                {/* Details (No line-clamps or ellipsis for readable wrapping) */}
                                                <h4
                                                    className={`mt-3 text-[13px] font-bold transition-colors duration-300 px-1 leading-snug ${isActive ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"
                                                        }`}
                                                >
                                                    {item.title}
                                                </h4>
                                                <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-[220px] transition-opacity duration-300 group-hover/timeline:opacity-100 opacity-80">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

