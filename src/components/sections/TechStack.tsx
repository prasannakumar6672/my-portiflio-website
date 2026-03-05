"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { Card } from "../ui/Card";
import * as Icons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

const IconComponent = ({ name, color }: { name: string; color?: string }) => {
    // Dynamic icon resolution helper
    const commonProps = { style: { color: color || "currentColor" }, size: 32 };

    type IconSet = { [key: string]: React.ComponentType<{ style?: React.CSSProperties; size?: number }> };

    if (name.startsWith("Si")) {
        const Icon = (Icons as unknown as IconSet)[name];
        return Icon ? <Icon {...commonProps} /> : null;
    }
    if (name.startsWith("Fa")) {
        const Icon = (FaIcons as unknown as IconSet)[name];
        return Icon ? <Icon {...commonProps} /> : null;
    }
    if (name.startsWith("Ri")) {
        const Icon = (RiIcons as unknown as IconSet)[name];
        return Icon ? <Icon {...commonProps} /> : null;
    }
    return null;
};

export const TechStack = () => {
    return (
        <section id="skills" className="py-24 bg-white/[0.02]">
            <div className="container mx-auto px-6">
                <header className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                        Forging with Level-<span className="text-accent">A</span> Gear.
                    </h2>
                    <p className="text-foreground/40 max-w-xl">
                        My diverse toolkit allows me to tackle complex problems across the entire stack,
                        focusing on performance, scalability, and developer experience.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techStack.map((category, idx) => (
                        <div key={category.title} className="space-y-6">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent/60">
                                {category.title}
                            </h3>
                            <div className="grid gap-4">
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (idx * 0.2) + (i * 0.05) }}
                                    >
                                        <Card className="p-4 group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-background/5 group-hover:bg-background/10 transition-colors">
                                                    <IconComponent name={skill.icon} color={skill.color} />
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="flex justify-between items-end">
                                                        <span className="font-bold text-foreground/60">{skill.name}</span>
                                                        <span className="text-[10px] text-foreground/40 font-mono">{skill.level}%</span>
                                                    </div>
                                                    {/* Proficiency Bar */}
                                                    <div className="h-1 bg-background/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, ease: "easeOut" }}
                                                            className="h-full bg-accent rounded-full"
                                                            style={{
                                                                backgroundColor: skill.color || "var(--color-accent)",
                                                                filter: "drop-shadow(0 0 5px var(--color-accent))"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
