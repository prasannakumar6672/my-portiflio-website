"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
    const [count, setCount] = useState<number | string>(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const parsed = parseInt(value);
    const isNumber = !isNaN(parsed);
    const target = isNumber ? parsed : 0;

    useEffect(() => {
        if (!isInView || !isNumber) {
            if (!isNumber) setCount(value);
            return;
        }
        let start = 0;
        const duration = 1200; // ms
        const stepTime = 16; // ~60fps
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, stepTime);
        return () => clearInterval(timer);
    }, [isInView, target, isNumber, value]);

    return (
        <div ref={ref} className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white leading-none">
                {isNumber ? `${count}+` : value}
            </span>
            <span className="block text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mt-1.5">
                {label}
            </span>
        </div>
    );
};
