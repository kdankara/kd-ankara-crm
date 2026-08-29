import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import { 
  FileText, CheckCircle2, PhoneCall, Calendar, HelpCircle, 
  AlertCircle, Building2, Wallet, Landmark, ArrowRight, ShieldCheck, Info
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ankara Kentsel Dönüşüm Kira Yardımı Rehberi (2025-2026) | KD Ankara',
  description: 'Ankara 2025-2026 kentsel dönüşüm kira yardımı ne kadar? Malikler için 6.500 TL, kiracılar için 13.000 TL başvuru şartları, belgeler ve e-Devlet başvuru rehberi.',
  alternates: {
    canonical: 'https://kdankara.com/blog/2026-kentsel-donusum-kira-yardimi/',
  },
};

export default function KiraYardimiPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://kdankara.com/blog/2026-kentsel-donusum-kira-yardimi/#article",
        "headline": "Ankara Kentsel Dönüşüm Kira Yardımı Rehberi: Adım Adım Başvuru ve Güncel Tutarlar",
        "description": "Ankara iline özel kentsel dönüşüm kira yardımı başvuru koşulları, malik ve kiracı destek tutarları.",
        "author": { "@type": "Organization", "name": "KD Ankara" },
        "publisher": { "@type": "Organization", "name": "KD Ankara" },
        "datePublished": "2026-08-30"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kira yardımı geri ödemeli mi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Hayır, tamamen hibe niteliğindedir ve geri talep edilmez." }
          },
          {
            "@type": "Question",
            "name": "Ödemeler hangi bankaya yatıyor?",
            "acceptedAnswer": { "@type": "Answer", "text": "Tüm ödemeler Ziraat Bankası vadesiz TL hesaplarına her ayın 15'inde aktarılır." }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <main className="min-h-screen bg-slate-50 pb-20">
        {/* Header / Hero */}
        <section className="bg-slate-900 text-white pt-12 pb-20 border-b border-slate-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link href="/" className="hover:text-amber-400 transition">Anasayfa</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-amber-400 transition">Blog</Link>
              <span>/</span>
              <span className="text-amber-400">Kira Yardımı Rehberi</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold mb-6 border border-amber-500/20">
              <Calendar className="w-3.5 h-3.5" /> 2025 - 2026 Güncel Mevzuat
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Ankara Kentsel Dönüşüm Kira Yardımı Rehberi
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              İnşaat süresince devlet tarafından sağlanan 18 aylık karşılıksız kira desteği, başvuru evrakları ve dikkat edilmesi gereken kritik detaylar.
            </p>
          </div>
        </section>

        {/* Ana İçerik Konteyneri */}
        <div className="container mx-auto px-4 max-w-5xl -mt-10">
          
          {/* Özet KPI Kartları */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Ev ve İşyeri Sahipleri</span>
                <div className="text-3xl font-black text-slate-900 mb-1">6.500 ₺ <span className="text-sm font-normal text-slate-500">/ Ay</span></div>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">18 ay boyunca düzenli ödenir (Toplam 117.000 ₺).</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Konut Kiracıları</span>
                <div className="text-3xl font-black text-slate-900 mb-1">13.000 ₺</div>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">Taşınma desteği olarak tek seferlik ödenir.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Ayni Hak Sahipleri</span>
                <div className="text-3xl font-black text-slate-900 mb-1">32.500 ₺</div>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">İkamet etme şartıyla tek seferlik ödenir.</p>
            </div>
          </div>

          {/* Makale Gövdesi */}
          <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-200 text-slate-700 space-y-10">
            
            {/* Karşılaştırma Tablosu */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Wallet className="w-6 h-6 text-amber-500" /> Ankara Güncel Destek Tablosu
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold rounded-l-lg">Hak Sahibi Statüsü</th>
                      <th className="p-3 font-bold">Ödeme Tutarı</th>
                      <th className="p-3 font-bold">Ödeme Periyodu</th>
                      <th className="p-3 font-bold rounded-r-lg">İkamet Şartı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Malik (Ev / İşyeri Sahibi)</td>
                      <td className="p-3 text-amber-600 font-bold">6.500 TL</td>
                      <td className="p-3">18 Ay Düzenli</td>
                      <td className="p-3 text-slate-500">Aranmaz</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Konut Kiracısı</td>
                      <td className="p-3 text-amber-600 font-bold">13.000 TL</td>
                      <td className="p-3">Tek Seferlik (Defaten)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zorunlu (Son 3 ay)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Sınırlı Ayni Hak Sahibi</td>
                      <td className="p-3 text-amber-600 font-bold">32.500 TL</td>
                      <td className="p-3">Tek Seferlik (Defaten)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zorunlu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Temel Şartlar */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-amber-500" /> Kira Yardımı Başvuru Şartları
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> Riskli Yapı Tescili
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Binanız için 6306 sayılı kanun kapsamında resmi Riskli Yapı Raporu alınmış ve kesinleşmiş olmalıdır.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> 1 Yıllık Hak Düşürücü Süre
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Başvuruların, binanın tahliye edildiği veya yıkıldığı tarihten itibaren en geç 1 yıl içinde yapılması şarttır.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> Kredi & Yardım Engeli
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Aynı bağımsız bölüm için hem faiz destekli dönüşüm kredisi hem de kira yardımı kullanılamaz.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> Ziraat Bankası Hesabı
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Ödemeler Çevre Bakanlığı tarafından doğrudan hak sahibinin Ziraat Bankası vadesiz TL hesabına aktarılır.</p>
                </div>
              </div>
            </section>

            {/* Evrak Listesi */}
            <section className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl space-y-6">
              <h2 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                <FileText className="w-5 h-5" /> Başvuru İçin Gerekli Belgeler
              </h2>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-white mb-3 border-b border-slate-700 pb-2">Malikler (Ev Sahipleri) İçin:</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Başvuru dilekçesi & Kimlik fotokopisi</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Güncel tapu belgesi & Taşınmaz kaydı</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Adres bilgileri raporu (Tahliye teyidi)</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> A.R.A.A.D. elektronik yıkım kaydı</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Ziraat Bankası vadesiz TL IBAN görseli</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 border-b border-slate-700 pb-2">Kiracılar İçin:</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Başvuru dilekçesi & Kimlik fotokopisi</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Nüfus Müdürlüğü adres bilgileri raporu</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Tahliye öncesi son 3 aya ait fatura</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> A.R.A.A.D. elektronik yıkım kaydı</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Ziraat Bankası vadesiz TL IBAN görseli</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SSS */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-amber-500" /> Sıkça Sorulan Sorular
              </h2>

              <div className="space-y-3">
                <div className="border border-slate-200 p-4 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Kira yardımı geri ödemeli mi?</h3>
                  <p className="text-xs text-slate-600">Hayır. Kentsel dönüşüm kira yardımı tamamen hibe niteliğindedir, devlet tarafından geri talep edilmez.</p>
                </div>

                <div className="border border-slate-200 p-4 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">İskansız binalar kira yardımı alabilir mi?</h3>
                  <p className="text-xs text-slate-600">Evet. Arsa paylı tapularda belediyeden alınacak emlak vergi beyannamesinin "bina" türünde düzenlenmiş olması yeterlidir.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Dönüşüm / Lead Form Alanı */}
          <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-800">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-2">Ücretsiz Teknik Danışmanlık</span>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Binanız İçin En Doğru Finansal Modeli Belirleyelim</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kira yardımı mı yoksa devlet destekli faiz indirimi mi sizin için daha avantajlı? 24 saat içinde ücretsiz ön analiz raporunuzu hazırlayalım.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-slate-900 max-w-xl mx-auto shadow-lg">
              <OnAnalizWizard />
            </div>
          </div>

        </div>
      </main>
    </>
  );
}