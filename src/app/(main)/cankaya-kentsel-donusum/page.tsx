import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import FAQSection from '@/components/FAQSection';
import { Building2, ShieldCheck, MapPin, CheckCircle, PhoneCall, Scale, AlertTriangle, FileCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Çankaya Kentsel Dönüşüm Danışmanlığı | KD Ankara',
  description: "Çankaya'daki binanız için bağımsız riskli yapı tespiti, imar/emsal analizi, %51 çoğunluk yönetimi ve müteahhit sözleşme kalkanı. Ücretsiz ön analiz alın.",
  alternates: {
    canonical: 'https://kdankara.com/cankaya-kentsel-donusum',
  },
  openGraph: {
    title: 'Çankaya Kentsel Dönüşüm Danışmanlığı | KD Ankara',
    description: "Çankaya bölgesinde müteahhitlerden bağımsız, mülk sahiplerini koruyan teknik ve hukuki kentsel dönüşüm danışmanlığı.",
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
          "@type": "HomeAndConstructionBusiness",
          "name": "KD Ankara Strateji Merkezi",
          "telephone": "+905336820942",
          "url": "https://kdankara.com"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Çankaya, Ankara"
        },
        "description": "Çankaya bölgesindeki kat maliklerine özel müteahhit fizibilite analizi, hukuki sözleşme kalkanı ve ücretsiz ön analiz hizmeti."
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
            "name": "Çankaya Kentsel Dönüşüm",
            "item": "https://kdankara.com/cankaya-kentsel-donusum"
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
                <MapPin className="w-4 h-4" /> Çankaya Bölgesel Strateji Merkezi
              </div>
              <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                Çankaya’da Binanızın Geleceğini Müteahhitlerin İnsafına Bırakmayın
              </h1>
              <p className="text-slate-300 text-base lg:text-lg mb-6 leading-relaxed">
                Ayrancı, Bahçelievler, Gaziosmanpaşa, Kırkkonaklar ve Çayyolu başta olmak üzere Çankaya’daki yaşlı yapı stokunda mülk sahiplerinin hakkını koruyan %100 bağımsız teknik ve hukuki danışmanlık.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" /> 
                  <span><strong>Bağımsız Emsal Analizi:</strong> Kat karşılığı oranlarının doğru tespiti</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" /> 
                  <span><strong>Hukuki Kalkan:</strong> Bina tamamlama sigortası ve fesih maddeleri</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" /> 
                  <span><strong>%51 Çoğunluk Yönetimi:</strong> Malikler arası uzlaşma ve yasal süreçler</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+905336820942"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition shadow-lg hover:scale-105"
                >
                  <PhoneCall className="w-5 h-5" /> Doğrudan Uzmanla Görüşün
                </a>
              </div>
            </div>

            {/* Lead Formu */}
            <div className="w-full">
              <OnAnalizWizard />
            </div>
          </div>
        </section>

        {/* Çankaya'ya Özel Riskler ve Stratejiler */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Çankaya Kentsel Dönüşümünde Karşılaşılan Hayati Zorluklar
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Çankaya, Ankara'nın en değerli arsa rayiçlerine sahip olmasına rağmen, dar parsel yapıları ve yüksek bina yaş ortalaması nedeniyle dönüşüm süreçlerinde özel bir uzmanlık gerektirir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Building2 className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">İmar ve Otopark Kısıtları</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bahçelievler ve Ayrancı gibi bölgelerde dar sokaklar ve yeni otopark yönetmeliği nedeniyle daire kaybı yaşanabilir. İmar planındaki tüm haklarınızı eksiksiz analiz ediyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Finansal & Hukuki Teminat</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Müteahhidin projeyi yarıda bırakma riskine karşı Bina Tamamlama Sigortası, satış kısıtlaması ve kademeli tapu devri şartlarını sözleşmeye ekliyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Scale className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Malik Hak Hakkaniyeti</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Şerefiye hesaplaması, şatış payları ve %51 salt çoğunluk kararlarının alınmasında komşular arası anlaşmazlıkları hukuki zeminde çözüyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Adım Adım Hizmet Süreci */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4">Çankaya Projelerinde 4 Adımlı Güvenlik Modeli</h2>
              <p className="text-slate-400">Hiçbir müteahhide gebe kalmadan binanızı yenileme yol haritası.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">01</span>
                <h4 className="font-bold text-lg mb-2">Ücretsiz Ön Analiz</h4>
                <p className="text-xs text-slate-300">Ada/parsel bilginizle imar durumu ve mevcut kat hakkınız incelenir.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">02</span>
                <h4 className="font-bold text-lg mb-2">Teknik Şartname</h4>
                <p className="text-xs text-slate-300">Müteahhitlerden istenecek inşaat kalitesi ve malzeme listesi hazırlanır.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">03</span>
                <h4 className="font-bold text-lg mb-2">İhale & İnceleme</h4>
                <p className="text-xs text-slate-300">Gelen müteahhit teklifleri finansal ve teknik açıdan kıyaslanır.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-black text-2xl mb-2 block">04</span>
                <h4 className="font-bold text-lg mb-2">Hukuki Zırh</h4>
                <p className="text-xs text-slate-300">Noter sözleşmesi arsa sahiplerini %100 koruyacak şekilde imzalatılır.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
    </>
  );
}