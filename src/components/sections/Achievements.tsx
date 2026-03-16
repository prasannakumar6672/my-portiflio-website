"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements, education } from "@/lib/data";
import { Card } from "../ui/Card";
import { Award, Code, Layout, GraduationCap, LucideIcon, Quote, ArrowRight, X, ExternalLink } from "lucide-react";
import Image from "next/image";

const iconsMap: Record<string, LucideIcon> = {
    Award,
    Code,
    Layout,
};

export const Achievements = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Keep only top 4 for default view
    const topAchievements = achievements.slice(0, 4);

    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Achievements */}
                    <div className="space-y-12">
                        <header>
                            <h2 className="text-4xl font-black text-foreground">
                                Achievements<span className="text-accent">.</span>
                            </h2>
                            <p className="text-foreground/40 mt-4">
                                Recognition and certifications from leading technology entities.
                            </p>
                        </header>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {topAchievements.map((item, i) => {
                                const Icon = iconsMap[item.icon] || Award;
                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Card className="h-full border-white/5 group hover:bg-accent/5 transition-all">
                                            <div className="flex flex-col gap-4">
                                                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent group-hover:rotate-12 transition-transform">
                                                    <Icon size={20} />
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                                                    <p className="text-foreground/40 text-[10px] uppercase tracking-widest font-mono">
                                                        {item.issuer} • {item.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                        
                        {achievements.length > 4 && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex justify-center mt-8"
                            >
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all"
                                >
                                    View All Certificates 
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Column: Education */}
                    <div className="space-y-12">
                        <header>
                            <h2 className="text-4xl font-black text-foreground">
                                Education<span className="text-accent">.</span>
                            </h2>
                            <p className="text-foreground/40 mt-4">
                                Academic background and technical foundation.
                            </p>
                        </header>

                        <div className="space-y-6">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={edu.school}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="border-white/5 bg-white/[0.02] p-6 group hover:bg-accent/5 transition-all">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-4">
                                                {edu.logo && (
                                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform p-2">
                                                        <Image src={edu.logo} alt={edu.school} width={64} height={64} className="object-contain" />
                                                    </div>
                                                )}
                                                <div className="flex-1">
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                                        <h4 className="text-lg font-bold text-foreground">{edu.school}</h4>
                                                        <span className="text-[10px] font-mono text-accent py-0.5 px-2 bg-accent/10 rounded-full w-fit">
                                                            {edu.duration}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm font-medium text-foreground/80">{edu.degree}</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-4 border-t border-white/5 relative">
                                                <Quote className="absolute -top-3 -left-1 text-accent opacity-20" size={20} />
                                                <p className="text-foreground/60 text-sm leading-relaxed italic pl-4">
                                                    {edu.content}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for All Certificates */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-background border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        >
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-foreground transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-8 pr-12">
                                <h3 className="text-2xl font-black text-foreground">
                                    All Certificates<span className="text-accent">.</span>
                                </h3>
                                <p className="text-foreground/40 mt-1">
                                    Comprehensive list of achievements and certifications.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {achievements.map((item, i) => {
                                    const Icon = iconsMap[item.icon] || Award;
                                    return (
                                        <motion.div
                                            key={item.title + i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <Card className="h-full border-white/5 group hover:bg-accent/5 transition-all flex flex-col justify-between p-6">
                                                <div className="flex flex-col gap-4">
                                                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent group-hover:rotate-12 transition-transform">
                                                        <Icon size={20} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="font-bold text-foreground text-sm line-clamp-2">{item.title}</h4>
                                                        <p className="text-foreground/40 text-[10px] uppercase tracking-widest font-mono">
                                                            {item.issuer} • {item.date}
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <div className="mt-6 pt-4 border-t border-white/5">
                                                    <a 
                                                        href={item.link || "#"} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                                                    >
                                                        {item.link ? 'View Certificate' : 'Verify'}
                                                        <ExternalLink size={12} />
                                                    </a>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
