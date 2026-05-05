"use client";

import { motion } from 'framer-motion';
import { AlertTriangle, Wrench, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { trackWhatsAppClick } from '@/lib/gtag';


const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function CaseStudies() {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm">Vaka Çalışmaları</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">Örnek Süreç Analizleri</h2>
                    <p className="text-xl text-gray-600 font-medium">Sahadan gerçek sonuçlar ve başardığımız dönüşümler.</p>
                </motion.div>

                <div className="space-y-12 mb-20">
                    {/* Case 1 */}
                    <motion.div 
                        {...fadeInUp}
                        className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row"
                    >
                        <div className="md:w-1/3 bg-primary-950 p-8 text-white flex flex-col justify-center">
                            <div className="text-accent font-bold tracking-wider text-sm mb-2 uppercase">Senaryo 1</div>
                            <h3 className="text-2xl font-bold mb-6">Çankaya'da Çözümsüzlükten %100 Mutabakata</h3>
                            
                            <div className="space-y-4 mt-auto">
                                <div className="border-l-2 border-primary-700 pl-4">
                                    <div className="text-sm text-primary-300">Bölge</div>
                                    <div className="font-semibold">Çankaya / 12 Daireli Eski Yapı</div>
                                </div>
                                <div className="border-l-2 border-accent pl-4">
                                    <div className="text-sm text-primary-300">Süre</div>
                                    <div className="text-4xl font-bold text-accent">45 Gün</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-8 md:p-10 space-y-8">
                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Sorun</h4>
                                    <p className="text-gray-600 leading-relaxed">Bina sakinleri 2 yıldır müteahhitlerle görüşüyor ancak güvensizlik ve hak kaybı korkusu nedeniyle yasal sınır olan 2/3 çoğunluk bile sağlanamıyordu. Özellikle şerefiye (kat/cephe) değerlemesindeki adaletsizlikler süreci tamamen tıkamıştı.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Wrench className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Çözüm (KD Ankara Dokunuşu)</h4>
                                    <p className="text-gray-600 leading-relaxed">Bağımsız ve SPK lisanslı değerleme uzmanlarımızla mevcut binanın matematiksel değer haritasını çıkardık. Her malik için adil bir paylaşım modeli (şerefiye tablosu) hazırladık. Teknik kadromuz, noter onaylı sözleşmeye 'gecikme cezası ve teminat mektubu' şartlarını ekleyerek hukuki bir kalkan oluşturdu.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Sonuç</h4>
                                    <p className="text-gray-600 leading-relaxed">Sadece <strong>45 gün</strong> içinde, maliklerin aklındaki tüm riskler hukuki olarak sıfırlandı ve <strong>%100 (tüm maliklerin) imzasıyla</strong> uzlaşı sağlandı. Süreç davalara takılmadan hızla başladı.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Case 2 */}
                    <motion.div 
                        {...fadeInUp}
                        className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row-reverse"
                    >
                        <div className="md:w-1/3 bg-primary-950 p-8 text-white flex flex-col justify-center">
                            <div className="text-accent font-bold tracking-wider text-sm mb-2 uppercase">Senaryo 2</div>
                            <h3 className="text-2xl font-bold mb-6">Yenimahalle'de Gizli Emsal Fırsatı ile %15 Değer Artışı</h3>
                            
                            <div className="space-y-4 mt-auto">
                                <div className="border-l-2 border-primary-700 pl-4">
                                    <div className="text-sm text-primary-300">Bölge</div>
                                    <div className="font-semibold">Yenimahalle / Riskli Yapı</div>
                                </div>
                                <div className="border-l-2 border-green-500 pl-4">
                                    <div className="text-sm text-primary-300">Kazanım</div>
                                    <div className="text-4xl font-bold text-green-400">%15 Ekstra Alan</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-8 md:p-10 space-y-8">
                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Sorun</h4>
                                    <p className="text-gray-600 leading-relaxed">Binaya 'Riskli Yapı' raporu alınmış ve tahliye süresi daralmıştı. Gelen müteahhit teklifleri, mevcut daireleri küçültüyor ve mülk sahiplerine avantajsız paylaşım oranları (Örn: %45 Malik - %55 Müteahhit) sunuyordu.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Wrench className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Çözüm (KD Ankara Dokunuşu)</h4>
                                    <p className="text-gray-600 leading-relaxed">Mimari ekibimiz Yenimahalle belediyesi imar planlarını ve kot farklarını inceleyerek binanın 'gizli emsal' haklarını (çatı piyesi ve kullanılmayan bodrum kat avantajlarını) ortaya çıkardı. Kendi çizdiğimiz taslak proje üzerinden, portföyümüzdeki 5 güvenilir firmadan 'kapalı zarf' usulü teklif topladık.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Sonuç</h4>
                                    <p className="text-gray-600 leading-relaxed">Paylaşım oranı malikler lehine %50 - %50 seviyesine çekildi. Doğru mimari çözümleme sayesinde mülk sahipleri dairelerini küçültmek bir yana, brüt kullanım alanında <strong>%15 net artış</strong> elde etti.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Area */}
                <motion.div 
                    {...fadeInUp}
                    className="bg-white rounded-3xl p-8 md:p-12 text-center border-2 border-accent shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />
                    
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Sizin binanızın potansiyeli nedir?</h3>
                        <p className="text-xl text-gray-600 mb-8">Uzmanlarımızla ücretsiz değerlendirelim, en doğru kararı birlikte verelim.</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="https://wa.me/905336820942" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick()}>
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-14 px-8 w-full sm:w-auto shadow-lg shadow-green-500/30 gap-2">
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp'tan Bize Ulaşın
                                </Button>
                            </a>
                            <Link href="/iletisim">
                                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 h-14 px-8 w-full sm:w-auto font-bold">
                                    İletişim Formunu Doldur
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
