"use client";

import { type ReactNode } from "react";
import { trackPhoneClick } from "@/lib/gtag";

interface TrackedPhoneLinkProps {
    children: ReactNode;
    className?: string;
    phone?: string;
}

export default function TrackedPhoneLink({ children, className, phone = "+905336820942" }: TrackedPhoneLinkProps) {
    return (
        <a
            href={`tel:${phone}`}
            onClick={trackPhoneClick}
            className={className}
        >
            {children}
        </a>
    );
}
