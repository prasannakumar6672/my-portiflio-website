"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail, FileText, Code, Cpu, Database, Sparkles, Heart, Lightbulb, Rocket } from "lucide-react";
import { personalInfo } from "@/lib/data";

// ─── Reusable Transparent Image Canvas Processor ──────────────────────────────
const TransparentProfileImage = ({ src, alt }: { src: string; alt: string }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [processedSrc, setProcessedSrc] = useState<string | null>(null);

    useEffect(() => {
        const img = new window.Image();
        img.src = src;
        img.crossOrigin = "anonymous";
        img.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imgData.data;

            const width = canvas.width;
            const height = canvas.height;
            const visited = new Uint8Array(width * height);

            // Reference color from top-left pixel
            const refR = data[0];
            const refG = data[1];
            const refB = data[2];

            const queue: number[] = [];

            const push = (x: number, y: number) => {
                if (x < 0 || x >= width || y < 0 || y >= height) return;
                const idx = y * width + x;
                if (visited[idx]) return;
                visited[idx] = 1;

                const pIdx = idx * 4;
                const r = data[pIdx];
                const g = data[pIdx + 1];
                const b = data[pIdx + 2];

                // Calculate color difference from reference background color
                const dist = Math.sqrt((r - refR) ** 2 + (g - refG) ** 2 + (b - refB) ** 2);

                if (dist < 45) {
                    data[pIdx + 3] = 0; // Make transparent
                    queue.push(x, y);
                }
            };

            // Seed borders
            for (let x = 0; x < width; x++) {
                push(x, 0);
                push(x, height - 1);
            }
            for (let y = 0; y < height; y++) {
                push(0, y);
                push(width - 1, y);
            }

            let head = 0;
            while (head < queue.length) {
                const x = queue[head++];
                const y = queue[head++];

                // Check neighbors
                push(x + 1, y);
                push(x - 1, y);
                push(x, y + 1);
                push(x, y - 1);
            }

            ctx.putImageData(imgData, 0, 0);
            setProcessedSrc(canvas.toDataURL());
        };
    }, [src]);

    return (
        <div className="relative w-full h-full">
            <canvas ref={canvasRef} className="hidden" />
            {processedSrc ? (
                <img
                    src={processedSrc}
                    alt={alt}
                    className="w-full h-full object-contain object-bottom pointer-events-none select-none"
                />
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-contain object-bottom opacity-30 blur-sm pointer-events-none select-none"
                />
            )}
        </div>
    );
};

// ─── Doodles & Sketch Decorations ─────────────────────────────────────────────
const StarOutline = ({ className, color = "currentColor" }: { className?: string; color?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L14.4 9.4H22L15.8 13.9L18.2 21.3L12 16.8L5.8 21.3L8.2 13.9L2 9.4H9.6L12 2Z" />
    </svg>
);

const SparkLines = ({ className }: { className?: string }) => (
    <svg className={className} width="30" height="25" viewBox="0 0 30 25" fill="none" stroke="#FF5A1F" strokeWidth="2.5" strokeLinecap="round">
        <path d="M6 20L11 10" />
        <path d="M15 22V5" />
        <path d="M24 20L19 10" />
    </svg>
);

const CurvedArrow = ({ className }: { className?: string }) => (
    <svg className={className} width="70" height="70" viewBox="0 0 70 70" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 20 C20 30 25 35 30 35 C35 35 38 28 35 25 C32 22 26 28 28 35 C30 42 42 45 50 25" strokeDasharray="4 4" />
        <path d="M42 22 L50 25 L45 32" />
    </svg>
);

export const Hero = () => {
    const roles = [
        "AI & Full-Stack Developer",
        "Software Engineer",
        "Machine Learning Engineer",
        //"AI Agent Specialist",
        "Problem Solver"
    ];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen lg:h-screen lg:min-h-[700px] min-h-screen flex items-end overflow-hidden bg-transparent transition-colors duration-300">
            {/* Soft grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-14 flex flex-col lg:flex-row items-center lg:items-end justify-between lg:h-full min-h-screen relative z-10 pt-24 pb-0">
                {/* ══ LEFT CONTENT (48%) ════════════════════════════════════════ */}
                <div className="w-full lg:w-[48%] flex flex-col justify-center gap-5 text-left lg:pb-28 lg:mb-4 mt-8 lg:mt-0 px-2 sm:px-0">

                    {/* Badge Pill with Sparklines */}
                    <div className="relative self-start mt-2">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 shadow-sm"
                        >
                            <span className="text-xs font-bold tracking-widest text-slate-800 dark:text-slate-300">
                                HI, I'M 👋
                            </span>
                        </motion.div>
                        {/* Wavy Rays next to badge */}
                        <SparkLines className="absolute -top-3.5 -right-6 scale-75 rotate-[30deg] opacity-85" />
                    </div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-2 relative"
                    >
                        <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-display font-black leading-[1.05] text-slate-900 dark:text-white tracking-tight uppercase">
                            <span className="whitespace-nowrap">Prasanna Kumar</span>
                            <br />
                            <span className="relative inline-block text-accent">
                                Chirragoni
                                {/* Orange hand-drawn underline wave */}
                                <svg className="absolute -bottom-3.5 left-0 w-full h-4 text-accent" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                                    <path d="M2 10C30 3 70 3 100 8C130 13 170 8 198 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-lg sm:text-xl font-body font-bold text-slate-800 dark:text-slate-200 mt-2 flex items-center gap-2 tracking-wide"
                    >
                        <div className="relative overflow-hidden h-[30px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentRoleIndex}
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -15, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="inline-block"
                                >
                                    {roles[currentRoleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        <span className="text-accent font-mono font-bold">&lt;/&gt;</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg font-medium"
                    >
                        I build intelligent web applications and AI-powered solutions that solve real-world problems and create meaningful impact.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex flex-wrap gap-4 mt-2 z-30"
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-white bg-accent hover:bg-accent/90 hover:scale-105 transition-all shadow-lg shadow-accent/25 cursor-pointer text-sm"
                        >
                            Explore Projects
                            <ArrowUpRight size={15} />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105 transition-all cursor-pointer text-sm"
                        >
                            Contact Me
                            <Mail size={14} className="text-accent" />
                        </Link>
                    </motion.div>
                </div>

                {/* ══ RIGHT CONTENT (52%) ═══════════════════════════════════════ */}
                <div className="w-full lg:w-[52%] flex items-end justify-center relative min-h-[340px] sm:min-h-[480px] lg:min-h-[680px] mt-4 lg:mt-0 select-none self-end h-full">

                    {/* ── Portrait & Circle Wrapper ── */}
                    <div className="relative z-10 w-[240px] h-[310px] sm:w-[380px] sm:h-[490px] lg:w-[550px] lg:h-[700px] flex items-end justify-center self-end left-0 lg:left-[-17%]">
                        {/* Semi-circle orange background - centered exactly behind portrait */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute rounded-full w-[310px] h-[310px] sm:w-[500px] sm:h-[500px] lg:w-[680px] lg:h-[680px] bg-accent z-0 -bottom-[150px] sm:-bottom-[220px] lg:-bottom-[280px] left-1/2 -translate-x-1/2 shadow-2xl"
                        />

                        {/* Cutout Portrait Image Container - flush at bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="relative z-10 w-full h-full"
                        >
                            <TransparentProfileImage
                                src={personalInfo.avatar}
                                alt="Prasanna Kumar Chirragoni"
                            />
                        </motion.div>

                        {/* Doodles grouped inside the wrapper */}
                        {/* Stars Outline */}
                        <StarOutline className="absolute top-[48%] left-[10%] lg:left-[14%] z-20 text-slate-800 dark:text-white opacity-40 scale-95" />
                        <StarOutline className="absolute top-[54%] left-[2%] lg:left-[5%] z-20 text-accent scale-75" />
                        <StarOutline className="absolute top-[45%] right-[2%] lg:right-[6%] z-20 text-slate-800 dark:text-white opacity-40 scale-100" />

                        {/* Orange Sparkles */}
                        <SparkLines className="absolute top-[37%] right-[8%] lg:right-[14%] z-20 scale-110" />
                    </div>

                    {/* ── Right Side Panel: Quote & Info Cards Stack ── */}
                    <div className="absolute hidden sm:flex -top-10 sm:top-2 lg:top-[2%] right-1 sm:right-4 lg:right-[4%] z-20 flex-col gap-4 w-[170px] sm:w-[230px]">
                        {/* Quote Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            whileHover={{ y: -4 }}
                            className="bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/10 rounded-2xl p-4.5 shadow-lg shadow-slate-200/30 dark:shadow-none w-full"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-accent font-display text-4xl leading-none">“</span>
                                <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-rose-500 shadow-sm">
                                    <Heart size={13} fill="currentColor" />
                                </div>
                            </div>
                            <p className="text-slate-800 dark:text-white font-body font-black text-sm sm:text-base leading-snug tracking-tight">
                                Code. Build.
                                <br />
                                Solve. Innovate.
                            </p>
                            <p className="text-[10px] sm:text-xs font-bold text-accent mt-2">
                                That's my mindset.
                            </p>
                        </motion.div>

                        {/* Three Cards Stack */}
                        <div className="flex flex-col gap-3 w-full">
                            {[
                                {
                                    title: "Clean Code",
                                    desc: "Scalable & Maintainable",
                                    icon: <Code size={14} className="text-accent" />
                                },
                                {
                                    title: "Problem Solver",
                                    desc: "Analytical & Creative",
                                    icon: <Lightbulb size={14} className="text-accent" />
                                },
                                {
                                    title: "Always Learning",
                                    desc: "Curious & Consistent",
                                    icon: <Rocket size={14} className="text-accent" />
                                }
                            ].map((card, index) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 + index * 0.08, duration: 0.5 }}
                                    whileHover={{ x: -4 }}
                                    className="flex items-center gap-3.5 py-1 bg-transparent"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                                        {card.icon}
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-slate-850 dark:text-slate-200 font-bold text-xs sm:text-sm">
                                            {card.title}
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold leading-normal">
                                            {card.desc}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Dashed Arrow pointing to the cards stack */}
                        <motion.div
                            animate={{
                                x: [0, -3, 0],
                                y: [0, -3, 0]
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -bottom-[75px] left-[-35px] lg:left-[-45px] z-20"
                        >
                            <CurvedArrow className="text-accent opacity-90 scale-110" />
                        </motion.div>
                    </div>


                </div>
            </div>


        </section>
    );
};

