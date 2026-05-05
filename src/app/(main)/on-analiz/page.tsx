"use client";

import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import {
    ShieldCheck,
    BarChart3,
    Search
} from 'lucide-react';

export default function OnAnalizPage() {
    useSEO(
        'Ücretsiz Ön Analiz ve Danışmanlık | Ankara Kentsel Dönüşüm',
        'Binanızın kentsel dönüşüm potansiyelini ücretsiz öğrenin. İmar durumu, emsal artışı ve müteahhit paylaşım oranları hakkında profesyonel rapor alın.',
        {
            '@type': 'Service',
            name: 'Ücretsiz Kentsel Dönüşüm Ön Analizi',
            description: 'Ankara genelinde binalar için imar durumu, emsal artışı ve paylaşım oranları analizi.',
            provider: { '@id': 'https://kdankara.com/#organization' },
            areaServed: { '@type': 'City', name: 'Ankara' },
        }
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero & Form Section */}
            <section className="bg-primary-950 text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-2">
                                Risk Almayın, Veriyle Hareket Edin
                            </span>
                            <h1 className="text-xl md:text-2xl font-bold text-white/90 mb-4 tracking-tight">
                                Ankara Kentsel Dönüşüm Ücretsiz Ön Analiz ve Risk Tespiti Formu
                            </h1>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Binanızın Geleceğini <br />
                                <span className="text-accent text-3xl md:text-5xl lg:text-6xl italic font-medium">Birlikte Planlayalım</span>
                            </h2>
                            <p className="text-lg md:text-xl text-primary-200 leading-relaxed max-w-xl">
                                Ankara genelinde yüzlerce binaya rehberlik ettik. Binanızın yıkıldığında yerine ne yapılabileceğini, yasal haklarınızı ve güncel paylaşım oranlarını uzmanından öğrenin.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: Search, t: 'İmar Durumu Etüdü', d: 'Belediye verileriyle emsal analizi.' },
                                    { icon: BarChart3, t: 'Maddi Değerleme', d: 'Dönüşüm sonrası m² birim fiyat tahmini.' },
                                    { icon: ShieldCheck, t: 'Hukuki Güvence', d: 'Riskli yapı süreci hakkında tam bilgilendirme.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-white">{item.t}</h2>
                                            <p className="text-xs text-primary-200">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative">
                            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50 -z-10" />
                            <OnAnalizWizard />
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Rest of content omitted for brevity – same as original page */}
        </div>
    );
}
