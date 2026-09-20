"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Building2, Layers, TrendingUp, Share2 } from 'lucide-react';
import CalculatorLayout from '@/components/calculator/CalculatorLayout';
import CalculatorHeader from '@/components/calculator/CalculatorHeader';
import ResultCard from '@/components/calculator/ResultCard';
import LegalDisclaimer from '@/components/calculator/LegalDisclaimer';
import LeadModal from '@/components/calculator/LeadModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCalculatorState } from '@/hooks/useCalculatorState';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/gtag';
import { useSEO } from '@/hooks/useSEO';
import { calculateEmsal, validateEmsalInputs } from '@/lib/calculators/emsal';
import { formatNumber } from '@/lib/calculators/utils';
import { openWhatsApp, generateResultSummary } from '@/lib/whatsapp';
import type { EmsalInputs, EmsalResults } from '@/types/calculator';

export default function Emsal() {
    useSEO(
        'Emsal (TAKS-KAKS) Hesaplama',
        'Arsanızın TAKS-KAKS değerlerine göre toplam inşaat alanını ve kat sayısını hesaplayın.'
    );
    const navigate = useRouter();
    const [showLeadModal, setShowLeadModal] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false); // Yeni Checkbox State
    const [errors, setErrors] = useState<string[]>([]);
    const [results, setResults] = useState<EmsalResults | null>(null);

    const { values, updateField } = useCalculatorState<EmsalInputs>({
        formType: 'emsal',
        initialValues: {
            arsaAlani: 0,
            kaks: undefined,
            taks: undefined,
            katYuksekligi: 3,
        },
    });

    useEffect(() => {
        const validationErrors = validateEmsalInputs(values);
        setErrors(validationErrors);

        if (validationErrors.length === 0 && values.arsaAlani > 0 && values.kaks) {
            const calculatedResults = calculateEmsal(values);
            setResults(calculatedResults);
        } else {
            setResults(null);
        }
    }, [values]);

    const handleKaksUnknown = () => navigate.push('/on-analiz');
    const handleTaksUnknown = () => updateField('taks', undefined);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Emsal (KAKS) ve TAKS Hesaplama Aracı | KD Ankara",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": "Arsa alanı, TAKS ve KAKS oranlarına göre toplam inşaat alanını ve kat sayısını hesaplama aracı.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "TRY" }
    };

    return (
        <CalculatorLayout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <CalculatorHeader
                title="Emsal Hesaplama"
                description="TAKS ve KAKS değerlerinden toplam inşaat alanını hesaplayın"
                requiredInfo={['Arsa m²', 'KAKS/Emsal']}
                estimatedTime="1 dakika"
            />

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-primary-900 mb-6">Bilgiler</h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <Label htmlFor="il">İl (Opsiyonel)</Label>
                                <Input id="il" type="text" placeholder="Ankara" value={values.il || ''} onChange={(e) => updateField('il', e.target.value)} />
                            </div>
                            <div>
                                <Label htmlFor="ilce">İlçe</Label>
                                <Input id="ilce" type="text" placeholder="Çankaya" value={values.ilce || ''} onChange={(e) => updateField('ilce', e.target.value)} />
                            </div>
                            <div>
                                <Label htmlFor="mahalle">Mahalle</Label>
                                <Input id="mahalle" type="text" placeholder="Konutkent" value={values.mahalle || ''} onChange={(e) => updateField('mahalle', e.target.value)} />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="arsaAlani">Arsa Alanı (m²) <span className="text-red-500">*</span></Label>
                            <Input id="arsaAlani" type="number" placeholder="örn. 1000" value={values.arsaAlani || ''} onChange={(e) => updateField('arsaAlani', parseFloat(e.target.value) || 0)} min="0" step="0.01" />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <Label htmlFor="kaks">KAKS / Emsal <span className="text-red-500">*</span></Label>
                                <button onClick={handleKaksUnknown} className="text-xs text-accent hover:underline font-semibold">Bilmiyorum</button>
                            </div>
                            <Input id="kaks" type="number" placeholder="örn. 1.20" value={values.kaks || ''} onChange={(e) => updateField('kaks', parseFloat(e.target.value) || undefined)} min="0" step="0.01" />
                            <p className="text-xs text-gray-500 mt-1">İmar durumu belgenizde veya belediyeden öğrenebilirsiniz</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <Label htmlFor="taks">TAKS (Opsiyonel)</Label>
                                <button onClick={handleTaksUnknown} className="text-xs text-accent hover:underline font-semibold">Bilmiyorum</button>
                            </div>
                            <Input id="taks" type="number" placeholder="örn. 0.30" value={values.taks || ''} onChange={(e) => updateField('taks', parseFloat(e.target.value) || undefined)} min="0" max="1" step="0.01" />
                            <p className="text-xs text-gray-500 mt-1">TAKS varsa daha detaylı kat sayısı tahmini yapabiliriz</p>
                        </div>

                        {/* Yeni Yükseklik Kutucuğu */}
                        {values.taks && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <label className="flex items-center gap-2 cursor-pointer mb-3">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-accent focus:ring-accent"
                                        checked={showAdvanced}
                                        onChange={(e) => setShowAdvanced(e.target.checked)}
                                    />
                                    <span className="text-sm font-semibold text-gray-700">Toplam Bina Yüksekliğini Hesapla (Opsiyonel)</span>
                                </label>

                                {showAdvanced && (
                                    <div className="pl-6 border-l-2 border-accent/20 space-y-2">
                                        <Label htmlFor="katYuksekligi" className="text-xs text-gray-500">Bir Katın Ortalama Yüksekliği (m)</Label>
                                        <Input
                                            id="katYuksekligi"
                                            type="number"
                                            placeholder="3"
                                            value={values.katYuksekligi || 3}
                                            onChange={(e) => updateField('katYuksekligi', parseFloat(e.target.value) || 3)}
                                            min="2"
                                            max="10"
                                            step="0.1"
                                        />
                                        <p className="text-[10px] text-gray-400">Varsayılan: 3 metre. Dükkan katı vb. için özelleştirebilirsiniz.</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {errors.length > 0 && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <ul className="text-sm text-red-600 space-y-1">
                                    {errors.map((error, index) => <li key={index}>• {error}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-primary-900 mb-6">Sonuçlar</h2>
                        {results ? (
                            <div className="space-y-4">
                                <ResultCard title="Toplam İnşaat Hakkı" value={`${formatNumber(results.toplamInsaatAlani)} m²`} subtitle="Emsale dahil toplam inşaat alanı" icon={<Building2 className="w-5 h-5" />} variant="success" />

                                {results.tabanOturumu ? (
                                    <ResultCard title="Tahmini Taban Oturumu" value={`${formatNumber(results.tabanOturumu)} m²`} subtitle="Zemin kat alanı (TAKS)" icon={<Layers className="w-5 h-5" />} variant="info" />
                                ) : (
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                        <p className="text-sm text-orange-800"><strong>TAKS girilmedi.</strong> TAKS değeri eklerseniz taban oturumu ve kat sayısı tahmini yapabiliriz.</p>
                                    </div>
                                )}

                                {results.tahminiKatSayisi && (
                                    <ResultCard title="Tahmini Kat Sayısı" value={results.tahminiKatSayisi} subtitle="Yaklaşık kat adedi" icon={<TrendingUp className="w-5 h-5" />} variant="default" />
                                )}

                                {/* İsteğe Bağlı Bina Yüksekliği Sonucu */}
                                {results.tahminiKatSayisi && showAdvanced && (results as any).toplamBinaYuksekligi && (
                                    <ResultCard title="Tahmini Bina Yüksekliği" value={`${formatNumber((results as any).toplamBinaYuksekligi)} m`} subtitle="Zeminden çatıya yaklaşık yükseklik" icon={<ArrowRight className="w-5 h-5 -rotate-90" />} variant="default" />
                                )}

                                <div className="space-y-3 pt-4">
                                    <Button onClick={() => setShowLeadModal(true)} className="w-full bg-accent hover:bg-accent/90 h-12 font-bold text-base shadow-md" size="lg">
                                        Ücretsiz İmar & Emsal Raporu İste <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>

                                    <Button onClick={() => {
                                        trackWhatsAppClick();
                                        const summary = generateResultSummary('emsal', results);
                                        openWhatsApp({ ilce: values.ilce || 'Ankara', mahalle: values.mahalle || '', arsaTipi: 'kentsel dönüşüm', arsaM2: values.arsaAlani, emsal: values.kaks, sonucOzet: summary, telefon: '' });
                                    }} variant="outline" className="w-full h-12 font-medium" size="lg">
                                        <Share2 className="w-4 h-4 mr-2" /> WhatsApp ile Paylaş
                                    </Button>

                                    <Button onClick={() => navigate.push('/tools/daire')} variant="outline" className="w-full h-12 font-medium" size="lg">Kaç daire çıkar? →</Button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-400">
                                <Building2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                <p>Bilgileri girin, sonuçlar burada görünecek</p>
                            </div>
                        )}
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-900 mb-2">💡 Bilgi</h3>
                        <p className="text-sm text-blue-800">Bu sonuç bilgilendirme amaçlıdır. Plan notları, çekme mesafeleri, emsale dahil/harici alanlar ve ruhsat projesiyle netleşir.</p>
                    </div>
                </div>
            </div>

            <LegalDisclaimer />
            <LeadModal isOpen={showLeadModal} onClose={() => setShowLeadModal(false)} calculatorType="emsal" calculatorData={results} preFilledData={{ ilce: values.ilce, mahalle: values.mahalle }} />
        </CalculatorLayout>
    );
}