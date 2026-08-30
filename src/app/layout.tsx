import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

const SITE_URL = "https://kdankara.com";
const SITE_NAME = "KD Ankara";

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default:
            "Ankara Kentsel Dönüşüm Danışmanlığı & Emsal Hesaplama | KD Ankara",
        template: "%s | KD Ankara",
    },

    description:
        "Ankara kentsel dönüşüm danışmanlığı, imar ve emsal analizi, arsa payı değerlendirmesi, müteahhit teklif karşılaştırması ve süreç yönetimi.",

    applicationName: SITE_NAME,

    alternates: {
        canonical: SITE_URL,
    },

    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: SITE_URL,
        siteName: SITE_NAME,
        title:
            "Ankara Kentsel Dönüşüm Danışmanlığı & Emsal Hesaplama | KD Ankara",
        description:
            "Ankara'da kentsel dönüşüm sürecinizi teknik, hukuki ve stratejik açıdan değerlendirin. Ücretsiz ön analiz ile binanızın dönüşüm potansiyelini keşfedin.",
        images: [
            {
                url: "/assets/logo.png",
                width: 1200,
                height: 630,
                alt: "KD Ankara Kentsel Dönüşüm Danışmanlığı",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Ankara Kentsel Dönüşüm Danışmanlığı | KD Ankara",
        description:
            "Ankara'da kentsel dönüşüm, emsal, arsa payı ve müteahhit teklif değerlendirme danışmanlığı.",
        images: ["/assets/logo.png"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    icons: {
        icon: "/favicon.ico",
    },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description:
        "Ankara'da kentsel dönüşüm danışmanlığı, imar ve emsal analizi, müteahhit teklif değerlendirme ve süreç yönetimi hizmetleri.",
    areaServed: {
        "@type": "City",
        name: "Ankara",
        containedInPlace: {
            "@type": "Country",
            name: "Türkiye",
        },
    },
    serviceType: [
        "Kentsel Dönüşüm Danışmanlığı",
        "İmar ve Emsal Analizi",
        "Müteahhit Teklif Değerlendirme",
        "Kentsel Dönüşüm Süreç Yönetimi",
    ],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: {
        "@id": BUSINESS_ID,
    },
    inLanguage: "tr-TR",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            organizationSchema
                        ),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            websiteSchema
                        ),
                    }}
                />
            </head>

            <body className="font-sans antialiased text-gray-900 bg-white">
                {children}

                <Toaster
                    richColors
                    position="top-right"
                />
            </body>
        </html>
    );
}