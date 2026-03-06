"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export const About = () => {
    const stats = [
        { label: "Hackthons Participated", value: "9+" },
        { label: "Projects Completed", value: "5+" },
        { label: "Contributions", value: "6+" },
        { label: "Available", value: "Now" },
    ];

    return (
        <section id="about" className="py-32 md:py-24 relative overflow-hidden">
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
                        <div className="absolute -bottom-8 right-0 lg:-bottom-6 lg:right-0 glass px-6 py-4 rounded-2xl shadow-2xl border-accent/20">
                            <span className="text-accent font-bold text-2xl block tracking-tighter">01 —</span>
                            <span className="text-foreground/60 text-[10px] sm:text-sm font-medium tracking-wider">ABOUT ME</span>
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
                                Building Intelligent <br />
                                <span className="text-accent">Systems.</span>
                            </h2>
                            <p className="text-foreground/60 leading-relaxed text-lg">
                                I'm <strong className="text-foreground/90">Prasanna Kumar</strong> — a Full Stack Developer and AI/ML enthusiast pursuing
                                B.Tech in Computer Science (AI & ML) at CMR Technical Campus, Hyderabad.
                                I build production-ready AI-powered systems and scalable web platforms that solve real-world problems —
                                from satellite-based encroachment detection to smart city civic reporting tools.
                            </p>
                        </motion.div>

                        {/* Quote */}
                        <motion.blockquote
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="border-l-4 border-accent pl-6 py-2 italic text-foreground/80 text-xl font-medium"
                        >
                            &quot;AI isn&apos;t the future — it&apos;s the present. My job is to build it responsibly.&quot;
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
