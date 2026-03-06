"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { personalInfo } from "@/lib/data";

export const Contact = () => {
    const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("loading");

        const formData = new FormData(e.currentTarget);

        // Add your Web3Forms Access Key here or in .env.local as NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
        // You can get a free access key from https://web3forms.com/
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
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Info Side */}
                    <div className="space-y-12">
                        <header className="space-y-4">
                            <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
                                LET&apos;S BUILD <br />
                                <span className="text-accent">TOGETHER.</span>
                            </h2>
                            <p className="text-foreground/40 text-lg max-w-md">
                                Have an ambitious project in mind? Let&apos;s connect and turn your vision into a digital masterpiece.
                            </p>
                        </header>

                        <div className="space-y-6">
                            <ContactInfo icon={<Mail />} label="Email" value={personalInfo.email} href={personalInfo.socials.email} />
                            <ContactInfo icon={<MapPin />} label="Location" value={personalInfo.location} />
                            <ContactInfo icon={<Phone />} label="Availability" value="Open for new opportunities" />
                        </div>

                        <div className="flex gap-6 pt-6">
                            <a href={personalInfo.socials.github} className="w-12 h-12 glass rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-accent/50 transition-all"><Github size={20} /></a>
                            <a href={personalInfo.socials.linkedin} className="w-12 h-12 glass rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-accent/50 transition-all"><Linkedin size={20} /></a>

                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 md:p-12 border-white/5 bg-white/[0.03]">
                            {formState === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-20 text-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto ring-8 ring-green-500/10">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                                        <p className="text-foreground/40">I&apos;ll get back to you within 24 hours.</p>
                                    </div>
                                    <Button variant="outline" onClick={() => setFormState("idle")}>
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            ) : formState === "error" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-20 text-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto ring-8 ring-red-500/10">
                                        <span className="text-4xl font-black">!</span>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-foreground">Something went wrong!</h3>
                                        <p className="text-foreground/40">Please try again later or contact me directly via email.</p>
                                    </div>
                                    <Button variant="outline" onClick={() => setFormState("idle")}>
                                        Try Again
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 ml-1">Your Name</label>
                                            <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 ml-1">Email Address</label>
                                            <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 ml-1">Subject</label>
                                        <input name="subject" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all" placeholder="Project Inquiry" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 ml-1">Message</label>
                                        <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none" placeholder="Tell me about your project..." />
                                    </div>
                                    <Button type="submit" className="w-full h-14" isLoading={formState === "loading"}>
                                        Send Message <Send className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactInfo = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => {
    const content = (
        <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-foreground transition-all duration-300">
                {icon}
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/30">{label}</p>
                <p className="text-lg font-bold text-foreground/80 group-hover:text-foreground transition-colors">{value}</p>
            </div>
        </div>
    );

    return href ? <a href={href}>{content}</a> : content;
};
