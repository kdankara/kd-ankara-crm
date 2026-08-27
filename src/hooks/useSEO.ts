"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SITE_URL = 'https://kdankara.com';
const SITE_NAME = 'KD Ankara';

/**
 * Custom hook for dynamic SEO (Title, Meta Description, Canonical, OG Tags, Schema)
 * Sets all critical meta tags that Google needs to see per page.
 * @param title Custom title for the page
 * @param description Custom meta description for the page
 * @param schema Optional JSON-LD schema object for the page
 */
export function useSEO(title: string, description?: string, schema?: object) {
    const pathname = usePathname();

    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;

        // --- Title ---
        document.title = fullTitle;

        // --- Canonical URL ---
        let currentPath = pathname;
        if (currentPath.length > 1 && currentPath.endsWith('/')) {
            currentPath = currentPath.slice(0, -1);
        }
        const canonicalUrl = `${SITE_URL}${currentPath}`;

        let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonicalUrl);

        // --- Meta Description ---
        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.setAttribute('name', 'description');
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', description);
        }

        // --- Open Graph Tags ---
        const ogTags: Record<string, string> = {
            'og:title': fullTitle,
            'og:description': description || '',
            'og:url': canonicalUrl,
            'og:type': 'website',
            'og:locale': 'tr_TR',
            'og:site_name': SITE_NAME,
        };

        Object.entries(ogTags).forEach(([property, content]) => {
            if (!content) return;
            let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('property', property);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        });

        // --- JSON-LD Schema ---
        const webpageSchema = {
            '@type': 'WebPage',
            '@id': `${canonicalUrl}#webpage`,
            'url': canonicalUrl,
            'name': fullTitle,
            'description': description || '',
            'isPartOf': { '@id': `${SITE_URL}/#website` },
            'about': { '@id': `${SITE_URL}/#organization` }
        };

        const finalSchema = {
            '@context': 'https://schema.org',
            '@graph': [webpageSchema] as object[]
        };

        if (schema) {
            // If the provided schema is an array, spread it into the graph
            if (Array.isArray(schema)) {
                finalSchema['@graph'].push(...schema);
            } else {
                // If it's a single object, push it to the graph
                finalSchema['@graph'].push(schema);
            }
        }

        let script = document.querySelector('script[type="application/ld+json"].page-schema') as HTMLScriptElement | null;
        if (!script) {
            script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            script.classList.add('page-schema');
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(finalSchema);

    }, [title, description, pathname, schema]);
}
