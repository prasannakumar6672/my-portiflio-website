"use client";

import { motion } from "framer-motion";
import { achievements, testimonials } from "@/lib/data";
import { Card } from "../ui/Card";
import { Award, Code, Layout, Quote, LucideIcon } from "lucide-react";

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
                    {/* Achievements Grid */}
                    <div className="space-y-12">
                        <header>
                            <h2 className="text-4xl font-black text-foreground">Accomplishments<span className="text-accent">.</span></h2>
                            <p className="text-foreground/40 mt-4">Recognition and certifications from leading technology entities.</p>
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

                    {/* Testimonials / Industry Praise */}
                    <div className="space-y-12">
                        <header>
                            <h2 className="text-4xl font-black text-foreground">Industry Praise<span className="text-accent">.</span></h2>
                            <p className="text-foreground/40 mt-4">Word of mouth from collaborators and technical leaders.</p>
                        </header>

                        <div className="space-y-6">
                            {testimonials.map((testi, i) => (
                                <motion.div
                                    key={testi.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="border-white/5 bg-white/[0.02]">
                                        <div className="flex flex-col gap-6">
                                            <Quote className="text-accent opacity-20" size={32} />
                                            <p className="text-foreground/70 italic text-lg leading-relaxed">
                                                &quot;{testi.content}&quot;
                                            </p>
                                            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                                <div className="w-12 h-12 bg-accent/20 rounded-full overflow-hidden flex items-center justify-center font-bold text-accent">
                                                    {testi.name[0]}
                                                </div>
                                                <div>
                                                    <h5 className="text-foreground font-bold">{testi.name}</h5>
                                                    <p className="text-foreground/30 text-xs">{testi.role}</p>
                                                </div>
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
