/**
 * Prerender Script for KD Ankara
 * 
 * Bu script, build sonrası her rota için benzersiz HTML dosyaları üretir.
 * Google böylece her sayfada farklı title, description ve canonical görür
 * ve "Doğru standart etikete sahip alternatif sayfa" hatasını vermez.
 * 
 * Kullanım: node scripts/prerender.mjs
 * Gereksinim: puppeteer (devDependency)
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');

const routes = [
    '/',
    '/hakkimizda',
    '/on-analiz',
    '/hizmetler',
    '/surec',
    '/arsa',
    '/muteahhit',
    '/firsatlar',
    '/blog',
    '/blog/2026-kentsel-donusum-kira-yardimi',
    '/blog/emsal-hesaplama-rehberi',
    '/blog/muteahhit-secerken-dikkat-edilmesi-gerekenler',
    '/blog/6306-sayili-kanun-haklariniz',
    '/blog/teknik-kadro-uzmanligimiz',
    '/blog/ankara-referans-projeler',
    '/iletisim',
    '/kvkk',
    '/gizlilik',
    '/tools',
    '/tools/emsal',
    '/tools/daire',
    '/tools/paylasim',
    '/tools/maliyet',
    '/tools/destek',
    '/tools/takvim',
    '/tools/arsapayi',
    '/tools/muteahhit-mini',
];



async function prerender() {
    const PORT = 4173;
    
    // Read the original template once
    const templatePath = join(DIST_DIR, 'index.html');
    const template = readFileSync(templatePath, 'utf-8');

    // Simple static file server for the dist folder using the template for SPA routes
    const server = createServer((req, res) => {
        const url = new URL(req.url, `http://localhost:${PORT}`);
        const pathname = url.pathname;
        
        const hasExtension = pathname.includes('.');
        if (!hasExtension) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(template);
            return;
        }

        let filePath = join(DIST_DIR, pathname);
        if (!existsSync(filePath)) {
            res.writeHead(404);
            res.end('Not found');
            return;
        }

        try {
            const content = readFileSync(filePath);
            const ext = filePath.split('.').pop();
            const mimeTypes = {
                'js': 'application/javascript',
                'css': 'text/css',
                'json': 'application/json',
                'png': 'image/png',
                'jpg': 'image/jpeg',
                'jpeg': 'image/jpeg',
                'svg': 'image/svg+xml',
                'ico': 'image/x-icon',
                'woff2': 'font/woff2',
                'woff': 'font/woff',
                'ttf': 'font/ttf',
            };
            res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
            res.end(content);
        } catch (err) {
            res.writeHead(500);
            res.end('Internal error');
        }
    });

    server.listen(PORT, () => {
        console.log(`📡 Prerender server started on port ${PORT}`);
    });

    console.log('🚀 Starting prerender...');
    console.log(`📄 ${routes.length} sayfa prerender edilecek\n`);

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const route of routes) {
        const page = await browser.newPage();
        const url = `http://localhost:${PORT}${route}`;

        try {
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
            
            // Wait for React to render and useSEO to set meta tags
            await page.waitForFunction(() => {
                const root = document.querySelector('#root');
                return root && root.innerText.trim().length > 100 &&
                       document.title && document.title !== '' && 
                       document.querySelector('link[rel="canonical"]');
            }, { timeout: 10000 }).catch(() => {
                console.warn(`  ⚠️  ${route} - meta etiketleri veya içerik beklenirken zaman aşımı`);
            });

            // Small extra wait for animations/renders
            await new Promise(r => setTimeout(r, 1000));

            // Get the fully rendered HTML
            const html = await page.content();

            // Determine output path
            let outputPath;
            if (route === '/') {
                outputPath = join(DIST_DIR, 'index.html');
            } else {
                // Create /hizmetler/index.html for /hizmetler route
                const dir = join(DIST_DIR, route);
                if (!existsSync(dir)) {
                    mkdirSync(dir, { recursive: true });
                }
                outputPath = join(dir, 'index.html');
            }

            writeFileSync(outputPath, html, 'utf-8');

            // Extract title for logging
            const title = await page.title();
            console.log(`  ✅ ${route} → "${title}"`);
        } catch (err) {
            console.error(`  ❌ ${route} → Hata: ${err.message}`);
        } finally {
            await page.close();
        }
    }

    await browser.close();
    server.close();

    console.log(`\n🎉 Prerender tamamlandı! ${routes.length} sayfa oluşturuldu.`);
}

prerender().catch(console.error);
