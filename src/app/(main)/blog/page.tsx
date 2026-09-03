"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Sparkles, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogData'; // MERKEZİ VERİYİ ÇEKİYORUZ

const CATEGORIES = ['Tümü', 'Mevzuat & Teşvikler', 'Teknik Hesaplama', 'Müteahhit Seçimi', 'Hukuki Rehber'];

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
      {/* 1. HERO BAŞLIK */}
      <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> KD ANKARA STRATEJİ & BİLGİ BANKASI
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Kentsel Dönüşüm Rehberleri & Güncel Mevzuat
          </h1>
          
          <div className="max-w-xl mx-auto relative mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Rehberlerde veya konularda ara (ör: riskli yapı, kira yardımı)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all text-sm"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 -mt-6 relative z-20">
        {/* 2. KATEGORİ FİLTRELEME */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap gap-1.5 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                selectedCategory === cat ? 'bg-amber-500 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. ÖNE ÇIKAN REHBER (FEATURED) */}
        {selectedCategory === 'Tümü' && !searchQuery && featuredPost && (
          <div className="mb-12">
            <Link href={`/blog/${featuredPost.slug}`} className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 md:p-10 text-white shadow-xl hover:shadow-2xl transition-all border border-slate-700/50 block relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="bg-amber-500 text-slate-950 font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                  {featuredPost.highlightBadge || 'ÖNE ÇIKAN'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold group-hover:text-amber-400 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                  {featuredPost.description}
                </p>
                <div className="text-amber-400 font-bold text-sm pt-4 flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                  Hemen Oku <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 4. LİSTELEME */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => {
            const IconComponent = post.icon;
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${post.badgeColor}`}>
                      <IconComponent className="w-3.5 h-3.5" /> {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4">{post.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}