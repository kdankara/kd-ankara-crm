"use client";

import { type ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/gtag";

interface TrackedWhatsAppLinkProps {
    children: ReactNode;
    className?: string;
}

export default function TrackedWhatsAppLink({ children, className }: TrackedWhatsAppLinkProps) {
    return (
        <a
            href="https://wa.me/905336820942"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className={className}
        >
            {children}
        </a>
    );
}