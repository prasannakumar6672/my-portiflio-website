"use client";

import { useState, useCallback } from "react";
import { Intro } from "./Intro";

export const IntroWrapper = ({ children }: { children: React.ReactNode }) => {
    const [introDone, setIntroDone] = useState(false);

    const handleComplete = useCallback(() => {
        setIntroDone(true);
    }, []);

    return (
        <>
            {!introDone && <Intro onComplete={handleComplete} />}
            <div
                className="transition-opacity duration-700 ease-in-out"
                style={{
                    opacity: introDone ? 1 : 0,
                    visibility: introDone ? "visible" : "hidden"
                }}
            >
                {children}
            </div>
        </>
    );
};
