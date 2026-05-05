"use client";

import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { Shield } from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function KVKK() {
    useSEO(
        'KVKK Aydınlatma Metni | KD Ankara Kentsel Dönüşüm',
        'KD Ankara Kentsel Dönüşüm Strateji Merkezi KVKK Aydınlatma Metni. Kişisel verilerinizin işlenmesi ve korunması hakkında detaylı bilgi.'
    );

    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            <header className="bg-primary-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeIn}>
                        <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">KVKK Aydınlatma Metni</h1>
                        <p className="text-primary-200 max-w-2xl mx-auto">
                            Verilerinizin güvenliği ve gizliliği bizim için en öncelikli konudur.
                        </p>
                    </motion.div>
                </div>
            </header>

            <div className="container mx-auto px-4 -mt-8">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 max-w-4xl mx-auto prose prose-slate prose-lg">
                    <p>
                        <strong>KD Ankara Strateji Merkezi</strong> olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla, kişisel verilerinizin aşağıda açıklanan amaçlar kapsamında işlenebileceğini ve korunacağını bildiririz.
                    </p>

                    <h2>1. Kişisel Verilerin İşlenme Amacı</h2>
                    <p>
                        Web sitemiz üzerinden doldurduğunuz ön analiz formları ve iletişim formları aracılığıyla toplanan ad, soyad, telefon ve adres gibi verileriniz;
                    </p>
                    <ul>
                        <li>Kentsel dönüşüm taleplerinizin değerlendirilmesi,</li>
                        <li>Binanızın teknik analizinin yapılması,</li>
                        <li>Tarafınıza bilgilendirme ve danışmanlık hizmeti sunulması,</li>
                        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    </ul>
                    <p>amaçlarıyla işlenmektedir.</p>

                    <h2>2. Kişisel Verilerin Aktarılması</h2>
                    <p>
                        Kişisel verileriniz, açık rızanız olmaksızın üçüncü taraflarla paylaşılmamaktadır. Ancak yasal zorunluluklar gereği yetkili kamu kurum ve kuruluşları ile paylaşım yapılabilmektedir.
                    </p>

                    <h2>3. Veri Sahibi Hakları</h2>
                    <p>
                        KVKK kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, silinmesini veya düzeltilmesini isteme haklarına sahipsiniz. Taleplerinizi <strong>info@kdankara.com</strong> adresine iletebilirsiniz.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-12 text-sm text-gray-500 italic">
                        Son güncelleme: 26 Nisan 2026
                    </div>
                </div>
            </div>
        </div>
    );
}
