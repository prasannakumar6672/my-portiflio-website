"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download, Printer, Mail, MapPin, Linkedin, Github, Globe } from "lucide-react";
import Link from "next/link";
import { personalInfo, experience, techStack, education, achievements } from "@/lib/data";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
      {/* ── Control Header (Hidden in Print) ── */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-foreground/10 hover:border-foreground/30 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
          >
            <Printer size={14} />
            Print Resume
          </button>
          <a
            href={personalInfo.resumeUrl}
            download="Prasanna_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full bg-accent text-white hover:bg-accent/90 transition-all shadow-md shadow-accent/25 cursor-pointer"
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>
      </div>

      {/* ── Resume Container ── */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 print:border-none print:bg-transparent rounded-2xl p-8 sm:p-12 shadow-2xl space-y-10 print:p-0 print:shadow-none"
      >
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-white/10 print:border-slate-200 pb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-display font-black text-foreground print:text-slate-900 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-lg font-semibold text-accent mt-2 print:text-orange-600">
              {personalInfo.title}
            </p>
            <p className="text-sm text-foreground/50 print:text-slate-500 mt-1">
              Building intelligent, scalable software architectures.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 text-sm text-foreground/60 print:text-slate-600 justify-end md:items-end">
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-accent print:text-orange-600" />
              <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                {personalInfo.email}
              </a>
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-accent print:text-orange-600" />
              {personalInfo.location}
            </span>
            <div className="flex gap-4 mt-2 print:text-slate-600">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1"
              >
                <Linkedin size={14} /> <span className="text-xs">LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1"
              >
                <Github size={14} /> <span className="text-xs">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-display font-bold uppercase tracking-wider text-accent print:text-orange-600 border-b border-accent/20 pb-1.5">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.school} className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-foreground print:text-slate-800 text-base">{edu.school}</h3>
                <p className="text-sm text-foreground/80 print:text-slate-700 font-medium">{edu.degree}</p>
                <p className="text-xs text-foreground/50 print:text-slate-500 mt-1">{edu.content}</p>
              </div>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 print:border-slate-200 print:text-slate-600 text-foreground/60 shrink-0">
                {edu.duration}
              </span>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-display font-bold uppercase tracking-wider text-accent print:text-orange-600 border-b border-accent/20 pb-1.5">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.company + exp.role} className="space-y-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-bold text-foreground print:text-slate-800 text-base">{exp.company}</h3>
                    <p className="text-sm font-semibold text-accent print:text-orange-600">{exp.role}</p>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-white/5 border border-white/10 print:border-slate-200 print:text-slate-600 text-foreground/60 shrink-0">
                    {exp.duration}
                  </span>
                </div>
                <ul className="list-disc pl-5 text-sm text-foreground/60 print:text-slate-600 space-y-1">
                  {exp.description.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
                {exp.tech && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/5 text-accent border border-accent/15 print:border-slate-200 print:text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-display font-bold uppercase tracking-wider text-accent print:text-orange-600 border-b border-accent/20 pb-1.5">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStack.map((category) => (
              <div key={category.title} className="space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/40 print:text-slate-400">
                  {category.title}
                </h3>
                <p className="text-sm text-foreground/80 print:text-slate-700 leading-relaxed">
                  {category.skills.map((s) => s.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="space-y-4">
          <h2 className="text-xl font-display font-bold uppercase tracking-wider text-accent print:text-orange-600 border-b border-accent/20 pb-1.5">
            Key Achievements
          </h2>
          <ul className="list-disc pl-5 text-sm text-foreground/60 print:text-slate-600 space-y-1.5">
            {achievements.map((ach) => (
              <li key={ach.title}>
                <strong className="text-foreground/90 print:text-slate-800">{ach.title}</strong> —{" "}
                {ach.issuer} ({ach.date})
                {ach.description && <p className="text-xs text-foreground/45 print:text-slate-500 mt-0.5">{ach.description}</p>}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </main>
  );
}
