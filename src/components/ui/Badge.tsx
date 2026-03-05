import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "accent";
}

const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
    const variants = {
        default: "bg-white/5 text-foreground/70 border-white/10",
        outline: "border border-white/20 text-foreground/80",
        accent: "bg-accent/10 text-accent border-accent/20",
    };

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-300",
                variants[variant],
                className
            )}
            {...props}
        />
    );
};

export { Badge };
