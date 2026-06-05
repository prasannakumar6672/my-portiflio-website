"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Github,
    Linkedin,
    Mail,
    ArrowUp,
    MapPin,
    Sparkles,
    Layers,
    User,
    Briefcase,
    FolderOpen,
    MessageCircle,
    Phone,
} from "lucide-react";
import { personalInfo, footerNavLinks } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

// Map string icon names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
    User,
    FolderOpen,
    Briefcase,
    Layers,
    MessageCircle
};

// ── Social definitions ────────────────────────────────────────────────────────
const socials = [
    {
        label: "GitHub",
        href: personalInfo.socials.github,
        icon: Github,
        color: "hover:bg-white/10 hover:border-white/20 hover:text-white",
    },
    {
        label: "LinkedIn",
        href: personalInfo.socials.linkedin,
        icon: Linkedin,
        color: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
    },
    {
        label: "Email",
        href: personalInfo.socials.email,
        icon: Mail,
        color: "hover:bg-accent/10 hover:border-accent/30 hover:text-accent",
    },
];

// ── Floating orb ─────────────────────────────────────────────────────────────
const Orb = ({
    className,
    delay = 0,
}: {
    className: string;
    delay?: number;
}) => (
    <motion.div
        className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, delay, ease: "easeInOut" }}
    />
);

// ── Main Footer ───────────────────────────────────────────────────────────────
export const Footer = () => {
    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative bg-[#050505] overflow-hidden select-none">
            {/* ── Ambient orbs ──────────────────────────────── */}
            <Orb className="w-[420px] h-[420px] bg-accent/20 -top-32 -left-32" delay={0} />
            <Orb className="w-[320px] h-[320px] bg-indigo-500/15 top-10 right-0" delay={3} />
            <Orb className="w-[200px] h-[200px] bg-purple-500/10 bottom-0 left-1/2" delay={5} />

            {/* ── Top separator ─────────────────────────────── */}
            <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            {/* ══════════════════════════════════════════════════
                MAIN FOOTER GRID
            ══════════════════════════════════════════════════ */}
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">

                {/* ── MOBILE LAYOUT (hidden on lg+) ──────────────────────── */}
                <div className="lg:hidden flex flex-col items-center text-center gap-5 pt-10 pb-10">
                    {/* Logo + Name */}
                    <div className="flex items-center gap-2">
                        <Logo showText={false} />
                        <span className="text-white font-bold text-base tracking-wide">Prasanna Kumar</span>
                    </div>

                    {/* Short bio */}
                    <p className="text-slate-400 text-xs leading-relaxed max-w-[280px]">
                        Full-Stack Developer & AI/ML Engineer building intelligent systems.
                    </p>

                    {/* Available badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        Available for Work
                    </div>

                    {/* Social icons row */}
                    <div className="flex gap-3">
                        {socials.map(({ label, href, icon: Icon, color }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                whileHover={{ y: -3, scale: 1.08 }}
                                whileTap={{ scale: 0.93 }}
                                className={`w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-400 transition-all duration-300 ${color}`}
                            >
                                <Icon size={16} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Nav links — single horizontal row */}
                    <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                        {footerNavLinks.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="text-slate-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* ── DESKTOP LAYOUT (hidden below lg) ──────────────────── */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-12 pt-16 pb-16">

                    {/* Col 1–2 — Brand */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <Logo showText={false} />
                            <span className="text-white font-bold text-base tracking-wide">
                                Prasanna Kumar
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Full-Stack Developer & AI/ML Engineer building intelligent,
                            scalable systems that make a real-world impact.
                        </p>

                        {/* Location pill */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 text-xs font-mono">
                            <MapPin size={11} className="text-accent" />
                            Hyderabad, India
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-3 pt-2">
                            {socials.map(({ label, href, icon: Icon, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ y: -3, scale: 1.08 }}
                                    whileTap={{ scale: 0.93 }}
                                    className={`w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-400 transition-all duration-300 ${color}`}
                                >
                                    <Icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Col 3 — Quick Nav */}
                    <div className="space-y-5">
                        <h3 className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-white/40 pb-1 border-b border-white/[0.05]">
                            Navigate
                        </h3>
                        <ul className="space-y-3">
                            {footerNavLinks.map((link) => {
                                const Icon = iconMap[link.iconName] || Layers;
                                return (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer w-full text-left"
                                        >
                                            <Icon
                                                size={13}
                                                className="text-accent/50 group-hover:text-accent transition-colors duration-200 shrink-0"
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Col 4 — Contact Info */}
                    <div className="space-y-5">
                        <h3 className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-white/40 pb-1 border-b border-white/[0.05]">
                            Contact
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-mono">
                                <Mail size={12} className="text-accent/50 shrink-0" />
                                <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white transition-colors">
                                    {personalInfo.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono">
                                <Phone size={12} className="text-accent/50 shrink-0" />
                                <a href="tel:+919010617565" className="text-slate-400 hover:text-white transition-colors">
                                    +91 9010617565
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono">
                                <MapPin size={12} className="text-accent/50 shrink-0" />
                                <span className="text-slate-400">{personalInfo.location}</span>
                            </div>
                        </div>

                        {/* Status indicator */}
                        <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                            Available for Work
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom bar ────────────────────────────────── */}
            <div className="relative z-10 border-t border-white/[0.05]">
                <div className="container mx-auto px-8 md:px-12 max-w-6xl py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-600 text-xs font-mono text-center">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-slate-400">{personalInfo.name}</span>
                        . Powered by 100% pure TypeScript, sustained by{" "}
                        <Sparkles
                            size={11}
                            className="inline text-accent mx-0.5 align-middle"
                        />{" "}
                        Chai, and debugged directly in production.
                    </p>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="group flex items-center gap-1.5 text-slate-500 hover:text-accent text-xs font-mono transition-colors cursor-pointer"
                    >
                        <span>Back to top</span>
                        <span className="w-7 h-7 rounded-lg border border-white/[0.08] bg-white/[0.03] group-hover:border-accent/30 group-hover:bg-accent/5 flex items-center justify-center transition-all duration-300">
                            <ArrowUp size={13} />
                        </span>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};
