import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sitemap from 'vite-plugin-sitemap'

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
  '/tools',
  '/tools/emsal',
  '/tools/daire',
  '/tools/paylasim',
  '/tools/maliyet',
  '/tools/destek',
  '/tools/takvim',
  '/tools/arsapayi',
  '/tools/muteahhit-mini',
  '/giris'
];

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    sitemap({
      hostname: 'https://kdankara.com',
      dynamicRoutes: routes.filter(r => r !== '/')
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
