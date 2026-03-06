"use client";

import { motion } from "framer-motion";
import { achievements, education } from "@/lib/data";
import { Card } from "../ui/Card";
import { Award, Code, Layout, GraduationCap, LucideIcon, Quote } from "lucide-react";
import Image from "next/image";

const iconsMap: Record<string, LucideIcon> = {
    Award,
    Code,
    Layout,
};

export const Achievements = () => {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24">
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
                            {achievements.map((item, i) => {
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
        </section>
    );
};
