"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useCallback } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

export const Modal = ({ isOpen, onClose, children, title, subtitle }: ModalProps) => {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/75 backdrop-blur-md"
                    />

                    {/* Modal Panel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 24 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-2xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="relative flex items-start justify-between gap-4 p-6 pb-5 border-b border-slate-250/60 dark:border-white/[0.06] flex-shrink-0 bg-slate-50/50 dark:bg-white/[0.02]">
                            <div className="space-y-1 pr-12">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-foreground leading-tight">{title}</h3>
                                {subtitle && (
                                    <p className="text-sm text-slate-500 dark:text-foreground/45 italic">{subtitle}</p>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Close modal"
                                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-150 dark:text-foreground/30 dark:hover:text-foreground dark:hover:bg-white/8 transition-all duration-150"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="p-6 overflow-y-auto flex-1 space-y-0" data-lenis-prevent>
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
