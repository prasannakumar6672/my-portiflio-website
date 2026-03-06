"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Card } from "../ui/Card";
import { Award, Code, Layout, LucideIcon } from "lucide-react";

const iconsMap: Record<string, LucideIcon> = {
    Award,
    Code,
    Layout,
};

export const Achievements = () => {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <header className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                        Accomplishments<span className="text-accent">.</span>
                    </h2>
                    <p className="text-foreground/40">
                        Recognition and certifications from leading technology entities.
                    </p>
                </header>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        </section>
    );
};
