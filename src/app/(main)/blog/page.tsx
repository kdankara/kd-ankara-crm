"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, Calendar, Clock, ArrowRight, BookOpen, 
  Sparkles, TrendingUp, ShieldCheck, Calculator, FileText, ChevronRight 
} from 'lucide-react';

const CATEGORIES = [
  'Tümü',
  'Mevzuat & Teşvikler',
  'Teknik Hesaplama',
  'Müteahhit Seçimi',
  'Hukuki Rehber'
];

const BLOG_POSTS = [
  {
    slug: '2026-kentsel-donusum-kira-yardimi',
    category: 'Mevzuat & Teşvikler',
    title: 'Ankara Kentsel Dönüşüm Kira Yardımı Rehberi: Adım Adım Başvuru ve Tutarlar',
    description: "Ankara'da ev sahipleri için aylık 6.500 TL (18 ay), kiracılar için 13.000 TL tek seferlik kentsel dönüşüm kira yardımı başvuru şartları, gerekli belgeler ve e-Devlet rehberi.",
    date: '30 Ağustos 2026',
    readTime: '6 dk okuma',
    isFeatured: true,
    highlightBadge: 'ÖNE ÇIKAN REHBER',
    metric: '6.500 TL / Ay Destek',
    badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    icon: ShieldCheck,
  },
  {
    slug: 'emsal-hesaplama-rehberi',
    category: 'Teknik Hesaplama',
    title: 'Kentsel Dönüşümde Emsal (KAKS) ve Arsa Payı Hesaplama Rehberi',
    description: 'Arsa payı, imar durumu ve KAKS oranlarına göre yeni binanızda hakkınız olan net ve brüt inşaat alanını adım adım hesaplama rehberi.',
    date: '25 Ağustos 2026',
    readTime: '4 dk okuma',
    isFeatured: false,
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    icon: Calculator,
  },
  {
    slug: 'muteahhit-secerken-dikkat-edilmesi-gerekenler',
    category: 'Müteahhit Seçimi',
    title: 'Müteahhit Seçerken Dikkat Edilmesi Gereken 10 Hayati Kriter',
    description: 'Sözleşme cezai şartları, banka teminat mektubu, teknik şartname detayları ve müteahhit mali yeterlilik analizinde mağdur olmamak için bilmeniz gerekenler.',
    date: '18 Ağustos 2026',
    readTime: '5 dk okuma',
    isFeatured: false,
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    icon: TrendingUp,
  },
  {
    slug: '6306-sayili-kanun-haklariniz',
    category: 'Hukuki Rehber',
    title: '6306 Sayılı Kanun Kapsamında Kat Maliklerinin Yasal Hakları',
    description: '50% + 1 çoğunluk kuralı, karara katılmayan maliklerin arsa payı satışı, kamulaştırma riski ve tescil süreçlerinde mülk sahiplerinin korunma yolları.',
    date: '10 Ağustos 2026',
    readTime: '7 dk okuma',
    isFeatured: false,
    badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    icon: FileText,
  },
];

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.isFeatured);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* 1. HERO BAŞLIK VE ARAMA ALANI */}
      <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-amber-500/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> KD ANKARA STRATEJİ & BİLGİ BANKASI
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Kentsel Dönüşüm Rehberleri & Güncel Mevzuat
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Ankara iline özel devlet destekleri, kira yardımları, emsal oranları ve hukuki süreçlere dair uzman kadromuzun hazırladığı rehberler.
          </p>

          {/* Arama Çubuğu */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Rehberlerde veya konularda ara (ör: kira yardımı, emsal, sözleşme)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all text-sm backdrop-blur-md"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 -mt-6 relative z-20">
        {/* 2. KATEGORİ FİLTRELEME TABLARI */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap gap-1.5 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. ÖNE ÇIKAN REHBER (FEATURED CARD) */}
        {selectedCategory === 'Tümü' && !searchQuery && featuredPost && (
          <div className="mb-12">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" /> Haftanın En Çok Okunan Rehberi
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 md:p-10 text-white shadow-xl hover:shadow-2xl transition-all border border-slate-700/50 block relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all"></div>
              
              <div className="relative z-10 grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-amber-500 text-slate-950 font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                      {featuredPost.highlightBadge}
                    </span>
                    <span className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full border border-white/10">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-amber-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
                    {featuredPost.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="md:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-5 text-center flex flex-col justify-center items-center backdrop-blur-sm group-hover:border-amber-500/40 transition-all">
                  <span className="text-xs font-semibold text-amber-400 mb-1">2025-2026 Destek Miktarı</span>
                  <div className="text-xl font-extrabold text-white mb-3">{featuredPost.metric}</div>
                  <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold group-hover:bg-amber-400 transition-colors w-full justify-center">
                    Rehberi Oku <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 4. TÜM REHBERLER GRID LİSTESİ */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-between">
            <span>Tüm Rehberler & Makaleler</span>
            <span className="text-xs text-slate-500 font-normal">Toplam {filteredPosts.length} rehber listeleniyor</span>
          </h3>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-slate-700">Aramanıza Uygun Rehber Bulunamadı</h4>
              <p className="text-slate-500 text-sm mt-1">Lütfen arama terimini değiştirin veya kategorileri sıfırlayın.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => {
                const IconComponent = post.icon;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${post.badgeColor}`}>
                          <IconComponent className="w-3.5 h-3.5" /> {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2 leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                      <span className="text-slate-400">{post.date}</span>
                      <span className="font-bold text-amber-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Devamını Oku <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* 5. ÜCRETSİZ ÖN ANALİZ CTA BANNER */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-slate-950">Binanız İçin En Doğru Kararı Birlikte Verelim</h3>
            <p className="text-slate-900/80 text-sm max-w-xl font-medium">
              Kira yardımı, devlet faiz desteği ve müteahhit tekliflerini karşılaştırmalı olarak analiz etmek için hemen ücretsiz başvuruda bulunun.
            </p>
          </div>
          <Link
            href="/on-analiz"
            className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm shrink-0 whitespace-nowrap"
          >
            Ücretsiz Ön Analiz Başlat
          </Link>
        </div>
      </div>
    </main>
  );
}