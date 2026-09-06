"use client";

import dynamic from "next/dynamic";

const OnAnalizWizard = dynamic(() => import("./OnAnalizWizard"), {
    ssr: false,
    loading: () => <div className="min-h-[500px]" aria-hidden="true" />,
});

export default function HomepageAnalysisForm() {
    return <OnAnalizWizard />;
}