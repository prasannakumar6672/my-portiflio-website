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
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn("text-xl font-display font-bold flex items-center gap-2 group", className)}
            style={{ color: "var(--fg)" }}
        >
            <div className="relative group p-0.5 rounded-lg transition-transform duration-300 hover:rotate-6">
                {/* Outer glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500"></div>

                <div className="w-10 h-10 bg-[#0a0a0a] rounded-lg flex items-center justify-center overflow-hidden relative z-10 border border-white/10">
                    <Image
                        src="/images/logo.jpeg"
                        alt="Logo"
                        fill
                        className="object-cover"
                        sizes="40px"
                    />
                </div>
            </div>
            {/* The text "CPK." requested to be removed */}
        </motion.a>
    );
};
