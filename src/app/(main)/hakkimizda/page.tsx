"use client";

import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { Target, Eye, Shield, Users, Building, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function About() {
    useSEO(
        'Hakkımızda | Ankara Kentsel Dönüşüm Danışmanlığı',
        'KD Ankara, Ankara kentsel dönüşüm danışmanlığı ve Çankaya riskli yapı tespiti süreçlerinde veriye dayalı, şeffaf çözüm ortağınızdır.'
    );

    return (
        <div className="bg-gray-50/50 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/80 to-transparent" />
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Ankara'nın Dönüşüm Rehberi</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                            Geleceğin Ankara'sını <br />
                            <span className="text-accent">Veri ve Güvenle</span> İnşa Ediyoruz
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            KD Ankara Strateji Merkezi, klasik bir danışmanlık firmasının ötesinde; mülk sahipleri, yatırımcılar ve yükleniciler için bilimsel veriyi şeffaflıkla birleştiren bir kentsel dönüşüm yönetim ofisidir.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story & Identity */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl font-bold text-primary-900 mb-6">Biz Kimiz? Tecrübemiz ve Ankara Vizyonumuz</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    <strong>KD Ankara</strong>, Ankara'nın mimari kimliğini koruyarak, deprem güvenliği yüksek ve modern yaşam alanları oluşturma vizyonuyla yola çıkmış bir strateji merkezidir. Yıllar içinde edindiğimiz derin tecrübe ile özellikle <strong>Çankaya, Yenimahalle ve Keçiören</strong> gibi Ankara'nın köklü ilçelerindeki imar mevzuatlarına ve bölgesel dönüşüm dinamiklerine en ince ayrıntısına kadar hakimiz.
                                </p>
                                <p>
                                    Kentsel dönüşüm süreci, sadece eski bir binanın yıkılıp yenisinin yapılması değil; binlerce ailenin geleceğinin, birikiminin ve güvenliğinin yeniden kurgulanmasıdır. Bu sorumluluğun bilincinde olarak, "mülk sahibi odaklı" bir yaklaşım benimsiyoruz. Teknik kadromuzda yer alan <strong>lisanslı değerleme uzmanları, mimarlar ve kentsel dönüşüm hukukçuları</strong> ile her projeyi adeta bir laboratuvar titizliğiyle inceliyoruz.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
                            <div className="aspect-square bg-primary-50 rounded-3xl overflow-hidden relative group shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                                    alt="KD Ankara Ofis Çalışması" 
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply" />
                                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
                                    <div className="text-4xl font-bold text-accent mb-1">500+</div>
                                    <div className="text-sm font-semibold text-primary-900">Başarılı Bina Analizi ve Stratejik Raporlama</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Methodology Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-primary-900 mb-6">Neden Farklıyız? Veri Odaklı Strateji</h2>
                        <p className="text-gray-600 text-lg">
                            Duygusal kararlar yerine, Ankara imar yönetmeliği ve matematiksel modellerle hareket ediyoruz.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
                            <div className="text-accent text-5xl font-bold opacity-20 mb-4">01</div>
                            <h3 className="text-xl font-bold text-primary-900 mb-4">Hukuki Güvence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Noter onaylı sözleşmelerden, Bakanlık süreçlerine kadar her adımda maliklerin haklarını 6306 sayılı kanun çerçevesinde koruma altına alıyoruz. Sözleşmelerdeki "küçük puntoları" sizin için biz denetliyoruz.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
                            <div className="text-accent text-5xl font-bold opacity-20 mb-4">02</div>
                            <h3 className="text-xl font-bold text-primary-900 mb-4">Teknik Fizibilite</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Binanızın imar durumunu, emsal artışı potansiyelini ve bölgedeki güncel satış değerlerini analiz ederek, mülkünüzün gerçek değerini ortaya koyuyoruz. Müteahhit tekliflerini bu veriler ışığında kıyaslıyoruz.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
                            <div className="text-accent text-5xl font-bold opacity-20 mb-4">03</div>
                            <h3 className="text-xl font-bold text-primary-900 mb-4">Tarafsız Uzlaşma</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Komşular arasındaki şerefiye farkları ve paylaşım adaleti konusunda matematiksel modeller sunarak, binadaki %100 uzlaşı oranını hedefleyen tarafsız bir yönetim süreci yürütüyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Expanded */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div 
                            {...fadeInUp}
                            className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all"
                        >
                            <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                <Target className="w-48 h-48" />
                            </div>
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold mb-6 text-primary-900">Misyonumuz</h2>
                            <p className="text-gray-600 leading-relaxed relative z-10 text-lg">
                                Ankara'nın deprem gerçeğine hazırlıklı bir şehre dönüşmesi yolunda, mülk sahipleri ile güvenilir yükleniciler arasında adil ve şeffaf bir köprü kurmak. Kentsel dönüşüm sürecinin her adımını (risk tespiti, yıkım, yapım ve anahtar teslim) mülk sahiplerinin en kârlı ve en güvenli şekilde tamamlamasını sağlamak temel görevimizdir.
                            </p>
                        </motion.div>

                        <motion.div 
                            {...fadeInUp} transition={{ delay: 0.2 }}
                            className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all"
                        >
                            <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                <Eye className="w-48 h-48" />
                            </div>
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold mb-6 text-primary-900">Vizyonumuz</h2>
                            <p className="text-gray-600 leading-relaxed relative z-10 text-lg">
                                Türkiye'de "Kentsel Dönüşüm Danışmanlığı" denildiğinde, geliştirdiğimiz analitik yöntemler ve veri odaklı yaklaşımlar ile akla gelen ilk strateji merkezi olmak. Ankara'dan başlayarak, bilimin ve teknolojinin ışığında güvenli kentler inşa edilmesine öncülük eden bir marka haline gelmek.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Values Grid */}
            <section className="py-24 bg-primary-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Bizi Biz Yapan Değerlerimiz</h2>
                        <p className="text-primary-200 text-lg">KD Ankara Strateji Merkezi, ticari başarının ötesinde toplumsal bir sorumluluğu temsil eder.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { 
                                icon: <Shield />, 
                                title: 'Mutlak Şeffaflık', 
                                text: 'Sürecin hiçbir aşamasında "gizli ajanda" barındırmıyoruz. Tüm veriler mülk sahiplerinin erişimine açıktır.' 
                            },
                            { 
                                icon: <Users />, 
                                title: 'Multidisipliner Kadro', 
                                text: 'Mühendislik, mimarlık ve hukuk disiplinlerini tek çatıda birleştirerek bütüncül çözümler üretiyoruz.' 
                            },
                            { 
                                icon: <Building />, 
                                title: 'Yerel Uzmanlık', 
                                text: 'Ankara belediye mevzuatlarını ve imar planlarını bir başkentli olarak en derin detayına kadar biliyoruz.' 
                            },
                            { 
                                icon: <Award />, 
                                title: 'Butik Hizmet', 
                                text: 'Her binayı ve her projeyi kendine has dinamikleriyle ele alıyor, seri üretim değil özgün stratejiler üretiyoruz.' 
                            }
                        ].map((v, i) => (
                            <motion.div 
                                key={i}
                                {...fadeInUp} transition={{ delay: i * 0.1 }}
                                className="bg-primary-900/40 p-8 rounded-3xl border border-primary-800 hover:bg-primary-900/60 transition-all group"
                            >
                                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{v.title}</h3>
                                <p className="text-primary-200 text-sm leading-relaxed">{v.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Expansion for Word Count: Local Districts Detail */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div {...fadeInUp} className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Ankara'da Kentsel Dönüşüm Nereye Gidiyor?</h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                Son yıllarda Ankara'nın özellikle <strong>Bahçelievler, Ayrancı, Emek ve Yenimahalle</strong> gibi eski yerleşim merkezlerinde yapı ömrünü tamamlamış binaların sayısı artmaktadır. 6306 sayılı kanun kapsamında sunulan kira yardımı ve faiz desteği gibi imkanlar, kentsel dönüşümü sadece bir zorunluluk değil, aynı zamanda mülk sahipleri için büyük bir fırsat haline getirmiştir.
                            </p>
                            <p>
                                Ancak bu süreçte doğru danışmanla çalışmamak, "eksik metrekare", "yanlış paylaşım oranları" veya "inşaat kalitesinde düşüklük" gibi telafisi zor sorunlara yol açabilmektedir. <strong>KD Ankara</strong> olarak biz, binanızın risk tespiti aşamasından, belediye onaylı ruhsat projelerine kadar her adımda sizin adınıza "teknik kontrolör" görevi görüyoruz.
                            </p>
                            <p>
                                Bizimle çalışmaya başladığınızda, mülkünüzün sadece bugünkü değerini değil, dönüşüm sonrası Ankara emlak piyasasındaki potansiyel konumunu da raporluyoruz. <strong>Başkent Ankara kentsel dönüşüm danışmanlığı</strong> hizmetimizle, riskli yapılarınızı güvenli limanlara dönüştürmek için ofisimize bir kahveye bekliyoruz.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Sürecinizi Uzmanına Emanet Edin</h2>
                        <p className="text-xl text-primary-100 mb-12">
                            Ankara'daki mülkünüzün kentsel dönüşüm potansiyelini bilimsel verilerle ücretsiz analiz edelim.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/on-analiz">
                                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent-600 text-white h-16 px-10 text-xl font-bold shadow-2xl shadow-accent/30 rounded-2xl">
                                    Hemen Analiz Başlat
                                </Button>
                            </Link>
                            <Link href="/iletisim">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 h-16 px-10 text-xl rounded-2xl">
                                    Bize Soru Sorun
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
