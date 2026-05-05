"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Building2, ShieldCheck, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useSEO } from '@/hooks/useSEO';

export default function Contractors() {
    useSEO(
        'Müteahhit Çözüm Ortaklığı | Ankara Kentsel Dönüşüm',
        'Ankara kentsel dönüşüm projelerinde müteahhit çözüm ortaklığı. Analiz edilmiş, hukuki sorunu çözülmüş projelere erişin.'
    );
    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Header Section */}
            <section className="bg-primary-950 text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/80 to-transparent"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Profesyonel Yapım Ortaklığı</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Ankara'nın Hazır Proje <br />
                            <span className="text-accent">Havuzuna Katılın</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-200 mb-10 leading-relaxed">
                            Mülkiyet sorunları çözülmüş, teknik analizleri tamamlanmış ve %100 uzlaşı aşamasına gelmiş kentsel dönüşüm projelerimizde çözüm ortağımız olun.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/firsatlar">
                                <Button size="lg" className="bg-accent hover:bg-accent-600 text-white font-bold h-14 px-8 shadow-xl shadow-accent/20 rounded-2xl">
                                    Aktif Proje Havuzunu İncele <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Why Work With Us Section - SEO Content Expansion */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-primary-900 mb-8">Neden KD Ankara Çözüm Ortağı Olmalısınız?</h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    Müteahhitlik sektörü için kentsel dönüşümdeki en büyük maliyet ve zaman kaybı; bitmek bilmeyen uzlaşma görüşmeleri ve hukuki pürüzlerdir. <strong>KD Ankara Strateji Merkezi</strong>, bu yükü sizin üzerinizden alır. Biz bir emlakçı değil; teknik, hukuki ve finansal analizleri yapan bir <strong>proje yönetim ofisiyiz.</strong>
                                </p>
                                <p>
                                    Havuzumuzdaki projeler; imar durumu netleşmiş, şerefiye tabloları hazırlanmış ve maliklerin büyük çoğunluğunun imzaya hazır olduğu "olgunlaşmış" dosyalardır. Bu sayede firmanız, şantiye planlamasına ve inşaat kalitesine odaklanırken, bürokratik engellerle vakit kaybetmez.
                                </p>
                                <p>
                                    Sadece güvenilir, finansal gücü yerinde ve referansları Ankara'nın vizyonuna değer katacak firmalarla çalışıyoruz. Amacımız, hem maliklerin haklarını korumak hem de yüklenicinin sürdürülebilir bir kârlılıkla projeyi teslim etmesini sağlamaktır.
                                </p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: ShieldCheck, title: 'Analiz Edilmiş Dosyalar', desc: 'Tapu kaydı, borç durumu ve imar verileri önceden filtrelenmiş şeffaf projeler.' },
                                { icon: Briefcase, title: 'Kurumsal Yönetim', desc: 'Sözleşme ve teknik şartname süreçlerinde profesyonel muhataplık.' },
                                { icon: Building2, title: 'Hızlı Uzlaşma', desc: 'Veriye dayalı modellerle ikna edilmiş, imzaya hazır mülk sahipleri.' },
                                { icon: ArrowRight, title: 'Prestijli Lokasyonlar', desc: 'Çankaya ve Yenimahalle başta olmak üzere Ankara\'nın en değerli bölgeleri.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-primary-900 mb-3">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Standards Section for SEO */}
                    <section className="mb-24 py-16 px-8 bg-primary-950 rounded-[3rem] text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[120px] rounded-full -mr-32 -mt-32"></div>
                        <div className="max-w-4xl mx-auto relative z-10 text-center">
                            <h2 className="text-3xl font-bold mb-8">Çözüm Ortağı Standartlarımız</h2>
                            <p className="text-primary-200 text-lg mb-12 leading-relaxed">
                                KD Ankara portföyündeki projelere teklif verecek firmaların; teknik yeterlilik, finansal kapasite ve geçmiş dönem referansları konusunda titiz bir incelemeden geçmesi gerekmektedir.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                <div className="space-y-4">
                                    <h3 className="text-accent font-bold">Teknik Yeterlilik</h3>
                                    <p className="text-sm text-primary-100/80">Benzer ölçekteki projeleri zamanında ve fen kurallarına uygun teslim etmiş olma şartı aranır.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-accent font-bold">Finansal Sağlamlık</h3>
                                    <p className="text-sm text-primary-100/80">İnşaatın özkaynak veya banka teminatları ile tamamlanabilirliği analiz edilir.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-accent font-bold">Hukuki Şeffaflık</h3>
                                    <p className="text-sm text-primary-100/80">Firmanın devam eden davaları ve iş güvenliği geçmişi raporlanır.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Form Sidebar Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-primary-900 mb-6">Başvuru Süreci Nasıl İşler?</h3>
                                <ul className="space-y-6">
                                    {[
                                        { s: '01', t: 'Ön Başvuru', d: 'Yandaki formu doldurarak firmanızı tanıtın.' },
                                        { s: '02', t: 'Profil İnceleme', d: 'Teknik kadromuz referanslarınızı ve yeterliliğinizi inceler.' },
                                        { s: '03', t: 'Havuz Erişimi', d: 'Onaylı firma listemize eklenerek projelere davet edilirsiniz.' }
                                    ].map((step, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="text-accent font-bold text-lg leading-none">{step.s}</span>
                                            <div>
                                                <h4 className="font-bold text-primary-950 mb-1">{step.t}</h4>
                                                <p className="text-sm text-gray-500">{step.d}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Form Section */}
                        <Card className="lg:col-span-2 border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
                            <CardHeader className="bg-white border-b border-gray-100 p-10">
                                <CardTitle className="text-2xl font-bold text-primary-900">Çözüm Ortağı Kayıt Formu</CardTitle>
                                <CardDescription className="text-lg">Firmanızı KD Ankara veritabanına ekleyin, vizyoner projelere birlikte imza atalım.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-10 bg-white">
                                <form className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label htmlFor="company" className="text-gray-700 font-bold">Firma Ünvanı</Label>
                                            <Input id="company" placeholder="Şirket Tam Adı" className="h-12 rounded-xl" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="author" className="text-gray-700 font-bold">Yetkili Kişi</Label>
                                            <Input id="author" placeholder="Ad Soyad" className="h-12 rounded-xl" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="phone" className="text-gray-700 font-bold">Telefon</Label>
                                            <Input id="phone" placeholder="05XX XXX XX XX" className="h-12 rounded-xl" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="email" className="text-gray-700 font-bold">E-posta</Label>
                                            <Input id="email" type="email" placeholder="kurumsal@firma.com" className="h-12 rounded-xl" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="refs" className="text-gray-700 font-bold">Referans Projeler</Label>
                                        <Textarea id="refs" placeholder="Tamamlanan veya devam eden kentsel dönüşüm projelerinizden örnekler verin..." className="min-h-[120px] rounded-xl" />
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="zones" className="text-gray-700 font-bold">Çalışma Bölgeleri ve Tercihler</Label>
                                        <Textarea id="zones" placeholder="Örn: Çankaya, Yenimahalle. 2000 m² üzeri parsel projeleri..." className="min-h-[100px] rounded-xl" />
                                    </div>

                                    <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                                        <Checkbox id="terms" className="mt-1" />
                                        <Label htmlFor="terms" className="text-sm font-normal text-gray-600 leading-relaxed">
                                            KD Ankara'nın gizlilik politikası çerçevesinde paylaştığım bilgilerin proje havuzunda değerlendirilmesini ve benimle iletişime geçilmesini onaylıyorum.
                                        </Label>
                                    </div>

                                    <Button className="w-full bg-primary hover:bg-primary-950 h-16 text-xl font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all">Başvuruyu Kaydet</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
