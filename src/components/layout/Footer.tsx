"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Logo } from "../ui/Logo";
import { SocialLink } from "../ui/SocialLink";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative py-12 border-t border-white/5 bg-background/50 backdrop-blur-sm overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    {/* Logo & Info */}
                    <div className="flex flex-col gap-4">
                        <Logo />
                        <p className="text-foreground/40 text-sm max-w-xs">
                            Built with Next.js 15, Tailwind CSS v4, and Framer Motion.
                            Designed for visual excellence and technical performance.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex justify-center gap-6">
                        <SocialLink href={personalInfo.socials.github} icon={<Github />} label="GitHub" variant="footer" />
                        <SocialLink href={personalInfo.socials.linkedin} icon={<Linkedin />} label="LinkedIn" variant="footer" />
                        <SocialLink href={personalInfo.socials.email} icon={<Mail />} label="Email" variant="footer" />
                    </div>

                    {/* Back to top */}
                    <div className="flex justify-end">
                        <motion.button
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToTop}
                            className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-foreground transition-colors"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-foreground/30 text-xs text-center">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

