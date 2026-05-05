"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export default function Land() {
    useSEO(
        'Arsa & Kat Karşılığı Projeler | Ankara',
        'Ankara arsa ve kat karşılığı projeleri. Boş arsanız veya birleştirilmiş parselleriniz için en verimli proje modelini geliştiriyoruz.'
    );
    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Hero Section */}
            <section className="bg-primary-950 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516156008625-3a9d60da9205?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-15 grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-transparent"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Arsa Geliştirme ve Proje Yönetimi</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        Arsanızın <span className="text-accent">Maksimum Potansiyelini</span> <br />
                        Birlikte Keşfedelim
                    </h1>
                    <p className="text-lg md:text-xl text-primary-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Ankara genelindeki boş arsalarınız veya birleştirilmiş parselleriniz için teknik fizibilite çalışmaları yapıyor, en verimli proje modelini geliştiriyoruz.
                    </p>
                    <Link href="/on-analiz">
                        <Button size="lg" className="bg-accent hover:bg-accent-600 h-16 px-10 text-lg font-bold shadow-2xl shadow-accent/30 rounded-2xl">
                            Arsa Değerleme Analizi Başlat
                        </Button>
                    </Link>
                </div>
            </section>

            {/* In-depth SEO Content Section */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none text-gray-700">
                        <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Ankara'da Arsa Geliştirme: Teknik Yaklaşım ve İmar Mevzuatı</h2>
                        <div className="space-y-6 leading-relaxed">
                            <p>
                                Bir arsanın değeri sadece m² büyüklüğüyle değil, o arsa üzerine yapılabilecek <strong>toplam inşaat alanı (emsal)</strong> ve kullanım fonksiyonuyla belirlenir. Ankara Büyükşehir Belediyesi ve ilçe belediyelerinin (Çankaya, Yenimahalle, Gölbaşı vb.) güncel imar planı notları, arsanızın kaderini tayin eder. <strong>KD Ankara Strateji Merkezi</strong> olarak biz, arsanızı klasik bir emlak değerlendirmesinin ötesinde, bir "proje geliştirme" vizyonuyla ele alıyoruz.
                            </p>
                            <p>
                                Özellikle <strong>İncek, Beytepe, Bağlıca ve Çayyolu</strong> gibi gelişim akslarında yer alan arsalar için; KAKS (emsal), TAKS (taban alanı), çekme mesafeleri ve kot farklarından doğan kazanımları hesaplıyoruz. Arsanızın ticari, konut veya karma kullanım opsiyonlarını "En İyi ve En Verimli Kullanım Analizi" (Highest and Best Use Analysis) metodolojisiyle raporluyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Props Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold text-primary-900 mb-8 leading-tight">
                                Teknik Geliştirici Vizyonuyla <br />
                                <span className="text-accent">Arsanıza Değer Katıyoruz</span>
                            </h2>
                            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                                Müteahhitlerle pazarlık masasına oturmadan önce, elinizde profesyonel bir teknik şartname ve avan proje olması şarttır. Biz, mülk sahiplerinin çıkarlarını korumak için şu süreçleri yönetiyoruz:
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { t: 'Maksimum Emsal Kullanımı', d: 'İmar planı notlarındaki tüm yasal boşlukları ve avantajları kullanarak inşaat alanınızı maksimize ediyoruz.' },
                                    { t: 'Tevhit (Birleştirme) Stratejileri', d: 'Küçük parsellerin birleşerek daha yüksek imar hakları elde etmesi için komşu parsellerle uzlaşma yönetimi sağlıyoruz.' },
                                    { t: 'Kat Karşılığı Oran Analizi', d: 'Bölgedeki güncel inşaat maliyetlerini ve satış fiyatlarını baz alarak %50 - %60 gibi adil paylaşım oranlarını belirliyoruz.' },
                                    { t: 'Hukuki Altyapı', d: 'Hasılat paylaşımı veya kat karşılığı sözleşmelerinizi, haklarınızı %100 koruyacak şekilde hazırlıyoruz.' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary-900 mb-1">{item.t}</h3>
                                            <p className="text-sm text-gray-500">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="relative group">
                            <div className="bg-primary-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden h-full min-h-[400px] flex flex-col justify-end">
                                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <MapPin className="w-64 h-64" />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-5xl font-bold text-accent mb-4">%45 - %65</div>
                                    <h3 className="text-xl font-bold mb-4">Paylaşım Oranları Analizi</h3>
                                    <p className="text-primary-100/80 leading-relaxed">
                                        Ankara'nın her bölgesinde arsa payı değerleri farklılık gösterir. Çankaya'da %60'lara çıkan oranlar, çevre ilçelerde farklılaşabilir. Biz, güncel piyasa verileriyle en doğru oranı sizin için tespit ediyoruz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Process Section */}
            <section className="py-24 bg-primary-950 text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Arsa Geliştirme Yol Haritamız</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                            <div className="text-accent text-4xl font-bold mb-6">01</div>
                            <h3 className="text-xl font-bold mb-4 text-white">İmar Etüdü</h3>
                            <p className="text-primary-200 text-sm leading-relaxed">Belediye imar durumu belgesi üzerinden çekme mesafeleri, emsal alanı ve fonksiyon analizi yapılır.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                            <div className="text-accent text-4xl font-bold mb-6">02</div>
                            <h3 className="text-xl font-bold mb-4 text-white">Kütle Etüdü</h3>
                            <p className="text-primary-200 text-sm leading-relaxed">Mimarlarımız tarafından arsa üzerine oturacak kütle ve taslak kat planları (mix analizi) hazırlanır.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                            <div className="text-accent text-4xl font-bold mb-6">03</div>
                            <h3 className="text-xl font-bold mb-4 text-white">İhale Dosyası</h3>
                            <p className="text-primary-200 text-sm leading-relaxed">Müteahhitlerden teklif toplamak için standart teknik şartname ve paylaşım modeli oluşturulur.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-950 mb-10">Arsanızın Değerini <br className="md:hidden" /> Şansa Bırakmayın</h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Müteahhitlerle görüşmeden önce mutlaka teknik ekibimizden <strong>"Arsa Verim Raporu"</strong> talep edin. <br className="hidden md:block" /> Kaybedilen her m², gelecekteki bir daireniz demektir.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/on-analiz">
                                <Button className="bg-accent hover:bg-accent-600 text-white text-xl font-bold h-16 px-12 rounded-2xl shadow-2xl shadow-accent/30">
                                    Ücretsiz Expertiz Raporu Al
                                </Button>
                            </Link>
                            <Link href="/iletisim">
                                <Button variant="outline" className="text-xl font-bold h-16 px-12 rounded-2xl border-primary-200 text-primary-900 hover:bg-primary-50">
                                    Bizi Arayın
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
