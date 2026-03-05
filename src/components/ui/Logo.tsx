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
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 overflow-hidden relative">
                <Image
                    src="/images/logo.jpeg"
                    alt="Logo"
                    fill
                    className="object-cover"
                    sizes="32px"
                />
            </div>
            {showText && <span className="tracking-tight text-foreground">CPK<span className="text-accent">.</span></span>}
        </motion.a>
    );
};
