"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SITE_URL = "https://kdankara.com";
const SITE_NAME = "KD Ankara";

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo.png`;

/**
 * KD Ankara için sayfa bazlı SEO yönetimi.
 *
 * Yönetilen alanlar:
 * - Title
 * - Meta Description
 * - Canonical
 * - Open Graph
 * - Twitter Card
 * - WebPage JSON-LD
 * - Sayfaya özel JSON-LD
 *
 * Global Business / Website entity'leri
 * site genelindeki layout/schema yapısıyla ilişkilendirilir.
 */
export function useSEO(
    title: string,
    description?: string,
    schema?: object | object[]
) {
    const pathname = usePathname();

    useEffect(() => {
        /*
         * =========================================================
         * PATH & CANONICAL
         * =========================================================
         */

        let currentPath = pathname || "/";

        // Trailing slash temizle
        if (
            currentPath.length > 1 &&
            currentPath.endsWith("/")
        ) {
            currentPath = currentPath.slice(0, -1);
        }

        const canonicalUrl =
            currentPath === "/"
                ? SITE_URL
                : `${SITE_URL}${currentPath}`;

        /*
         * =========================================================
         * TITLE
         * =========================================================
         *
         * Ana sayfada:
         * "Ankara Kentsel Dönüşüm Danışmanlığı & Emsal Hesaplama | KD Ankara"
         *
         * Diğer sayfalarda:
         * "Sayfa Başlığı | KD Ankara"
         */

        const fullTitle =
            currentPath === "/"
                ? title
                : `${title} | ${SITE_NAME}`;

        document.title = fullTitle;

        /*
         * =========================================================
         * CANONICAL
         * =========================================================
         */

        let canonicalLink = document.querySelector(
            'link[rel="canonical"]'
        ) as HTMLLinkElement | null;

        if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalLink);
        }

        canonicalLink.setAttribute(
            "href",
            canonicalUrl
        );

        /*
         * =========================================================
         * META DESCRIPTION
         * =========================================================
         */

        if (description) {
            let metaDescription =
                document.querySelector(
                    'meta[name="description"]'
                ) as HTMLMetaElement | null;

            if (!metaDescription) {
                metaDescription =
                    document.createElement("meta");

                metaDescription.setAttribute(
                    "name",
                    "description"
                );

                document.head.appendChild(
                    metaDescription
                );
            }

            metaDescription.setAttribute(
                "content",
                description
            );
        }

        /*
         * =========================================================
         * OPEN GRAPH
         * =========================================================
         */

        const ogTags: Record<string, string> = {
            "og:title": fullTitle,
            "og:description": description || "",
            "og:url": canonicalUrl,
            "og:type": "website",
            "og:locale": "tr_TR",
            "og:site_name": SITE_NAME,
            "og:image": DEFAULT_OG_IMAGE,
        };

        Object.entries(ogTags).forEach(
            ([property, content]) => {
                if (!content) return;

                let meta = document.querySelector(
                    `meta[property="${property}"]`
                ) as HTMLMetaElement | null;

                if (!meta) {
                    meta =
                        document.createElement("meta");

                    meta.setAttribute(
                        "property",
                        property
                    );

                    document.head.appendChild(meta);
                }

                meta.setAttribute(
                    "content",
                    content
                );
            }
        );

        /*
         * =========================================================
         * TWITTER CARD
         * =========================================================
         */

        const twitterTags: Record<string, string> = {
            "twitter:card": "summary_large_image",
            "twitter:title": fullTitle,
            "twitter:description":
                description || "",
            "twitter:image": DEFAULT_OG_IMAGE,
        };

        Object.entries(twitterTags).forEach(
            ([name, content]) => {
                if (!content) return;

                let meta = document.querySelector(
                    `meta[name="${name}"]`
                ) as HTMLMetaElement | null;

                if (!meta) {
                    meta =
                        document.createElement("meta");

                    meta.setAttribute(
                        "name",
                        name
                    );

                    document.head.appendChild(meta);
                }

                meta.setAttribute(
                    "content",
                    content
                );
            }
        );

        /*
         * =========================================================
         * WEBPAGE SCHEMA
         * =========================================================
         */

        const webpageSchema = {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: fullTitle,
            description: description || "",
            isPartOf: {
                "@id": WEBSITE_ID,
            },
            about: {
                "@id": BUSINESS_ID,
            },
            publisher: {
                "@id": BUSINESS_ID,
            },
            inLanguage: "tr-TR",
        };

        /*
         * =========================================================
         * PAGE-SPECIFIC SCHEMA
         * =========================================================
         *
         * schema tek obje veya obje dizisi olabilir.
         */

        const graph: object[] = [
            webpageSchema,
        ];

        if (schema) {
            if (Array.isArray(schema)) {
                graph.push(...schema);
            } else {
                graph.push(schema);
            }
        }

        /*
         * =========================================================
         * FINAL JSON-LD
         * =========================================================
         */

        const finalSchema = {
            "@context": "https://schema.org",
            "@graph": graph,
        };

        /*
         * =========================================================
         * JSON-LD SCRIPT
         * =========================================================
         */

        let script = document.querySelector(
            'script[type="application/ld+json"].page-schema'
        ) as HTMLScriptElement | null;

        if (!script) {
            script =
                document.createElement("script");

            script.setAttribute(
                "type",
                "application/ld+json"
            );

            script.classList.add(
                "page-schema"
            );

            document.head.appendChild(script);
        }

        script.textContent =
            JSON.stringify(finalSchema);

        /*
         * =========================================================
         * CLEANUP
         * =========================================================
         *
         * Component kaldırıldığında yalnızca bizim oluşturduğumuz
         * page-schema script'ini temizliyoruz.
         */

        return () => {
            const currentScript =
                document.querySelector(
                    'script[type="application/ld+json"].page-schema'
                );

            if (currentScript) {
                currentScript.remove();
            }
        };

    }, [
        title,
        description,
        pathname,
        schema,
    ]);
}