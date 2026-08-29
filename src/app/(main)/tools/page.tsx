"use client";

import Link from 'next/link';
import { Calculator, Home, TrendingUp, DollarSign, Calendar, Users, FileText, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import MarketRates from '@/components/calculator/MarketRates';

interface ToolCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    path: string;
    requiredInfo: string[];
    estimatedTime: string;
    category: 'owner' | 'contractor';
}

const tools: ToolCard[] = [
    {
        id: 'emsal',
        title: 'Emsal Hesaplama',
        description: 'TAKS-KAKS değerlerinden toplam inşaat alanını hesaplayın',
        icon: <Calculator className="w-6 h-6" />,
        path: '/tools/emsal',
        requiredInfo: ['Arsa m²', 'KAKS/Emsal'],
        estimatedTime: '1 dk',
        category: 'owner',
    },
    {
        id: 'daire',
        title: 'Daire Adedi & Mix',
        description: 'İnşaat alanından kaç daire çıkar? Hangi mix?',
        icon: <Home className="w-6 h-6" />,
        path: '/tools/daire',
        requiredInfo: ['İnşaat alanı', 'Daire tipi'],
        estimatedTime: '2 dk',
        category: 'owner',
    },
    {
        id: 'paylasim',
        title: 'Paylaşım Simülatörü',
        description: 'Kat karşılığı paylaşım oranlarını hesaplayın',
        icon: <TrendingUp className="w-6 h-6" />,
        path: '/tools/paylasim',
        requiredInfo: ['Satış fiyatı', 'Maliyet'],
        estimatedTime: '3 dk',
        category: 'owner',
    },
    {
        id: 'maliyet',
        title: 'Maliyet Bandı',
        description: '3 senaryo ile maliyet tahmini',
        icon: <DollarSign className="w-6 h-6" />,
        path: '/tools/maliyet',
        requiredInfo: ['İnşaat alanı', 'Kalite'],
        estimatedTime: '1 dk',
        category: 'owner',
    },
    {
        id: 'destek',
        title: 'Kira Yardımı & Destek',
        description: 'Taşınma ve kira desteği bilgilendirmesi',
        icon: <FileText className="w-6 h-6" />,
        path: '/tools/destek',
        requiredInfo: ['İl', 'Statü'],
        estimatedTime: '1 dk',
        category: 'owner',
    },
    {
        id: 'takvim',
        title: 'Süreç & Takvim',
        description: 'Kentsel dönüşüm süreci ne kadar sürer?',
        icon: <Calendar className="w-6 h-6" />,
        path: '/tools/takvim',
        requiredInfo: ['Başlangıç durumu'],
        estimatedTime: '1 dk',
        category: 'owner',
    },
    {
        id: 'arsapayi',
        title: 'Arsa Payı Dağılımı',
        description: 'Bağımsız bölümlere göre arsa payı hesabı',
        icon: <Users className="w-6 h-6" />,
        path: '/tools/arsapayi',
        requiredInfo: ['BB listesi', 'm² bilgisi'],
        estimatedTime: '2 dk',
        category: 'owner',
    },
    {
        id: 'muteahhit-mini',
        title: 'Mini Fizibilite',
        description: 'Müteahhit için hızlı fizibilite özeti',
        icon: <Building2 className="w-6 h-6" />,
        path: '/tools/muteahhit-mini',
        requiredInfo: ['Arsa', 'Emsal', 'Fiyat', 'Maliyet'],
        estimatedTime: '2 dk',
        category: 'contractor',
    },
];

export default function ToolsHub() {
    useSEO(
        'Hesaplama Merkezi',
        'Kentsel dönüşüm sürecinde mülk sahipleri ve müteahhitler için 1-3 dakikada sonuç veren 8 ana hesaplama aracı.'
    );
    const ownerTools = tools.filter((t) => t.category === 'owner');
    const contractorTools = tools.filter((t) => t.category === 'contractor');

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary-900 mb-4">Hesaplama Merkezi</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Duygusal değil, veriye dayalı ön senaryo. 1–3 dakikada sonuç, istersen 72 saatte rapor.
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            🔒
                        </div>
                        <span className="font-medium">Spam yok</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            🛡️
                        </div>
                        <span className="font-medium">Veri gizliliği</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            ℹ️
                        </div>
                        <span className="font-medium">Bilgilendirme amaçlı</span>
                    </div>
                </div>

                {/* Live Market Rates Widget */}
                <div className="mb-12">
                    <MarketRates />
                </div>

                {/* Property Owner Tools */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-primary-900 mb-6 font-display">Mülk Sahibi Araçları</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ownerTools.map((tool) => (
                            <ToolCardComponent key={tool.id} tool={tool} />
                        ))}
                    </div>
                </div>

                {/* Contractor Tools */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-primary-900 mb-6">Müteahhit Araçları</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contractorTools.map((tool) => (
                            <ToolCardComponent key={tool.id} tool={tool} />
                        ))}
                    </div>
                </div>

                {/* Comprehensive Strategic Guide Section */}
                <div className="mt-24 space-y-20">
                    <section className="bg-white rounded-[3rem] p-8 md:p-20 shadow-sm border border-gray-100">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 border-b-2 border-accent/20 pb-6">
                                Kentsel Dönüşüm Hesaplama Merkezi: Veriye Dayalı Karar Alma Rehberi
                            </h2>
                            
                            <div className="prose prose-lg prose-slate max-w-none">
                                <p className="lead text-xl text-gray-600 mb-10">
                                    Kentsel dönüşüm süreci, sadece eski bir binanın yıkılıp yenisinin yapılması değil; imar haklarından inşaat maliyetlerine, paylaşım oranlarından devlet desteklerine kadar uzanan karmaşık bir <strong>finansal ve teknik yönetim</strong> sürecidir. KD Ankara Hesaplama Merkezi, bu süreci şeffaflaştırmak ve mülk sahiplerine pazarlık gücü kazandırmak için tasarlanmıştır.
                                </p>

                                <h3 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Neden Hesaplama Yapmalısınız?</h3>
                                <p>
                                    Çoğu mülk sahibi, müteahhitlerle görüşmeye başladığında sadece "Kaç metrekare ev alacağım?" sorusuna odaklanır. Oysa binanızın <strong>Emsal (KAKS)</strong> hakkını, bölgedeki güncel <strong>m² maliyetlerini</strong> ve adil <strong>paylaşım oranlarını</strong> bilmeden masaya oturmak, hak kaybına yol açabilir. Araçlarımız, size kulaktan dolma bilgiler yerine yasal yönetmeliklere (6306 Sayılı Kanun) dayalı veriler sunar.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-primary-50 p-8 rounded-[2.5rem] border border-primary-100">
                                        <h4 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                                            <Calculator className="w-5 h-5 text-accent" />
                                            Emsal ve Alan Analizi
                                        </h4>
                                        <p className="text-sm text-primary-800 leading-relaxed">Arsanızın imar planındaki TAKS/KAKS değerlerini kullanarak yapılabilecek maksimum inşaat alanını keşfedin. Bu, binanızın "anayasası"dır.</p>
                                    </div>
                                    <div className="bg-primary-50 p-8 rounded-[2.5rem] border border-primary-100">
                                        <h4 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                                            <TrendingUp className="w-5 h-5 text-accent" />
                                            Paylaşım ve Hasılat
                                        </h4>
                                        <p className="text-sm text-primary-800 leading-relaxed">Binanızın tamamlanınca edeceği toplam değeri ve bu değerin malik/müteahhit arasında nasıl bölüşüleceğini simüle edin.</p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Ankara Piyasa Dinamikleri ve 2026 Trendleri</h3>
                                <p>
                                    Ankara'da kentsel dönüşüm; Çankaya'daki butik projelerden, Yenimahalle'deki geniş ada bazlı dönüşümlere kadar farklı dinamikler içerir. 2026 yılı itibarıyla inşaat maliyetlerindeki %40'lık artış ve devletin sunduğu kira yardımı güncellemeleri, projelerin fizibilitesini doğrudan etkilemiştir. Hesaplayıcılarımız, Ankara'nın 25 ilçesindeki güncel rayiç değerleri ve Bakanlık birim maliyetlerini baz alarak güncellenmektedir.
                                </p>

                                <h3 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Araçları Nasıl Kullanmalısınız? (Yol Haritası)</h3>
                                <p>Sağlıklı bir ön analiz için şu sırayı takip etmenizi öneririz:</p>
                                <ol className="space-y-4">
                                    <li><strong>Adım 1:</strong> <em>Emsal Hesaplama</em> ile arsanızın potansiyelini görün.</li>
                                    <li><strong>Adım 2:</strong> <em>Daire Adedi & Mix</em> ile binada kaç bağımsız bölüm çıkacağını planlayın.</li>
                                    <li><strong>Adım 3:</strong> <em>Maliyet Bandı</em> ile binanızı kendiniz yaptırırsanız ne kadar bütçe gerektiğini öğrenin.</li>
                                    <li><strong>Adım 4:</strong> <em>Paylaşım Simülatörü</em> ile müteahhit tekliflerini analiz edin.</li>
                                </ol>

                                <div className="bg-primary-950 text-white p-10 md:p-14 rounded-[3rem] my-16 text-center">
                                    <h4 className="text-2xl font-bold text-accent mb-4 italic">Sadece Bir Rakam Değil, Bir Strateji Alın</h4>
                                    <p className="text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                                        Burada yaptığınız hesaplamalar ön bilgilendirme amaçlıdır. Net bir yol haritası ve resmi rapor için KD Ankara uzmanları 72 saat içinde binanıza özel <strong>Profesyonel Fizibilite Dosyası</strong> hazırlar.
                                    </p>
                                    <Link href="/on-analiz">
                                        <Button 
                                            className="bg-accent hover:bg-accent-600 text-white px-12 h-14 rounded-2xl font-bold text-lg shadow-xl shadow-accent/20 transition-all"
                                        >
                                            Detaylı Rapor Talep Et
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Extended FAQ */}
                    <section className="px-4">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-3xl font-bold text-primary-900 mb-10 text-center italic">Hesaplama Hakkında Sık Sorulanlar</h3>
                            <div className="grid gap-6">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-primary-900 mb-2">Bu sonuçlar resmi belge yerine geçer mi?</h4>
                                    <p className="text-sm text-gray-600">Hayır. Buradaki araçlar piyasa ortalamaları ve yönetmelik katsayıları ile çalışan simülatörlerdir. Resmi süreç için mimari proje ve ruhsat dosyası gereklidir.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-primary-900 mb-2">Kira yardımı hesaplaması Ankara için güncel mi?</h4>
                                    <p className="text-sm text-gray-600">Evet, araçlarımız Çevre ve Şehircilik Bakanlığı'nın Ankara (1. kategori il) için belirlediği 2026 güncel destek tutarlarını kullanmaktadır.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-primary-900 mb-2">Maliyet hesabında KDV dahil mi?</h4>
                                    <p className="text-sm text-gray-600">Maliyet aracımızda KDV dahil veya hariç seçeneklerini işaretleyerek her iki senaryoyu da görebilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function ToolCardComponent({ tool }: { tool: ToolCard }) {
    return (
        <Link href={tool.path}>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border-2 border-transparent hover:border-accent h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                        {tool.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-500">{tool.estimatedTime}</span>
                </div>

                <h3 className="text-lg font-bold text-primary-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tool.requiredInfo.map((info, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                        >
                            {info}
                        </span>
                    ))}
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">
                    Hesapla
                </Button>
            </div>
        </Link>
    );
}