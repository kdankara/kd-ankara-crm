import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import FAQSection from '@/components/FAQSection';
import { Building2, ShieldCheck, MapPin, CheckCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Çankaya Kentsel Dönüşüm Danışmanlığı | KD Ankara',
  description: "Çankaya'daki yapınız için riskli yapı tespiti, müteahhit teklif analizi ve malik uzlaşma danışmanlığı. 500+ bina deneyimiyle ücretsiz ön analiz alın.",
  alternates: {
    canonical: 'https://kdankara.com/cankaya-kentsel-donusum',
  },
  openGraph: {
    title: 'Çankaya Kentsel Dönüşüm Danışmanlığı | KD Ankara',
    description: "Çankaya bölgesinde bağımsız kentsel dönüşüm danışmanlığı ve teknik kalkan hizmeti.",
    url: 'https://kdankara.com/cankaya-kentsel-donusum',
    type: 'website',
  },
};

export default function CankayaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://kdankara.com/cankaya-kentsel-donusum/#service",
        "name": "Çankaya Kentsel Dönüşüm Danışmanlığı",
        "serviceType": "Kentsel Dönüşüm Danışmanlığı",
        "provider": {
          "@type": "LocalBusiness",
          "name": "KD Ankara",
          "telephone": "+905336820942",
          "url": "https://kdankara.com"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Çankaya, Ankara"
        },
        "description": "Çankaya bölgesindeki kat maliklerine özel müteahhit fizibilite analizi, hukuki sözleşme kalkanı ve ön analiz hizmeti."
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
        <section className="bg-slate-900 text-white pt-16 pb-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-sm mb-6 border border-amber-500/20">
                <MapPin className="w-4 h-4" /> Çankaya Özel Bölge Danışmanlığı
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
                Çankaya’da Kentsel Dönüşüm Sürecinizi Risksiz Yönetin
              </h1>
              <p className="text-slate-300 text-lg mb-6">
                Ayrancı, Bahçelievler, Gaziosmanpaşa ve Konutkent başta olmak üzere Çankaya’daki binanız için bağımsız müteahhit analizi ve hukuki güvence sunuyoruz.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> %100 Tarafsız Müteahhit Fizibilite Raporu
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> Malikler Arası Hak ve Emsal Adaleti
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-500" /> Hukuki & Teknik Sözleşme Kalkanı
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+905336820942"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition"
                >
                  <PhoneCall className="w-5 h-5" /> 7/24 Direkt Arayın
                </a>
              </div>
            </div>

            {/* Lead Formu */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-slate-900">
              <h2 className="text-xl font-bold mb-2 text-center">Çankaya Ücretsiz Ön Analiz Formu</h2>
              <p className="text-sm text-slate-600 text-center mb-6">
                Binanızın mevcut durumunu değerlendirelim, 24 saat içinde dönüş yapalım.
              </p>
              <OnAnalizWizard />
            </div>
          </div>
        </section>

        {/* Bölge Bilgilendirme */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Çankaya Kentsel Dönüşümünde Dikkat Edilmesi Gerekenler
            </h2>
            <p className="text-slate-600">
              Çankaya’da bina yaş ortalamasının yüksek olması ve imar planlarındaki bölgeye özel kısıtlamalar, doğru müteahhit seçimini ve teknik şartnameyi kritik hale getirir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Building2 className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Emsal ve Kat Hesabı</h3>
              <p className="text-slate-600 text-sm">
                Bölgenizdeki güncel imar durumuna göre bina hakkınızı koruyor, müteahhitlerin önerdiği paylaşımları bağımsız verilerle doğruluyoruz.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Teminat & Sözleşme</h3>
              <p className="text-slate-600 text-sm">
                İnşaatın yarıda kalmaması için banka teminat mektubu şartı ve gecikme cezalarını kapsayan hukuki kalkan oluşturuyoruz.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <MapPin className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Mahalle Bazlı Strateji</h3>
              <p className="text-slate-600 text-sm">
                Bahçelievler, Ayrancı, Kırkkonaklar ve Çayyolu bölgesindeki gayrimenkul değer artış beklentilerine uygun projeler kurguluyoruz.
              </p>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
    </>
  );
}