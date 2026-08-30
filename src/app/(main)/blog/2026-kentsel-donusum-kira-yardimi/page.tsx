import { Metadata } from 'next';
import OnAnalizWizard from '@/components/forms/OnAnalizWizard';
import { 
  FileText, CheckCircle, Calendar, HelpCircle, 
  CreditCard, ShieldAlert, Building2 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ankara Kentsel Dönüşüm Kira Yardımı Rehberi (2025-2026 Güncel Tutarlar) | KD Ankara',
  description: 'Ankara 2025-2026 kentsel dönüşüm kira yardımı ne kadar? Malikler için 6.500 TL, kiracılar için 13.000 TL destek başvuru şartları.',
};

export default function KiraYardimiPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full text-sm mb-4 font-semibold border border-amber-500/20">
            <Calendar className="w-4 h-4" /> 2025 - 2026 Güncel Mevzuat Rehberi
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
            Ankara Kentsel Dönüşüm Kira Yardımı Rehberi
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            İnşaat süresince kira maliyetlerinizi nasıl karşılayacaksınız? Ankara özelinde güncel destek tutarları ve başvuru adımları.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-slate-200 text-slate-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-amber-500" />
              1. Ankara Kentsel Dönüşüm Kira Yardımı Tutarları
            </h2>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Ev ve İşyeri Sahipleri</span>
                <div className="text-2xl font-extrabold text-slate-900 my-1">6.500 TL / Ay</div>
                <p className="text-xs text-slate-500">18 ay boyunca düzenli ödenir.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Kiracılar</span>
                <div className="text-2xl font-extrabold text-slate-900 my-1">13.000 TL</div>
                <p className="text-xs text-slate-500">Tek seferlik taşınma desteği.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Ayni Hak Sahipleri</span>
                <div className="text-2xl font-extrabold text-slate-900 my-1">32.500 TL</div>
                <p className="text-xs text-slate-500">İkamet şartıyla tek seferlik.</p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-500" />
              2. Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">Kira yardımı geri ödemeli mi?</h3>
                <p className="text-sm text-slate-600">Hayır, hibe niteliğindedir ve geri talep edilmez.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 shadow-xl">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Binanız İçin En Avantajlı Senaryoyu Belirleyelim</h3>
          </div>
          <div className="bg-white rounded-xl p-6 text-slate-900 max-w-xl mx-auto">
            <OnAnalizWizard />
          </div>
        </div>
      </article>
    </main>
  );
}