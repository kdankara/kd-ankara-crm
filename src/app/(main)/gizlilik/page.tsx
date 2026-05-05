"use client";

import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { Lock } from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function Privacy() {
    useSEO(
        'Gizlilik Politikası | KD Ankara Kentsel Dönüşüm',
        'KD Ankara Kentsel Dönüşüm Strateji Merkezi Gizlilik Politikası. Kullanıcı verilerinin nasıl toplandığı ve korunduğu hakkında bilgilendirme.'
    );

    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            <header className="bg-primary-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeIn}>
                        <Lock className="w-16 h-16 text-accent mx-auto mb-6" />
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Gizlilik Politikası</h1>
                        <p className="text-primary-200 max-w-2xl mx-auto">
                            Dijital güvenliğiniz ve kişisel gizliliğiniz korumamız altındadır.
                        </p>
                    </motion.div>
                </div>
            </header>

            <div className="container mx-auto px-4 -mt-8">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 max-w-4xl mx-auto prose prose-slate prose-lg">
                    <h2>Giriş</h2>
                    <p>
                        KD Ankara ("biz", "bize" veya "bizim"), <strong>kdankara.com</strong> web sitesini ziyaret eden kullanıcıların gizliliğini korumayı taahhüt eder. Bu Gizlilik Politikası, hangi bilgilerin toplandığını ve bu bilgilerin nasıl kullanıldığını açıklar.
                    </p>

                    <h2>Toplanan Bilgiler</h2>
                    <p>
                        Web sitemizi kullandığınızda aşağıdaki verileri toplayabiliriz:
                    </p>
                    <ul>
                        <li><strong>İletişim Bilgileri:</strong> İsim, e-posta adresi, telefon numarası.</li>
                        <li><strong>Gayrimenkul Bilgileri:</strong> Ön analiz için sağladığınız bina adresi, kat sayısı vb. bilgiler.</li>
                        <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü ve çerezler aracılığıyla toplanan kullanım verileri.</li>
                    </ul>

                    <h2>Bilgilerin Kullanımı</h2>
                    <p>
                        Topladığımız bilgiler şu amaçlarla kullanılır:
                    </p>
                    <ul>
                        <li>Danışmanlık hizmetlerimizi sunmak ve geliştirmek,</li>
                        <li>Taleplerinize yanıt vermek,</li>
                        <li>Web sitesi performansını analiz etmek ve kullanıcı deneyimini iyileştirmek.</li>
                    </ul>

                    <h2>Çerezler (Cookies)</h2>
                    <p>
                        Web sitemiz, kullanıcı deneyimini zenginleştirmek için çerezleri kullanır. Tarayıcı ayarlarınızdan çerezleri reddedebilirsiniz, ancak bu durum sitenin bazı fonksiyonlarının çalışmasını etkileyebilir.
                    </p>

                    <h2>Üçüncü Taraf Bağlantıları</h2>
                    <p>
                        Sitemiz, müteahhit veya çözüm ortaklarımıza ait harici bağlantılar içerebilir. Bu sitelerin gizlilik politikalarından sorumlu değiliz.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-12 text-sm text-gray-500 italic">
                        Son güncelleme: 26 Nisan 2026
                    </div>
                </div>
            </div>
        </div>
    );
}
