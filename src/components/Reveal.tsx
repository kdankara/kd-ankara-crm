"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    immediate?: boolean;
}

export default function Reveal({ children, className, delay = 0, immediate = false }: RevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(immediate);

    useEffect(() => {
        if (immediate) return;

        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [immediate]);

    return (
        <div
            ref={elementRef}
            data-visible={isVisible}
            style={{ transitionDelay: `${delay}ms` }}
            className={`${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} transition-[opacity,transform] duration-500 ${className ?? ""}`}
        >
            {children}
        </div>
    );
}