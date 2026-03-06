"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ─── Sequence of lines that animate in one after another ─────────────── */
const LINES = [
    { text: "Hello, World.", delay: 0, size: "text-4xl md:text-7xl", accent: false },
    { text: "Welcome to my space.", delay: 0.9, size: "text-xl md:text-4xl", accent: false },
    { text: "Built for coders.", delay: 1.7, size: "text-base md:text-2xl", accent: true },
];

/* ─── Single animated line ────────────────────────────────────────────── */
const Line = ({
    text,
    delay,
    size,
    accent,
}: {
    text: string;
    delay: number;
    size: string;
    accent: boolean;
}) => (
    <div className="overflow-hidden">
        <motion.p
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`font-black tracking-tight leading-tight ${size} ${accent ? "text-accent" : "text-foreground"
                }`}
        >
            {text}
        </motion.p>
    </div>
);

/* ─── Animated cursor blink ───────────────────────────────────────────── */
const Cursor = ({ delay }: { delay: number }) => (
    <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay, duration: 0.6, repeat: Infinity, repeatDelay: 0.1 }}
        className="inline-block w-[3px] h-[1em] bg-accent align-middle ml-1 rounded-sm"
    />
);

/* ─── Main Intro ──────────────────────────────────────────────────────── */
export const Intro = ({ onComplete }: { onComplete: () => void }) => {
    const [visible, setVisible] = useState(true);

    const skip = () => {
        setVisible(false);
        setTimeout(onComplete, 400);
    };

    useEffect(() => {
        // Auto-complete after full sequence
        const exitTimer = setTimeout(() => setVisible(false), 3200);
        const doneTimer = setTimeout(onComplete, 3900);

        // Keyboard skip (any key)
        const onKey = (e: KeyboardEvent) => {
            if (e.key) skip();
        };
        window.addEventListener("keydown", onKey, { once: true });

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(doneTimer);
            window.removeEventListener("keydown", onKey);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="intro"
                    className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "#0a0a0a" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Ambient Orbs */}
                    <motion.div
                        className="absolute rounded-full blur-[130px] pointer-events-none"
                        style={{
                            width: "45vw", height: "45vw",
                            background: "rgba(59,130,246,0.10)",
                            top: "-5%", left: "-5%",
                        }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.div
                        className="absolute rounded-full blur-[100px] pointer-events-none"
                        style={{
                            width: "35vw", height: "35vw",
                            background: "rgba(167,139,250,0.08)",
                            bottom: "-5%", right: "-5%",
                        }}
                        animate={{ scale: [1.1, 1, 1.1] }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                    />

                    {/* Subtle grid */}
                    <div
                        className="absolute inset-0 opacity-[0.025] pointer-events-none"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px",
                        }}
                    />

                    {/* ── Main text block ── */}
                    <div className="relative z-10 px-8 md:px-16 max-w-4xl w-full space-y-4">

                        {/* Thin top accent line */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: "left" }}
                            className="w-12 h-0.5 bg-accent mb-8"
                        />

                        {LINES.map((line) => (
                            <Line key={line.text} {...line} />
                        ))}

                        {/* Blinking cursor after last line */}
                        <div className="overflow-hidden h-8 flex items-center">
                            <Cursor delay={2.2} />
                        </div>
                    </div>

                    {/* Corner brackets */}
                    <div className="absolute top-6 left-6 w-7 h-7 border-t-2 border-l-2 border-white/10 rounded-tl-md" />
                    <div className="absolute top-6 right-6 w-7 h-7 border-t-2 border-r-2 border-white/10 rounded-tr-md" />
                    <div className="absolute bottom-6 left-6 w-7 h-7 border-b-2 border-l-2 border-white/10 rounded-bl-md" />
                    <div className="absolute bottom-6 right-6 w-7 h-7 border-b-2 border-r-2 border-white/10 rounded-br-md" />

                    {/* Skip button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        onClick={skip}
                        className="absolute bottom-7 right-8 text-[11px] uppercase tracking-[0.2em] text-foreground/25 hover:text-foreground/60 transition-colors duration-200 font-medium flex items-center gap-2 group"
                    >
                        Skip
                        <span className="w-5 h-px bg-foreground/20 group-hover:bg-foreground/50 transition-colors duration-200 group-hover:w-8 transition-all" />
                    </motion.button>

                    {/* Bottom status line */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/20 font-medium">
                            Loading experience
                        </span>
                    </motion.div>

                    {/* Thin progress bar at very bottom */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[2px] rounded-full"
                        style={{
                            background: "linear-gradient(90deg,#3b82f6,#a78bfa,#67e8f9)",
                        }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.0, ease: "linear" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
