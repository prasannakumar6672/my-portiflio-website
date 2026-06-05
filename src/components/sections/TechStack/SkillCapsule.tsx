"use client";

import { useState } from "react";
import { TechItem } from "@/types";
import { getSkillColor, hexToRgba, IconComponent } from "./techStackUtils";

export const SkillCapsule = ({
    skill,
    onHover,
    isDark
}: {
    skill: TechItem;
    onHover: (name: string | null) => void;
    isDark: boolean;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const color = getSkillColor(skill.color, isDark);

    return (
        <div
            onMouseEnter={() => {
                setIsHovered(true);
                onHover(skill.name);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onHover(null);
            }}
            style={{
                borderColor: isHovered ? hexToRgba(color, 0.3) : undefined,
                boxShadow: isHovered ? `0 0 15px -3px ${hexToRgba(color, 0.15)}` : undefined,
                backgroundColor: isHovered ? hexToRgba(color, 0.08) : undefined
            }}
            className="group flex items-center gap-2.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
        >
            <div
                className="w-5 h-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ color }}
            >
                <IconComponent name={skill.icon} color={color} size={18} />
            </div>
            <span className="text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white">
                {skill.name}
            </span>
        </div>
    );
};
