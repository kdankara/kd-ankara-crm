"use client";

import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useSEO } from '@/hooks/useSEO';

export default function Services() {
    useSEO(
        'Ankara Kentsel Dönüşüm Hizmet Paketleri',
        'KD Ankara kentsel dönüşüm hizmet paketleri: Ön uygunluk analizi, detaylı dönüşüm raporu ve tam süreç yönetimi. Çankaya, Yenimahalle ve tüm Ankara ilçelerinde.'
    );
    return (
        <div className="py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Profesyonel Danışmanlık Hizmetleri</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-950 mb-6 leading-tight">
                        Kentsel Dönüşümde <br />
                        <span className="text-accent text-3xl md:text-5xl italic font-medium">Uçtan Uca Çözümler</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Binanızın teknik analizinden hukuki süreçlerine, müteahhit seçiminden anahtar teslimine kadar her aşamada haklarınızı koruyan uzman paketlerimizi inceleyin.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto mb-12">
                    <h2 className="text-2xl font-bold text-primary-900 border-l-4 border-accent pl-4">Hizmet Paketlerimiz ve Çözüm Kapsamı</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-24">
                    {/* Package 1 */}
                    <Card className="flex flex-col border-none shadow-2xl hover:shadow-primary-900/10 transition-all rounded-[2.5rem] overflow-hidden bg-white group">
                        <CardHeader className="p-10 bg-slate-50/50 group-hover:bg-accent/5 transition-colors">
                            <CardTitle className="text-2xl font-bold text-primary-900">Ön Uygunluk & Yol Haritası</CardTitle>
                            <CardDescription className="text-lg">Sürecin henüz başında olan apartmanlar için</CardDescription>
                        </CardHeader>
                        <CardContent className="grow p-10 space-y-8">
                            <div className="text-3xl font-black text-primary">Projenize Özel</div>
                            <p className="text-gray-600 leading-relaxed">
                                Binanızın veya arsanızın kentsel dönüşüme uygunluğunu, belediye plan notlarını ve potansiyel haklarınızı belirlediğimiz başlangıç aşamasıdır.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Resmi İmar Durumu ve KAKS Analizi',
                                    'Bölgesel Emsal Artışı Potansiyeli',
                                    'Ada Bazlı Birleşme (Tevhit) Etüdü',
                                    '6306 Sayılı Kanun Bilgilendirmesi',
                                    'Ön Fizibilite Raporu Sunumu'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="p-10 pt-0">
                            <Link href="/on-analiz" className="w-full">
                                <Button className="w-full h-14 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg transition-all" variant="outline">Ücretsiz Ön Görüşme Ayarla</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Package 2 */}
                    <Card className="flex flex-col border-2 border-accent shadow-2xl relative scale-105 z-10 rounded-[2.5rem] overflow-hidden bg-white transform-gpu">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-black px-6 py-2 rounded-bl-3xl uppercase tracking-tighter">
                            EN ÇOK TERCİH EDİLEN
                        </div>
                        <CardHeader className="p-10 bg-accent/5">
                            <CardTitle className="text-2xl font-bold text-primary-950">Detaylı Dönüşüm Raporu</CardTitle>
                            <CardDescription className="text-lg text-primary-900/70">Karar verme aşamasındaki mülk sahipleri için</CardDescription>
                        </CardHeader>
                        <CardContent className="grow p-10 space-y-8">
                            <div className="text-3xl font-black text-primary">Tam Teknik Fizibilite</div>
                            <p className="text-gray-600 leading-relaxed">
                                Müteahhitlerle masaya oturmadan önce elinizdeki en güçlü kozdur. Mimari, mali ve hukuki tüm senaryoları kapsar.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Taslak Mimari Avan Proje Çalışması',
                                    'Metrekare Bazlı İnşaat Maliyet Hesabı',
                                    'Şerefiye ve Paylaşım Tabloları',
                                    'Müteahhit Kârlılık ve Risk Analizi',
                                    'Hukuki Sözleşme Taslak Hazırlığı',
                                    'Gayrimenkul Değerleme Raporu',
                                    'Apartman Toplantı Yönetimi'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-900 font-bold">
                                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="p-10 pt-0">
                            <Link href="/iletisim" className="w-full">
                                <Button className="w-full h-16 rounded-2xl bg-accent hover:bg-accent-600 text-white shadow-xl shadow-accent/30 font-bold text-xl">Süreci Uzmanına Danış</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Package 3 */}
                    <Card className="flex flex-col border-none shadow-2xl transition-all rounded-[2.5rem] overflow-hidden bg-primary-950 text-white group">
                        <CardHeader className="p-10 bg-white/5">
                            <CardTitle className="text-2xl font-bold text-white">Tam Süreç Yönetimi</CardTitle>
                            <CardDescription className="text-gray-400 text-lg">Müteahhit seçiminden teslime kadar</CardDescription>
                        </CardHeader>
                        <CardContent className="grow p-10 space-y-8">
                            <div className="text-3xl font-black text-accent py-2 text-white">
                                Profesyonel Temsil
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                İnşaat süresi boyunca mülk sahiplerinin teknik ve hukuki temsilcisi olarak tüm denetimi üstlendiğimiz pakettir.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Müteahhit İhale ve Teklif Yönetimi',
                                    'Noter Onaylı Sözleşme Denetimi',
                                    'İnşaat İlerleme ve Kalite Takibi',
                                    'Hakediş ve Malzeme Onay Süreci',
                                    'İskan ve Kat Mülkiyeti Takibi',
                                    'Teslim Alma ve Eksik Tespiti',
                                    'Devlet Destekleri Başvuru Takibi'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-200">
                                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="p-10 pt-0">
                            <Link href="/iletisim" className="w-full">
                                <Button className="w-full h-14 rounded-2xl bg-white text-primary-950 hover:bg-primary-50 font-bold text-lg">Proje Detaylarını Görüşelim</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>

                {/* Deep Dive SEO Content Section */}
                <div className="mt-24 max-w-7xl mx-auto space-y-16">
                    <section className="bg-white p-12 lg:p-20 rounded-[3rem] shadow-sm border border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-10 text-center">Ankara'da Güvenli Dönüşümün Yol Haritası</h2>
                        <div className="grid lg:grid-cols-2 gap-16 text-gray-700 leading-relaxed text-lg">
                            <div className="space-y-6">
                                <p>
                                    <strong>Ankara kentsel dönüşüm danışmanlığı</strong> dendiğinde akla gelen ilk merkezlerden biri olarak, Çankaya'nın köklü mahallelerinden (Ayrancı, Bahçelievler, Emek) Yenimahalle'nin yoğun yapı stoğuna (Demetevler, Şentepe) kadar geniş bir yelpazede hizmet veriyoruz. Başkentimizin yapı kimliğini modern, depreme dayanıklı ve estetik binalarla yeniden inşa etmek için mühendislik disiplini ile hukuki güvenceyi birleştiriyoruz.
                                </p>
                                <p>
                                    Kentsel dönüşüm süreci, binanın yıkılmasıyla başlayan bir süreç değildir. Aksine, yıkım kararı alınmadan aylar önce başlayan bir <strong>stratejik planlama</strong> sürecidir. Bakanlık lisanslı çözüm ortaklarımızla yürüttüğümüz Riskli Yapı Tespiti ve laboratuvar analizleri, binanızın gerçek durumunu bilimsel verilerle ortaya koyar. Bu veriler ışığında hazırlanan raporlar, mülk sahiplerinin kira yardımı, taşınma desteği ve vergi muafiyetlerinden (KDV %1 avantajı vb.) tam kapasite faydalanmasını sağlar.
                                </p>
                            </div>
                            <div className="space-y-6 bg-slate-50 p-10 rounded-3xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-primary-900 mb-4">Teknik Standartlarımız ve Analiz Metodolojimiz</h3>
                                <p className="text-sm">
                                    KD Ankara olarak yaptığımız tüm emsal hesaplamaları ve mimari etütler, <strong>TSE (Türk Standartları Enstitüsü)</strong> ve güncel Deprem Yönetmeliği (2018) standartlarına dayanmaktadır. Analizlerimizde kullandığımız ileri seviye yazılımlar sayesinde, arsanızın sadece bugünkü değerini değil, dönüşüm sonrası 10-20 yıllık değer projeksiyonunu da hesaplıyoruz.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                        <div className="font-bold text-accent text-xl">2018</div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400">Deprem Yönetmeliği</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                        <div className="font-bold text-accent text-xl">6306</div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400">Kanun Mevzuatı</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="grid md:grid-cols-2 gap-12">
                        <section className="bg-primary-950 p-12 lg:p-16 rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
                            <h3 className="text-2xl font-bold mb-6 text-accent italic">Ankara'ya Özel İmar Çözümleri ve Mevzuat Uyumu</h3>
                            <div className="prose prose-invert prose-sm opacity-90 space-y-4">
                                <p>
                                    Ankara Büyükşehir Belediyesi (ABB) ve ilçe belediyelerinin (Çankaya, Yenimahalle, Etimesgut) imar planı notlarındaki en ufak bir değişiklik, binanızın m² değerini milyonlarca lira etkileyebilir. KD Ankara olarak, bu değişiklikleri anlık takip ediyoruz.
                                </p>
                                <p>
                                    Örneğin; <strong>ada bazlı birleşmelerde</strong> sağlanan ilave emsal artışları veya "yol boyu ticaret" aksındaki binaların zemin kat kazanımları konusunda uzman ekibimiz en kârlı senaryoyu hazırlar. Özellikle Çankaya'nın Ayrancı ve Bahçelievler gibi dar parselli bölgelerinde uyguladığımız "akıllı mimari çözümler" ile mülk sahiplerinin daire m² kayıplarını minimuma indiriyor, emsal harici alanları (otopark, sığınak) en verimli şekilde projelendiriyoruz.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white p-12 lg:p-16 rounded-[3rem] border border-gray-100 shadow-sm shadow-primary-900/5">
                            <h3 className="text-2xl font-bold text-primary-950 mb-6 italic">Hukuki ve Finansal Denetim: Mülkiyet Kalkanı</h3>
                            <div className="prose prose-slate prose-sm space-y-4">
                                <p>
                                    Dönüşümün kalbi olan <strong>Kat Karşılığı İnşaat Sözleşmesi (KKİS)</strong>, sadece teknik bir metin değil, mülkiyetinizin gelecekteki tapusudur. Uzman gayrimenkul avukatlarımız, müteahhidin teknik şartnameye uymaması, inşaatın gecikmesi veya finansal sıkıntıya düşmesi durumunda malikleri %100 koruyan mekanizmalar kurar.
                                </p>
                                <p>
                                    Sadece "Banka Teminat Mektubu" değil, aynı zamanda "İnşaat Tamamlama Sigortası" ve "Sorumluluk Sigortaları" gibi modern finansal enstrümanları sözleşmelere entegre ediyoruz. İnşaat süresince yapılan her imalatı yerinde denetleyerek, projeye aykırı bir durum tespit edildiğinde hukuki müdahale sürecini derhal başlatıyoruz.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* New Strategic Comparison Section */}
                    <section className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                        <div className="max-w-4xl mx-auto relative z-10">
                            <h3 className="text-3xl font-bold mb-10 text-center italic">Danışmanlık mı, Doğrudan Müteahhit mi?</h3>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <h4 className="text-accent font-bold text-xl border-b border-accent/20 pb-2">Müteahhit Odaklı Süreç</h4>
                                    <p className="text-sm text-slate-300">Müteahhit firma kendi kâr marjını maksimize etmeye odaklanır. Malzeme kalitesi, ortak alan kullanımı ve şerefiye dağılımı genellikle firmanın lehine şekillenir. Malikler teknik bilgi eksikliği nedeniyle denetim yapamazlar.</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-accent font-bold text-xl border-b border-accent/20 pb-2">KD Ankara Odaklı Süreç</h4>
                                    <p className="text-sm text-slate-300">Danışmanlık süreci, maliklerin kârını ve güvenliğini maksimize eder. Bizim başarımız, sizin en iyi sözleşmeyi en iyi müteahhitle imzalamanızdır. Tüm teknik ve hukuki denetimi biz üstlendiğimiz için siz sadece yeni evinizin keyfini sürersiniz.</p>
                                </div>
                            </div>
                            
                            <div className="mt-12 p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                                <p className="text-lg italic">
                                    "Kentsel dönüşümde en pahalı hata, danışmanlık almamaktır. Müteahhitle masaya oturmadan önce elinizde bağımsız bir teknik rapor olması, size pazarlık masasında milyonlar kazandırır."
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-primary-50 p-12 lg:p-20 rounded-[3rem] border border-primary-100 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 blur-3xl rounded-full -ml-24 -mb-24"></div>
                        <h2 className="text-3xl font-bold text-primary-950 mb-8">Neden Sadece Danışmanlık Almalısınız?</h2>
                        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 text-lg">
                            <p>
                                Müteahhit firmalar, kâr odaklı ticari kuruluşlardır. Biz ise <strong>bağımsız bir strateji merkezimiz.</strong> KD Ankara olarak herhangi bir inşaat şirketine bağlı değiliz. Bizim başarımız, sizin en güvenli ve en kazançlı sözleşmeyi imzalamanızla ölçülür. Müteahhitle görüşmeden önce bizden alacağınız bir <strong>"Detaylı Dönüşüm Raporu"</strong>, masadaki pazarlık gücünüzü 10 kat artıracaktır.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 max-w-5xl mx-auto bg-primary-950 rounded-[3rem] p-12 lg:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(202,138,4,0.1),transparent)]"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Ücretsiz Ön Fizibilite İsteyin</h3>
                        <p className="text-primary-200 text-lg">Hangi paketin size uygun olduğuna karar veremediyseniz, <br className="hidden md:block" /> hemen uzman ekibimizle iletişime geçin.</p>
                    </div>
                    <Link href="/iletisim" className="relative z-10">
                        <Button size="lg" className="bg-accent hover:bg-accent-600 text-white font-bold h-16 px-12 rounded-2xl text-xl shadow-xl shadow-accent/20 transition-all hover:scale-105 group">
                            Randevu Alın <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
