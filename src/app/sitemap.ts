import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogData';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kdankara.com';

  // Ana sayfalar ve araçlar
  const routes = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/surec',
    '/muteahhit',
    '/arsa',
    '/firsatlar',
    '/iletisim',
    '/on-analiz',
    '/blog',
    '/cankaya-kentsel-donusum',
    '/kecioren-kentsel-donusum',
    '/yenimahalle-kentsel-donusum',
    '/sincan-kentsel-donusum',
    '/kvkk',
    '/gizlilik',
    '/tools',
    '/tools/arsapayi',
    '/tools/daire',
    '/tools/destek',
    '/tools/emsal',
    '/tools/maliyet',
    '/tools/muteahhit-mini',
    '/tools/paylasim',
    '/tools/takvim',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Blog yazıları
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}