import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import FAQSection from '@/components/FAQSection';
import { Building2, ShieldCheck, MapPin, CheckCircle, PhoneCall, Scale, Users, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yenimahalle ve Batıkent Kentsel Dönüşüm Danışmanlığı | KD Ankara',
  description: "Yenimahalle, Batıkent ve Demetevler'de site dönüşümleri, %51 çoğunluk yönetimi, müteahhit teklif analizi ve hukuki güvence. Ücretsiz ön analiz alın.",
  alternates: {
    canonical: 'https://kdankara.com/yenimahalle-kentsel-donusum',
  },
  openGraph: {
    title: 'Yenimahalle ve Batıkent Kentsel Dönüşüm Danışmanlığı | KD Ankara',
    description: "Batıkent siteleri ve Demetevler bölgesi için müteahhitlerden bağımsız teknik ve hukuki kentsel dönüşüm danışmanlığı.",
    url: 'https://kdankara.com/yenimahalle-kentsel-donusum',
    type: 'website',
  },
};

export default function YenimahallePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://kdankara.com/yenimahalle-kentsel-donusum/#service",
        "name": "Yenimahalle ve Batıkent Kentsel Dönüşüm Danışmanlığı",
        "serviceType": "Kentsel Dönüşüm Danışmanlığı",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "KD Ankara Strateji Merkezi",
          "telephone": "+905336820942",
          "url": "https://kdankara.com"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Yenimahalle, Ankara" },
          { "@type": "AdministrativeArea", "name": "Batıkent, Ankara" },
          { "@type": "AdministrativeArea", "name": "Demetevler, Ankara" }
        ],
        "description": "Yenimahalle, Batıkent ve Demetevler bölgesindeki kat maliklerine ve site yönetimlerine özel müteahhit fizibilitesi, hukuki sözleşme kalkanı ve ön analiz hizmeti."
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
            "name": "Yenimahalle Kentsel Dönüşüm",
            "item": "https://kdankara.com/yenimahalle-kentsel-donusum"
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
                <MapPin className="w-4 h-4" /> Yenimahalle & Batıkent Bölgesel Danışmanlığı
              </div>
              <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                Yenimahalle ve Batıkent’te Bütüncül Dönüşüm Güvencesi
              </h1>
              <p className="text-slate-300 text-base lg:text-lg mb-6 leading-relaxed">
                Batıkent'in çok bloklu kooperatif sitelerinden Demetevler'in yüksek riskli yapı stokuna kadar tüm Yenimahalle genelinde bağımsız teknik ve hukuki süreç yönetimi.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span><strong>Site & Kooperatif Yönetimi:</strong> Çok bloklu yapılarda uzlaşma ve emsal optimizasyonu</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span><strong>Müteahhit Teknik Filtresi:</strong> Tekliflerin bağımsız finansal ve teknik denetimi</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span><strong>%51 Salt Çoğunluk Desteği:</strong> Karar süreçlerinde yasal ve şeffaf koordinasyon</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+905336820942"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition shadow-lg hover:scale-105"
                >
                  <PhoneCall className="w-5 h-5" /> Yenimahalle Uzmanıyla Görüşün
                </a>
              </div>
            </div>

            {/* Form Komponenti */}
            <div className="w-full">
              <OnAnalizWizard />
            </div>
          </div>
        </section>

        {/* Yenimahalle & Batıkent Dönüşüm Dinamikleri */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Bölgesel Kentsel Dönüşüm Stratejileri
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Yenimahalle ilçesi, Batıkent’teki geniş parsel alanları ile Demetevler’deki dar ve yoğun yapılaşma gibi birbirinden tamamen farklı teknik yaklaşım gerektiren bölgelere sahiptir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Users className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Batıkent Site & Kooperatif Dönüşümleri</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Çok malikli toplu konut alanlarında emsal artışı imkanlarını değerlendiriyor, kat malikleri arasında adil şerefiye dağılımı sağlayarak süreçlerin kilitlenmesini önlüyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Building2 className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Demetevler Bitişik Nizam Tespiti</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bina yaş ortalamasının yüksek ve sokakların dar olduğu bölgelerde riskli yapı süreçlerini yönetiyor, ada bazlı veya münferit dönüşüm senaryolarını hazırlıyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Müteahhit Teminat & Sözleşme Kalkanı</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Müteahhidin mali gücünü bağımsız olarak doğruluyor; Bina Tamamlama Sigortası, gecikme tazminatları ve fesih şartlarını noter sözleşmesine ekliyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Adım Adım Hizmet Süreci */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4">4 Adımda Yenimahalle Kentsel Dönüşüm Modeli</h2>
              <p className="text-slate-400">Arsa sahiplerinin haklarını %100 koruyan bağımsız süreç haritası.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">01</span>
                <h4 className="font-bold text-lg mb-2">Ücretsiz Ön Analiz</h4>
                <p className="text-xs text-slate-300">Ada/parsel bilginiz ile imar planı ve mevcut emsal haklarınız hesaplanır.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">02</span>
                <h4 className="font-bold text-lg mb-2">Teknik Şartname</h4>
                <p className="text-xs text-slate-300">İnşaat kalitesi, otopark, statik gereksinimler ve malzeme listesi netleştirilir.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">03</span>
                <h4 className="font-bold text-lg mb-2">Fizibilite & İhale</h4>
                <p className="text-xs text-slate-300">Müteahhitlerden toplanan teklifler rasyonel verilerle kıyaslanarak raporlanır.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">04</span>
                <h4 className="font-bold text-lg mb-2">Hukuki Zırh</h4>
                <p className="text-xs text-slate-300">Resmi noter sözleşmesi kat maliklerini hukuki risklere karşı koruyacak şekilde imzalanır.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
    </>
  );
}