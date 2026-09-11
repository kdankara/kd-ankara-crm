import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "sonner";

// Next.js Otomatik Font Optimizasyonu (Render-blocking önleyici)
const inter = Inter({
    subsets: ["latin-ext"],
    display: "swap",
    variable: "--font-sans",
});

const SITE_URL = "https://kdankara.com";
const SITE_NAME = "KD Ankara";

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: "Ankara Kentsel Dönüşüm Danışmanlığı & Emsal Hesaplama | KD Ankara",
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
        title: "Ankara Kentsel Dönüşüm Danışmanlığı & Emsal Hesaplama | KD Ankara",
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

/* ===== SCHEMA.ORG: WebPage ===== */
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

/* ===== SCHEMA.ORG: HomeAndConstructionBusiness ===== */
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
        <html lang="tr" className={inter.variable}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://images.unsplash.com" />
                <link rel="dns-prefetch" href="https://www.transparenttextures.com" />
                <link rel="dns-prefetch" href="https://www.google.com" />
                <link rel="dns-prefetch" href="https://analytics.google.com" />
                <link rel="dns-prefetch" href="https://www.googleadservices.com" />
                <link rel="dns-prefetch" href="https://ad.doubleclick.net" />
                <link rel="dns-prefetch" href="https://finans.truncgil.com" />

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

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-31TP8L19HS"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-31TP8L19HS');
                        gtag('config', 'AW-17925410465');
                    `}
                </Script>

                {/* KD Ankara: Sabit WhatsApp Lead Butonu */}
                <a 
                    href="https://wa.me/905336820942?text=Merhaba,%20KD%20Ankara%20%C3%BCzerinden%20%C3%BCcretsiz%20kentsel%20d%C3%B6n%C3%BC%C5%9F%C3%BCm%20%C3%B6n%20analizi%20talep%20ediyorum.%20Ada/Parsel%20bilgim:%20___"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-[#25D366]/40 border-2 border-white"
                    aria-label="WhatsApp üzerinden ücretsiz ön analiz talep et"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                </a>
                {/* KD Ankara: Sabit WhatsApp Lead Butonu SONU */}

            </body>
        </html>
    );
}