"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export const Logo = ({ className, showText = true }: LogoProps) => {
    return (
        <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn("text-xl font-display font-bold flex items-center gap-2 group cursor-pointer", className)}
        >
            <div className="relative group p-0.5 rounded-lg transition-transform duration-300 hover:rotate-6">
                {/* Outer glowing border effect - white by default, orange on hover */}
                <div className="absolute inset-0 bg-white rounded-lg blur opacity-20 group-hover:bg-accent group-hover:opacity-60 transition duration-500"></div>

                <div className="w-10 h-10 bg-[#0a0a0a] rounded-lg flex items-center justify-center overflow-hidden relative z-10 border border-white/15 group-hover:border-accent/40 transition-colors duration-300">
                    <Image
                        src="/images/logo.jpeg"
                        alt="Chirragoni Prasanna Kumar Portfolio Logo"
                        fill
                        className="object-cover"
                        sizes="40px"
                    />
                </div>
            </div>
            {showText && (
                <span className="text-white font-bold text-base tracking-wide group-hover:text-accent transition-colors duration-300">
                    Prasanna
                </span>
            )}
        </motion.a>
    );
};
