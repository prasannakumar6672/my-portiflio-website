"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, interactive = false, children, style, ...props }, ref) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const rotateX = useTransform(y, [-100, 100], [10, -10]);
        const rotateY = useTransform(x, [-100, 100], [-10, 10]);

        function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
            if (!interactive) return;
            const rect = event.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            x.set(event.clientX - centerX);
            y.set(event.clientY - centerY);
        }

        function handleMouseLeave() {
            x.set(0);
            y.set(0);
        }

        return (
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    ...(style as object),
                    ...(interactive ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {})
                }}
                className={cn(
                    "glass-card p-6 overflow-hidden relative",
                    className
                )}
                {...props}
            >
                <div style={interactive ? { transform: "translateZ(20px)" } : {}}>
                    {children as React.ReactNode}
                </div>
            </motion.div>
        );
    }
);

Card.displayName = "Card";

export { Card };
