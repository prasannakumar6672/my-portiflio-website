"use client";

import { motion } from "framer-motion";

interface SocialLinkProps {
    href?: string;
    icon: React.ReactNode;
    label: string;
    variant?: "pill" | "footer";
}

export const SocialLink = ({ href, icon, label, variant = "pill" }: SocialLinkProps) => {
    if (!href) return null;

    if (variant === "footer") {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, color: "var(--color-accent)" }}
                className="text-foreground/40 transition-colors"
            >
                {icon}
            </motion.a>
        );
    }

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-foreground/50 hover:text-accent transition-colors relative group overflow-hidden"
            style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
            }}
        >
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(167,139,250,0.15))" }}
            />
            <span className="relative z-10">{icon}</span>
        </motion.a>
    );
};
