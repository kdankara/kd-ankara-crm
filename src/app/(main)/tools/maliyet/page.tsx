"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowRight,
    Banknote,
    Construction,
    Sparkles,
    BarChart3,
    AlertCircle,
    TrendingDown,
    TrendingUp,
    Share2
} from 'lucide-react';
import CalculatorLayout from '@/components/calculator/CalculatorLayout';
import CalculatorHeader from '@/components/calculator/CalculatorHeader';
import LegalDisclaimer from '@/components/calculator/LegalDisclaimer';
import LeadModal from '@/components/calculator/LeadModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCalculatorState } from '@/hooks/useCalculatorState';
import { useSEO } from '@/hooks/useSEO';
import { calculateMaliyet, validateMaliyetInputs, BASE_COSTS } from '@/lib/calculators/maliyet';
import { formatCurrency } from '@/lib/calculators/utils';
import { openWhatsApp, generateResultSummary } from '@/lib/whatsapp';
import type { MaliyetInputs, MaliyetResults, EmsalResults, KaliteSeviyesi } from '@/types/calculator';

export default function Maliyet() {
    useSEO(
        '2026 Kentsel Dönüşüm İnşaat Maliyeti Hesaplama | KD Ankara',
        '2026 güncel verileriyle metrekare bazlı inşaat maliyeti ve toplam proje bedeli tahmini yapın. Bakanlık birim maliyetleri bazlı hesaplayıcı.'
    );
    const navigate = useRouter();
    const [showLeadModal, setShowLeadModal] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [results, setResults] = useState<MaliyetResults | null>(null);

    // Initialize calculator state
    const { values, updateField, loadFromCalculator } = useCalculatorState<MaliyetInputs>({
        formType: 'maliyet',
        initialValues: {
            toplamInsaatAlani: 0,
            kalite: 'orta',
            kdvDahil: true,
        },
    });

    // Try to load data from Emsal calculator on mount
    useEffect(() => {
        const loaded = loadFromCalculator<EmsalResults>('emsal', (emsalData) => ({
            toplamInsaatAlani: emsalData.toplamInsaatAlani,
        }));

        if (loaded) {
            console.log('Loaded area from Emsal calculator');
        }
    }, [loadFromCalculator]);

    // Calculate results whenever inputs change
    useEffect(() => {
        const validationErrors = validateMaliyetInputs(values);
        setErrors(validationErrors);

        if (validationErrors.length === 0 && values.toplamInsaatAlani > 0) {
            const calculatedResults = calculateMaliyet(values);
            setResults(calculatedResults);
        } else {
            setResults(null);
        }
    }, [values]);

    const qualityOptions: { value: KaliteSeviyesi; label: string; description: string; icon: any }[] = [
        {
            value: 'ekonomik',
            label: 'Ekonomik',
            description: 'Standart malzeme, temel işçilik',
            icon: <TrendingDown className="w-5 h-5 text-gray-500" />
        },
        {
            value: 'orta',
            label: 'Orta (Standart)',
            description: 'Kaliteli malzeme, iyi işçilik',
            icon: <Construction className="w-5 h-5 text-primary-600" />
        },
        {
            value: 'ust',
            label: 'Üst (Lüks)',
            description: 'A+ malzeme, özel tasarım',
            icon: <Sparkles className="w-5 h-5 text-orange-500" />
        },
    ];

    return (
        <CalculatorLayout>
            <CalculatorHeader
                title="Maliyet Bandı"
                description="İnşaat maliyetlerini kalite seviyesine göre tahmin edin."
                requiredInfo={['Toplam inşaat alanı', 'Kalite seviyesi']}
                estimatedTime="1 dakika"
            />

            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2026 Kentsel Dönüşüm İnşaat Maliyeti Hesaplama</h2>
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                    KD Ankara Kentsel Dönüşüm Strateji Merkezi olarak hazırladığımız bu araç sayesinde, binanızın güncel yeniden yapım maliyetlerini tahmini olarak hesaplayabilirsiniz. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın 2026 yılı yapı yaklaşık birim maliyetleri ve güncel piyasa koşulları baz alınarak hazırlanan bu hesaplayıcı, mülk sahipleri ve müteahhitler için ön fizibilite yapma imkanı sunar. Kesin maliyet analizi, şerefiye hesabı ve profesyonel uzlaşma yönetimi için Ankara'daki uzman ekibimizden danışmanlık alabilirsiniz.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Form Inputs */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-primary-900 mb-6">Proje Detayları</h2>

                        <div className="space-y-6">
                            {/* Total Construction Area */}
                            <div>
                                <Label htmlFor="toplamInsaatAlani">
                                    Toplam İnşaat Alanı (m²) <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="toplamInsaatAlani"
                                    type="number"
                                    placeholder="örn. 1000"
                                    value={values.toplamInsaatAlani || ''}
                                    onChange={(e) => updateField('toplamInsaatAlani', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    step="10"
                                    className="mt-1"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Emsal hesaplamasından otomatik yüklenebilir
                                </p>
                            </div>

                            {/* Quality Level */}
                            <div>
                                <Label className="mb-3 block">Kalite Seviyesi</Label>
                                <div className="grid gap-3">
                                    {qualityOptions.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => updateField('kalite', opt.value)}
                                            className={`
                        flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left
                        ${values.kalite === opt.value
                                                    ? 'border-primary-600 bg-primary-50 ring-4 ring-primary-50'
                                                    : 'border-gray-100 bg-white hover:border-primary-200'
                                                }
                      `}
                                        >
                                            <div className={`
                        p-2 rounded-lg 
                        ${values.kalite === opt.value ? 'bg-primary-100' : 'bg-gray-50'}
                      `}>
                                                {opt.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-primary-900">{opt.label}</div>
                                                <div className="text-xs text-gray-500">{opt.description}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-primary-700">
                                                    {formatCurrency(BASE_COSTS[opt.value])}
                                                </div>
                                                <div className="text-[10px] text-gray-400 uppercase">/m² Başlangıç</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* KDV Toggle */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer select-none"
                                onClick={() => updateField('kdvDahil', !values.kdvDahil)}>
                                <div>
                                    <div className="font-bold text-gray-800">KDV Dahil (%)</div>
                                    <div className="text-xs text-gray-500">Maliyetlere %20 KDV ekler</div>
                                </div>
                                <div className={`
                                    w-12 h-6 rounded-full transition-colors relative
                                    ${values.kdvDahil ? 'bg-primary-600' : 'bg-gray-300'}
                                `}>
                                    <div className={`
                                        absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform
                                        ${values.kdvDahil ? 'translate-x-6' : ''}
                                    `} />
                                </div>
                            </div>

                            {/* Manual Override (Optional) */}
                            <div>
                                <Label htmlFor="m2Maliyet">Özel m² Maliyeti (Opsiyonel)</Label>
                                <Input
                                    id="m2Maliyet"
                                    type="number"
                                    placeholder="Kendi m² birim fiyatınızı girin"
                                    value={values.m2Maliyet || ''}
                                    onChange={(e) => updateField('m2Maliyet', parseFloat(e.target.value) || undefined)}
                                    className="mt-1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Validation Errors */}
                    {errors.length > 0 && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <ul className="text-sm text-red-600 space-y-1">
                                {errors.map((error, index) => (
                                    <li key={index}>• {error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Right: Results */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-primary-900/5 border border-primary-50">
                        <h2 className="text-lg font-bold text-primary-900 mb-6 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-primary-600" />
                            Maliyet Bandı Tahmini
                        </h2>

                        {results ? (
                            <div className="space-y-4">
                                {/* m2 Cost */}
                                <div className="bg-primary-900 text-white rounded-xl p-4 flex justify-between items-center mb-6">
                                    <div>
                                        <div className="text-xs text-primary-200">Hesaplanan m² Maliyeti</div>
                                        <div className="text-xl font-bold">{formatCurrency(results.m2Maliyet)}</div>
                                    </div>
                                    <Banknote className="w-8 h-8 opacity-50" />
                                </div>

                                {/* Range Cards */}
                                <div className="grid gap-3">
                                    {/* Low */}
                                    <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 flex justify-between items-center group hover:bg-blue-50 transition-colors">
                                        <div>
                                            <div className="text-xs font-bold text-blue-600 uppercase flex items-center gap-1">
                                                <TrendingDown className="w-3 h-3" />
                                                Düşük Senaryo
                                            </div>
                                            <div className="text-lg font-bold text-blue-900">
                                                {formatCurrency(results.dusukSenaryo)}
                                            </div>
                                        </div>
                                        <div className="text-[10px] text-blue-400 font-bold bg-white px-2 py-1 rounded-full">-10%</div>
                                    </div>

                                    {/* Medium (Target) */}
                                    <div className="p-5 rounded-xl border-2 border-primary-600 bg-white flex justify-between items-center shadow-md relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-primary-600 text-[10px] text-white px-2 py-1 rounded-bl-lg font-bold">
                                            HEDEF
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-primary-600 uppercase">
                                                Gerçekçi / Orta Seviye
                                            </div>
                                            <div className="text-2xl font-black text-primary-900">
                                                {formatCurrency(results.ortaSenaryo)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* High */}
                                    <div className="p-4 rounded-xl border border-orange-100 bg-orange-50/50 flex justify-between items-center group hover:bg-orange-50 transition-colors">
                                        <div>
                                            <div className="text-xs font-bold text-orange-600 uppercase flex items-center gap-1">
                                                <TrendingUp className="w-3 h-3" />
                                                Yüksek Senaryo
                                            </div>
                                            <div className="text-lg font-bold text-orange-900">
                                                {formatCurrency(results.yuksekSenaryo)}
                                            </div>
                                        </div>
                                        <div className="text-[10px] text-orange-400 font-bold bg-white px-2 py-1 rounded-full">+10%</div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3 pt-6">
                                    <Button
                                        onClick={() => setShowLeadModal(true)}
                                        className="w-full bg-accent hover:bg-accent/90 h-14 text-lg font-bold shadow-lg shadow-accent/20"
                                        size="lg"
                                    >
                                        Raporu Almak İçin Numaranızı Bırakın
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>

                                    <Button
                                        onClick={() => {
                                            const summary = generateResultSummary('maliyet', results);
                                            openWhatsApp({
                                                ilce: 'Ankara',
                                                mahalle: '',
                                                arsaTipi: 'kentsel dönüşüm',
                                                sonucOzet: summary,
                                                telefon: '',
                                            });
                                        }}
                                        variant="outline"
                                        className="w-full h-12"
                                        size="lg"
                                    >
                                        <Share2 className="w-4 h-4 mr-2" />
                                        Sonucu Paylaş
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-16 text-gray-400">
                                <Construction className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                <p>Alanı girin ve kalite seçin,<br />maliyet bandı burada görünecek</p>
                            </div>
                        )}
                    </div>

                    {/* Info Box */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-4">
                        <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                        <div className="text-sm text-amber-900 italic">
                            * Verilen rakamlar Ankara ortalaması baz alınarak hesaplanmıştır. Müteahhit kârı, hafriyat zorluğu ve özel mimari talepler bu rakamları %20-30 oranında değiştirebilir.
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 space-y-16">
                {/* Detailed Analysis Section */}
                <section className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary-900 mb-8 border-b-2 border-accent/20 pb-4">
                            2026 İnşaat Maliyetleri Analizi ve Kentsel Dönüşüm Finansmanı
                        </h2>
                        
                        <div className="prose prose-lg prose-slate max-w-none">
                            <p>
                                Kentsel dönüşüm sürecinde "kendi binasını kendi yaptırmak" isteyen veya müteahhit tekliflerini denetlemek isteyen malikler için <strong>İnşaat Maliyeti</strong> en kritik veridir. 2026 yılı itibarıyla küresel emtia fiyatları, döviz kurları ve işçilik maliyetlerindeki değişimler, metrekare birim fiyatlarını doğrudan etkilemektedir.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Kaba İnşaat ve İnce İnşaat Ayrımı</h3>
                            <p>
                                Bir binanın toplam maliyeti genellikle iki ana kaleme ayrılır:
                            </p>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Kaba İnşaat (%40-%45):</strong> Hafriyat, betonarme karkas, demir, kalıp ve duvar işlerini kapsar. Bu kalem, binanın taşıyıcı sistemini oluşturduğu için güvenlik açısından en hayati kısımdır.
                                </li>
                                <li>
                                    <strong>İnce İnşaat (%55-%60):</strong> Cephe kaplama, doğramalar, elektrik-mekanik tesisat, asansör, zemin kaplamaları ve mutfak-banyo mobilyalarını kapsar. Seçtiğiniz "Kalite Seviyesi" (Ekonomik, Orta, Lüks) en çok bu kalemi etkiler.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Bakanlık Birim Maliyetleri vs. Piyasa Gerçekleri</h3>
                            <p>
                                Çevre, Şehircilik ve İklim Değişikliği Bakanlığı her yıl "Yapı Yaklaşık Birim Maliyetleri" yayınlar. Ancak bu rakamlar genellikle kamu ihaleleri ve vergilendirme için bir alt limit niteliğindedir. Ankara piyasasında (Çankaya, Yenimahalle vb.) gerçek inşaat maliyetleri, bakanlık rakamlarının %20 ile %40 üzerinde seyredebilmektedir. 
                            </p>
                            <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-accent">
                                <strong>Önemli Hatırlatma:</strong> Hesaplama aracımız, hem bakanlık verilerini hem de KD Ankara'nın Ankara genelindeki güncel saha verilerini harmanlayarak size en gerçekçi "Maliyet Bandı"nı sunar.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Ankara'da İnşaat Maliyetini Etkileyen Yerel Faktörler</h3>
                            <p>
                                Ankara'nın zemin yapısı (kayaç veya dolgu zemin olması), hafriyat maliyetlerini ciddi oranda değiştirebilir. Örneğin, İncek bölgesindeki bir proje ile Batıkent'teki bir projenin temel maliyetleri aynı olmayacaktır. Ayrıca;
                            </p>
                            <ul>
                                <li><strong>Lojistik:</strong> Şehir merkezindeki dar sokaklarda (Ayrancı, Esat gibi) beton mikseri ve vinç operasyonlarının zorluğu maliyeti artırır.</li>
                                <li><strong>Enerji Verimliliği:</strong> Yeni yönetmeliklere göre binaların ısı yalıtım standartlarının yükselmesi, cephe maliyetlerini etkilemektedir.</li>
                            </ul>

                            <div className="bg-primary-50 p-10 rounded-[3rem] my-12 border border-primary-100">
                                <h4 className="text-xl font-bold text-primary-950 mb-4">Görünmeyen (Gizli) Maliyetler</h4>
                                <p className="text-sm leading-relaxed mb-4">İnşaat sadece demir ve betondan ibaret değildir. Proje bütçenizi hazırlarken şu kalemleri unutmamalısınız:</p>
                                <div className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                                    <div className="flex items-center gap-2">✓ Zemin Etüdü ve Mimari Projeler</div>
                                    <div className="flex items-center gap-2">✓ Belediye Ruhsat ve Harç Bedelleri</div>
                                    <div className="flex items-center gap-2">✓ Yapı Denetim Hizmet Bedeli</div>
                                    <div className="flex items-center gap-2">✓ Şantiye Elektrik-Su Bağlantıları</div>
                                    <div className="flex items-center gap-2">✓ SGK ve Vergi Ödemeleri</div>
                                    <div className="flex items-center gap-2">✓ İş Güvenliği Danışmanlığı</div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4 italic">Kentsel Dönüşüm Kredisi ve Devlet Desteği</h3>
                            <p>
                                Maliyetleri karşılamakta zorlanan malikler için 2026 kentsel dönüşüm kredileri hayat kurtarıcıdır. Bakanlık onaylı projelerde sunulan faiz desteği ve uzun vade seçenekleri, inşaatın finansmanını kolaylaştırır. KD Ankara olarak, finansal çözüm ortaklarımızla size en uygun ödeme planını oluşturuyoruz.
                            </p>

                            <div className="bg-slate-900 text-white p-10 rounded-[3rem] mt-16 text-center">
                                <h3 className="text-2xl font-bold mb-4">Detaylı Keşif ve Metraj İstiyor Musunuz?</h3>
                                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                                    Binanız için özel bir şartname hazırlayalım ve tüm maliyetleri kalem kalem (demir tonajı, beton sınıfı vb.) önünüze koyalım. Sürpriz maliyetlerle karşılaşmayın.
                                </p>
                                <Button 
                                    onClick={() => navigate.push('/on-analiz')}
                                    className="bg-accent hover:bg-accent-600 text-white px-12 h-14 rounded-2xl font-bold text-lg transition-all"
                                >
                                    Fizibilite Raporu İste
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <LegalDisclaimer />

            {/* Lead Modal */}
            <LeadModal
                isOpen={showLeadModal}
                onClose={() => setShowLeadModal(false)}
                calculatorType="maliyet"
                calculatorData={results}
                preFilledData={{}}
            />
        </CalculatorLayout>
    );
}
