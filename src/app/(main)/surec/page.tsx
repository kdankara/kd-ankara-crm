"use client";

import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { 
    FileSearch, 
    Users, 
    ShieldCheck, 
    FileSignature, 
    ArrowRight,
    FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function Process() {
    useSEO(
        'Ankara Kentsel Dönüşüm Süreci - 4 Adımda Güvenli Dönüşüm',
        'Ankara kentsel dönüşüm süreci nasıl işler? Riskli yapı tespitinden müteahhit seçimine, sözleşmeden anahtar teslime kadar tüm adımları öğrenin.',
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
    const steps = [
        {
            icon: FileSearch,
            title: '1. Binanızın Röntgenini Çekiyoruz (Durum Tespiti)',
            desc: 'Belediyedeki dosyanızı inceliyor, gizli borç veya tapu pürüzü var mı bakıyoruz. Binanız yıkılırsa yerine gerçekte ne kadar büyüklükte bir bina yapılabileceğini tam metrekare olarak hesaplıyoruz.',
            deliverable: 'KD Ankara Şeffaf Analiz Raporu',
        },
        {
            icon: Users,
            title: '2. Komşularla Ortak Karar Alma (Uzlaşma)',
            desc: 'Apartmandaki anlaşmazlıkları bitiriyoruz. Kulaktan dolma bilgilerle değil, hazırladığımız resmi raporla tüm komşuları aynı masada buluşturup kavgasız gürültüsüz ortak bir karara vardırıyoruz.',
            deliverable: 'Resmi Apartman Karar Tutanağı',
        },
        {
            icon: ShieldCheck,
            title: '3. İşi Yarım Bırakmayacak Müteahhidi Bulma (Seçim)',
            desc: 'Her kapıyı çalan müteahhidi masaya oturtmuyoruz. Bankada parası olan, daha önce inşaat yarım bırakmamış, dürüst ve sağlam firmaları sizin için araştırıp önünüze getiriyoruz.',
            deliverable: 'Müteahhit Sağlamlık Testi ve Teklif Tablosu',
        },
        {
            icon: FileSignature,
            title: '4. Hakkınızı Sağlama Alan Sözleşme (İmza ve Takip)',
            desc: 'Müteahhidin verdiği sözlerin havada kalmaması için, kullanılacak çivinin markasına kadar her şeyi avukatlarımız ve mühendislerimizle resmiyete döküyoruz. İnşaat bitene kadar da ensesinde oluyoruz.',
            deliverable: 'Noter Sözleşmesi ve İnşaat Takip Raporu',
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary-950 text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-950/50"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">6306 Sayılı Kanun Rehberi</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            Ankara Kentsel Dönüşüm Süreci <br />
                            <span className="text-accent">A'dan Z'ye Nasıl İşler?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
                            Evinizi yenilemek karmaşık görünebilir. KD Ankara olarak, riskli yapı tespitinden anahtar teslimine kadar tüm teknik ve hukuki süreci sizin adınıza yönetiyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Text for SEO */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none text-gray-700">
                        <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">Kentsel Dönüşüm Bir Bina Değil, Bir Hak Arama Sürecidir</h2>
                        <p>
                            Ankara'nın <strong>Çankaya, Yenimahalle, Bahçelievler</strong> gibi eski yerleşim birimlerinde kentsel dönüşüm, artık bir tercih değil güvenlik zorunluluğudur. 6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun, mülk sahiplerine geniş haklar tanırken, aynı zamanda dikkat edilmesi gereken hukuki süreleri de beraberinde getirir. <strong>KD Ankara Strateji Merkezi</strong> olarak biz, bu süreci "kaos" olmaktan çıkarıp, veriye dayalı bir "yol haritasına" dönüştürüyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto relative">
                        {/* Timeline Connector Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-100 -z-0 hidden md:block"></div>

                        <div className="space-y-24">
                            {steps.map((step, index) => (
                                <motion.div 
                                    key={index}
                                    {...fadeIn}
                                    className={`relative flex flex-col md:flex-row items-start gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Icon / Number Bubble */}
                                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-accent rounded-full flex items-center justify-center z-10 shadow-xl text-accent mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                                        <step.icon className="w-8 h-8 md:w-10 md:h-10" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-2xl hover:shadow-primary-900/5 transition-all w-full relative group">
                                        <div className="absolute top-8 right-8 text-6xl font-bold text-gray-50 -z-0 select-none">0{index + 1}</div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-primary-950 mb-6 relative z-10 group-hover:text-accent transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 relative z-10">
                                            {step.desc}
                                        </p>

                                        {/* Detailed Sub-steps for SEO word count */}
                                        <div className="mb-10 space-y-4">
                                            <h4 className="font-bold text-primary-900 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                                Bu Aşamada Neler Yapıyoruz?
                                            </h4>
                                            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
                                                <li className="flex items-center gap-2">✓ Teknik Veri Toplama</li>
                                                <li className="flex items-center gap-2">✓ Mevzuat Uygunluk Denetimi</li>
                                                <li className="flex items-center gap-2">✓ Şeffaf Raporlama</li>
                                                <li className="flex items-center gap-2">✓ Risk Analiz Sunumu</li>
                                            </ul>
                                        </div>

                                        {/* Deliverable Box */}
                                        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 flex items-start gap-5 group-hover:bg-accent/5 group-hover:border-accent/20 transition-colors">
                                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm shrink-0">
                                                <FileText className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <span className="text-primary-900 font-bold block mb-1">📄 Size Verilecek Çıktı:</span>
                                                <span className="text-primary-700 text-lg font-medium">{step.deliverable}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer for horizontal layout on desktop */}
                                    <div className="flex-1 hidden md:block"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Section: Legal & Financial */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div {...fadeIn} className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-900 mb-6">Hukuki Süreç ve Haklarınız</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Kentsel dönüşümde <strong>2/3 çoğunluk kuralı</strong> (yakında 50%+1 olarak güncellenmesi beklenen) en kritik aşamadır. Anlaşmaya yanaşmayan maliklerin hisselerinin satışı, Bakanlık nezdindeki itiraz süreleri ve tapudaki riskli yapı şerhi gibi konular uzmanlık gerektirir.
                                </p>
                                <p>
                                    KD Ankara hukuk birimi, Kat Karşılığı İnşaat Sözleşmelerindeki her bir maddeyi; teknik şartnameden, gecikme tazminatlarına, banka teminat mektuplarından, kira ödemesi garantilerine kadar sizin adınıza denetler.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-primary-950 p-10 rounded-3xl text-white">
                            <h2 className="text-2xl font-bold text-accent mb-6">Devlet Destekleri ve Finansman</h2>
                            <div className="space-y-4 text-primary-100 leading-relaxed">
                                <p>
                                    Ankara'da kentsel dönüşüme giren binalar için 2024-2025 döneminde güncellenen <strong>kira yardımı ve taşınma desteği</strong> imkanları mevcuttur. Ayrıca, güçlendirme veya yeniden yapım için sunulan düşük faizli kentsel dönüşüm kredilerinden faydalanma şartlarını sizin için analiz ediyoruz.
                                </p>
                                <p>
                                    Noter harcı, belediye rüsumu ve damga vergisi muafiyetleri sayesinde projenizde %20'ye varan maliyet avantajı yakalamanızı sağlıyoruz. Sadece teknik değil, ekonomik olarak da en mantıklı yolu seçmenize yardımcı oluyoruz.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final Content Block for SEO */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="prose prose-lg prose-slate max-w-none text-gray-600 italic">
                        <p>
                            "Kentsel dönüşüm bir binanın yıkılması değil, bir komşuluğun yeniden ve daha güvenli temellerle inşa edilmesidir. Ankara'nın her sokağında, her mahallesinde bu bilinci yaymak için çalışıyoruz."
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeIn} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-950 mb-10">
                            Binanızın Sürecini Bugünden Planlayın
                        </h2>
                        <Link href="/iletisim">
                            <Button className="w-full md:w-auto bg-accent hover:bg-accent-600 text-white text-xl md:text-2xl font-bold py-10 px-14 rounded-3xl shadow-2xl shadow-accent/30 transition-all hover:scale-105 group h-auto">
                                <div className="flex flex-col items-center">
                                    <span>Hemen Ücretsiz Danışmanlık Alın</span>
                                    <span className="text-sm font-normal text-white/80 mt-2">Ankara Genelinde Yüzlerce Referans ile Güvenli Dönüşüm</span>
                                </div>
                                <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-3 transition-transform hidden md:inline-block" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
