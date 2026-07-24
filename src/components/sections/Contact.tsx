"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { personalInfo } from "@/lib/data";

const ContactInfo = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => {
    const content = (
        <div className="flex items-center gap-4 group cursor-pointer p-3.5 bg-slate-50/[0.3] dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl hover:bg-white dark:hover:bg-white/[0.02] transition-all">
            <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0 transition-transform group-hover:scale-105 shadow-sm">
                {icon}
            </div>
            <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">{label}</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-accent transition-colors">{value}</p>
            </div>
        </div>
    );

    return href ? <a href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a> : content;
};

export const Contact = () => {
    const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("loading");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await response.json();
            if (result.success) {
                setFormState("success");
            } else {
                setFormState("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormState("error");
        }
    };

    return (
        <section id="contact" className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    
                    {/* ══ LEFT: CONTACT INFO (5 Cols) ══════════════════════════════ */}
                    <div className="lg:col-span-5 space-y-10">
                        <header className="space-y-4">
                            <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase block">{"// request query"}</span>
                            <h2 className="text-4xl sm:text-6xl font-display font-black text-slate-900 dark:text-white leading-none uppercase">
                                {"Let's Build"} <br />
                                <span className="bg-gradient-to-r from-accent to-[#FF8C00] bg-clip-text text-transparent">Together.</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                                {"Have an innovative project, AI agent pipeline, or full-stack architectural design in mind? Drop a line and let's construct it."}
                            </p>
                        </header>

                        <div className="space-y-4">
                            <ContactInfo icon={<Mail size={16} />} label="Email" value={personalInfo.email} href={personalInfo.socials.email} />
                            <ContactInfo icon={<MapPin size={16} />} label="Location" value={personalInfo.location} />
                            <ContactInfo icon={<Phone size={16} />} label="Mobile" value="+91 9010617565" />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* ══ RIGHT: PREMIUM FORM CARD (7 Cols) ════════════════════════ */}
                    <div className="lg:col-span-7">
                        <Card className="p-6 sm:p-10 border-slate-200 dark:border-white/5 bg-slate-50/[0.2] dark:bg-white/[0.01]">
                            {formState === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-14 text-center space-y-6"
                                >
                                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-500/5">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Transmitted</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Response standard latency is under 24 hours.</p>
                                    </div>
                                    <Button variant="outline" size="sm" onClick={() => setFormState("idle")}>
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            ) : formState === "error" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-14 text-center space-y-6"
                                >
                                    <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto ring-8 ring-red-500/5">
                                        <AlertCircle size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Transmission Defect</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Please retry or mail directly to {personalInfo.email}.</p>
                                    </div>
                                    <Button variant="outline" size="sm" onClick={() => setFormState("idle")}>
                                        Retry Transmission
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 ml-1">Your Name</label>
                                            <input
                                                name="name"
                                                required
                                                type="text"
                                                className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3 text-sm text-slate-800 dark:text-white placeholder:text-slate-350 dark:placeholder:text-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 ml-1">Email Address</label>
                                            <input
                                                name="email"
                                                required
                                                type="email"
                                                className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3 text-sm text-slate-800 dark:text-white placeholder:text-slate-350 dark:placeholder:text-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 ml-1">Subject</label>
                                        <input
                                            name="subject"
                                            required
                                            type="text"
                                            className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3 text-sm text-slate-800 dark:text-white placeholder:text-slate-350 dark:placeholder:text-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                            placeholder="System Architecture Collaboration"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3 text-sm text-slate-800 dark:text-white placeholder:text-slate-350 dark:placeholder:text-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                                            placeholder="Describe the technical requirements or system scope..."
                                        />
                                    </div>
                                    <Button type="submit" className="w-full h-12 text-xs font-bold text-white bg-accent hover:bg-accent/90 cursor-pointer shadow-md" isLoading={formState === "loading"}>
                                        Transmit Query
                                        <Send className="ml-1.5 w-3.5 h-3.5" />
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
