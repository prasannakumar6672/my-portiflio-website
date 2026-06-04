"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements, certifications, education } from "@/lib/data";
import { Card } from "../ui/Card";
import { Award, Code, GraduationCap, X, ExternalLink, ShieldCheck, Sparkles, Calendar, BookOpen } from "lucide-react";
import Image from "next/image";

export const Achievements = () => {
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);
    const [isAchModalOpen, setIsAchModalOpen] = useState(false);

    // Top 4 certifications
    const topCertifications = certifications.slice(0, 4);

    return (
        <section id="achievements" className="py-24 bg-transparent transition-colors duration-300 relative space-y-24">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 space-y-20">
                
                {/* ══ SECTION 1: EDUCATION (Full Width Card) ════════════════════ */}
                <div className="space-y-6">
                    <header className="text-center sm:text-left space-y-2">
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block">// academic foundation</span>
                        <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white uppercase leading-none">
                            Education<span className="text-accent">.</span>
                        </h2>
                    </header>

                    {education.map((edu) => (
                        <motion.div
                            key={edu.school}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] p-6 sm:p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                                {/* Ambient corner glow */}
                                <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none" />

                                <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                                        {/* College Logo container */}
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-2 shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                            <Image 
                                                src={edu.logo || "/images/college logo.png"} 
                                                alt={edu.school} 
                                                width={60} 
                                                height={60} 
                                                className="object-contain" 
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-lg sm:text-xl leading-tight">
                                                {edu.school}
                                            </h4>
                                            <p className="text-accent text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                                                <GraduationCap size={14} />
                                                {edu.degree}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 italic max-w-xl leading-relaxed">
                                                {edu.content}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline & Stats column */}
                                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 border-t md:border-t-0 border-slate-200 dark:border-white/5 pt-4 md:pt-0 shrink-0">
                                        <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wide text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                            <Calendar size={11} className="text-accent" />
                                            {edu.duration}
                                        </div>
                                        <div className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider px-3 py-1.5 rounded-xl bg-accent/5 border border-accent/20">
                                            CGPA: 8.24
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* ══ SECTION 2: HACKATHON ACHIEVEMENTS (3 Cols Grid) ════════════ */}
                <div className="space-y-6">
                    <header className="text-center sm:text-left space-y-2">
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block">// national & global recognition</span>
                        <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white uppercase leading-none">
                            Achievements<span className="text-accent">.</span>
                        </h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <Card className="h-full border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.03] hover:shadow-xl hover:border-accent/30 transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden">
                                    <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none" />

                                    <div className="space-y-4 relative z-10">
                                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                                            {item.icon === "Code" ? <Code size={20} /> : <Award size={20} />}
                                        </div>
                                        <div className="space-y-1.5">
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-snug group-hover:text-accent transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-400 dark:text-slate-550 text-[10px] font-mono uppercase font-bold tracking-wider">
                                                {item.issuer} • {item.date}
                                            </p>
                                        </div>
                                        {item.description && (
                                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>

                                    {item.link && (
                                        <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-white/5 relative z-10">
                                            <a 
                                                href={item.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent/80 transition-colors cursor-pointer"
                                            >
                                                Verify Recognition
                                                <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setIsAchModalOpen(true)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-full text-xs font-bold transition-all cursor-pointer text-slate-700 dark:text-slate-400"
                        >
                            View Detailed Timelines
                            <Sparkles size={12} className="text-accent" />
                        </button>
                    </div>
                </div>

                {/* ══ SECTION 3: CERTIFICATES (4 Cols Grid) ══════════════════════ */}
                <div className="space-y-6">
                    <header className="text-center sm:text-left space-y-2">
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block">// verified credentials</span>
                        <h3 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white uppercase leading-none">
                            Certificates<span className="text-accent">.</span>
                        </h3>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {topCertifications.map((cert, i) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <Card className="h-full p-5 bg-slate-50/50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl hover:bg-white dark:hover:bg-white/[0.03] hover:border-accent/20 transition-all duration-300 flex flex-col justify-between group">
                                    <div className="space-y-4">
                                        <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform duration-300">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-800 dark:text-slate-200 text-xs leading-snug line-clamp-2">{cert.title}</h5>
                                            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-1 uppercase tracking-wider">{cert.issuer} • {cert.date}</p>
                                        </div>
                                    </div>
                                    {cert.link && (
                                        <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-white/5">
                                            <a 
                                                href={cert.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="inline-flex items-center gap-1 text-[10px] font-bold text-accent hover:text-accent/80 transition-colors cursor-pointer"
                                            >
                                                Verify
                                                <ExternalLink size={10} />
                                            </a>
                                        </div>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setIsCertModalOpen(true)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-full text-xs font-bold transition-all cursor-pointer text-slate-700 dark:text-slate-400"
                        >
                            View All Credentials
                            <ExternalLink size={12} className="text-accent" />
                        </button>
                    </div>
                </div>

            </div>

            {/* ─── MODAL: All Certificates ─── */}
            <AnimatePresence>
                {isCertModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCertModalOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-[#0e0e0e] border border-slate-200 dark:border-white/10 rounded-2xl p-6 w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
                            data-lenis-prevent
                        >
                            <button
                                onClick={() => setIsCertModalOpen(false)}
                                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-400 hover:text-slate-800 dark:text-white/50 dark:hover:text-white cursor-pointer"
                            >
                                <X size={16} />
                            </button>

                            <div className="mb-6">
                                <h3 className="text-xl font-display font-black text-slate-900 dark:text-white uppercase">All Certificates</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Verified achievements and professional accreditations.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {certifications.map((item, i) => (
                                    <div
                                        key={item.title + i}
                                        className="p-4 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all flex flex-col justify-between gap-4"
                                    >
                                        <div className="space-y-3">
                                            <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                                                <ShieldCheck size={16} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-slate-800 dark:text-white text-xs leading-snug line-clamp-2">{item.title}</h5>
                                                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-semibold">{item.issuer} • {item.date}</p>
                                            </div>
                                        </div>
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-[10px] font-bold text-accent hover:text-accent/80 transition-colors"
                                            >
                                                Verify Credential
                                                <ExternalLink size={10} />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ─── MODAL: All Achievements ─── */}
            <AnimatePresence>
                {isAchModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsAchModalOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-[#0e0e0e] border border-slate-200 dark:border-white/10 rounded-2xl p-6 w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
                            data-lenis-prevent
                        >
                            <button
                                onClick={() => setIsAchModalOpen(false)}
                                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-400 hover:text-slate-800 dark:text-white/50 dark:hover:text-white cursor-pointer"
                            >
                                <X size={16} />
                            </button>

                            <div className="mb-6">
                                <h3 className="text-xl font-display font-black text-slate-900 dark:text-white uppercase">Key Achievements Details</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Exquisite timelines and verified hackathon benchmarks.</p>
                            </div>

                            <div className="space-y-4">
                                {achievements.map((item, i) => (
                                    <div
                                        key={item.title + i}
                                        className="p-5 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-xl space-y-3"
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                                                    {item.icon === "Code" ? <Code size={16} /> : <Award size={16} />}
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-slate-800 dark:text-white text-sm leading-snug">{item.title}</h5>
                                                    <p className="text-[10px] text-slate-500 dark:text-slate-500 font-semibold">{item.issuer} • {item.date}</p>
                                                </div>
                                            </div>
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:border-white/10 text-[10px] font-bold hover:bg-slate-150 dark:hover:bg-white/10 hover:text-accent transition-all text-slate-700 dark:text-white/80 cursor-pointer"
                                                >
                                                    View Proof
                                                    <ExternalLink size={10} />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-11">
                                            {item.description || "National level recognition solving key software challenges."}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
