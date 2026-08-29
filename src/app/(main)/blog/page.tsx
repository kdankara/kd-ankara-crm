import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import { 
  FileText, Calendar, HelpCircle, Wallet, ShieldCheck, ChevronLeft 
} from 'lucide-react';
import Link from 'next/link';

// Diğer blog yazıları için kullanacağınız veri kaynağınız (Varsa)
// import { blogPosts } from '@/data/posts'; 

export async function generateStaticParams() {
  return [
    { slug: '2026-kentsel-donusum-kira-yardimi' },
    { slug: 'emsal-hesaplama-rehberi' },
    { slug: 'muteahhit-secerken-dikkat-edilmesi-gerekenler' },
    { slug: '6306-sayili-kanun-haklariniz' },
    { slug: 'teknik-kadro-uzmanligimiz' },
    { slug: 'ankara-referans-projeler' },
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  if (params.slug === '2026-kentsel-donusum-kira-yardimi') {
    return {
      title: 'Ankara Kentsel Dönüşüm Kira Yardımı Rehberi (2025-2026) | KD Ankara',
      description: "Ankara'da ev sahipleri için aylık 6.500 TL (18 ay), kiracılar için 13.000 TL tek seferlik kentsel dönüşüm kira yardımı başvuru şartları, gerekli belgeler ve e-Devlet rehberi.",
      alternates: {
        canonical: 'https://kdankara.com/blog/2026-kentsel-donusum-kira-yardimi',
      },
    };
  }
  // Diğer slug'lar için standart metadata dönecek. Geliştirilebilir.
  return { title: 'Blog | KD Ankara' };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {

  // KİRA YARDIMI SAYFASI İÇİN ÖZEL TASARIM (Veri tabanından çekmez, doğrudan render eder)
  if (params.slug === '2026-kentsel-donusum-kira-yardimi') {
    return (
      <article className="min-h-screen bg-slate-50 pb-16">
        
        {/* Header Hero */}
        <section className="bg-slate-900 text-white py-12 px-4 border-b border-slate-800">
          <div className="container mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 text-xs mb-6 transition">
              <ChevronLeft className="w-4 h-4" /> Tüm Blog Yazıları
            </Link>

            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-amber-500/20">
              <Calendar className="w-3.5 h-3.5" /> MEVZUAT & TEŞVİKLER (2025 - 2026)
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Ankara Kentsel Dönüşüm Kira Yardımı Rehberi
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              İnşaat süresince devlet tarafından sağlanan 18 aylık karşılıksız kira desteği, başvuru evrakları ve 6306 sayılı kanun kapsamındaki tüm haklarınız.
            </p>
          </div>
        </section>

        {/* Kartlar ve İçerik */}
        <div className="container mx-auto px-4 max-w-4xl -mt-8 relative z-10">
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Ev & İşyeri Sahipleri</span>
              <div className="text-2xl font-black text-slate-900 my-1">6.500 ₺ <span className="text-xs font-normal text-slate-500">/ Ay</span></div>
              <p className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">18 ay boyunca (Toplam 117.000 ₺)</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Konut Kiracıları</span>
              <div className="text-2xl font-black text-slate-900 my-1">13.000 ₺</div>
              <p className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">Taşınma desteği (Tek seferlik)</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Ayni Hak Sahipleri</span>
              <div className="text-2xl font-black text-slate-900 my-1">32.500 ₺</div>
              <p className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">İkamet şartıyla (Tek seferlik)</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200 space-y-8 text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-amber-500" /> Ankara Güncel Destek Tablosu
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
                    <tr><td className="p-3 font-semibold text-slate-900">Malik (Ev / İşyeri Sahibi)</td><td className="p-3 text-amber-600 font-bold">6.500 TL</td><td className="p-3">18 Ay Düzenli</td><td className="p-3 text-slate-500">Aranmaz</td></tr>
                    <tr><td className="p-3 font-semibold text-slate-900">Konut Kiracısı</td><td className="p-3 text-amber-600 font-bold">13.000 TL</td><td className="p-3">Tek Seferlik (Defaten)</td><td className="p-3 text-emerald-600 font-semibold">Zorunlu (Son 3 ay)</td></tr>
                    <tr><td className="p-3 font-semibold text-slate-900">Sınırlı Ayni Hak Sahibi</td><td className="p-3 text-amber-600 font-bold">32.500 TL</td><td className="p-3">Tek Seferlik (Defaten)</td><td className="p-3 text-emerald-600 font-semibold">Zorunlu</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" /> Kira Yardımı Başvuru Şartları
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-1">1. Riskli Yapı Tescili</strong>
                  <p className="text-slate-600">6306 sayılı kanun kapsamında resmi Riskli Yapı Raporu alınmış ve kesinleşmiş olmalıdır.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-1">2. 1 Yıllık Hak Düşürücü Süre</strong>
                  <p className="text-slate-600">Başvuruların, binanın tahliye edildiği veya yıkıldığı tarihten itibaren 1 yıl içinde yapılması gerekir.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-1">3. Kredi vs Kira Yardımı Engeli</strong>
                  <p className="text-slate-600">Aynı bağımsız bölüm için hem faiz destekli kredi hem de kira yardımı kullanılamaz.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-1">4. Ziraat Bankası Hesabı</strong>
                  <p className="text-slate-600">Ödemeler doğrudan hak sahibinin Ziraat Bankası vadesiz TL hesabına aktarılır.</p>
                </div>
              </div>
            </section>

            <section className="bg-slate-900 text-white p-6 rounded-xl space-y-4">
              <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                <FileText className="w-5 h-5" /> Başvuru İçin Gerekli Belgeler
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div>
                  <strong className="text-slate-200 block mb-2 border-b border-slate-700 pb-1">Malikler İçin:</strong>
                  <ul className="space-y-1.5 text-slate-300">
                    <li>• Başvuru dilekçesi & Kimlik fotokopisi</li>
                    <li>• Güncel tapu belgesi & Taşınmaz kaydı</li>
                    <li>• Adres bilgileri raporu (Tahliye teyidi)</li>
                    <li>• A.R.A.A.D. elektronik yıkım kaydı</li>
                    <li>• Ziraat Bankası vadesiz TL IBAN görseli</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-200 block mb-2 border-b border-slate-700 pb-1">Kiracılar İçin:</strong>
                  <ul className="space-y-1.5 text-slate-300">
                    <li>• Başvuru dilekçesi & Kimlik fotokopisi</li>
                    <li>• Nüfus Müdürlüğü adres bilgileri raporu</li>
                    <li>• Tahliye öncesi son 3 aya ait fatura</li>
                    <li>• A.R.A.A.D. elektronik yıkım kaydı</li>
                    <li>• Ziraat Bankası vadesiz TL IBAN görseli</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-500" /> Sıkça Sorulan Sorular
              </h2>
              <div className="border border-slate-200 p-4 rounded-xl text-sm">
                <strong className="text-slate-900 block mb-1">Kira yardımı geri ödemeli mi?</strong>
                <p className="text-slate-600">Hayır, kentsel dönüşüm kira yardımı hibe niteliğindedir ve devlet tarafından geri talep edilmez.</p>
              </div>
              <div className="border border-slate-200 p-4 rounded-xl text-sm">
                <strong className="text-slate-900 block mb-1">İskansız binalar kira yardımı alabilir mi?</strong>
                <p className="text-slate-600">Evet. Arsa paylı tapularda belediyeden alınacak emlak vergi beyannamesinin "bina" türünde olması yeterlidir.</p>
              </div>
            </section>
          </div>

          <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="max-w-2xl mx-auto text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Binanız İçin En Avantajlı Modeli Belirleyelim</h3>
              <p className="text-slate-300 text-sm">
                Kira yardımı mı yoksa faiz indirimi mi sizin için daha karlı? 24 saat içinde ücretsiz ön analiz raporunuzu hazırlayalım.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-slate-900 max-w-xl mx-auto">
              <OnAnalizWizard />
            </div>
          </div>
        </div>
      </article>
    );
  }

  // DİĞER SLUG'LAR İÇİN FALLBACK (Geçici)
  // Diğer yazılar tıklandığında hata vermemesi için boş bir şablon döner. 
  // Gerçek veri kaynağınızı (blogPosts) bağladığınızda bu kısmı güncelleyebilirsiniz.
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">İçerik Hazırlanıyor</h1>
        <Link href="/blog" className="text-amber-600 hover:underline">
          Blog'a Dön
        </Link>
      </div>
    </div>
  );
}