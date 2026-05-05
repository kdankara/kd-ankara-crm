"use client";

// Müteahhit Mini Fizibilite (Contractor Feasibility) Calculator Page

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Building2,
    TrendingUp,
    DollarSign,
    PieChart,
    ArrowRight,
    Info,
    CheckCircle2,
    AlertTriangle,
    Target,
    Share2
} from 'lucide-react';
import CalculatorLayout from '@/components/calculator/CalculatorLayout';
import CalculatorHeader from '@/components/calculator/CalculatorHeader';
import ResultCard from '@/components/calculator/ResultCard';
import LegalDisclaimer from '@/components/calculator/LegalDisclaimer';
import LeadModal from '@/components/calculator/LeadModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCalculatorState } from '@/hooks/useCalculatorState';
import { useSEO } from '@/hooks/useSEO';
import { calculateMuteahhitMini, validateMuteahhitMiniInputs } from '@/lib/calculators/muteahhit-mini';
import { formatCurrency, formatNumber } from '@/lib/calculators/utils';
import { openWhatsApp, generateResultSummary } from '@/lib/whatsapp';
import type { MuteahhitMiniInputs, MuteahhitMiniResults } from '@/types/calculator';

export default function MuteahhitMini() {
    useSEO(
        'Müteahhit Mini Fizibilite Analizi',
        'Müteahhitler için hızlı finansal fizibilite, kar marjı ve yatırım geri dönüşü analizi.'
    );
    const navigate = useRouter();
    const [showLeadModal, setShowLeadModal] = useState(false);
    const [results, setResults] = useState<MuteahhitMiniResults | null>(null);

    // Initialize calculator state
    const { values, updateField } = useCalculatorState<MuteahhitMiniInputs>({
        formType: 'muteahhit-mini',
        initialValues: {
            arsaAlani: 0,
            emsal: 1.5,
            ortakAlanOrani: 25,
            satisFiyati: 0,
            maliyet: 35000,
            hedefKar: 30,
        },
    });

    // Calculate results whenever inputs change
    useEffect(() => {
        const validationErrors = validateMuteahhitMiniInputs(values);

        if (validationErrors.length === 0 && values.arsaAlani > 0 && values.satisFiyati > 0) {
            const calculatedResults = calculateMuteahhitMini(values);
            setResults(calculatedResults);
        } else {
            setResults(null);
        }
    }, [values]);

    return (
        <CalculatorLayout>
            <CalculatorHeader
                title="Müteahhit Mini Fizibilite"
                description="Arsa verileri ve maliyet öngörüleri ile projenizin temel finansal analizini yapın."
                requiredInfo={['Arsa alanı', 'Emsal', 'Tahmini maliyet ve satış fiyatı']}
                estimatedTime="3 dakika"
            />

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Form Inputs */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-primary-900 mb-6 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-primary-600" />
                            Proje & Arsa Verileri
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="arsaAlani">Arsa Alanı (m²)</Label>
                                <Input
                                    id="arsaAlani"
                                    type="number"
                                    value={values.arsaAlani || ''}
                                    onChange={(e) => updateField('arsaAlani', parseFloat(e.target.value) || 0)}
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="emsal">Emsal (KAKS)</Label>
                                <Input
                                    id="emsal"
                                    type="number"
                                    step="0.1"
                                    value={values.emsal || ''}
                                    onChange={(e) => updateField('emsal', parseFloat(e.target.value) || 0)}
                                    placeholder="1.5"
                                />
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <Label>Ortak Alan Artışı (%)</Label>
                                <span className="text-sm font-bold text-primary-600">%{values.ortakAlanOrani}</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                step="1"
                                value={values.ortakAlanOrani}
                                onChange={(e) => updateField('ortakAlanOrani', parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                            />
                            <p className="text-[10px] text-gray-400">Genellikle %20-%30 arasıdır (Sosyal alanlar, otopark vb.)</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-primary-900 mb-6 flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-green-600" />
                            Finansal Öngörüler
                        </h2>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="maliyet">İnşaat Maliyeti (₺ / m²)</Label>
                                <div className="relative">
                                    <Input
                                        id="maliyet"
                                        type="number"
                                        value={values.maliyet || ''}
                                        onChange={(e) => updateField('maliyet', parseFloat(e.target.value) || 0)}
                                        className="pl-8"
                                    />
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₺</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="satisFiyati">Tahmini Satış Fiyatı (₺ / m²)</Label>
                                <div className="relative">
                                    <Input
                                        id="satisFiyati"
                                        type="number"
                                        value={values.satisFiyati || ''}
                                        onChange={(e) => updateField('satisFiyati', parseFloat(e.target.value) || 0)}
                                        className="pl-8"
                                    />
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₺</div>
                                </div>
                            </div>

                            <div className="pt-4 space-y-4 border-t border-gray-50">
                                <div className="flex justify-between items-center">
                                    <Label className="flex items-center gap-2">
                                        <Target className="w-4 h-4 text-orange-500" />
                                        Hedef Kar Marjı (%)
                                    </Label>
                                    <span className="text-sm font-bold text-orange-600">%{values.hedefKar}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value={values.hedefKar}
                                    onChange={(e) => updateField('hedefKar', parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Results Dashboard */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-primary-900/5 border border-primary-50">
                        <h2 className="text-lg font-bold text-primary-900 mb-8 flex items-center gap-2">
                            <PieChart className="w-5 h-5 text-primary-600" />
                            Fizibilite Özeti
                        </h2>

                        {results ? (
                            <div className="space-y-8">
                                {/* Physical Area Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-primary-50 rounded-xl p-4">
                                        <div className="text-[10px] uppercase font-bold text-primary-600 mb-1">Toplam İnşaat Alanı</div>
                                        <div className="text-xl font-black text-primary-900">{formatNumber(results.toplamInsaatAlani)} m²</div>
                                    </div>
                                    <div className="bg-blue-50 rounded-xl p-4">
                                        <div className="text-[10px] uppercase font-bold text-blue-600 mb-1">Satılabilir Brüt Alan</div>
                                        <div className="text-xl font-black text-blue-900">{formatNumber(results.satilabilirBrutAlan)} m²</div>
                                    </div>
                                </div>

                                {/* Financial Totals */}
                                <div className="space-y-4">
                                    <ResultCard
                                        title="Tahmini Toplam Maliyet"
                                        value={formatCurrency(results.toplamMaliyet)}
                                        icon={<DollarSign className="w-5 h-5" />}
                                        variant="default"
                                        subtitle="Tüm inşaat ve ortak alan masrafları dahil"
                                    />
                                    <ResultCard
                                        title="Tahmini Toplam Ciro"
                                        value={formatCurrency(results.toplamCiro)}
                                        icon={<TrendingUp className="w-5 h-5" />}
                                        variant="success"
                                        subtitle="Satılabilir alan üzerinden toplam gelir"
                                    />
                                    <ResultCard
                                        title="Projeksiyon Edilen Kar"
                                        value={formatCurrency(results.toplamCiro - results.toplamMaliyet)}
                                        icon={<DollarSign className="w-5 h-5" />}
                                        variant="info"
                                        subtitle={`Kar Marjı: %${formatNumber(results.karMarji, 1)}`}
                                    />
                                </div>

                                {/* Market Advice */}
                                <div className={`p-4 rounded-xl border flex gap-4 ${results.karMarji >= values.hedefKar ? 'bg-green-50 border-green-100' : 'bg-orange-50 border-orange-100'}`}>
                                    {results.karMarji >= values.hedefKar ? (
                                        <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                    ) : (
                                        <AlertTriangle className="w-6 h-6 text-orange-600 shrink-0" />
                                    )}
                                    <div className="text-sm leading-tight">
                                        <strong className={results.karMarji >= values.hedefKar ? 'text-green-900' : 'text-orange-900'}>
                                            {results.karMarji >= values.hedefKar ? 'Verimli Proje' : 'Düşük Kar Marjı'}
                                        </strong>
                                        <p className="text-gray-600 mt-1">
                                            {results.karMarji >= values.hedefKar
                                                ? 'Hesaplanan kar marjı hedefinizin üzerinde. Proje uygulanabilir görünüyor.'
                                                : 'Mevcut maliyet/satış dengesi hedef karınızın altında kalmaktadır.'}
                                        </p>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3 pt-6 border-t border-gray-100">
                                    <Button
                                        onClick={() => setShowLeadModal(true)}
                                        className="w-full bg-accent hover:bg-accent/90 h-14 text-lg font-bold"
                                        size="lg"
                                    >
                                        Raporu Almak İçin Numaranızı Bırakın
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>

                                    <Button
                                        onClick={() => {
                                            const summary = generateResultSummary('muteahhit-mini', results);
                                            openWhatsApp({
                                                ilce: 'Ankara',
                                                mahalle: '',
                                                arsaTipi: 'muteahhit',
                                                sonucOzet: summary,
                                                telefon: '',
                                            });
                                        }}
                                        variant="outline"
                                        className="w-full h-12"
                                        size="lg"
                                    >
                                        <Share2 className="w-4 h-4 mr-2" />
                                        WhatsApp ile Paylaş
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-20 text-gray-400">
                                <PieChart className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                <p>Arsa ve fiyat verilerini girerek<br />fizibiliteyi görün</p>
                            </div>
                        )}
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-4">
                        <Info className="w-6 h-6 text-blue-600 shrink-0" />
                        <div className="text-xs text-blue-900 leading-relaxed">
                            Bu araç sadece temel ön fizibilite amaçlıdır. Vergi yükümlülükleri, arsa bedeli, kredi maliyetleri ve operasyonel giderler ayrıca hesaplanmalıdır.
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 space-y-16">
                {/* Professional Developer Guide */}
                <section className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary-900 mb-8 border-b-2 border-accent/20 pb-4">
                            Gayrimenkul Geliştirme ve Fizibilite Analizi Rehberi
                        </h2>
                        
                        <div className="prose prose-lg prose-slate max-w-none">
                            <p>
                                İnşaat sektöründe bir projenin başarısı, henüz ilk tuğla konmadan çok önce, <strong>Fizibilite Analizi</strong> aşamasında belirlenir. Özellikle kentsel dönüşümün yoğun olduğu Ankara piyasasında (Çankaya, Gölbaşı, İncek), müteahhitler için "hızlı ve doğru" karar verme yeteneği, rekabet avantajı sağlar.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Ön Fizibilite Neden Hayatidir?</h3>
                            <p>
                                Bir arsa için teklif vermeden veya bir apartmanla kat karşılığı görüşmesine oturmadan önce projenin ekonomik sınırlarını bilmek gerekir. <strong>Müteahhit Mini Fizibilite</strong> aracımız, şu üç temel soruya yanıt verir:
                            </p>
                            <ul>
                                <li><strong>Hasılat Potansiyeli:</strong> Bölgedeki güncel m² satış fiyatları üzerinden projenin toplam cirosu ne olur?</li>
                                <li><strong>Maliyet Tahmini:</strong> İnşaat kalitesi ve ortak alan oranlarına göre toplam yatırım bütçesi nedir?</li>
                                <li><strong>Kar Marjı:</strong> Finansal riskleri karşılayacak düzeyde bir karlılık mevcut mu?</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">İnşaat Ekonomisinde Risk Yönetimi</h3>
                            <p>
                                Gayrimenkul geliştirme süreçleri, 18-36 ay süren uzun soluklu yatırımlardır. Bu süreçte maliyet enflasyonu ve faiz oranlarındaki değişimler kar marjlarını baskılayabilir. 
                            </p>
                            <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-accent italic">
                                <strong>Uzman Görüşü:</strong> 2026 piyasa koşullarında, bir projenin sürdürülebilir olması için brüt kar marjının %30-35'in altına düşmemesi önerilir. Beklenmeyen giderler (zemin sürprizleri, imar değişiklikleri, pazarlama maliyetleri) genellikle bütçenin %5-10'unu yutabilir.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Ankara Bölgesel Stratejileri</h3>
                            <p>
                                Fizibilite yaparken projenin konumu, satış stratejinizi belirler:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-10 text-sm">
                                <div className="bg-primary-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-primary-900 mb-2">Merkezi İlçeler (Çankaya, Yenimahalle)</h4>
                                    <p className="text-gray-700 leading-relaxed">Arsa payları yüksek, inşaat alanları kısıtlıdır. Karlılık için "Lüks Segment" ve "Butik Proje" odaklı, m² satış fiyatını maksimize eden tasarımlar tercih edilmelidir.</p>
                                </div>
                                <div className="bg-primary-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-primary-900 mb-2">Gelişim Bölgeleri (Etimesgut, Batıkent)</h4>
                                    <p className="text-gray-700 leading-relaxed">Ölçek ekonomisi ön plandadır. Çok sayıda daire içeren siteler, inşaat birim maliyetini düşürerek sürümden kazanma imkanı sunar.</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Görünmeyen Maliyet Kalemleri</h3>
                            <p>
                                Fizibilite dosyanızda sadece demir-beton maliyeti olmamalıdır. Bir projenin "Yumuşak Maliyetleri" (Soft Costs) projenin kaderini değiştirebilir:
                            </p>
                            <ul className="space-y-2">
                                <li><strong>Finansman Maliyeti:</strong> Özkaynak kullanımı yerine kredi kullanılıyorsa, faiz yükü maliyete eklenmelidir.</li>
                                <li><strong>Pazarlama ve Satış:</strong> Örnek daire, reklam bütçesi ve emlak komisyonları cironun %3-%5'ini oluşturur.</li>
                                <li><strong>Vergi ve Harçlar:</strong> KDV iadeleri, stopajlar ve belediye ruhsat harçları nakit akışında doğru planlanmalıdır.</li>
                            </ul>

                            <div className="bg-primary-950 text-white p-10 rounded-[3rem] my-12 border border-accent/20 relative overflow-hidden">
                                <h4 className="text-xl font-bold text-accent mb-4">Müteahhitler İçin Sıkça Sorulan Sorular</h4>
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="font-bold text-white">Emsal harici alanlar kara nasıl yansır?</h5>
                                        <p className="text-sm text-primary-100 leading-relaxed">Otopark, sığınak ve sosyal alan gibi emsal dışı bırakılan alanların optimize edilmesi, toplam inşaat maliyetini artırsa da projenin "Pazarlanabilir Değerini" ve satış fiyatını yukarı çeker.</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white">Fiyat endekslerini nasıl takip etmeliyiz?</h5>
                                        <p className="text-sm text-primary-100 leading-relaxed">TÜİK İnşaat Maliyet Endeksi ve bölgesel konut satış verileri periyodik olarak fizibilite dosyalarına güncellenmelidir.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="text-center py-10">
                    <h2 className="text-3xl font-bold text-primary-900 mb-6 italic">Profesyonel Proje Geliştirme Danışmanlığı</h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                        Arsanız veya projeniz için 360 derece finansal analiz, pazar araştırması ve satış stratejisi hazırlayalım. Risklerinizi minimize edin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => navigate.push('/on-analiz')}
                            className="bg-accent hover:bg-accent-600 text-white px-12 h-14 rounded-2xl font-bold text-lg shadow-xl shadow-accent/20 transition-all"
                        >
                            Fizibilite Raporu Hazırlat
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => window.location.href = 'tel:+905000000000'}
                            className="border-primary-900 text-primary-900 px-12 h-14 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all"
                        >
                            Teknik Ekibe Bağlan
                        </Button>
                    </div>
                </section>
            </div>

            <LegalDisclaimer />

            <LeadModal
                isOpen={showLeadModal}
                onClose={() => setShowLeadModal(false)}
                calculatorType="muteahhit-mini"
                calculatorData={results}
                preFilledData={{}}
            />
        </CalculatorLayout>
    );
}
