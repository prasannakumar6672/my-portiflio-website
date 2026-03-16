"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "../ui/Button";
import { SocialLink } from "../ui/SocialLink";

// ─── Roles typewriter ─────────────────────────────────────────────────────
const ROLES = [
    "Software Engineer",
    "Full Stack Developer",
    "AI / ML Engineer",
    "Cloud Explorer",
    "Hackathon Enthusiast",
    "Problem Solver",
];

const Typewriter = () => {
    const [roleIdx, setRoleIdx] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = ROLES[roleIdx];

        // Determine timing
        let speed = 80;
        if (isDeleting) speed = 40;
        if (!isDeleting && text === currentRole) speed = 2000; // Pause at top
        if (isDeleting && text === "") speed = 500; // Pause at bottom

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Handle Typing
                if (text === currentRole) {
                    // Start deleting after pause
                    setIsDeleting(true);
                } else {
                    setText(currentRole.slice(0, text.length + 1));
                }
            } else {
                // Handle Deleting
                if (text === "") {
                    // Switch to next role after pause
                    setIsDeleting(false);
                    setRoleIdx((prev) => (prev + 1) % ROLES.length);
                } else {
                    setText(currentRole.slice(0, text.length - 1));
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIdx]);

    return (
        <span className="font-display text-2xl md:text-3xl font-semibold">
            <span className="text-foreground/80">{text}</span>
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-accent"
            >|</motion.span>
        </span>
    );
};

// ─── Floating Orbs ─────────────────────────────────────────────────────────
const Orb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
    <motion.div
        className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay }}
    />
);

// ─── Particle dots ──────────────────────────────────────────────────────────
const Particles = () => {
    const [state, setState] = useState<{ mounted: boolean; particleData: { top: string; left: string; duration: number; delay: number }[] }>({
        mounted: false,
        particleData: [],
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            const data = Array.from({ length: 40 }, () => ({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                duration: 3 + Math.random() * 4,
                delay: Math.random() * 5,
            }));
            setState({ mounted: true, particleData: data });
        }, 0);
        return () => clearTimeout(timeout);
    }, []);

    if (!state.mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {state.particleData.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-accent/20"
                    style={{
                        top: p.top,
                        left: p.left,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// ─── Grid overlay ───────────────────────────────────────────────────────────
const GridOverlay = () => (
    <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
            backgroundImage: `
                linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
        }}
    />
);

// ─── Animated name characters ───────────────────────────────────────────────
const AnimatedName = ({ name }: { name: string }) => {
    const chars = name.split("");
    return (
        <h1 className="text-[2.2rem] xs:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] select-none">
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60, rotateX: -90, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.7,
                        delay: 0.5 + i * 0.04,
                        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                    }}
                    className="inline-block"
                    style={{
                        background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 45%, #67e8f9 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </h1>
    );
};


// ─── Hero ────────────────────────────────────────────────────────────────────
export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32 md:pb-20">
            {/* Layers */}
            <GridOverlay />
            <Particles />
            <Orb className="w-[600px] h-[600px] top-0 left-0 bg-blue-600/20" delay={0} />
            <Orb className="w-[500px] h-[500px] top-1/3 right-0 bg-purple-600/20" delay={2} />
            <Orb className="w-[400px] h-[400px] bottom-0 left-1/3 bg-cyan-500/15" delay={4} />

            {/* Shimmer sweep across whole section */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
                    backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center gap-4 md:gap-5"
                >
                    {/* Greeting */}
                    <motion.p variants={fadeUp} className="text-accent text-base md:text-lg font-medium tracking-widest uppercase">
                        Hi, myself
                    </motion.p>

                    {/* Animated Name */}
                    <div style={{ perspective: "800px" }}>
                        <AnimatedName name={personalInfo.name} />
                    </div>

                    {/* Typewriter Roles */}
                    <motion.div variants={fadeUp} className="min-h-[2.5rem]">
                        <Typewriter />
                    </motion.div>

                    {/* Bio */}
                    <motion.p variants={fadeUp} className="text-base md:text-lg text-foreground/50 max-w-xl leading-relaxed">
                        {personalInfo.bio}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Button size="lg" className="gap-2 relative overflow-hidden group">
                                <motion.span
                                    className="absolute inset-0 bg-white/10"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.4 }}
                                />
                                View Projects <span>→</span>
                            </Button>
                        </motion.a>
                        <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Button variant="outline" size="lg">Get in Touch</Button>
                        </motion.a>
                        <motion.a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Button variant="secondary" size="lg" className="gap-2">
                                <Download className="w-4 h-4" /> Resume
                            </Button>
                        </motion.a>
                    </motion.div>

                    {/* Social Pills */}
                    <motion.div variants={fadeUp} className="flex gap-3 mt-6">
                        <SocialLink href={personalInfo.socials.github} icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href={personalInfo.socials.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href={personalInfo.socials.email} icon={<Mail size={20} />} label="Email" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Mouse scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-medium">Scroll</span>
                <div className="w-5 h-8 rounded-full border border-foreground/20 flex items-start justify-center pt-1.5">
                    <motion.div
                        className="w-1 h-2 bg-foreground/40 rounded-full"
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
