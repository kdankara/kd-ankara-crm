import { useSEO } from '@/hooks/useSEO';
import { motion } from 'framer-motion';
import {
    Building2, ArrowRight, CheckCircle, BarChart3, Users,
    Shield, FileSearch, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function Home() {
    useSEO(
        'Kentsel Dönüşüm Strateji Merkezi & Danışmanlık',
        'KD Ankara: Kentsel dönüşüm sürecinde mülk sahipleri ve müteahhitler için veriye dayalı strateji, hesaplama ve danışmanlık merkezi.'
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
                                Duygusal değil, veriyle dayalı ön analizle hareket edin.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/on-analiz">
                                    <Button size="lg" className="bg-accent hover:bg-accent-600 text-white font-bold h-14 px-8 shadow-xl shadow-accent/20">
                                        Ücretsiz Ön Analiz Al
                                    </Button>
                                </Link>
                                <a href="https://wa.me/905336820942" target="_blank" rel="noopener noreferrer">
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">3 Adımda Dönüşüm Yol Haritası</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Karmaşık görünen kentsel dönüşüm sürecini, sizin için yönetilebilir adımlara bölüyoruz.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01', title: 'Bilgi Talep',
                                desc: 'Web sitemiz üzerinden binanız veya arsanız için ücretsiz ön analiz talebi oluşturun.'
                            },
                            {
                                step: '02', title: '72 Saatte Analiz',
                                desc: 'Uzmanlarımız imar ve piyasa verilerini inceleyerek size özel ön rapor hazırlasın.'
                            },
                            {
                                step: '03', title: 'Strateji Belirleme',
                                desc: 'Rapor üzerinden en uygun dönüşüm modelini (müteahhit/kendin yap) birlikte belirleyelim.'
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
                        <Link to="/hizmetler">
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
                                Binanızın mevcut durumu, potansiyeli ve sürecin ilk değerlendirmesi için ön analiz desteği sunuyoruz.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all group flex flex-col h-full flex-col">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Teklif Değerlendirme</h3>
                            <p className="text-gray-600 text-sm leading-relaxed grow">
                                Mevcut müteahhit tekliflerini birlikte değerlendirerek avantajları, riskleri ve dikkat edilmesi gereken noktaları netleştiriyoruz.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all group flex flex-col h-full flex-col">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Malik Toplantısı Hazırlığı</h3>
                            <p className="text-gray-600 text-sm leading-relaxed grow">
                                Toplantı öncesinde sorulması gereken kritik soruları, dikkat edilmesi gereken başlıkları ve karar sürecini birlikte hazırlıyoruz.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all group flex flex-col h-full flex-col">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Süreç Danışmanlığı</h3>
                            <p className="text-gray-600 text-sm leading-relaxed grow">
                                Kentsel dönüşüm sürecinin başından karar aşamasına kadar daha kontrollü ve bilinçli ilerlemeniz için yol haritası oluşturuyoruz.
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
                            <h2 className="text-3xl font-bold mb-6">Riskleri Şansa Bırakmayın.<br /><span className="text-accent">Neleri Kontrol Ediyoruz?</span></h2>
                            <p className="text-primary-200 mb-8 leading-relaxed">
                                Kentsel dönüşümde yapılan en büyük hata, sürece sadece "m² pazarlığı" olarak bakmaktır.
                                Biz ise süreci teknik, hukuki ve finansal bir bütün olarak ele alıyoruz.
                            </p>
                            <Link to="/on-analiz">
                                <Button className="bg-white text-primary-900 hover:bg-gray-100 font-bold">
                                    Hemen Analiz Başlat
                                </Button>
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                'Güncel İmar Durumu', 'Mülkiyet Yapısı & Hissedarlar',
                                'Bölgesel Rayiç Değerler', 'İnşaat Maliyet Endeksleri',
                                'Müteahhit Güvenilirliği', 'Teknik Şartname Standartları',
                                'Sözleşme Hukuki Açıkları', 'Teslimat Süreçleri'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-primary-800/50 p-4 rounded-lg border border-primary-700">
                                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <section className="py-20 bg-accent text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Aklınızda Soru İşareti Kalmasın</h2>
                    <p className="text-accent-100 mb-8 max-w-2xl mx-auto text-lg">
                        Uzman ekibimizle görüşerek sürecin tüm detaylarını öğrenebilirsiniz.
                        İlk görüşme ve ön analiz tamamen ücretsizdir.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/905336820942" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-bold h-14 px-8 w-full sm:w-auto">
                                WhatsApp'tan Yazın
                            </Button>
                        </a>
                        <a href="tel:03122361017">
                            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent transition-colors h-14 px-8 w-full sm:w-auto font-bold">
                                <Phone className="w-4 h-4 mr-2" />
                                0312 236 10 17
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
