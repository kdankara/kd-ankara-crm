import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import { 
  FileText, CheckCircle, PhoneCall, Calendar, HelpCircle, 
  AlertTriangle, Building2, UserCheck, CreditCard, ShieldAlert 
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ankara Kentsel Dönüşüm Kira Yardımı Rehberi (2025-2026 Güncel Tutarlar) | KD Ankara',
  description: 'Ankara 2025-2026 kentsel dönüşüm kira yardımı ne kadar? Malikler için 6.500 TL, kiracılar için 13.000 TL destek başvuru şartları, gerekli belgeler ve e-Devlet başvuru rehberi.',
  alternates: {
    canonical: 'https://kdankara.com/blog/2026-kentsel-donusum-kira-yardimi',
  },
  openGraph: {
    title: 'Ankara Kentsel Dönüşüm Kira Yardımı Rehberi | KD Ankara',
    description: "Ankara'da kentsel dönüşüm kira yardımı başvuru adımları, evrak listesi ve güncel destek miktarları.",
    url: 'https://kdankara.com/blog/2026-kentsel-donusum-kira-yardimi',
    type: 'article',
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
        "description": "Ankara iline özel kentsel dönüşüm kira yardımı başvuru koşulları, malik ve kiracı destek tutarları ve 6306 sayılı kanun kapsamındaki haklar.",
        "author": {
          "@type": "Organization",
          "name": "KD Ankara"
        },
        "publisher": {
          "@type": "Organization",
          "name": "KD Ankara",
          "logo": {
            "@type": "ImageObject",
            "url": "https://kdankara.com/logo.png"
          }
        },
        "datePublished": "2026-08-30"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kira yardımı geri ödemeli mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hayır, kentsel dönüşüm kira yardımı tamamen hibe niteliğindedir ve devlet tarafından geri talep edilmez."
            }
          },
          {
            "@type": "Question",
            "name": "Ödemeler ne zaman ve hangi bankaya yatıyor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ödemelerin tamamı Ziraat Bankası vadesiz TL hesaplarına yatırılır. Genellikle her ayın 15'inde hesaplara aktarılmaktadır."
            }
          },
          {
            "@type": "Question",
            "name": "İskanı olmayan binalar kira yardımı alabilir mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet alabilir. Ancak arsa paylı tapularda belediyeden alınacak emlak vergi beyannamesinin mutlaka 'bina' türünde düzenlenmiş olması şarttır."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-slate-50 py-12">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full text-sm mb-4 font-semibold border border-amber-500/20">
              <Calendar className="w-4 h-4" /> 2025 - 2026 Güncel Mevzuat Rehberi
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              Ankara Kentsel Dönüşüm Kira Yardımı Rehberi: Adım Adım Başvuru ve Tutarlar
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              İnşaat süresince kira maliyetlerinizi nasıl karşılayacaksınız? Ankara özelinde güncel destek tutarları, ikamet şartları ve e-Devlet başvuru adımları.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-slate-200 text-slate-700 space-y-8">
            
            {/* Bölüm 1: Güncel Tutarlar */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-amber-500" />
                1. Ankara Kentsel Dönüşüm Kira Yardımı Tutarları Ne Kadar?
              </h2>
              <p className="mb-4">
                Çevre, Şehircilik ve İklim Değişikliği Bakanlığı sınıflandırmasında Ankara ikinci grupta yer almaktadır. Hak sahiplerinin statüsüne göre ödenen güncel tutarlar şu şekildedir:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Ev ve İşyeri Sahipleri</span>
                  <div className="text-2xl font-extrabold text-slate-900 my-1">6.500 TL / Ay</div>
                  <p className="text-xs text-slate-500">18 ay boyunca düzenli ödenir (Toplam 117.000 TL destek).</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Kiracılar</span>
                  <div className="text-2xl font-extrabold text-slate-900 my-1">13.000 TL</div>
                  <p className="text-xs text-slate-500">Taşınma desteği olarak tek seferlik ödenir.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Sınırlı Ayni Hak Sahipleri</span>
                  <div className="text-2xl font-extrabold text-slate-900 my-1">32.500 TL</div>
                  <p className="text-xs text-slate-500">İkamet etme şartıyla tek seferlik ödenir.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-sm text-slate-700">
                <strong>📌 Alan Bazlı İstisna:</strong> Yapınız tek bir riskli bina yerine ilan edilmiş bir <em>Riskli Alan</em> veya <em>Rezerv Yapı Alanı</em> sınırları içindeyse, kira yardımı süresi projenin durumuna göre <strong>48 aya kadar</strong> uzatılabilmektedir.
              </div>
            </section>

            {/* Bölüm 2: Temel Şartlar */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-amber-500" />
                2. Kira Yardımı Alabilmenin 6 Temel Şartı
              </h2>
              <ul className="space-y-3 list-none p-0">
                <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div><strong>Riskli Yapı Tescili:</strong> 6306 sayılı Kanun kapsamında resmi "Riskli Yapı Raporu" alınmış ve kesinleşmiş olmalıdır.</div>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div><strong>Tahliye ve Yıkım:</strong> Binanın fiilen tahliye edilmiş veya yıkılmış olması şarttır. Ödemeler yıkım teyidiyle başlar.</div>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div><strong>Kredi vs Kira Yardımı Engeli:</strong> Aynı bağımsız bölüm için hem devlet destekli kentsel dönüşüm kredisi (faiz desteği) hem de kira yardımı alınamaz. İkisinden biri seçilmelidir.</div>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div><strong>1 Yıllık Hak Düşürücü Süre:</strong> Başvuru, tahliye veya yıkım tarihinden itibaren en geç 1 yıl içinde yapılmalıdır.</div>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div><strong>Tek Taşınmaz İlkesi:</strong> Aynı malik aynı türden (örneğin iki ayrı konut için) mükerrer yardım alamaz. Ancak bir konut ve bir işyeri için ayrı ayrı başvurulabilir.</div>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div><strong>İkamet Belgeleme:</strong> Kiracılar ve ayni hak sahipleri tahliye öncesi yapıda ikamet ettiklerini fatura ile belgelemelidir. Maliklerde ikamet şartı aranmaz.</div>
                </li>
              </ul>
            </section>

            {/* Bölüm 3: Başvuru Kanalları & Belgeler */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-amber-500" />
                3. Adım Adım Başvuru ve Gerekli Belgeler
              </h2>
              <p className="mb-4">
                Başvurularınızı <strong>e-Devlet Kapısı</strong> (6306 Sayılı Kanun Kapsamında Riskli Yapı Kira Yardımı Başvurusu), <strong>Ankara Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü</strong> veya yetkili ilçe belediyeleri üzerinden yapabilirsiniz.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="border border-slate-200 p-5 rounded-xl bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg border-b border-slate-200 pb-2">Ev ve İşyeri Sahipleri (Malikler)</h3>
                  <ul className="text-sm space-y-2 list-disc list-inside text-slate-600">
                    <li>Kira yardımı müracaat dilekçesi</li>
                    <li>Nüfus cüzdanı fotokopisi</li>
                    <li>Tapu belgesi ve güncel taşınmaz kaydı</li>
                    <li>Tahliye edildiğini gösteren adres bilgileri raporu</li>
                    <li>A.R.A.A.D. sistemi üzerinden yıkım onay kaydı</li>
                    <li>Ziraat Bankası vadesiz TL hesap cüzdanı fotokopisi</li>
                  </ul>
                </div>

                <div className="border border-slate-200 p-5 rounded-xl bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg border-b border-slate-200 pb-2">Konut Kiracıları</h3>
                  <ul className="text-sm space-y-2 list-disc list-inside text-slate-600">
                    <li>Kira yardımı başvuru dilekçesi</li>
                    <li>Nüfus cüzdanı fotokopisi</li>
                    <li>Nüfus Müdürlüğü'nden adres bilgileri raporu</li>
                    <li>Tahliye öncesi son 3 aya ait kiracı adına fatura</li>
                    <li>A.R.A.A.D. elektronik yıkım kaydı</li>
                    <li>Ziraat Bankası vadesiz TL hesap cüzdanı fotokopisi</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Bölüm 4: SSS */}
            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-amber-500" />
                4. Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">Kira yardımı geri ödemeli mi?</h3>
                  <p className="text-sm text-slate-600">Hayır, kentsel dönüşüm kira yardımı tamamen hibe niteliğindedir ve devlet tarafından geri talep edilmez.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">Ödemeler ne zaman ve hangi bankaya yatıyor?</h3>
                  <p className="text-sm text-slate-600">Ödemelerin tamamı Ziraat Bankası hesaplarına yatırılır. Genellikle her ayın 15'inde hesaplara aktarılmaktadır.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">İskanı (yapı kullanma izni) olmayan binalar kira yardımı alabilir mi?</h3>
                  <p className="text-sm text-slate-600">Evet alabilir. Ancak arsa paylı tapularda belediyeden alınacak emlak vergi beyannamesinin mutlaka "bina" türünde düzenlenmiş olması şarttır.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Lead Entegrasyon Bölümü */}
          <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 shadow-xl">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Binanız İçin En Avantajlı Senaryoyu Belirleyelim</h3>
              <p className="text-slate-300 text-sm">
                Kira yardımı mı yoksa devlet destekli faiz indirimi mi sizin için daha karlı? KD Ankara uzmanları 24 saat içinde ücretsiz ön analiz raporunuzu hazırlasın.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-slate-900 max-w-xl mx-auto">
              <OnAnalizWizard />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}