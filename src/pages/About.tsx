import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { Target, Eye, Shield, Users, Building, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function About() {
    useSEO(
        'Hakkımızda',
        'KD Ankara, kentsel dönüşüm sürecinde veriye dayalı, şeffaf ve güvenilir çözüm ortağınızdır.'
    );

    const values = [
        {
            icon: <Shield className="w-8 h-8 text-accent" />,
            title: 'Şeffaflık & Güven',
            description: 'Sürecin her aşamasında hak sahiplerine doğru ve tarafsız bilgi sunuyoruz.'
        },
        {
            icon: <Users className="w-8 h-8 text-accent" />,
            title: 'Uzman Kadro',
            description: 'Mimarlar, mühendisler ve hukuki danışmanlardan oluşan tecrübeli bir ekibe sahibiz.'
        },
        {
            icon: <Building className="w-8 h-8 text-accent" />,
            title: 'Veri Odaklı Yaklaşım',
            description: 'Kararlarımızı duygularla değil, piyasa gerçekleri ve matematiksel analizlerle alıyoruz.'
        },
        {
            icon: <Award className="w-8 h-8 text-accent" />,
            title: 'Kalite Standartları',
            description: 'Ankara genelinde en yüksek yapım standartlarını sağlayan müteahhitlerle çalışıyoruz.'
        }
    ];

    return (
        <div className="bg-gray-50/50 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 to-transparent" />
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white/90">
                            Geleceğin Ankara'sını Birlikte İnşa Ediyoruz
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            KD Ankara Strateji Merkezi olarak, kentsel dönüşüm sürecinin zorluklarını veri, tecrübe ve güvenle aşıyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div 
                            {...fadeInUp}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                                <Target className="w-24 h-24" />
                            </div>
                            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                                <Target className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-primary-900">Misyonumuz</h2>
                            <p className="text-gray-600 leading-relaxed relative z-10">
                                Hak sahipleri ile yükleniciler arasında adil ve şeffaf bir köprü kurarak, kentsel dönüşüm süreçlerinin hızlı, güvenilir ve taraflar için en kârlı şekilde sonuçlanmasını sağlamak.
                            </p>
                        </motion.div>

                        <motion.div 
                            {...fadeInUp} transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                                <Eye className="w-24 h-24" />
                            </div>
                            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                                <Eye className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-primary-900">Vizyonumuz</h2>
                            <p className="text-gray-600 leading-relaxed relative z-10">
                                Ankara'da kentsel dönüşüm danışmanlığında akla gelen ilk isim olmak; geliştirdiğimiz analitik yöntemler ve veri odaklı yaklaşımlar ile Türkiye genelinde sektöre yön vermek.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-primary-900 mb-4">Temel Değerlerimiz</h2>
                        <p className="text-gray-600">Her adımda taviz vermediğimiz prensiplerimiz.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {values.map((v, i) => (
                            <motion.div 
                                key={i}
                                {...fadeInUp} transition={{ delay: i * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary-900">{v.title}</h3>
                                <p className="text-gray-600 text-sm">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white/90">Süreci Birlikte Yönetelim</h2>
                        <p className="text-xl text-primary-100 mb-10">
                            Binanızın güncel durumunu öğrenmek ve kentsel dönüşüm potansiyelini keşfetmek için ilk adımı atın.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/on-analiz">
                                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent-600 text-white h-14 px-8 text-lg shadow-xl shadow-accent/20">
                                    Ücretsiz Ön Analiz Başlat
                                </Button>
                            </Link>
                            <Link to="/iletisim">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 h-14 px-8 text-lg">
                                    Bizimle İletişime Geçin
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
