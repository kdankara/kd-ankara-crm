import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import FAQSection from '@/components/FAQSection';
import { Building2, ShieldCheck, MapPin, CheckCircle, PhoneCall, Scale, AlertTriangle, FileCheck, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Keçiören Kentsel Dönüşüm Danışmanlığı | KD Ankara',
  description: "Keçiören'deki binanız için bağımsız riskli yapı tespiti, kot farkı/emsal analizi, %51 çoğunluk yönetimi ve müteahhit sözleşme kalkanı. Ücretsiz ön analiz alın.",
  alternates: {
    canonical: 'https://kdankara.com/kecioren-kentsel-donusum',
  },
  openGraph: {
    title: 'Keçiören Kentsel Dönüşüm Danışmanlığı | KD Ankara',
    description: "Etlik, İncirli, Ayvalı ve Subayevleri bölgesinde müteahhitlerden bağımsız, haklarınızı koruyan teknik ve hukuki danışmanlık.",
    url: 'https://kdankara.com/kecioren-kentsel-donusum',
    type: 'website',
  },
};

export default function KeciorenPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://kdankara.com/kecioren-kentsel-donusum/#service",
        "name": "Keçiören Kentsel Dönüşüm Danışmanlığı",
        "serviceType": "Kentsel Dönüşüm Danışmanlığı",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "KD Ankara Strateji Merkezi",
          "telephone": "+905336820942",
          "url": "https://kdankara.com"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Keçiören, Ankara"
        },
        "description": "Keçiören bölgesindeki kat maliklerine özel kot analizi, müteahhit fizibilitesi, hukuki sözleşme kalkanı ve ön analiz hizmeti."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://kdankara.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Keçiören Kentsel Dönüşüm",
            "item": "https://kdankara.com/kecioren-kentsel-donusum"
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

      <main className="min-h-screen bg-slate-50">
        {/* Hero Bölümü */}
        <section className="bg-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border border-amber-500/20">
                <MapPin className="w-4 h-4" /> Keçiören Bölgesel Strateji Merkezi
              </div>
              <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                Keçiören’de Kentsel Dönüşümde Hak Kaybına Uğramayın
              </h1>
              <p className="text-slate-300 text-base lg:text-lg mb-6 leading-relaxed">
                Etlik, İncirli, Ayvalı, Sanatoryum, Subayevleri ve Esertepe başta olmak üzere Keçiören’in yoğun yapı stokunda müteahhitlerden %100 bağımsız, haklarınızı koruyan teknik kalkan.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span><strong>Kot & Emsal Doğrulaması:</strong> Eğimli arazide daire ve metrekare kaybını önleme</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span><strong>Şerefiye ve Paylaşım Adaleti:</strong> Kat/cephe farklarında adil dağıtım modeli</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span><strong>%51 Salt Çoğunluk Yönetimi:</strong> Çok ortaklı binalarda tıkanan süreçleri çözme</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+905336820942"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition shadow-lg hover:scale-105"
                >
                  <PhoneCall className="w-5 h-5" /> Keçiören Uzmanıyla Görüşün
                </a>
              </div>
            </div>

            {/* Form Komponenti */}
            <div className="w-full">
              <OnAnalizWizard />
            </div>
          </div>
        </section>

        {/* Keçiören'e Özel Dönüşüm Zorlukları */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Keçiören’de Kentsel Dönüşümün Kritik Püf Noktaları
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Ankara’nın en yüksek nüfus yoğunluğuna sahip ilçelerinden Keçiören’de kentsel dönüşüm; kot avantajları, dar parsel sınırları ve daire paylaşımı açılarından titizlik gerektirir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Layers className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kot Farkı ve Açığa Çıkan Katlar</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Eğilimli parsellerde kot farkından doğan katların müteahhit tarafından tek taraflı sahiplenilmesini engelliyor, tüm emsal haklarınızı malikler adına tescilliyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Müteahhit Mali Yeterlilik Analizi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                İnşaatın yarım kalması riskine karşı, teklif veren firmanın geçmiş projelerini, teminat mektubu kapasitesini ve mali bilançosunu bağımsız olarak denetliyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Scale className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Malikler Arası Uzlaşma & Hukuk</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Keçiören’deki çok daireli yapılarda yaşanan fikir ayrılıklarını, %51 salt çoğunluk yasası ve şeffaf şerefiye raporlaması ile uzlaşmaya dönüştürüyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Adım Adım Hizmet Süreci */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4">Keçiören Binaları İçin Güvenli Dönüşüm Rehberi</h2>
              <p className="text-slate-400">Teknik ve hukuki süreçleri sıfır riskle yönetme adımları.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">01</span>
                <h4 className="font-bold text-lg mb-2">Ücretsiz Ön Analiz</h4>
                <p className="text-xs text-slate-300">Binanızın ada/parsel verisi üzerinden imar ve kot potansiyeli çıkarılır.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">02</span>
                <h4 className="font-bold text-lg mb-2">Teknik Şartname</h4>
                <p className="text-xs text-slate-300">İnşaatta kullanılacak malzeme markaları ve kalite standartları bağlayıcı kılınır.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">03</span>
                <h4 className="font-bold text-lg mb-2">Fizibilite Kıyası</h4>
                <p className="text-xs text-slate-300">Müteahhitlerden toplanan teklifler rasyonel verilerle kıyaslanıp raporlanır.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">04</span>
                <h4 className="font-bold text-lg mb-2">Noter Sözleşmesi</h4>
                <p className="text-xs text-slate-300">Gecikme tazminatları ve fesih hakları içeren sözleşme ile süreç başlatılır.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
    </>
  );
}