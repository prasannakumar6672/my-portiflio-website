"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Experience } from "@/types";
import { CardContent } from "./CardContent";

export const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full relative"
        >
            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[1fr_80px_1fr] items-start relative z-10">
                {/* LEFT SIDE (Desktop: Card or Empty) */}
                <div className={`order-2 md:order-1 ${isEven ? "block" : "hidden md:block md:invisible"}`}>
                    {isEven && <CardContent exp={exp} />}
                </div>

                {/* CENTER TIMELINE NODE */}
                <div className="order-1 md:order-2 flex justify-center items-start pt-6 h-full relative">
                    <div 
                        className={`w-10 h-10 rounded-full bg-white dark:bg-[#050505] border-2 flex items-center justify-center transition-all duration-300 z-10 shadow-md ${
                            exp.active 
                                ? "border-green-500 text-green-500 shadow-green-500/10 scale-110" 
                                : "border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-500 hover:border-accent hover:text-accent"
                        }`}
                    >
                        <Briefcase size={14} className={exp.active ? "animate-pulse" : ""} />
                    </div>
                    {exp.active && (
                        <div className="absolute top-6 w-10 h-10 rounded-full bg-green-500/25 animate-ping pointer-events-none z-0" />
                    )}
                </div>

                {/* RIGHT SIDE (Desktop: Card or Empty) */}
                <div className={`order-2 md:order-3 ${!isEven ? "block" : "hidden md:block md:invisible"}`}>
                    {!isEven && <CardContent exp={exp} />}
                </div>
            </div>
        </motion.div>
    );
};
