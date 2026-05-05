"use client";

// Paylaşım Simülatörü (Revenue Sharing) Calculator Page

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, PieChart, TrendingUp, Share2, AlertCircle } from 'lucide-react';
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
import { calculatePaylasim, validatePaylasimInputs } from '@/lib/calculators/paylasim';
import { formatCurrency, formatPercentage } from '@/lib/calculators/utils';
import { openWhatsApp, generateResultSummary } from '@/lib/whatsapp';
import type { PaylasimInputs, PaylasimResults, DaireResults } from '@/types/calculator';

export default function Paylasim() {
    useSEO(
        'Kat Karşılığı Paylaşım Simülatörü',
        'Malik ve müteahhit arasındaki kat karşılığı paylaşım oranlarını ve daire dağılımını analiz edin.'
    );
    const navigate = useRouter();
    const [showLeadModal, setShowLeadModal] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [results, setResults] = useState<PaylasimResults | null>(null);
    const [malikPayOrani, setMalikPayOrani] = useState<number>(40); // Default 40% for owner

    // Initialize calculator state
    const { values, updateField, loadFromCalculator } = useCalculatorState<PaylasimInputs>({
        formType: 'paylasim',
        initialValues: {
            toplamDaireAdedi: 0,
            ortalamaDaireM2: 100,
            m2Fiyat: 50000,
            arsaDegeri: 0,
            yikim: 500000,
            geciciKonut: 300000,
            diger: 0,
        },
    });

    // Try to load data from Daire calculator on mount
    useEffect(() => {
        const loaded = loadFromCalculator<DaireResults>('daire', (daireData) => ({
            toplamDaireAdedi: daireData.tahminiDaireAdedi,
            ortalamaDaireM2: Math.round(daireData.satilabilirBrutAlan / daireData.tahminiDaireAdedi),
        }));

        if (loaded) {
            console.log('Loaded unit data from Daire calculator');
        }
    }, [loadFromCalculator]);

    // Calculate results whenever inputs or share ratio change
    useEffect(() => {
        const validationErrors = validatePaylasimInputs(values);
        setErrors(validationErrors);

        if (validationErrors.length === 0 && values.toplamDaireAdedi > 0) {
            const calculatedResults = calculatePaylasim(values, malikPayOrani);
            setResults(calculatedResults);
        } else {
            setResults(null);
        }
    }, [values, malikPayOrani]);

    return (
        <CalculatorLayout>
            <CalculatorHeader
                title="Paylaşım Simülatörü"
                description="Malik ve müteahhit payları nasıl dağılır?"
                requiredInfo={['Daire adedi', 'Ortalama m²', 'm² fiyat']}
                estimatedTime="2 dakika"
            />

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Form Inputs */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-primary-900 mb-6">Proje Bilgileri</h2>

                        <div className="space-y-6">
                            {/* Total Units */}
                            <div>
                                <Label htmlFor="toplamDaireAdedi">
                                    Toplam Daire Adedi <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="toplamDaireAdedi"
                                    type="number"
                                    placeholder="örn. 10"
                                    value={values.toplamDaireAdedi || ''}
                                    onChange={(e) => updateField('toplamDaireAdedi', parseInt(e.target.value) || 0)}
                                    min="0"
                                    step="1"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Daire hesaplamasından otomatik yüklendi
                                </p>
                            </div>

                            {/* Average Unit Size */}
                            <div>
                                <Label htmlFor="ortalamaDaireM2">
                                    Ortalama Daire m² <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="ortalamaDaireM2"
                                    type="number"
                                    placeholder="örn. 100"
                                    value={values.ortalamaDaireM2}
                                    onChange={(e) => updateField('ortalamaDaireM2', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    step="1"
                                />
                            </div>

                            {/* Price per m² */}
                            <div>
                                <Label htmlFor="m2Fiyat">
                                    m² Satış Fiyatı (TL) <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="m2Fiyat"
                                    type="number"
                                    placeholder="örn. 50000"
                                    value={values.m2Fiyat}
                                    onChange={(e) => updateField('m2Fiyat', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    step="1000"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Bölgedeki güncel piyasa fiyatı
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Costs */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-primary-900 mb-6">Ek Maliyetler</h2>

                        <div className="space-y-6">
                            {/* Land Value */}
                            <div>
                                <Label htmlFor="arsaDegeri">Arsa Değeri (TL)</Label>
                                <Input
                                    id="arsaDegeri"
                                    type="number"
                                    placeholder="0"
                                    value={values.arsaDegeri || ''}
                                    onChange={(e) => updateField('arsaDegeri', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    step="100000"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Varsa arsa alım bedeli
                                </p>
                            </div>

                            {/* Demolition */}
                            <div>
                                <Label htmlFor="yikim">Yıkım Maliyeti (TL)</Label>
                                <Input
                                    id="yikim"
                                    type="number"
                                    placeholder="500000"
                                    value={values.yikim}
                                    onChange={(e) => updateField('yikim', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    step="50000"
                                />
                            </div>

                            {/* Temporary Housing */}
                            <div>
                                <Label htmlFor="geciciKonut">Geçici Konut Desteği (TL)</Label>
                                <Input
                                    id="geciciKonut"
                                    type="number"
                                    placeholder="300000"
                                    value={values.geciciKonut}
                                    onChange={(e) => updateField('geciciKonut', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    step="50000"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Kira yardımı, taşınma vb.
                                </p>
                            </div>

                            {/* Other Costs */}
                            <div>
                                <Label htmlFor="diger">Diğer Maliyetler (TL)</Label>
                                <Input
                                    id="diger"
                                    type="number"
                                    placeholder="0"
                                    value={values.diger || ''}
                                    onChange={(e) => updateField('diger', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    step="50000"
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
                    {/* Share Ratio Interaction */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-50">
                        <h2 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                            <PieChart className="w-5 h-5 text-primary-600" />
                            Paylaşım Oranı
                        </h2>

                        <div className="space-y-6">
                            {/* Preset Buttons */}
                            <div className="grid grid-cols-3 gap-2">
                                <button
                                    onClick={() => setMalikPayOrani(45)}
                                    className={`px-3 py-3 text-xs font-semibold rounded-lg border transition-all ${malikPayOrani === 45
                                        ? 'bg-primary-600 border-primary-600 text-white shadow-md'
                                        : 'bg-white border-gray-200 text-gray-600 hover:border-primary-200'
                                        }`}
                                >
                                    📈 İyimser<br />%45 Malik
                                </button>
                                <button
                                    onClick={() => setMalikPayOrani(40)}
                                    className={`px-3 py-3 text-xs font-semibold rounded-lg border transition-all ${malikPayOrani === 40
                                        ? 'bg-primary-600 border-primary-600 text-white shadow-md'
                                        : 'bg-white border-gray-200 text-gray-600 hover:border-primary-200'
                                        }`}
                                >
                                    📊 Standart<br />%40 Malik
                                </button>
                                <button
                                    onClick={() => setMalikPayOrani(35)}
                                    className={`px-3 py-3 text-xs font-semibold rounded-lg border transition-all ${malikPayOrani === 35
                                        ? 'bg-primary-600 border-primary-600 text-white shadow-md'
                                        : 'bg-white border-gray-200 text-gray-600 hover:border-primary-200'
                                        }`}
                                >
                                    📉 Temkinli<br />%35 Malik
                                </button>
                            </div>

                            {/* Manual Numeric Input */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <Label htmlFor="malikPayOrani" className="text-sm font-medium text-gray-700">
                                        Malik Payı (%)
                                    </Label>
                                    <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                                        Müteahhit: %{100 - malikPayOrani}
                                    </span>
                                </div>
                                <div className="relative group">
                                    <Input
                                        id="malikPayOrani"
                                        type="number"
                                        min="0"
                                        max="100"
                                        step="1"
                                        value={malikPayOrani}
                                        onChange={(e) => {
                                            const val = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
                                            setMalikPayOrani(val);
                                        }}
                                        className="text-2xl font-bold h-14 pl-4 pr-12 border-2 focus:border-primary-500 transition-colors"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">
                                        %
                                    </span>
                                </div>
                            </div>

                            {/* Visual Split Bar */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] uppercase tracking-wider font-bold text-gray-400">
                                    <span>Malik</span>
                                    <span>Müteahhit</span>
                                </div>
                                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden flex shadow-inner">
                                    <div
                                        className="h-full bg-primary-500 transition-all duration-500 ease-out flex items-center justify-center"
                                        style={{ width: `${malikPayOrani}%` }}
                                    >
                                        {malikPayOrani >= 15 && <div className="h-1 w-1/2 bg-white/30 rounded-full" />}
                                    </div>
                                    <div
                                        className="h-full bg-orange-400 transition-all duration-500 ease-out flex items-center justify-center shadow-inner"
                                        style={{ width: `${100 - malikPayOrani}%` }}
                                    >
                                        {(100 - malikPayOrani) >= 15 && <div className="h-1 w-1/2 bg-white/30 rounded-full" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-primary-900 mb-6">Paylaşım Sonuçları</h2>

                        {results ? (
                            <div className="space-y-4">
                                {/* Total Revenue */}
                                <ResultCard
                                    title="Toplam Satış Hasılatı"
                                    value={formatCurrency(results.toplamHasilat)}
                                    subtitle="Tüm dairelerin satış değeri"
                                    icon={<TrendingUp className="w-5 h-5" />}
                                    variant="info"
                                />

                                {/* Total Costs */}
                                <ResultCard
                                    title="Toplam Ek Maliyetler"
                                    value={formatCurrency(results.toplamMaliyetler)}
                                    subtitle="Arsa, yıkım, geçici konut vb."
                                    icon={<AlertCircle className="w-5 h-5" />}
                                    variant="default"
                                />

                                {/* Owner Share */}
                                <ResultCard
                                    title="Malik Payı"
                                    value={`${formatPercentage(results.malikPayOrani)} (${results.malikDaireAdedi} daire)`}
                                    subtitle={`Değer: ${formatCurrency(results.malikPayDegeri)}`}
                                    icon={<PieChart className="w-5 h-5" />}
                                    variant="success"
                                />

                                {/* Contractor Share */}
                                <ResultCard
                                    title="Müteahhit Payı"
                                    value={`${formatPercentage(results.muteahhitPayOrani)} (${results.muteahhitDaireAdedi} daire)`}
                                    subtitle={`Değer: ${formatCurrency(results.muteahhitPayDegeri)}`}
                                    icon={<PieChart className="w-5 h-5" />}
                                    variant="success"
                                />

                                {/* Owner Cash Support */}
                                {results.malikNakitDestegi > 0 && (
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                        <div className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                                            <div>
                                                <h3 className="font-semibold text-orange-900 mb-1">
                                                    Malik Nakit Desteği Gerekli
                                                </h3>
                                                <p className="text-sm text-orange-800 mb-2">
                                                    Ek maliyetleri karşılamak için malik tarafından nakit destek gerekebilir.
                                                </p>
                                                <p className="text-lg font-bold text-orange-900">
                                                    {formatCurrency(results.malikNakitDestegi)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className="space-y-3 pt-4">
                                    <Button
                                        onClick={() => setShowLeadModal(true)}
                                        className="w-full bg-accent hover:bg-accent/90 h-12"
                                        size="lg"
                                    >
                                        Raporu Almak İçin Numaranızı Bırakın
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>

                                    <Button
                                        onClick={() => {
                                            const summary = generateResultSummary('paylasim', results);
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
                                        WhatsApp ile Paylaş
                                    </Button>

                                    <Button
                                        onClick={() => navigate.push('/tools/maliyet')}
                                        variant="outline"
                                        className="w-full h-12"
                                        size="lg"
                                    >
                                        İnşaat maliyeti ne kadar? →
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-400">
                                <PieChart className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                <p>Bilgileri girin, sonuçlar burada görünecek</p>
                            </div>
                        )}
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-900 mb-2">💡 Senaryo Açıklaması</h3>
                        <p className="text-sm text-blue-800">
                            <strong>İyimser:</strong> Piyasa güçlü, satışlar hızlı<br />
                            <strong>Gerçekçi:</strong> Normal piyasa koşulları<br />
                            <strong>Kötümser:</strong> Piyasa zayıf, riskler yüksek
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 space-y-16">
                {/* Educational Content Section */}
                <section className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary-900 mb-8 border-b-2 border-accent/20 pb-4">
                            Kat Karşılığı Paylaşım Oranları ve Sözleşme Rehberi
                        </h2>
                        
                        <div className="prose prose-lg prose-slate max-w-none">
                            <p>
                                Kentsel dönüşümde en çok tartışılan ve mülk sahiplerini en çok endişelendiren konu <strong>"Paylaşım Oranı"</strong>dır. Kat karşılığı inşaat sözleşmelerinde arsa sahibi arsasını sermaye olarak koyarken, müteahhit ise inşaat maliyetini ve uzmanlığını ortaya koyar. Sonuçta ortaya çıkan yeni binadaki bağımsız bölümlerin (daire, dükkan vb.) hangi oranda bölüşüleceği ise projenin karlılığını ve başarısını belirler.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Ankara'da Standart Paylaşım Oranları Nasıldır?</h3>
                            <p>
                                Ankara'nın farklı ilçelerinde "Arsa Payı Karşılığı İnşaat" oranları, bölgedeki konut satış fiyatlarına ve inşaat maliyetlerine göre değişkenlik gösterir:
                            </p>
                            <ul>
                                <li><strong>Çankaya (Yıldız, Oran, Çayyolu):</strong> Arsa değerinin yüksek olması nedeniyle malik payları genellikle %50 - %55 bandındadır.</li>
                                <li><strong>Yenimahalle ve Etimesgut:</strong> Standart projelerde %40 - %45 malik payı yaygındır.</li>
                                <li><strong>Keçiören ve Mamak:</strong> Bölgesel dinamiklere göre %35 - %40 malik payı ile anlaşmalar yapılabilmektedir.</li>
                            </ul>
                            <p>
                                Bu oranlar sadece birer göstergedir. Binanın teknik özellikleri, kullanılacak malzemenin kalitesi ve müteahhidin referansları bu oranların aşağı veya yukarı esnemesine neden olabilir.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Şerefiye Analizi: Oran mı, Konum mu?</h3>
                            <p>
                                Sadece "%40 malik payı" üzerinden anlaşmak büyük bir hatadır. Binanın ön cephesindeki, manzaralı ve güney cepheli dairelerin değeri ile arka cephedeki dairelerin değeri bir değildir. 
                            </p>
                            <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-accent italic">
                                <strong>KD Ankara Tavsiyesi:</strong> Paylaşım sadece metrekare bazlı değil, "Değer Bazlı" (Şerefiye) yapılmalıdır. 100 m²'lik bir köşe daire, 120 m²'lik bir arka daireden çok daha değerli olabilir. KD Ankara uzmanları, mülk sahipleri arasında adil paylaşımı sağlamak için profesyonel şerefiye raporları hazırlar.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Sözleşmede Mülk Sahiplerini Koruyan Maddeler</h3>
                            <p>
                                Paylaşım oranında anlaştıktan sonra, bu anlaşmayı hukuki bir zırha büründürmek gerekir. <strong>Kat Karşılığı İnşaat Sözleşmesi</strong> noter huzurunda yapılmalı ve tapuya şerh edilmelidir. İşte hayati önem taşıyan bazı maddeler:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-10">
                                <div className="bg-primary-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-primary-900 mb-2">İnşaat Tamamlama Teminatı</h4>
                                    <p className="text-sm text-primary-800 leading-relaxed">Müteahhidin işi yarım bırakması durumunda, binanın tamamlanmasını garanti altına alan banka teminat mektubu veya sigorta poliçesi mutlaka istenmelidir.</p>
                                </div>
                                <div className="bg-primary-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-primary-900 mb-2">Gecikme Tazminatı</h4>
                                    <p className="text-sm text-primary-800 leading-relaxed">İnşaatın taahhüt edilen sürede bitmemesi durumunda, müteahhidin maliklere ödeyeceği aylık kira bedeli ve cezai şartlar netleşmelidir.</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Hasılat Paylaşımı Modeli Nedir?</h3>
                            <p>
                                Bazı projelerde daire paylaşımı yerine "Hasılat Paylaşımı" tercih edilir. Bu modelde, yapılan tüm satışlardan elde edilen gelirin belirli bir yüzdesi doğrudan arsa sahiplerine ödenir. Özellikle ticari potansiyeli yüksek (dükkan, ofis) projelerde malikler için daha karlı bir seçenek olabilir.
                            </p>

                            <div className="bg-primary-950 text-white p-10 rounded-[3rem] my-12 relative overflow-hidden">
                                <h4 className="text-xl font-bold text-accent mb-4">Sıkça Sorulan Sorular</h4>
                                <div className="space-y-6 text-primary-100">
                                    <div>
                                        <h4 className="font-bold text-white">Müteahhit payı neden %60 olabilir?</h4>
                                        <p className="text-sm leading-relaxed">İnşaat maliyetlerinin (demir, çimento, işçilik) arsa değerine oranı arttıkça müteahhit payı yükselir. Müteahhit tüm riskleri ve finansmanı üstlendiği için bu oran makul karşılanabilir.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Paylaşım uyuşmazlığında ne yapılmalı?</h4>
                                        <p className="text-sm leading-relaxed">Eğer malikler kendi aralarında hangi dairenin kime düşeceği konusunda anlaşamazlarsa, şerefiye analizi yaptırılmalı veya kura usulü tercih edilmelidir. Ancak en sağlıklısı teknik bir rapor üzerinden uzlaşmaktır.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="text-center py-10">
                    <h2 className="text-3xl font-bold text-primary-900 mb-6">Pazarlık Masasına Güçlü Oturun</h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                        Müteahhitlerden gelen teklifleri sizin için analiz edelim, eksiklerini bulalım ve en iyi paylaşım oranını yakalamanızı sağlayalım.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => navigate.push('/on-analiz')}
                            className="bg-accent hover:bg-accent-600 text-white px-12 h-14 rounded-2xl font-bold text-lg shadow-lg shadow-accent/20 transition-all"
                        >
                            Teklif Analizi İsteyin
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => window.location.href = 'tel:+905000000000'}
                            className="border-primary-900 text-primary-900 px-12 h-14 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all"
                        >
                            Uzmana Sorun
                        </Button>
                    </div>
                </section>
            </div>

            <LegalDisclaimer />

            {/* Lead Modal */}
            <LeadModal
                isOpen={showLeadModal}
                onClose={() => setShowLeadModal(false)}
                calculatorType="paylasim"
                calculatorData={results}
                preFilledData={{}}
            />
        </CalculatorLayout>
    );
}
