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
    const [errors, setErrors] = useState<string[]>([]);
    const [results, setResults] = useState<EmsalResults | null>(null);

    // Initialize calculator state
    const { values, updateField } = useCalculatorState<EmsalInputs>({
        formType: 'emsal',
        initialValues: {
            arsaAlani: 0,
            kaks: undefined,
            taks: undefined,
            katYuksekligi: 3, // default floor height
        },
    });

    // Calculate results whenever inputs change
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

    const handleKaksUnknown = () => {
        // Redirect to lead form if user doesn't know KAKS
        navigate.push('/on-analiz');
    };

    const handleTaksUnknown = () => {
        // Just clear TAKS field
        updateField('taks', undefined);
    };

    return (
        <CalculatorLayout>
            <CalculatorHeader
                title="Emsal Hesaplama"
                description="TAKS ve KAKS değerlerinden toplam inşaat alanını hesaplayın"
                requiredInfo={['Arsa m²', 'KAKS/Emsal']}
                estimatedTime="1 dakika"
            />

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Form Inputs */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-primary-900 mb-6">Bilgiler</h2>

                    <div className="space-y-6">
                        {/* Location (Optional) */}
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <Label htmlFor="il">İl (Opsiyonel)</Label>
                                <Input
                                    id="il"
                                    type="text"
                                    placeholder="Ankara"
                                    value={values.il || ''}
                                    onChange={(e) => updateField('il', e.target.value)}
                                />
                            </div>
                            <div>
                                <Label htmlFor="ilce">İlçe</Label>
                                <Input
                                    id="ilce"
                                    type="text"
                                    placeholder="Çankaya"
                                    value={values.ilce || ''}
                                    onChange={(e) => updateField('ilce', e.target.value)}
                                />
                            </div>
                            <div>
                                <Label htmlFor="mahalle">Mahalle</Label>
                                <Input
                                    id="mahalle"
                                    type="text"
                                    placeholder="Konutkent"
                                    value={values.mahalle || ''}
                                    onChange={(e) => updateField('mahalle', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Land Area */}
                        <div>
                            <Label htmlFor="arsaAlani">
                                Arsa Alanı (m²) <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="arsaAlani"
                                type="number"
                                placeholder="örn. 1000"
                                value={values.arsaAlani || ''}
                                onChange={(e) => updateField('arsaAlani', parseFloat(e.target.value) || 0)}
                                min="0"
                                step="0.01"
                            />
                        </div>

                        {/* KAKS/Emsal */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <Label htmlFor="kaks">
                                    KAKS / Emsal <span className="text-red-500">*</span>
                                </Label>
                                <button
                                    onClick={handleKaksUnknown}
                                    className="text-xs text-accent hover:underline"
                                >
                                    Bilmiyorum
                                </button>
                            </div>
                            <Input
                                id="kaks"
                                type="number"
                                placeholder="örn. 1.20"
                                value={values.kaks || ''}
                                onChange={(e) => updateField('kaks', parseFloat(e.target.value) || undefined)}
                                min="0"
                                step="0.01"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                İmar durumu belgenizde veya belediyeden öğrenebilirsiniz
                            </p>
                        </div>

                        {/* TAKS (Optional) */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <Label htmlFor="taks">TAKS (Opsiyonel)</Label>
                                <button
                                    onClick={handleTaksUnknown}
                                    className="text-xs text-accent hover:underline"
                                >
                                    Bilmiyorum
                                </button>
                            </div>
                            <Input
                                id="taks"
                                type="number"
                                placeholder="örn. 0.30"
                                value={values.taks || ''}
                                onChange={(e) => updateField('taks', parseFloat(e.target.value) || undefined)}
                                min="0"
                                max="1"
                                step="0.01"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                TAKS varsa daha detaylı kat sayısı tahmini yapabiliriz
                            </p>
                        </div>

                        {/* Floor Height (Optional) */}
                        {values.taks && (
                            <div>
                                <Label htmlFor="katYuksekligi">Kat Yüksekliği (m)</Label>
                                <Input
                                    id="katYuksekligi"
                                    type="number"
                                    placeholder="3"
                                    value={values.katYuksekligi || 3}
                                    onChange={(e) => updateField('katYuksekligi', parseFloat(e.target.value) || 3)}
                                    min="2.5"
                                    max="5"
                                    step="0.1"
                                />
                            </div>
                        )}

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
                </div>

                {/* Right: Results */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-primary-900 mb-6">Sonuçlar</h2>

                        {results ? (
                            <div className="space-y-4">
                                {/* Total Construction Area */}
                                <ResultCard
                                    title="Toplam İnşaat Hakkı"
                                    value={`${formatNumber(results.toplamInsaatAlani)} m²`}
                                    subtitle="Emsale dahil toplam inşaat alanı"
                                    icon={<Building2 className="w-5 h-5" />}
                                    variant="success"
                                />

                                {/* Base Footprint */}
                                {results.tabanOturumu ? (
                                    <ResultCard
                                        title="Tahmini Taban Oturumu"
                                        value={`${formatNumber(results.tabanOturumu)} m²`}
                                        subtitle="Zemin kat alanı (TAKS)"
                                        icon={<Layers className="w-5 h-5" />}
                                        variant="info"
                                    />
                                ) : (
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                        <p className="text-sm text-orange-800">
                                            <strong>TAKS girilmedi.</strong> TAKS değeri eklerseniz taban oturumu ve kat
                                            sayısı tahmini yapabiliriz.
                                        </p>
                                    </div>
                                )}

                                {/* Estimated Floor Count */}
                                {results.tahminiKatSayisi && (
                                    <ResultCard
                                        title="Tahmini Kat Sayısı"
                                        value={results.tahminiKatSayisi}
                                        subtitle="Yaklaşık kat adedi"
                                        icon={<TrendingUp className="w-5 h-5" />}
                                        variant="default"
                                    />
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
                                            const summary = generateResultSummary('emsal', results);
                                            openWhatsApp({
                                                ilce: values.ilce || 'Ankara',
                                                mahalle: values.mahalle || '',
                                                arsaTipi: 'kentsel dönüşüm',
                                                arsaM2: values.arsaAlani,
                                                emsal: values.kaks,
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
                                        onClick={() => navigate.push('/tools/daire')}
                                        variant="outline"
                                        className="w-full h-12"
                                        size="lg"
                                    >
                                        Kaç daire çıkar? →
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-400">
                                <Building2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                <p>Bilgileri girin, sonuçlar burada görünecek</p>
                            </div>
                        )}
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-900 mb-2">💡 Bilgi</h3>
                        <p className="text-sm text-blue-800">
                            Bu sonuç bilgilendirme amaçlıdır. Plan notları, çekme mesafeleri, emsale dahil/harici
                            alanlar ve ruhsat projesiyle netleşir.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 space-y-16">
                {/* Comprehensive Guide Section */}
                <section className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary-900 mb-8 border-b-2 border-accent/20 pb-4">
                            Emsal (KAKS) ve TAKS Nedir? Kapsamlı Rehber
                        </h2>
                        
                        <div className="prose prose-lg prose-slate max-w-none">
                            <p>
                                Kentsel dönüşüm ve gayrimenkul geliştirme süreçlerinde karşınıza çıkan en kritik teknik terimler <strong>TAKS</strong> ve <strong>KAKS (Emsal)</strong> değerleridir. Bu değerler, bir arsa üzerine ne kadarlık bir yapı inşa edilebileceğini, binanın taban oturumunu ve toplam kat alanını belirleyen yasal sınırlardır. KD Ankara olarak, bu terimleri ve hesaplama mantığını şeffaf bir şekilde açıklıyoruz.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">TAKS (Taban Alanı Katsayısı) Nedir?</h3>
                            <p>
                                TAKS, yapılacak olan binanın arsa üzerinde ne kadarlık bir alana oturabileceğini gösteren orandır. Amacı, parsel içerisinde yeşil alan, otopark, yangın yolları ve sosyal donatılar için yeterli boşluk bırakılmasını sağlamaktır. 
                            </p>
                            <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-accent">
                                <strong>Örnek:</strong> 1.000 m² büyüklüğünde bir arsanız olduğunu ve belediye imar durumunda TAKS değerinin 0.40 olarak belirlendiğini varsayalım. Bu durumda binanızın zemin kat oturumu en fazla 400 m² olabilir (1.000 x 0.40). Kalan 600 m² alan ise "Bahçe ve Açık Alan" olarak korunmalıdır.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">KAKS (Kat Alanı Katsayısı) / Emsal Nedir?</h3>
                            <p>
                                Halk arasında "Emsal" olarak bilinen KAKS, o arsa üzerine yapılabilecek toplam <strong>net inşaat alanını</strong> ifade eder. Binanızın toplam kaç metrekare olacağı ve kaç daire çıkacağı doğrudan bu katsayıya bağlıdır.
                            </p>
                            <ul>
                                <li><strong>Emsal Dahil Alanlar:</strong> Daire içleri, dükkanlar ve temel yaşam alanları.</li>
                                <li><strong>Emsal Harici Alanlar:</strong> Ankara İmar Yönetmeliği'ne göre otoparklar, sığınaklar, asansör boşlukları, yangın merdivenleri ve ortak alanların bir kısmı emsal hesabına dahil edilmez. Bu durum, fiili inşaat alanının emsalden yaklaşık %20-30 daha fazla olması anlamına gelir.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Ankara'da Kentsel Dönüşüm ve Emsal Artışı</h3>
                            <p>
                                Ankara kentsel dönüşüm projelerinde, özellikle Çankaya, Yenimahalle ve Keçiören gibi bölgelerde kentsel dönüşümü teşvik etmek amacıyla "Ada Bazlı Dönüşüm" modelleri uygulanmaktadır. Birkaç parselin birleşmesi (tevhit edilmesi) durumunda, belediye meclis kararlarıyla mevcut emsal üzerine ek artışlar (örneğin +0.50 emsal bonusu) verilebilmektedir. 
                            </p>
                            <p>
                                Bu artışlar, mülk sahiplerinin "Cebinden para çıkmadan evini yenileme" hayalini gerçeğe dönüştüren en önemli finansal kaldıraçtır. Ancak bu hakların kazanılması için imar planı tadilatı ve teknik dosyaların eksiksiz hazırlanması gerekir.
                            </p>

                            <div className="bg-primary-950 text-white p-10 rounded-[2.5rem] my-12">
                                <h4 className="text-xl font-bold text-accent mb-4 italic">Dikkat Edilmesi Gereken Kritik Detay: Net-Brüt Ayrımı</h4>
                                <p className="text-primary-100 leading-relaxed">
                                    Müteahhit firmalarla yapılan sözleşmelerde "Emsal" üzerinden konuşulan metrekareler genellikle "Net Alan"lardır. Ancak vatandaşın kullanımı ve tapuda görünen metrekare "Brüt Alan"dır. Bu iki kavram arasındaki farkı doğru analiz etmeyen mülk sahipleri, yeni projede evlerinin küçüldüğü algısına kapılabilmektedir. KD Ankara olarak biz, tüm projeyi teknik şartnameye dökerek bu belirsizlikleri ortadan kaldırıyoruz.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Sıkça Sorulan Sorular</h3>
                            <div className="space-y-6">
                                <div className="border-b border-gray-100 pb-4">
                                    <h4 className="font-bold text-primary-900">1. Arsa payım değişirse emsal hakkım değişir mi?</h4>
                                    <p className="text-gray-600 text-sm">Hayır, arsa payı sizin mülkiyet oranınızdır. Toplam emsal hakkı arsanın tamamına aittir ve arsa payınız oranında size dağıtılır.</p>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <h4 className="font-bold text-primary-900">2. Çekme mesafeleri emsali etkiler mi?</h4>
                                    <p className="text-gray-600 text-sm">Evet. Arsa üzerinde yola ve yan parsel komşularına olan "Çekme Mesafeleri", binanın oturabileceği alanı kısıtlayabilir. Bu durumda emsal hakkınız olsa bile, fiziksel olarak o alanı kullanamayabilirsiniz. Statik çözüm ve mimari tasarım burada devreye girer.</p>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <h4 className="font-bold text-primary-900">3. Ankara'da emsal artışı için ne yapılmalı?</h4>
                                    <p className="text-gray-600 text-sm">Genellikle "Ada Bazlı Uygulama" alanları içinde yer almak veya komşu parsellerle birleşerek ada oluşturmak gerekmektedir. KD Ankara olarak biz, parseller arası uzlaşmayı sağlayarak bu artışları yasal zemine oturtuyoruz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-10">
                    <h2 className="text-3xl font-bold text-primary-900 mb-6">Detaylı İmar Durumu Analizi İstiyor Musunuz?</h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        Sadece rakamlarla yetinmeyin. Uzman mimar ve şehir plancılarımız arsanızın imar plan notlarını, plan iptallerini ve gelecek potansiyelini incelesin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => navigate.push('/on-analiz')}
                            className="bg-primary-950 text-white px-10 h-14 rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all"
                        >
                            Ücretsiz Analiz Formu
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => window.location.href = 'tel:+905000000000'}
                            className="border-primary-900 text-primary-900 px-10 h-14 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all"
                        >
                            Uzmanla Görüşün
                        </Button>
                    </div>
                </section>
            </div>

            <LegalDisclaimer />

            {/* Lead Modal */}
            <LeadModal
                isOpen={showLeadModal}
                onClose={() => setShowLeadModal(false)}
                calculatorType="emsal"
                calculatorData={results}
                preFilledData={{
                    ilce: values.ilce,
                    mahalle: values.mahalle,
                }}
            />
        </CalculatorLayout>
    );
}
