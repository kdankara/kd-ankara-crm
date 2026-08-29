import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import FAQSection from '@/components/FAQSection';
import { Building2, ShieldCheck, MapPin, CheckCircle, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sincan Kentsel Dönüşüm Danışmanlığı | KD Ankara',
  description: "Sincan bölgesinde kentsel dönüşüm, arsa payı hesaplama ve müteahhit değerlendirme danışmanlığı. Risksiz dönüşüm için ücretsiz ön analiz alın.",
  alternates: {
    canonical: 'https://kdankara.com/sincan-kentsel-donusum',
  },
  openGraph: {
    title: 'Sincan Kentsel Dönüşüm Danışmanlığı | KD Ankara',
    description: "Sincan bölgesinde bağımsız kentsel dönüşüm danışmanlığı.",
    url: 'https://kdankara.com/sincan-kentsel-donusum',
    type: 'website',
  },
};

export default function SincanPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://kdankara.com/sincan-kentsel-donusum/#service",
        "name": "Sincan Kentsel Dönüşüm Danışmanlığı",
        "serviceType": "Kentsel Dönüşüm Danışmanlığı",
        "provider": {
          "@type": "LocalBusiness",
          "name": "KD Ankara",
          "telephone": "+905336820942",
          "url": "https://kdankara.com"
        },
        "areaServed": { "@type": "AdministrativeArea", "name": "Sincan, Ankara" }
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
                <MapPin className="w-4 h-4" /> Sincan Özel Bölge Danışmanlığı
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
                Sincan'da Kentsel Dönüşümü Güvenle Tamamlayın
              </h1>
              <p className="text-slate-300 text-lg mb-6">
                Fatih, Törekent, Plevne ve Sincan merkez mahallelerindeki yapılarınız için müteahhit fizibilite analizleri ve malik haklarının korunması hizmeti veriyoruz.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> İnşaat Maliyeti ve Emsal Hesaplama
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> Ada/Parsel Bazlı Geliştirme Danışmanlığı
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> Eksiksiz Hukuki Sözleşme Kalkanı
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+905336820942" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition">
                  <PhoneCall className="w-5 h-5" /> 7/24 Direkt Arayın
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-slate-900">
              <h2 className="text-xl font-bold mb-2 text-center">Sincan Ücretsiz Ön Analiz</h2>
              <p className="text-sm text-slate-600 text-center mb-6">Binanızın dönüşüm potansiyeli ve sürecin maliyetleri için form doldurun.</p>
              <OnAnalizWizard />
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
    </>
  );
}