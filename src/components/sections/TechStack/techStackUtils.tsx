import React from "react";
import { projects } from "@/lib/data";
import * as Icons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

export const IconComponent = ({ name, color, size = 20 }: { name: string; color?: string; size?: number }) => {
    const commonProps = { style: { color: color || "currentColor" }, size };

    type IconSet = { [key: string]: React.ComponentType<{ style?: React.CSSProperties; size?: number }> };

    if (name.startsWith("Si")) {
        const Icon = (Icons as unknown as IconSet)[name];
        return Icon ? <Icon {...commonProps} /> : null;
    }
    if (name.startsWith("Fa")) {
        const Icon = (FaIcons as unknown as IconSet)[name];
        return Icon ? <Icon {...commonProps} /> : null;
    }
    if (name.startsWith("Ri")) {
        const Icon = (RiIcons as unknown as IconSet)[name];
        return Icon ? <Icon {...commonProps} /> : null;
    }
    return null;
};

export const hexToRgba = (hex: string, alpha: number) => {
    const cleanHex = hex.replace("#", "");
    let r = 0, g = 0, b = 0;
    if (cleanHex.length === 3) {
        r = parseInt(cleanHex[0] + cleanHex[0], 16);
        g = parseInt(cleanHex[1] + cleanHex[1], 16);
        b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else if (cleanHex.length === 6) {
        r = parseInt(cleanHex.substring(0, 2), 16);
        g = parseInt(cleanHex.substring(2, 4), 16);
        b = parseInt(cleanHex.substring(4, 6), 16);
    } else {
        return hex;
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const getSkillColor = (color: string | undefined, isDark: boolean) => {
    if (!color) return "#FF5A1F";
    if (color.toLowerCase() === "#ffffff") {
        return isDark ? "#ffffff" : "#0f172a";
    }
    return color;
};

export const getSkillUseDescription = (skillName: string) => {
    const matched = projects.filter(project => {
        return project.tech.some(t => {
            const term1 = t.toLowerCase();
            const term2 = skillName.toLowerCase();
            return term1.includes(term2) || term2.includes(term1) ||
                   (term1 === "ml" && term2 === "ai/ml") ||
                   (term2 === "ai/ml" && term1.includes("ai")) ||
                   (term1 === "ai vision" && term2.includes("opencv"));
        });
    });
    
    if (matched.length > 0) {
        return `Used in: ${matched.map(p => p.title).join(", ")}`;
    }
    
    const lowercaseName = skillName.toLowerCase();
    if (lowercaseName.includes("typescript")) return "Primary language for frontend type-safety and robust logic.";
    if (lowercaseName.includes("javascript")) return "Core scripting language for web interactivity and APIs.";
    if (lowercaseName.includes("java")) return "Enterprise system development and algorithmic foundations.";
    if (lowercaseName.includes("html")) return "Semantic layout structure and responsive core styles.";
    if (lowercaseName.includes("mongodb")) return "NoSQL document storage for flexible schema designs.";
    if (lowercaseName.includes("mysql")) return "Relational database management for structured application data.";
    if (lowercaseName.includes("postgresql")) return "Advanced relational database for complex queries and transactional integrity.";
    if (lowercaseName.includes("firebase")) return "Real-time backend-as-a-service database, hosting, and authentication.";
    if (lowercaseName.includes("aws")) return "Cloud infrastructure deployment and serverless architectures.";
    if (lowercaseName.includes("azure")) return "Cloud solutions hosting and cognitive services integration.";
    if (lowercaseName.includes("git")) return "Version control and collaborative workflow pipelines.";
    if (lowercaseName.includes("vs code")) return "Primary Integrated Development Environment (IDE) configured for speed.";
    if (lowercaseName.includes("docker")) return "Containerization of services for seamless deployment parity.";
    if (lowercaseName.includes("fastapi")) return "High-performance asynchronous APIs for AI model serving.";
    
    return "Foundational tool in my engineering workflow.";
};
