"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { headerNavLinks } from "@/lib/data";

// ─── Theme Toggle ─────────────────────────────────────────────────────────────
const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-8 h-8" />;

    const isDark = theme === "dark";

    return (
        <motion.button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
        >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </motion.button>
    );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isShrunk, setIsShrunk] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            setIsShrunk(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mounted]);

    const updateNavbarHeight = useCallback(() => {
        if (navRef.current) {
            const rect = navRef.current.getBoundingClientRect();
            document.documentElement.style.setProperty(
                "--navbar-height",
                `${rect.bottom}px`
            );
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Run initially
        updateNavbarHeight();

        // Setup multiple timeouts to measure correctly during transitions/layout changes
        const delays = [100, 500, 1000, 2000, 4000, 5000];
        const timers = delays.map((delay) => setTimeout(updateNavbarHeight, delay));

        // Run on scroll and resize
        window.addEventListener("scroll", updateNavbarHeight, { passive: true });
        window.addEventListener("resize", updateNavbarHeight, { passive: true });

        // Clean up
        return () => {
            timers.forEach(clearTimeout);
            window.removeEventListener("scroll", updateNavbarHeight);
            window.removeEventListener("resize", updateNavbarHeight);
        };
    }, [mounted, isShrunk, mobileMenuOpen, updateNavbarHeight]);

    if (!mounted) {
        return <div className="fixed top-0 left-0 right-0 h-20 z-[50]" />;
    }

    const isDark = theme === "dark";

    return (
        <>
            {/* ─── Desktop Floating Navbar ─── */}
            <motion.nav
                ref={navRef}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onAnimationComplete={updateNavbarHeight}
                className="fixed top-5 left-0 right-0 z-[50] flex justify-center px-4"
            >
                <div
                    className={cn(
                        "hidden md:flex items-center justify-between rounded-full shadow-2xl transition-all duration-300 border border-white/10 bg-black/95 backdrop-blur-md",
                        isShrunk ? "px-6 py-2 w-full max-w-3xl" : "px-8 py-3 w-full max-w-4xl"
                    )}
                >
                    {/* Left: Home, About, Skills, Projects */}
                    <div className="flex items-center gap-1">
                        {headerNavLinks.slice(0, 4).map((link) => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname === link.href || pathname?.startsWith(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 hover:text-white"
                                    style={{
                                        color: isActive ? "#FF5A1F" : "rgba(255,255,255,0.55)"
                                    }}
                                >
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavDot"
                                            className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Center: Circular Orange PK Logo */}
                    <div className="flex items-center justify-center">
                        <Link href="/" className="flex items-center gap-2 group mx-4">
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: 360 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-[10px] shadow-lg bg-accent"
                            >
                                PK
                            </motion.div>
                        </Link>
                    </div>

                    {/* Right: Experience, Resume, Contact, Theme Toggle */}
                    <div className="flex items-center gap-1">
                        {/* Experience Link */}
                        {(() => {
                            const link = { name: "Experience", href: "/experience" };
                            const isActive = pathname === "/experience" || pathname?.startsWith("/experience");
                            return (
                                <Link
                                    href={link.href}
                                    className="relative px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 hover:text-white"
                                    style={{
                                        color: isActive ? "#FF5A1F" : "rgba(255,255,255,0.55)"
                                    }}
                                >
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavDot"
                                            className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })()}
                        {/* Resume Link */}
                        {(() => {
                            const link = { name: "Resume", href: "/resume" };
                            const isActive = pathname === "/resume" || pathname?.startsWith("/resume");
                            return (
                                <Link
                                    href={link.href}
                                    className="relative px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 hover:text-white"
                                    style={{
                                        color: isActive ? "#FF5A1F" : "rgba(255,255,255,0.55)"
                                    }}
                                >
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavDot"
                                            className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })()}
                        {/* Contact Link */}
                        {(() => {
                            const link = { name: "Contact", href: "/contact" };
                            const isActive = pathname === "/contact" || pathname?.startsWith("/contact");
                            return (
                                <Link
                                    href={link.href}
                                    className="relative px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 hover:text-white"
                                    style={{
                                        color: isActive ? "#FF5A1F" : "rgba(255,255,255,0.55)"
                                    }}
                                >
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavDot"
                                            className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })()}
                        {/* Theme Toggle */}
                        <div className="pl-3 ml-2 border-l border-white/10 flex items-center">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>

                {/* Mobile Floating Bar */}
                <div
                    className={cn(
                        "md:hidden flex items-center justify-between w-full max-w-sm rounded-full px-5 py-3 shadow-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md transition-all duration-300",
                        isShrunk ? "py-2" : "py-3"
                    )}
                >
                    {/* Mobile Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-[10px]"
                            style={{ background: "linear-gradient(135deg, #FF5A1F 0%, #FF8C00 100%)" }}
                        >
                            PK
                        </div>
                    </Link>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white/70 hover:text-white p-1 cursor-pointer"
                        >
                            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ─── Mobile Menu Overlay ─── */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className={cn(
                            "fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden",
                            isDark ? "bg-[#0a0a0a]/97 backdrop-blur-2xl" : "bg-white/97 backdrop-blur-2xl"
                        )}
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn("absolute top-6 right-6 p-2 rounded-full cursor-pointer", isDark ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100")}
                        >
                            <X size={24} />
                        </button>
                        <div className="flex flex-col items-center gap-6">
                            {headerNavLinks.map((link, i) => {
                                const isActive = link.href === "/" ? pathname === "/" : pathname === link.href || pathname?.startsWith(link.href);
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                "text-3xl font-display font-bold transition-colors cursor-pointer",
                                                isActive
                                                    ? "text-[#FF5A1F]"
                                                    : isDark ? "text-white hover:text-[#FF5A1F]" : "text-slate-900 hover:text-[#FF5A1F]"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: headerNavLinks.length * 0.05 }}
                                className="pt-4 mt-2 border-t border-white/10 w-32 flex justify-center"
                            >
                                <Link
                                    href="/resume"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-accent hover:bg-accent/90"
                                >
                                    Resume
                                    <ArrowUpRight size={14} />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
