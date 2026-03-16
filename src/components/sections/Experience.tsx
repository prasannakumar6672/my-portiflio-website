"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Calendar, Building2, ExternalLink } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <header className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                        Professional <span className="text-accent">Chronology.</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </header>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent/40 to-transparent md:block hidden" />

                    <div className="space-y-12">
                        {experience.map((exp, i) => (
                            <motion.div
                                key={exp.company + exp.role}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-6 w-2.5 h-2.5 bg-accent rounded-full ring-4 ring-accent/20 z-10 hidden md:block" />
                                {exp.active && (
                                    <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-6 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping z-10 hidden md:block" />
                                )}

                                <div className="md:w-1/2">
                                    <Card className="relative overflow-visible group">
                                        <div className="space-y-4">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                                        <Building2 size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-foreground text-lg">{exp.company}</h4>
                                                        <p className="text-accent text-sm font-medium">{exp.role}</p>
                                                    </div>
                                                </div>
                                                <Badge variant="outline" className="flex items-center gap-1 h-fit">
                                                    <Calendar size={12} /> {exp.duration}
                                                </Badge>
                                            </div>

                                            <ul className="space-y-3">
                                                {exp.description.map((item, idx) => (
                                                    <li key={idx} className="flex gap-3 text-sm text-foreground/50 leading-relaxed">
                                                        <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            {exp.tech && exp.tech.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {exp.tech.map((t, idx) => (
                                                        <span key={idx} className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-accent/10 text-accent border border-accent/20">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {exp.certificateUrl && (
                                                <div className="pt-4 border-t border-white/5 mt-2">
                                                    <a
                                                        href={exp.certificateUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                                                    >
                                                        View Certificate
                                                        <ExternalLink size={12} />
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </Card>
                                </div>

                                {/* Spacer for desktop */}
                                <div className="md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
