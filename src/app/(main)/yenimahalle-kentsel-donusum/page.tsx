import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import FAQSection from '@/components/FAQSection';
import { Building2, ShieldCheck, MapPin, CheckCircle, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yenimahalle ve Batıkent Kentsel Dönüşüm Danışmanlığı | KD Ankara',
  description: "Yenimahalle, Batıkent ve Demetevler bölgesinde riskli yapı tespiti, müteahhit teklif analizi ve malik uzlaşma danışmanlığı. Ücretsiz ön analiz alın.",
  alternates: {
    canonical: 'https://kdankara.com/yenimahalle-kentsel-donusum',
  },
  openGraph: {
    title: 'Yenimahalle ve Batıkent Kentsel Dönüşüm Danışmanlığı | KD Ankara',
    description: "Yenimahalle bölgesinde bağımsız kentsel dönüşüm danışmanlığı ve teknik kalkan hizmeti.",
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
        "name": "Yenimahalle Kentsel Dönüşüm Danışmanlığı",
        "serviceType": "Kentsel Dönüşüm Danışmanlığı",
        "provider": {
          "@type": "LocalBusiness",
          "name": "KD Ankara",
          "telephone": "+905336820942",
          "url": "https://kdankara.com"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Yenimahalle, Ankara" },
          { "@type": "AdministrativeArea", "name": "Batıkent, Ankara" }
        ],
        "description": "Yenimahalle ve Batıkent bölgesindeki kat maliklerine özel müteahhit fizibilite analizi ve hukuki süreç yönetimi."
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <main className="min-h-screen bg-slate-50">
        <section className="bg-slate-900 text-white pt-16 pb-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-sm mb-6 border border-amber-500/20">
                <MapPin className="w-4 h-4" /> Yenimahalle & Batıkent Özel Bölge Danışmanlığı
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
                Yenimahalle'de Dönüşüm Sürecinizi Risksiz Yönetin
              </h1>
              <p className="text-slate-300 text-lg mb-6">
                Batıkent, Demetevler, Şentepe ve Yenimahalle merkezdeki site/apartman projeleriniz için bağımsız müteahhit analizi ve 6306 sayılı kanun kapsamında hukuki güvence sunuyoruz.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> Site Yönetimlerine Özel Toplu Uzlaşma Desteği
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> Müteahhit Teknik Şartname Analizi
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> Emsal Artışı ve Şerefiye Adaleti Hesaplaması
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+905336820942" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition">
                  <PhoneCall className="w-5 h-5" /> 7/24 Direkt Arayın
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-slate-900">
              <h2 className="text-xl font-bold mb-2 text-center">Yenimahalle Ücretsiz Ön Analiz</h2>
              <p className="text-sm text-slate-600 text-center mb-6">Binanızın veya sitenizin durumunu inceleyip, 24 saat içinde dönüş yapalım.</p>
              <OnAnalizWizard />
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Yenimahalle Dönüşümünde Kritik Noktalar</h2>
            <p className="text-slate-600">Özellikle Batıkent bölgesindeki kooperatif çıkışlı sitelerin ve Demetevler'deki yoğun yapılaşmanın getirdiği bölgesel dinamikleri teknik olarak yönetiyoruz.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Building2 className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Site ve Kooperatif Dönüşümleri</h3>
              <p className="text-slate-600 text-sm">Batıkent gibi geniş alanlara yayılmış sitelerde maliklerin hızlı uzlaşması ve emsal haklarının en verimli şekilde kullanılması için teknik raporlama sunuyoruz.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Müteahhit Güvenilirlik Testi</h3>
              <p className="text-slate-600 text-sm">Bölgedeki projeleri üstlenmek isteyen müteahhitlerin finansal yapısını ve geçmiş iş bitirme belgelerini malikler adına tarafsızca inceliyoruz.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <MapPin className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Demetevler ve Yoğun Alanlar</h3>
              <p className="text-slate-600 text-sm">Bitişik nizam ve riskli yapı yoğunluğu yüksek olan bölgelerde ada bazlı dönüşüm senaryolarının fizibilitesini hazırlıyoruz.</p>
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
    </>
  );
}