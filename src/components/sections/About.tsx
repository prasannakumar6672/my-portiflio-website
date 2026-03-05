"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Card } from "../ui/Card";

export const About = () => {
    const stats = [
        { label: "Years Experience", value: "3+" },
        { label: "Projects Completed", value: "20+" },
        { label: "Contributions", value: "5+" },
        { label: "Available", value: "Now" },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="aspect-square w-full max-w-md mx-auto relative group">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-2 border-accent/30 rounded-3xl -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                            <div className="absolute inset-0 border-2 border-foreground/10 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500" />

                            {/* Photo Container */}
                            <div className="absolute inset-2 z-10">
                                <Image
                                    src={personalInfo.avatar}
                                    alt="About Me"
                                    fill
                                    className="object-cover object-top rounded-3xl"
                                    sizes="(max-width: 768px) 100vw, 448px"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Float Label */}
                        <div className="absolute -bottom-6 -right-6 lg:right-0 glass px-6 py-4 rounded-2xl shadow-2xl border-accent/20">
                            <span className="text-accent font-bold text-2xl block">01 —</span>
                            <span className="text-foreground/60 text-sm font-medium tracking-wider">ABOUT ME</span>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-foreground">
                                Designing Digital <br />
                                <span className="text-accent">Evolution.</span>
                            </h2>
                            <p className="text-foreground/60 leading-relaxed text-lg">
                                I am a passionate architect of the web, blending technical mastery with aesthetic intuition.
                                My philosophy is simple: build things that last, inspire, and solve real-world problems
                                through elegant code and human-centric design.
                            </p>
                        </motion.div>

                        {/* Quote */}
                        <motion.blockquote
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="border-l-4 border-accent pl-6 py-2 italic text-foreground/80 text-xl font-medium"
                        >
                            &quot;Code is the paintbrush; the browser is the canvas; performance is the masterpiece.&quot;
                        </motion.blockquote>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-1"
                                >
                                    <span className="block text-2xl font-bold text-foreground">{stat.value}</span>
                                    <span className="block text-[10px] uppercase tracking-widest text-foreground/40 font-semibold">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
