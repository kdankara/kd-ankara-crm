"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowRight,
    Calendar,
    Clock,
    CheckCircle2,
    Info,
    Share2,
    AlertTriangle
} from 'lucide-react';
import CalculatorLayout from '@/components/calculator/CalculatorLayout';
import CalculatorHeader from '@/components/calculator/CalculatorHeader';
import LegalDisclaimer from '@/components/calculator/LegalDisclaimer';
import LeadModal from '@/components/calculator/LeadModal';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useCalculatorState } from '@/hooks/useCalculatorState';
import { useSEO } from '@/hooks/useSEO';
import { calculateTakvim } from '@/lib/calculators/takvim';
import { openWhatsApp, generateResultSummary } from '@/lib/whatsapp';
import type { TakvimInputs, TakvimResults, BaslangicDurumu } from '@/types/calculator';

export default function Takvim() {
    useSEO(
        'Kentsel Dönüşüm Süreç Takvimi',
        'Kentsel dönüşüm projenizin başlangıçtan anahtar teslimine kadar ne kadar süreceğini planlayın.'
    );
    const navigate = useRouter();
    const [showLeadModal, setShowLeadModal] = useState(false);
    const [results, setResults] = useState<TakvimResults | null>(null);

    // Initialize calculator state
    const { values, updateField } = useCalculatorState<TakvimInputs>({
        formType: 'takvim',
        initialValues: {
            baslangicDurumu: 'tespit-yok',
            scenario: 'realistic'
        },
    });

    // Calculate results whenever inputs change
    useEffect(() => {
        if (values.baslangicDurumu) {
            const calculatedResults = calculateTakvim(values);
            setResults(calculatedResults);
        } else {
            setResults(null);
        }
    }, [values]);

    const statusOptions: { value: BaslangicDurumu; label: string; description: string }[] = [
        { value: 'tespit-yok', label: 'Henüz Başlamadık', description: 'Risk tespiti yapılmadı, süreç başında.' },
        { value: 'tespit-var', label: 'Bina Riskli İlan Edildi', description: 'Resmi risk raporu alındı.' },
        { value: 'cogunluk-var', label: 'Anlaşma Sağlandı', description: 'Malikler arası 2/3 çoğunluk kararı alındı.' },
        { value: 'ruhsat-alindi', label: 'Proje & Ruhsat Hazır', description: 'Eski bina yıkıldı, yeni proje ruhsatı alındı.' },
    ];

    return (
        <CalculatorLayout>
            <CalculatorHeader
                title="Süreç & Takvim"
                description="Kentsel dönüşüm projenizin ne kadar süreceğini tahmin edin."
                requiredInfo={['Mevcut proje durumu']}
                estimatedTime="1 dakika"
            />

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Form Inputs */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-primary-900 mb-6">Neredesiniz?</h2>

                        <div className="space-y-4">
                            <Label className="mb-2 block">Projenizin Mevcut Durumu</Label>
                            <div className="grid gap-3">
                                {statusOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => updateField('baslangicDurumu', opt.value)}
                                        className={`
                      relative flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left
                      ${values.baslangicDurumu === opt.value
                                                ? 'border-primary-600 bg-primary-50 ring-4 ring-primary-50'
                                                : 'border-gray-100 bg-white hover:border-primary-200'
                                            }
                    `}
                                    >
                                        <div className={`
                      mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${values.baslangicDurumu === opt.value ? 'border-primary-600 bg-primary-600' : 'border-gray-300'}
                    `}>
                                            {values.baslangicDurumu === opt.value && <CheckCircle2 className="w-4 h-4 text-white" />}
                                        </div>
                                        <div>
                                            <div className="font-bold text-primary-900">{opt.label}</div>
                                            <div className="text-xs text-gray-500">{opt.description}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                            <Info className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-sm text-blue-900 leading-relaxed">
                            <strong>Biliyor muydunuz?</strong> En uzun aşama genellikle "Anlaşma & Karar" sürecidir. Malikler arası uzlaşma ne kadar hızlı sağlanırsa, süreç o kadar kısalır.
                        </div>
                    </div>
                </div>

                {/* Right: Results */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-primary-900/5 border border-primary-50">
                        <h2 className="text-lg font-bold text-primary-900 mb-8 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary-600" />
                            Tahmini Proje Takvimi
                        </h2>

                        {results ? (
                            <div className="space-y-8">
                                {/* Total Duration Highlights */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-primary-50 rounded-xl p-4 text-center">
                                        <div className="text-[10px] uppercase font-bold text-primary-600 mb-1">Minimum Süre</div>
                                        <div className="text-2xl font-black text-primary-900">{results.toplamMinAy} Ay</div>
                                    </div>
                                    <div className="bg-orange-50 rounded-xl p-4 text-center border-2 border-orange-100">
                                        <div className="text-[10px] uppercase font-bold text-orange-600 mb-1">Maksimum Süre</div>
                                        <div className="text-2xl font-black text-orange-900">{results.toplamMaxAy} Ay</div>
                                    </div>
                                </div>

                                {/* Vertical Timeline */}
                                <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
                                    {results.fazlar.map((faz, idx) => (
                                        <div key={idx} className="relative">
                                            {/* Timeline Dot */}
                                            <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-white border-4 border-primary-600 z-10" />

                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-primary-900">{faz.name}</h3>
                                                <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                                                    {faz.minAy}-{faz.maxAy} Ay
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500 leading-relaxed">
                                                {faz.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0" />
                                    <p className="text-[10px] text-gray-500 leading-tight">
                                        * Süreler; idari izinler, inşaat mevsimleri ve finansal koşullara göre değişkenlik gösterebilir.
                                    </p>
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
                                            const summary = generateResultSummary('takvim', results);
                                            openWhatsApp({
                                                ilce: 'Ankara',
                                                mahalle: '',
                                                arsaTipi: 'takvim',
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
                            <div className="text-center py-16 text-gray-400">
                                <Calendar className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                <p>Mevcut durumu seçin,<br />takvim burada görünecek</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-20 space-y-16">
                {/* Process Deep Dive Section */}
                <section className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary-900 mb-8 border-b-2 border-accent/20 pb-4">
                            Kentsel Dönüşüm Adım Adım Ne Kadar Sürer? Süreç Rehberi
                        </h2>
                        
                        <div className="prose prose-lg prose-slate max-w-none">
                            <p>
                                Bir binanın kentsel dönüşüm süreci, "İlk risk analizi" ile başlar ve "İskan belgesinin alınması" ile sona erer. Bu maraton, sadece inşaat süresinden ibaret değildir; bürokratik izinler, hukuki tebligatlar ve malikler arası uzlaşma gibi görünmez zaman maliyetleri içerir. KD Ankara olarak, bu süreci şeffaf bir şekilde yönetiyoruz.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">1. Aşama: Hazırlık ve Risk Tespiti (15-45 Gün)</h3>
                            <p>
                                Binanızın riskli yapı olarak ilan edilmesi için lisanslı bir kuruluşa (örneğin KD Ankara'ya) başvurulur. Karot örnekleri alınır, statik analizler yapılır ve rapor Bakanlık sistemine yüklenir. Rapor onaylandıktan sonra tapu kaydına "Riskli Yapı" şerhi düşülür. Bu aşamada yapılacak itirazlar süreci bir miktar uzatabilir.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">2. Aşama: Malikler Arası Uzlaşma ve Karar (2-6 Ay)</h3>
                            <p>
                                <strong>Sürecin en kritik ve genellikle en uzun aşamasıdır.</strong> 6306 Sayılı Kanun gereği "Salt Çoğunluk" (50%+1 pay oranı) ile karar alınabilmektedir. Ancak ideal olan, tüm maliklerin rızasını alarak hızlıca ilerlemektir. Karara katılmayan maliklere noter kanalıyla tebligat gönderilir ve 15 günlük yasal bekleme süresi başlar. Uzlaşma sağlanamazsa, katılmayanların payları Bakanlık tarafından açık artırma ile satışa çıkarılır.
                            </p>
                            <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-accent">
                                <strong>Hızlandırma İpucu:</strong> Profesyonel bir uzlaşma yönetimi (KD Ankara Uzlaşma Modeli), malikler arasındaki güven sorunlarını çözerek bu 6 aylık süreci 1 aya indirebilir.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">3. Aşama: Proje Çizimi ve Ruhsat Alımı (3-5 Ay)</h3>
                            <p>
                                Müteahhit seçimi yapıldıktan sonra mimari, statik, elektrik ve mekanik projeler çizilir. Belediye onayına sunulur. Ankara'daki belediyelerin (Çankaya, Yenimahalle vb.) yoğunluğuna ve plan notlarındaki karmaşıklığa göre ruhsat süreci değişkenlik gösterebilir. Ruhsatın alınmasıyla birlikte eski bina için yıkım izni (yıkım ruhsatı) çıkarılır.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">4. Aşama: Tahliye ve İnşaat Süreci (12-24 Ay)</h3>
                            <p>
                                Bina tahliye edildikten sonra kira yardımları başlar. Yıkım işlemi gerçekleştirilir ve temeller atılır. Bir apartman projesinin ortalama inşaat süresi 18 aydır. Çok katlı veya karma projelerde bu süre 30 aya kadar çıkabilir. 
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-10">
                                <div className="bg-primary-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-primary-900 mb-2">Su Basman Seviyesi</h4>
                                    <p className="text-sm text-primary-800 leading-relaxed">İnşaatın temel ve otopark katlarının bitip zemin kata ulaştığı andır. Maliklerin genellikle en çok rahatladığı evredir.</p>
                                </div>
                                <div className="bg-primary-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-primary-900 mb-2">Kaba İnşaat Bitimi</h4>
                                    <p className="text-sm text-primary-800 leading-relaxed">Binanın betonarme karkas işlerinin bittiği, dış cepheye başlandığı aşamadır.</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-primary-800 mt-10 mb-4">5. Aşama: İskan ve Anahtar Teslim (2-4 Ay)</h3>
                            <p>
                                İnşaat bittikten sonra yapı denetim ve belediye ekipleri binayı kontrol eder. Projeye uygunluk tescil edilirse "Yapı Kullanma İzin Belgesi" (İskan) alınır. Kat irtifakı tapuları, "Kat Mülkiyeti" tapusuna dönüştürülür. Artık eviniz yasal olarak tamamlanmıştır.
                            </p>

                            <div className="bg-primary-950 text-white p-10 rounded-[3rem] my-12 relative overflow-hidden">
                                <h4 className="text-xl font-bold text-accent mb-4 italic italic">Süreci Geciktiren "Görünmez" Engeller</h4>
                                <ul className="space-y-4 text-primary-100">
                                    <li><strong>Tebligat Sorunları:</strong> Yurt dışında yaşayan veya ulaşılamayan maliklerin tebligat süreçleri aylarca sürebilir.</li>
                                    <li><strong>Plan İptalleri:</strong> Bölgesel imar planlarına açılan davalar, ruhsat sürecini durdurabilir.</li>
                                    <li><strong>Ekonomik Dalgalanmalar:</strong> Müteahhidin finansal dar boğaza girmesi inşaatın durmasına neden olabilir. (KD Ankara bu risk için Teminat Mektubu şartını uygular.)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="bg-slate-50 rounded-[3rem] p-12 text-center border border-slate-200">
                    <h2 className="text-3xl font-bold text-primary-900 mb-6 italic">Sizin Binanız Ne Zaman Biter?</h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                        Belirsizlikleri ortadan kaldıralım. Binanızın güncel durumuna göre size özel bir takvim ve yol haritası hazırlayalım.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => navigate.push('/on-analiz')}
                            className="bg-primary-950 text-white px-12 h-14 rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all shadow-xl shadow-slate-900/10"
                        >
                            Özel Takvim Hazırla
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => window.location.href = 'tel:+905000000000'}
                            className="border-primary-900 text-primary-900 px-12 h-14 rounded-2xl font-bold text-lg hover:bg-primary-100/50 transition-all"
                        >
                            Bilgi Alın
                        </Button>
                    </div>
                </section>
            </div>

            <LegalDisclaimer />

            {/* Lead Modal */}
            <LeadModal
                isOpen={showLeadModal}
                onClose={() => setShowLeadModal(false)}
                calculatorType="takvim"
                calculatorData={results}
                preFilledData={{}}
            />
        </CalculatorLayout>
    );
}
