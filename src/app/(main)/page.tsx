"use client";

import { useSEO } from '@/hooks/useSEO';
import { trackWhatsAppClick } from '@/lib/gtag';

import { motion } from 'framer-motion';
import {
    Building2, ArrowRight, CheckCircle, BarChart3, Users,
    Shield, FileSearch, ShieldCheck, Scale, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import FAQSection from '@/components/FAQSection';
import CaseStudies from '@/components/CaseStudies';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function Home() {
    useSEO(
        'Ankara Kentsel Dönüşüm Danışmanlığı & Emsal Hesaplama | KD Ankara',
        'Ankara kentsel dönüşüm danışmanlığı, Çankaya riskli yapı tespiti, ücretsiz emsal ve arsa payı hesaplama ile müteahhit uzlaşma süreçlerinde güvenilir adresiniz.',
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Ankara'da kentsel dönüşüm süreci ne kadar sürer?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ankara'da kentsel dönüşüm süreci projenin büyüklüğüne ve maliklerin uzlaşma hızına bağlı olarak değişir. Ön analiz, riskli yapı tespiti ve müteahhit ile sözleşme aşamaları ortalama 3-6 ay sürer. İnşaat ruhsatının alınması ve inşaat süreci ise genellikle 12-18 ay arasında tamamlanır."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Riskli yapı raporu alındıktan sonra tahliye süreci nasıl işler?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "6306 Sayılı Kanun kapsamında binanız için 'Riskli Yapı Raporu' kesinleştikten sonra, mülk sahiplerine ve kiracılara tahliye için en az 60 gün süre verilir. Bu yasal sürelerin sonunda binanın tahliye edilmesi ve yıkım işlemlerinin başlatılması zorunludur."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Müteahhit seçiminde nelere dikkat edilmeli?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Müteahhit seçiminde firmanın finansal yeterliliği, geçmişte tamamladığı referans projeler, teknik şartname detayları, teminat mektubu ve şerefiye adaleti gibi sözleşme maddelerine dikkat edilmelidir. KD Ankara olarak, 'Müteahhit Fizibilite Raporumuz' ile sizi bu risklerden koruyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "2026 yılı güncel kentsel dönüşüm kira yardımı ve kredi destekleri nelerdir?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "2026 yılı itibarıyla Ankara için Bakanlık tarafından belirlenen kentsel dönüşüm kira yardımı, riskli yapısını tahliye eden hak sahiplerine 18 ay boyunca karşılıksız olarak ödenmektedir."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Kentsel dönüşüm zorunlu mu?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hayır, ancak binanız riskli yapı olarak tespit edilirse süreç yasal olarak zorunlu hale gelir."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Riskli yapı tespiti nasıl yapılır?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı lisanslı kuruluşlarına başvurularak karot ve beton örnekleriyle yapılır."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Müteahhit seçerken nelere dikkat edilmeli?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Teminat mektubu, teknik şartname detayları ve şerefiye adaleti gibi sözleşme maddelerine dikkat edilmelidir."
                    }
                }
            ]
        }
    );

    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="relative bg-primary-950 text-white pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/50 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-accent-100 mb-8 border border-white/10">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                Ücretsiz Kentsel Dönüşüm Ön Analizi
                            </div>

                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white max-w-2xl">
                                Binanız için en doğru <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
                                    kentsel dönüşüm
                                </span> <br className="md:hidden" />
                                {" "}kararını verin.
                            </h1>

                            <p className="text-lg text-primary-200 mb-10 max-w-xl leading-relaxed">
                                Ankara kentsel dönüşüm danışmanlığı ve Çankaya riskli yapı tespiti süreçlerinde duygusal değil, veriye dayalı ön analizle hareket edin.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/on-analiz">
                                    <Button size="lg" className="bg-accent hover:bg-accent-600 text-white font-bold h-14 px-8 shadow-xl shadow-accent/20">
                                        Ücretsiz Ön Analiz Al
                                    </Button>
                                </Link>
                                <a href="https://wa.me/905336820942" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick()}>
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-700 bg-primary-900/50 hover:bg-primary-800 text-white h-14 px-8">
                                        WhatsApp'tan Bilgi Al
                                    </Button>
                                </a>
                            </div>

                            <div className="mt-12 flex items-center gap-8 text-sm text-primary-300">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-accent" />
                                    <span>500+ Başarılı Analiz</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-accent" />
                                    <span>Şeffaf Süreç</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Wizard Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-3xl -z-10" />
                            <OnAnalizWizard />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Methodology Strip */}
            <div className="bg-white border-b border-gray-100 py-12 relative z-20 -mt-8 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-6xl rounded-xl shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {[
                        { icon: FileSearch, title: 'İmar & Emsal' },
                        { icon: BarChart3, title: 'Maliyet Analizi' },
                        { icon: Building2, title: 'Gelir Tahmini' },
                        { icon: Users, title: 'Paylaşım Oranı' },
                        { icon: Shield, title: 'Yasal Güvence' },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-3">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-700">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <span className="font-semibold text-gray-700 text-sm">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* How it Works */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-accent font-semibold tracking-wide uppercase text-sm">Süreç Nasıl İşliyor?</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">5 Adımda Güvenli Kentsel Dönüşüm Yol Haritası</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            KD Ankara olarak, Yenimahalle'den Çankaya'ya tüm Ankara'da kentsel dönüşüm sürecini teknik, hukuki ve stratejik açıdan değerlendirerek daha kontrollü ilerlemenize yardımcı oluyoruz.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01', title: 'Mevcut Durum Analizi ve Risk Tespiti',
                                desc: 'Süreç, binanızın mevcut durumu ve risklerinin değerlendirilmesiyle başlar. İmar durumu, yapı yaşı, teknik koşullar ve bölgesel veriler birlikte ele alınarak ilk tablo netleştirilir.'
                            },
                            {
                                step: '02', title: 'Stratejik Planlama ve Uygun Modelin Belirlenmesi',
                                desc: 'Binanızın bulunduğu bölge, mevcut yapı özellikleri ve beklentiler doğrultusunda en uygun dönüşüm yaklaşımı belirlenir.'
                            },
                            {
                                step: '03', title: 'Teknik Şartname ve Müteahhit Seçimi',
                                desc: 'Tekliflerin sağlıklı değerlendirilebilmesi için teknik çerçeve netleştirilir, uygun müteahhit yapısı ve seçim kriterleri belirlenir.'
                            },
                            {
                                step: '04', title: 'Hukuki Sözleşme ve Süreç Güvencesi',
                                desc: 'Hak kaybı yaşamamak için sözleşme yapısı, yükümlülükler ve kritik maddeler dikkatle değerlendirilir.'
                            },
                            {
                                step: '05', title: 'Yapım Denetimi ve Anahtar Teslim Takibi',
                                desc: 'Uygulama aşamasında işin planlanan kalite, zaman ve teknik şartlara uygun ilerlemesi takip edilir.'
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-shadow"
                            >
                                <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4 group-hover:text-accent/10 transition-colors">
                                    {item.step}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Highlight */}
            <section className="py-24 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Neden KD Ankara Danışmanlık?</h2>
                        <p className="text-xl text-gray-600 font-medium">Sürecinizi Şansa Değil, Uzmanına Bırakın</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Card 1 */}
                        <motion.div 
                            {...fadeInUp}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-700 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Tamamen Şeffaf ve Tarafsız Yönetim</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Biz müteahhit değil, <strong>sizin tarafınızdaki</strong> danışmanlarız. Görüşmelerde sadece mülk sahiplerinin haklarını korur, gizli maliyetler veya son dakika sürprizleri yaşamamanız için her aşamada şeffaf raporlama sunarız.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div 
                            {...fadeInUp}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                <Scale className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Uçtan Uca Teknik ve Hukuki Kalkan</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Süreciniz sadece inşaattan ibaret değildir. Zemin etüdünden karot alımına, <strong>hak kaybını önleyen</strong> noter onaylı sözleşmelerin hazırlanmasından ruhsat takibine kadar tüm stresli adımları uzman mühendis ve hukukçularımızla biz yönetiyoruz.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div 
                            {...fadeInUp}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-700 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ankara İmar Mevzuatına Tam Hakimiyet</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Çankaya, Yenimahalle, Keçiören gibi ilçelerin kendilerine has imar yönetmeliklerini ve emsal artışı fırsatlarını çok iyi biliyoruz. Belediyelerdeki bürokratik süreçlerde <strong>zaman kaybetmeden</strong>, binanız için en kârlı projeyi hızla onaylatıyoruz.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <motion.div {...fadeInUp} className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Size Hangi Aşamada Destek Oluyoruz?</h2>
                            <p className="text-gray-600 text-lg">
                                Kentsel dönüşüm sürecinin her aşamasında, ihtiyacınıza uygun doğru adımı birlikte netleştiriyoruz.
                            </p>
                        </motion.div>
                        <Link href="/hizmetler">
                            <Button variant="outline" className="gap-2 shrink-0 border-gray-300">
                                Tüm Hizmetleri İncele <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <FileSearch className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Ön Analiz</h3>
                            <p className="text-gray-600 text-sm leading-relaxed grow">
                                Binanızın mevcut imar durumu, arsa payı dağılımı ve yapısal risklerinin veriye dayalı ilk değerlendirmesini sunuyoruz. Ankara'nın güncel imar yönetmelikleri ışığında mülkünüzün potansiyelini keşfedin.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all group flex flex-col h-full flex-col">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Teklif Değerlendirme</h3>
                            <p className="text-gray-600 text-sm leading-relaxed grow">
                                Müteahhitlerden gelen teklifleri sadece m² bazında değil; malzeme kalitesi, teminatlar, teknik şartname ve finansal sürdürülebilirlik açısından tarafsız bir gözle analiz ediyoruz.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all group flex flex-col h-full flex-col">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Malik Uzlaşma Yönetimi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed grow">
                                Malikler arasındaki güven sorunlarını ve iletişim kopukluklarını profesyonel bir ara bulucu kimliğiyle yönetiyor, 50% + 1 karar sürecini hızlandırıyoruz.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all group flex flex-col h-full flex-col">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hukuki & Teknik Kalkan</h3>
                            <p className="text-gray-600 text-sm leading-relaxed grow">
                                Kentsel dönüşüm sözleşmelerinden tahliye süreçlerine, devlet desteği başvurularından ruhsat takibine kadar tüm yasal süreçte mülk sahiplerine hukuki ve teknik koruma sağlıyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-depth Ankara Context Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="prose prose-lg prose-slate max-w-none">
                            <h2 className="text-3xl font-bold text-primary-900 mb-8 italic">Ankara'da Kentsel Dönüşümün Yeni Vizyonu: KD Ankara</h2>
                            <p>
                                Ankara kentsel dönüşüm süreci, özellikle son yıllarda değişen imar yönetmelikleri ve artan yapı güvenliği ihtiyacıyla birlikte daha teknik bir boyuta taşınmıştır. Çankaya'nın köklü mahallelerinden Yenimahalle'nin gelişen bölgelerine kadar her ilçe, kendine has bir <strong>kentsel strateji</strong> gerektirir. KD Ankara olarak, başkentin bu karmaşık yapısal dönüşümünde mülk sahiplerinin sesi oluyoruz.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Mahalle Bazlı Uzmanlık: Çankaya'dan Keçiören'e</h3>
                            <p>
                                Binanızın değeri sadece beton kalitesinden değil, bulunduğu mahallenin gelecekteki imar potansiyelinden gelir. Örneğin, Ayrancı bölgesindeki bir yenileme projesinde estetik ve "butik" yaklaşım ön plandayken, Batıkent gibi bölgelerde ada bazlı birleşmelerle gelen emsal artışları hayati önem taşır. Biz, Ankara'nın 25 ilçesindeki belediye plan notlarına ve geçmiş uygulama verilerine hakimiz.
                            </p>

                            <div className="bg-primary-50 p-10 rounded-[3rem] my-12 border-l-8 border-accent">
                                <h4 className="text-xl font-bold text-primary-950 mb-4">72 Saatte Profesyonel Fizibilite</h4>
                                <p className="text-gray-700 leading-relaxed mb-0">
                                    Sadece bir web sitesi değil, bir mühendislik ve hukuk ofisiyiz. Ücretsiz ön analiz sonrası talep eden bina yönetimlerine; imar analizi, maliyet projeksiyonu, paylaşım simülasyonu ve müteahhit puanlama kriterlerini içeren kapsamlı <strong>"Stratejik Dönüşüm Raporu"</strong> sunuyoruz.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Neden Şeffaflık Bu Kadar Önemli?</h3>
                            <p>
                                Kentsel dönüşümde en büyük risk, belirsizliktir. Müteahhitlerin "sözlü" vaatleri yerine, noter onaylı teknik şartnameler ve banka teminat mektuplarıyla ilerlemek zorunluluktur. KD Ankara olarak maliklere; inşaatın her aşamasında (temelden iskan alımına kadar) bağımsız denetim desteği vererek "binam yarım kalır mı?" endişesini ortadan kaldırıyoruz.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Deprem Güvenliği ve Estetik Bir Arada</h3>
                            <p>
                                Dönüşüm sadece binanın sağlamlaşması değil, aynı zamanda mülkünüzün Ankara piyasasındaki değerinin artmasıdır. Modern enerji verimliliği standartlarına (ısı yalıtımı, gri su sistemleri vb.) uygun ve modern cephe tasarımlarıyla binanızı Ankara'nın yeni siluetinde prestijli bir noktaya taşıyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Checklist */}
            <section className="py-24 bg-primary-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Kararı Şansa Bırakmıyoruz,<br /><span className="text-accent">Bunları Kontrol Ediyoruz</span></h2>
                            <p className="text-primary-200 mb-8 leading-relaxed">
                                Kentsel dönüşüm sürecinde yalnızca teklif değil; haklarınızı, potansiyelinizi ve olası riskleri birlikte değerlendiriyoruz.
                            </p>
                            <Link href="/on-analiz">
                                <Button className="bg-white text-primary-900 hover:bg-gray-100 font-bold">
                                    Hemen Analiz Başlat
                                </Button>
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                {
                                    title: 'Arsa Payı ve Mevcut Durum',
                                    desc: 'Binanın mevcut yapısı, arsa payı dağılımı ve mevcut durumun karar sürecine etkisi değerlendirilir.'
                                },
                                {
                                    title: 'Bölgesel Potansiyel',
                                    desc: 'Bulunduğunuz bölgenin imar yapısı, emsal durumu ve dönüşüm potansiyeli birlikte ele alınır.'
                                },
                                {
                                    title: 'Teklif Yapısı Analizi',
                                    desc: 'Müteahhit tekliflerinde görünen ve görünmeyen farklar, gerçek avantaj ve riskler açısından değerlendirilir.'
                                },
                                {
                                    title: 'Süreç Riskleri',
                                    desc: 'Zaman, uygulama, sözleşme ve iletişim kaynaklı risk başlıkları önceden görünür hale getirilir.'
                                },
                                {
                                    title: 'Hak Kaybı İhtimali',
                                    desc: 'Yanlış karar, eksik sözleşme veya yetersiz değerlendirme nedeniyle oluşabilecek hak kaybı ihtimalleri kontrol edilir.'
                                }
                            ].map((item, i) => (
                                <div key={i} className={`flex items-start gap-4 bg-primary-800/50 p-5 rounded-lg border border-primary-700 hover:bg-primary-800 transition-all group ${i === 4 ? 'sm:col-span-2' : ''}`}>
                                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
                                        <p className="text-sm text-primary-200 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <CaseStudies />

            {/* FAQ Section */}
            <FAQSection />

            {/* CTA Band */}
            <section className="py-20 bg-accent text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Aklınızda Soru İşareti Kalmasın</h2>
                    <p className="text-accent-100 mb-8 max-w-2xl mx-auto text-lg">
                        Binanızın mevcut durumu, dönüşüm potansiyeli veya teklif süreciyle ilgili ön değerlendirme almak için bizimle iletişime geçin.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/on-analiz">
                            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-bold h-14 px-8 w-full sm:w-auto">
                                Ücretsiz Ön Analiz Al
                            </Button>
                        </Link>
                        <a href="https://wa.me/905336820942" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick()}>
                            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent transition-colors h-14 px-8 w-full sm:w-auto font-bold">
                                WhatsApp’tan Bilgi Al
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}