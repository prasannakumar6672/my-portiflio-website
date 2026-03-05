"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    icon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, style, ...props }, ref) => {
        const variants = {
            primary: "bg-accent text-white hover:bg-accent/90 accent-glow",
            secondary: "bg-foreground/10 text-foreground hover:bg-foreground/20 backdrop-blur-sm",
            outline: "border border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-foreground/30",
            ghost: "text-foreground/70 hover:text-foreground hover:bg-foreground/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg font-semibold",
            icon: "p-3",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={style}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden group",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                    {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        children as React.ReactNode
                    )}
                </span>
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button };
