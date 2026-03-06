"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Github, Linkedin } from "lucide-react";
import { Button } from "../ui/Button";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "../ui/Logo";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

// ─── Theme Toggle Button ─────────────────────────────────────────────────────
const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return <div className="w-10 h-10" />;

    const isDark = theme === "dark";

    return (
        <motion.button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={cn(
                "relative w-14 h-7 rounded-full transition-all duration-500 flex items-center px-1",
                isDark
                    ? "bg-accent/30 border border-accent/40"
                    : "bg-amber-100 border border-amber-300"
            )}
        >
            {/* Track icons */}
            <Moon
                size={12}
                className={cn(
                    "absolute left-1.5 transition-opacity duration-300",
                    isDark ? "opacity-80 text-blue-300" : "opacity-20 text-slate-400"
                )}
            />
            <Sun
                size={12}
                className={cn(
                    "absolute right-1.5 transition-opacity duration-300",
                    isDark ? "opacity-20 text-slate-400" : "opacity-90 text-amber-500"
                )}
            />
            {/* Thumb */}
            <motion.div
                layout
                animate={{ x: isDark ? 0 : 28 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={cn(
                    "w-5 h-5 rounded-full shadow-lg z-10 flex items-center justify-center",
                    isDark ? "bg-accent" : "bg-amber-400"
                )}
            >
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.div key="moon" initial={{ rotate: -30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 30, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <Moon size={10} className="text-foreground" />
                        </motion.div>
                    ) : (
                        <motion.div key="sun" initial={{ rotate: 30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -30, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <Sun size={10} className="text-foreground" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.button>
    );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(`#${section}`);
                        break;
                    }
                }
            }
        };

        handleScroll(); // Initial check
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mounted]);

    if (!mounted) {
        return <div className="fixed top-0 left-0 right-0 h-20 z-[50]" />;
    }

    const isDark = theme === "dark";

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[50] transition-all duration-500",
                isScrolled ? "py-3" : "py-6"
            )}
        >
            {/* Background Blur Bar */}
            <motion.div
                animate={{ opacity: isScrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                    "absolute inset-0 backdrop-blur-xl border-b",
                    isDark
                        ? "bg-[#0a0a0a]/80 border-white/5"
                        : "bg-white/80 border-slate-200"
                )}
            />

            <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
                <Logo />

                {/* Desktop Nav */}
                <div
                    className={cn(
                        "hidden md:flex items-center gap-6 px-7 py-2.5 rounded-full border backdrop-blur-xl",
                        isDark
                            ? "bg-white/5 border-white/10"
                            : "bg-white/70 border-slate-200 shadow-sm"
                    )}
                >
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                const targetId = link.href.substring(1);
                                const element = document.getElementById(targetId);
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className={cn(
                                "relative text-sm font-medium transition-colors cursor-pointer",
                                activeSection === link.href
                                    ? "text-accent"
                                    : isDark ? "text-foreground/60 hover:text-foreground" : "text-slate-500 hover:text-slate-900"
                            )}
                        >
                            {link.name}
                            {activeSection === link.href && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* Right section */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Hire Me CTA */}
                    <a href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hidden md:block">
                        <Button size="sm" variant="outline">
                            Hire Me
                        </Button>
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn(
                            "md:hidden p-2 rounded-lg transition-colors",
                            isDark ? "text-foreground hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"
                        )}
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className={cn(
                            "fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden backdrop-blur-2xl",
                            isDark ? "bg-[#0a0a0a]/95" : "bg-white/95"
                        )}
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn("absolute top-6 right-6", isDark ? "text-foreground" : "text-slate-700")}
                        >
                            <X size={28} />
                        </button>
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setMobileMenuOpen(false);
                                        const targetId = link.href.substring(1);
                                        const element = document.getElementById(targetId);
                                        if (element) {
                                            element.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className={cn(
                                        "text-4xl font-display font-bold hover:text-accent transition-colors cursor-pointer",
                                        isDark ? "text-foreground" : "text-slate-900"
                                    )}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="flex gap-6 mt-6">
                                <a href={personalInfo.socials.github} className={isDark ? "text-foreground/60 hover:text-white" : "text-slate-500 hover:text-slate-900"} target="_blank" rel="noopener noreferrer">
                                    <Github size={24} />
                                </a>
                                <a href={personalInfo.socials.linkedin} className={isDark ? "text-foreground/60 hover:text-white" : "text-slate-500 hover:text-slate-900"} target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
