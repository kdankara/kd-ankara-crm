"use client";

import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import Link from 'next/link';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { blogPosts } from './posts';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function Blog() {
    useSEO(
        'Blog & Bilgi Bankası | Ankara Kentsel Dönüşüm',
        'Kentsel dönüşüm hakkında güncel haberler, mevzuat rehberleri ve emsal hesaplama detayları için KD Ankara Bilgi Bankası.'
    );

    return (
        <div className="bg-gray-50/50 min-h-screen pb-24">
            <section className="bg-primary-950 text-white py-20 border-b border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Kentsel Dönüşüm Bilgi Bankası</h1>
                        <p className="text-xl text-gray-300">
                            Ankara kentsel dönüşüm süreçleri, güncel kira yardımları ve mevzuat hakkında bilmeniz gereken her şey.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-4 mt-16">
                <h2 className="sr-only">Güncel Kentsel Dönüşüm Yazıları</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <motion.div 
                            key={post.id}
                            {...fadeInUp} transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10" />
                                <img src={post.imageUrl} alt={post.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white/90 backdrop-blur text-primary-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 font-medium">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-accent" /> {post.author}</span>
                                </div>
                                
                                <h2 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h2>
                                
                                <p className="text-slate-500 mb-8 line-clamp-3 flex-grow leading-relaxed">
                                    {post.excerpt}
                                </p>
                                
                                <Link href={`/blog/${post.id}`} className="inline-flex items-center font-bold text-primary-950 hover:text-accent transition-colors mt-auto group/link">
                                    Devamını Oku <ChevronRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 mt-24">
                <div className="bg-primary-950 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,138,4,0.1),transparent)]"></div>
                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="text-3xl font-bold mb-6 text-accent italic">Bültenimize Abone Olun</h2>
                        <p className="text-primary-200 mb-10 text-lg">Ankara kentsel dönüşüm mevzuatındaki en son değişikliklerden ve güncel kira yardımı rakamlarından anında haberdar olun.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input type="email" placeholder="E-posta adresiniz" className="flex-grow h-14 rounded-2xl px-6 bg-white/10 border border-white/20 text-white placeholder:text-primary-300 outline-none focus:border-accent transition-colors" />
                            <button className="h-14 px-8 bg-accent hover:bg-accent-600 text-white font-bold rounded-2xl transition-all whitespace-nowrap shadow-lg shadow-accent/20">Kaydol</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}