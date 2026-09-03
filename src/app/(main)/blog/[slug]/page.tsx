import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ShieldCheck } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogData';

// Google ve SEO için Dinamik Meta Etiketler Üretici (Güncellendi)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) return { title: 'Yazı Bulunamadı' };

  return {
    title: `${post.title} | KD Ankara Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    }
  };
}

// Blog Detay Sayfası (Güncellendi)
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Yeni Next.js sürümüne göre URL'yi okumasını bekliyoruz (await)
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound(); 
  }

  // Google ve Yapay Zeka için "Article" (Makale) JSON-LD Şeması
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": "KD Ankara Uzman Ekibi",
      "url": "https://kdankara.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "KD Ankara",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kdankara.com/assets/logo.png"
      }
    }
  };

  return (
    <main className="min-h-screen bg-white pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Üst Başlık (Hero) Alanı */}
      <div className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-amber-600 mb-8 transition-colors font-semibold">
            <ArrowLeft className="w-4 h-4" /> Bilgi Bankasına Dön
          </Link>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> KD Ankara Uzman Ekibi</span>
          </div>
        </div>
      </div>

      {/* Makale İçeriği */}
      <article className="container mx-auto px-4 max-w-4xl py-12">
        {post.content}
      </article>

      {/* Kapanış ve CTA */}
      <div className="container mx-auto px-4 max-w-4xl mt-12">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 relative z-10">Süreci Tek Başınıza Yönetmek Zorunda Değilsiniz</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
            Binanızın yasal durumu, imar analizi ve müteahhit sözleşmeleri hakkında hata yapmamak için hemen uzman ekibimizle iletişime geçin.
          </p>
          <Link href="/on-analiz" className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 relative z-10">
            Ücretsiz Ön Analiz Talep Et
          </Link>
        </div>
      </div>
    </main>
  );
}