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
            {children}
        </>
    );
};
