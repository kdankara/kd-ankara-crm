import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import FAQSection from '@/components/FAQSection';
import { Building2, ShieldCheck, MapPin, CheckCircle, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Keçiören Kentsel Dönüşüm Danışmanlığı | KD Ankara',
  description: "Keçiören'deki binanız için riskli yapı tespiti, müteahhit teklif analizi ve sözleşme güvencesi. Ankara kentsel dönüşümünde uzman destek.",
  alternates: {
    canonical: 'https://kdankara.com/kecioren-kentsel-donusum',
  },
  openGraph: {
    title: 'Keçiören Kentsel Dönüşüm Danışmanlığı | KD Ankara',
    description: "Keçiören bölgesinde bağımsız kentsel dönüşüm danışmanlığı.",
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
          "@type": "LocalBusiness",
          "name": "KD Ankara",
          "telephone": "+905336820942",
          "url": "https://kdankara.com"
        },
        "areaServed": { "@type": "AdministrativeArea", "name": "Keçiören, Ankara" }
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
                <MapPin className="w-4 h-4" /> Keçiören Özel Bölge Danışmanlığı
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
                Keçiören'de Dönüşümde Güvenceyi Şansa Bırakmayın
              </h1>
              <p className="text-slate-300 text-lg mb-6">
                Etlik, İncirli, Ayvalı ve Sanatoryum başta olmak üzere Keçiören'deki yapılar için eksiksiz müteahhit analizi ve hukuki danışmanlık hizmeti veriyoruz.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> %100 Bağımsız Teklif Değerlendirme
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> Şerefiyelendirme ve Daire Paylaşım Adaleti
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> Güvenli Sözleşme Hazırlığı
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+905336820942" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition">
                  <PhoneCall className="w-5 h-5" /> 7/24 Direkt Arayın
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-slate-900">
              <h2 className="text-xl font-bold mb-2 text-center">Keçiören Ücretsiz Ön Analiz</h2>
              <p className="text-sm text-slate-600 text-center mb-6">Bina bilgilerinizi iletin, dönüşüm potansiyelinizi 24 saatte raporlayalım.</p>
              <OnAnalizWizard />
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
    </>
  );
}