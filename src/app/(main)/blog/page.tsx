"use client";

import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import Link from 'next/link';
import { ChevronRight, Calendar, User } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    imageUrl: string;
    imageAlt: string; // Added for SEO
    content?: React.ReactNode;
}

export const blogPosts: BlogPost[] = [
    {
        id: '2026-kentsel-donusum-kira-yardimi',
        title: '2026 Kentsel Dönüşüm Kira Yardımı Ne Kadar? (Ankara ve İl İl Güncel Rakamlar)',
        excerpt: 'Çevre, Şehircilik ve İklim Değişikliği Bakanlığı 2026 kentsel dönüşüm kira yardımı rakamlarını güncelledi. Ankara ve büyükşehirlerdeki yeni tutarlar, başvuru şartları ve tüm detaylar.',
        date: '21 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Mevzuat & Teşvikler',
        imageUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop',
        imageAlt: 'Ankara 2026 kentsel dönüşüm kira yardımı ne kadar',
        content: (
            <>
                <p className="lead text-xl text-gray-600 mb-8">Kentsel dönüşüm sürecine giren mülk sahiplerinin en çok merak ettiği konulardan biri olan devlet destekli kira yardımları, 2026 yılı itibarıyla Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından güncellendi. Artan inşaat maliyetleri ve ekonomik dinamikler göz önüne alınarak yenilenen bu destekler, riskli yapılarını yenilemek isteyen vatandaşlar için can suyu niteliği taşıyor.</p>

                <div className="my-10">
                    <img 
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop" 
                        alt="6306 sayılı kanun kira desteği başvurusu Çankaya" 
                        className="rounded-2xl shadow-lg w-full"
                    />
                    <p className="text-center text-sm text-gray-500 mt-4">Görsel: Ankara kentsel dönüşüm başvuru noktaları ve süreç bilgilendirme.</p>
                </div>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 uppercase tracking-tight border-b-2 border-accent/20 pb-2">2026 Yılında İllere Göre Kentsel Dönüşüm Kira Yardımları</h2>
                <p>Bakanlık, kira yardımı tutarlarını illerin nüfus yoğunluğuna, ortalama kira rayiçlerine ve emlak piyasasındaki dalgalanmalara göre kademelendirmektedir. 2026 yılı güncel verilerine göre İstanbul, Ankara ve İzmir gibi büyükşehirlerde kira yardımları en üst limitten ödenmektedir.</p>
                
                <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-accent my-8 italic">
                    <strong>Ankara Özelinde Durum:</strong> Ankara'da (özellikle Çankaya, Yenimahalle, Keçiören, Etimesgut gibi ilçelerde) ikamet eden ve binası "6306 Sayılı Kanun" kapsamında "Riskli Yapı" olarak tescil edilen hak sahipleri, aylık 8.500 TL ile 12.000 TL arasında değişen tutarlarda kira desteği alabilmektedir.
                </p>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">Kira Yardımından Faydalanma Şartları ve Başvuru Süreci</h2>
                <p>Bu destekten faydalanabilmek için sürecin resmi ve yasalara uygun yürütülmesi şarttır. Sadece binanın eski olması yeterli değildir, resmi bir "Riskli Yapı Onayı" gerekmektedir:</p>
                <div className="grid md:grid-cols-2 gap-8 my-10">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-primary-800 mb-3">Mülk Sahipleri İçin:</h3>
                        <ul className="space-y-2 text-sm">
                            <li>• Tapu kütüğüne "Riskli Yapı" şerhi düşülmüş olması.</li>
                            <li>• Binanın resmen tahliye edilmesi ve yıkım onayının alınması.</li>
                            <li>• Ziraat Bankası kentsel dönüşüm hesabı açılması.</li>
                            <li>• Başvurunun tahliyeden itibaren 1 yıl içinde yapılması.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-primary-800 mb-3">Kiracılar İçin:</h3>
                        <ul className="space-y-2 text-sm">
                            <li>• Riskli yapı raporu alındığında o adreste ikamet ediyor olmak.</li>
                            <li>• İkametgah belgesi ve adına kayıtlı fatura ibrazı.</li>
                            <li>• Tek seferlik (defaten) taşınma desteği ödemesi yapılır.</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">Ödeme Süreleri ve Özel Durumlar</h2>
                <p>Normal şartlarda kira yardımı süresi 18 ay ile sınırlıdır. Ancak riskli alan ilan edilen (rezerv alan) bölgelerde bu süre projenin tamamlanma takvimine göre 48 aya kadar uzatılabilmektedir. Eğer mülk sahibi bakanlığın kentsel dönüşüm kredi desteğinden (faiz indirimi) yararlanıyorsa, aynı anda kira yardımı alamaz.</p>
            </>
        )
    },
    {
        id: 'emsal-hesaplama-rehberi',
        title: 'Emsal (KAKS) ve TAKS Nedir? Kentsel Dönüşümde Arsa Payı Nasıl Hesaplanır?',
        excerpt: 'Kentsel dönüşümde arsanızın değerini belirleyen TAKS, KAKS (Emsal) ve Arsa Payı kavramlarını örneklerle açıklıyoruz. Toplam inşaat alanı nasıl hesaplanır?',
        date: '22 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Rehber',
        imageUrl: 'https://images.unsplash.com/photo-1541888081600-482a52efc18b?q=80&w=2072&auto=format&fit=crop',
        imageAlt: 'Ankara imar durumu emsal hesaplama tablosu',
        content: (
            <>
                <p className="lead text-xl text-gray-600 mb-8">Kentsel dönüşüm sürecine giren veya arsasını müteahhide kat karşılığı vermek isteyen mülk sahiplerinin en sık karşılaştığı terimlerin başında TAKS, KAKS (Emsal) ve Arsa Payı gelir. Bir arsa üzerine yapılabilecek binanın büyüklüğünü belirleyen bu kavramlar, projenin matematiğini oluşturur.</p>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">TAKS (Taban Alanı Katsayısı) Nedir?</h2>
                <p>TAKS, yapılacak olan binanın arsa üzerinde ne kadarlık bir tabana (zemin alanına) oturabileceğini gösteren orandır. Belediyelerin imar planlarında belirtilir ve genellikle 0.15 ile 0.40 arasında değişir.</p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <p className="font-bold mb-2">Örnek Hesaplama:</p>
                    <p>Arsa Alanı: 1.000 m² | TAKS: 0.30</p>
                    <p className="text-primary-800 font-bold">Binanın Oturum Alanı = 1.000 x 0.30 = 300 m²</p>
                </div>

                <div className="my-10">
                    <img 
                        src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1000&auto=format&fit=crop" 
                        alt="KAKS ve TAKS metrekare kazanım analizi" 
                        className="rounded-2xl shadow-lg w-full"
                    />
                    <p className="text-center text-sm text-gray-500 mt-4">Görsel: Mimari planlama ve metrekare kazanım simülasyonu.</p>
                </div>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 italic border-l-4 border-accent pl-6">KAKS (Emsal) Nedir? İnşaat Alanı Nasıl Bulunur?</h2>
                <p>KAKS (Kat Alanı Katsayısı) veya 'Emsal', o arsa üzerine yapılabilecek toplam net inşaat alanını ifade eder. Binanın toplam kaç metrekare daire alanına sahip olacağı bu değerle bulunur.</p>
                <p><strong>Önemli Not:</strong> Ankara imar yönetmeliklerinde "Emsal Harici Alanlar" (Otopark, sığınak, asansör boşluğu vb.) toplam inşaat alanına dahil edilmez.</p>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">Kentsel Dönüşümde Arsa Payı ve Şerefiye İlişkisi</h2>
                <p>Arsa payı, binadaki dairelerin arsa üzerindeki mülkiyet oranını ifade eder. Kentsel dönüşümde "Arsa Payı" sadece bir oran değil, projedeki geleceğinizdir. 6306 sayılı kanuna göre karar alma süreçlerinde daire sayısına değil, arsa payı oranına bakılır.</p>
            </>
        )
    },
    {
        id: 'muteahhit-secerken-dikkat-edilmesi-gerekenler',
        title: 'Kentsel Dönüşümde Müteahhit Seçimi: Mağdur Olmamak İçin 5 Altın Kural',
        excerpt: 'Ankara’da binanızı yenilerken doğru müteahhit nasıl seçilir? Teknik yeterlilik, mali analiz and referans kontrolü gibi hayati adımları uzmanından öğrenin.',
        date: '22 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Tavsiyeler',
        imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Güvenilir kentsel dönüşüm müteahhit firmaları Ankara',
        content: (
            <>
                <p className="lead text-xl text-gray-600 mb-8">Ankara'da kentsel dönüşüm süreci, mülk sahipleri için hayat boyu biriktirilen sermayenin geleceğe taşınmasıdır. İşte mağduriyet yaşamamak için mutlaka uygulamanız gereken altın kurallar.</p>

                <div className="my-10">
                    <img 
                        src="https://images.unsplash.com/photo-1574950518584-a166a702735e?q=80&w=1000&auto=format&fit=crop" 
                        alt="Kat karşılığı inşaat sözleşmesi teminat mektubu" 
                        className="rounded-2xl shadow-lg w-full"
                    />
                    <p className="text-center text-sm text-gray-500 mt-4">Görsel: Sözleşme güvenliği ve banka teminat mektubu süreçleri.</p>
                </div>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">1. Teknik ve Mali Yeterlilik Analizi</h2>
                <p>Bir firmanın sadece güzel web sitesine veya ofisine bakarak karar vermeyin. Müteahhitlik Yetki Belgesi sınıfını sorgulayın. Grup A, B, C gibi sınıflar firmanın hangi büyüklükteki işleri yapmaya yetkili olduğunu gösterir.</p>
                
                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">2. Referansların Kontrolü</h2>
                <p>Firmanın bitirdiği binalara gidin ve orada yaşayan insanlarla konuşun. Zamanında teslim edilip edilmediği, malzeme kalitesi gibi konular firmanın aynasıdır.</p>
            </>
        )
    },
    {
        id: '6306-sayili-kanun-haklariniz',
        title: '6306 Sayılı Kanun: Kentsel Dönüşümde Haklarınız ve Bilmeniz Gerekenler',
        excerpt: '6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun kapsamında mülk sahiplerinin hakları, kira yardımı ve riskli yapı tespit süreci detayları.',
        date: '25 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Mevzuat & Teşvikler',
        imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop',
        imageAlt: 'Kentsel dönüşüm yasası mülk sahibi hakları',
        content: (
            <>
                <p className="lead text-xl text-gray-600 mb-8">Türkiye'de kentsel dönüşümün temel yasal dayanağı olan 6306 Sayılı Kanun, mülk sahiplerine geniş haklar tanımaktadır.</p>
                
                <div className="my-10">
                    <img 
                        src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=1000&auto=format&fit=crop" 
                        alt="Riskli yapı tespiti ve yıkım süreci" 
                        className="rounded-2xl shadow-lg w-full"
                    />
                    <p className="text-center text-sm text-gray-500 mt-4">Görsel: İş makineleriyle riskli yapı yıkım ve saha hazırlık aşaması.</p>
                </div>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">Harç ve Vergi Muafiyetleri</h2>
                <p>Kentsel dönüşüm kapsamında yapılan projelerde belediye harçları, noter harçları ve damga vergisi gibi kalemlerden muafiyet sağlanır. Bu, proje maliyetini düşüren en önemli teşviklerden biridir.</p>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">2/3 Çoğunluk Kuralı</h2>
                <p>Binada dönüşüm kararı alınırken tüm maliklerin %100 uzlaşması beklenmez. Arsa payı üzerinden 2/3 çoğunluğun imzası ile karar alınabilir ve süreç başlatılabilir.</p>
            </>
        )
    },
    {
        id: 'teknik-kadro-uzmanligimiz',
        title: 'Teknik Kadro Uzmanlığımız: KD Ankara Kimdir?',
        excerpt: 'Kentsel dönüşüm sürecinde yanınızda olan KD Ankara ekibinin inşaat mühendisleri, mimarlar ve hukuk danışmanlarından oluşan uzman kadrosu ile tanışın.',
        date: '24 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Hakkımızda',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
        imageAlt: 'KD Ankara uzman kentsel dönüşüm mühendisleri',
        content: (
            <>
                <p className="lead text-xl text-gray-600 mb-8">KD Ankara, kentsel dönüşüm sürecini profesyonel, şeffaf ve güvenilir bir şekilde yöneten bağımsız bir strateji merkezidir.</p>

                <div className="my-10">
                    <img 
                        src="https://images.unsplash.com/photo-1521791136364-798a730bb361?q=80&w=1000&auto=format&fit=crop" 
                        alt="Gayrimenkul değerleme uzmanı Ankara" 
                        className="rounded-2xl shadow-lg w-full"
                    />
                    <p className="text-center text-sm text-gray-600 mt-4">Görsel: Uzman kadromuzun teknik analiz ve toplantı anları.</p>
                </div>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">Uzmanlık Alanlarımız</h2>
                <p>Ekibimiz inşaat mühendisleri, mimarlar, SPK lisanslı değerleme uzmanları ve kentsel dönüşüm hukukunda uzmanlaşmış avukatlardan oluşmaktadır. Amacımız mülk sahiplerinin haklarını %100 korumaktır.</p>
            </>
        )
    },
    {
        id: 'ankara-referans-projeler',
        title: 'Ankara Referans Projeler ve Süreç Yönetimi Deneyimlerimiz',
        excerpt: 'Ankara genelinde tamamladığımız ön analizler, malik uzlaşmaları ve başarıyla yönetilen kentsel dönüşüm projelerinden örnekler.',
        date: '23 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Referanslar',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
        imageAlt: 'Çankaya tamamlanan kentsel dönüşüm projesi',
        content: (
            <>
                <p className="lead text-xl text-gray-600 mb-8">Ankara'nın her ilçesinde, yüzlerce binanın kentsel dönüşüm yolculuğuna rehberlik ettik.</p>

                <div className="my-10">
                    <img 
                        src="https://images.unsplash.com/photo-1449156001935-91391d720500?q=80&w=1000&auto=format&fit=crop" 
                        alt="Yenimahalle bina yenileme örnek vaka çalışması" 
                        className="rounded-2xl shadow-lg w-full"
                    />
                    <p className="text-center text-sm text-gray-500 mt-4">Görsel: Başarıyla teslim edilen modern ve güvenli bir yerleşim projesi.</p>
                </div>

                <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6">Neler Yaptık?</h2>
                <p>Çankaya'da arsa payı uyuşmazlıklarının çözümü, Yenimahalle'de kira yardımı süreçlerinin yönetimi ve müteahhit teknik şartnamelerinin hak sahipleri lehine revize edilmesi gibi birçok alanda başarı sağladık.</p>
            </>
        )
    }
];

export default function Blog() {
    useSEO(
        'Blog & Bilgi Bankası | Ankara Kentsel Dönüşüm',
        'Kentsel dönüşüm hakkında güncel haberler, mevzuat rehberleri ve emsal hesaplama detayları için KD Ankara Bilgi Bankası.'
    );

    return (
        <div className="bg-gray-50/50 min-h-screen pb-24">
            <section className="bg-primary-950 text-white py-20 border-b border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Kentsel Dönüşüm Bilgi Bankası</h1>
                        <p className="text-xl text-gray-300">
                            Ankara kentsel dönüşüm süreçleri, güncel kira yardımları ve mevzuat hakkında bilmeniz gereken her şey.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-4 mt-16">
                <h2 className="sr-only">Güncel Kentsel Dönüşüm Yazıları</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <motion.div 
                            key={post.id}
                            {...fadeInUp} transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10" />
                                <img src={post.imageUrl} alt={post.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white/90 backdrop-blur text-primary-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 font-medium">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-accent" /> {post.author}</span>
                                </div>
                                
                                <h2 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h2>
                                
                                <p className="text-slate-500 mb-8 line-clamp-3 flex-grow leading-relaxed">
                                    {post.excerpt}
                                </p>
                                
                                <Link href={`/blog/${post.id}`} className="inline-flex items-center font-bold text-primary-950 hover:text-accent transition-colors mt-auto group/link">
                                    Devamını Oku <ChevronRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 mt-24">
                <div className="bg-primary-950 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,138,4,0.1),transparent)]"></div>
                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="text-3xl font-bold mb-6 text-accent italic">Bültenimize Abone Olun</h2>
                        <p className="text-primary-200 mb-10 text-lg">Ankara kentsel dönüşüm mevzuatındaki en son değişikliklerden ve güncel kira yardımı rakamlarından anında haberdar olun.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input type="email" placeholder="E-posta adresiniz" className="flex-grow h-14 rounded-2xl px-6 bg-white/10 border border-white/20 text-white placeholder:text-primary-300 outline-none focus:border-accent transition-colors" />
                            <button className="h-14 px-8 bg-accent hover:bg-accent-600 text-white font-bold rounded-2xl transition-all whitespace-nowrap shadow-lg shadow-accent/20">Kaydol</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
