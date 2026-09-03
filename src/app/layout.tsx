    import type { Metadata } from "next";
    import "./globals.css";
    import { Toaster } from "sonner";

    const SITE_URL = "https://kdankara.com";
    const SITE_NAME = "KD Ankara";

    const BUSINESS_ID = `${SITE_URL}/#business`;
    const WEBSITE_ID = `${SITE_URL}/#website`;
    const WEBPAGE_ID = `${SITE_URL}/#webpage`;

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

        authors: [{ name: "KD Ankara" }],

        keywords: [
            "ankara kentsel dönüşüm danışmanlığı",
            "çankaya riskli yapı tespiti",
            "yenimahalle kentsel dönüşüm kira yardımı",
            "ankara",
            "emsal hesaplama",
            "inşaat maliyeti",
            "müteahhit fizibilite",
            "kentsel dönüşüm",
            "riskli yapı",
            "imar analizi",
        ],

        alternates: {
            canonical: SITE_URL,
        },

        verification: {
            google: "WAo-ceGZkKpht-bq4xf3cGPbM6ig4QlfbqzgtlI38jo",
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
            title: "Ankara Kentsel Dönüşüm Danışmanlığı | KD Ankara",
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

    /* ===== SCHEMA.ORG: WebPage (Sayfanın kendisi) ===== */
    const webpageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: SITE_URL,
        name: "Ankara Kentsel Dönüşüm Danışmanlığı & Riskli Yapı Tespiti | KD Ankara",
        description:
            "Ankara'da kentsel dönüşüm danışmanlığı, riskli yapı değerlendirmesi, imar ve emsal analizi, maliyet analizi, müteahhit teklif değerlendirme ve teknik süreç danışmanlığı.",
        isPartOf: {
            "@id": WEBSITE_ID,
        },
        about: {
            "@id": BUSINESS_ID,
        },
        inLanguage: "tr-TR",
    };

    /* ===== SCHEMA.ORG: HomeAndConstructionBusiness (İşletme) ===== */
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": BUSINESS_ID,
        name: "KD Ankara Strateji Merkezi",
        url: SITE_URL,
        logo: {
            "@type": "ImageObject",
            "@id": `${SITE_URL}/#logo`,
            url: `${SITE_URL}/assets/logo.png`,
            width: 512,
            height: 512,
        },
        image: [`${SITE_URL}/assets/logo.png`],
        description:
            "Ankara'da kentsel dönüşüm danışmanlığı, riskli yapı değerlendirmesi, imar ve emsal analizi, maliyet analizi, müteahhit teklif değerlendirme, malik uzlaşma yönetimi ve teknik süreç danışmanlığı.",
        telephone: ["+90 533 682 09 42", "+90 312 236 10 17"],
        email: "info@kdankara.com",
        priceRange: "₺₺",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Konutkent Mahallesi 2987. Sokak No:18",
            addressLocality: "Çankaya",
            addressRegion: "Ankara",
            postalCode: "06810",
            addressCountry: "TR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "39.87619840902843",
            longitude: "32.66279052508028",
        },
        openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
        areaServed: {
            "@type": "City",
            name: "Ankara",
            sameAs: "https://www.wikidata.org/wiki/Q3640",
        },
        knowsAbout: [
            "Kentsel dönüşüm",
            "Riskli yapı tespiti",
            "İmar analizi",
            "Emsal hesaplama",
            "Arsa payı analizi",
            "İnşaat maliyet analizi",
            "Müteahhit teklif değerlendirme",
            "Müteahhit fizibilitesi",
            "Malik uzlaşma yönetimi",
            "Teknik şartname",
            "Kentsel dönüşüm süreç yönetimi",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "KD Ankara Hizmetleri",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Kentsel Dönüşüm Ön Analizi",
                        provider: { "@id": BUSINESS_ID },
                        areaServed: { "@type": "City", name: "Ankara" },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "İmar ve Emsal Analizi",
                        provider: { "@id": BUSINESS_ID },
                        areaServed: { "@type": "City", name: "Ankara" },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "İnşaat Maliyet Analizi",
                        provider: { "@id": BUSINESS_ID },
                        areaServed: { "@type": "City", name: "Ankara" },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Müteahhit Teklif Değerlendirme",
                        provider: { "@id": BUSINESS_ID },
                        areaServed: { "@type": "City", name: "Ankara" },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Malik Uzlaşma Yönetimi",
                        provider: { "@id": BUSINESS_ID },
                        areaServed: { "@type": "City", name: "Ankara" },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Teknik ve Hukuki Süreç Danışmanlığı",
                        provider: { "@id": BUSINESS_ID },
                        areaServed: { "@type": "City", name: "Ankara" },
                    },
                },
            ],
        },
        sameAs: [
            "https://www.instagram.com/kentsel_donusum_ankara/",
            "https://www.linkedin.com/in/g%C3%B6ktu%C4%9F-usta-2007993a8/",
            "https://www.facebook.com/profile.php?id=61587153058423",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+90 312 236 10 17",
            contactType: "customer service",
            areaServed: "TR",
            availableLanguage: ["Turkish"],
        },
    };

    /* ===== SCHEMA.ORG: WebSite ===== */
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: "Ankara kentsel dönüşüm danışmanlığı ve strateji merkezi.",
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
                    {/* Google Analytics */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-31TP8L19HS"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-31TP8L19HS');
                                gtag('config', 'AW-17925410465');
                            `,
                        }}
                    />

                    {/* Schema.org JSON-LD */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(webpageSchema),
                        }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(organizationSchema),
                        }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(websiteSchema),
                        }}
                    />
                </head>

                <body className="font-sans antialiased text-gray-900 bg-white">
                    {children}
                    <Toaster richColors position="top-right" />
                </body>
            </html>
        );
    }
