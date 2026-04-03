import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { Link } from 'react-router-dom';
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
    content?: React.ReactNode;
}

// Static content for Phase 1. Will move to Firebase later.
export const blogPosts: BlogPost[] = [
    {
        id: '2026-kentsel-donusum-kira-yardimi',
        title: '2026 Kentsel Dönüşüm Kira Yardımı Ne Kadar? (Ankara ve İl İl Güncel Rakamlar)',
        excerpt: 'Çevre, Şehircilik ve İklim Değişikliği Bakanlığı 2026 kentsel dönüşüm kira yardımı rakamlarını güncelledi. Ankara ve büyükşehirlerdeki yeni tutarlar, başvuru şartları ve tüm detaylar.',
        date: '21 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Mevzuat & Teşvikler',
        imageUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop',
        content: (
            <>
                <p>Kentsel dönüşüm sürecine giren mülk sahiplerinin en çok merak ettiği konulardan biri olan devlet destekli kira yardımları, 2026 yılı itibarıyla Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından güncellendi. Artan inşaat maliyetleri ve ekonomik dinamikler göz önüne alınarak yenilenen bu destekler, riskli yapılarını yenilemek isteyen vatandaşlar için can suyu niteliği taşıyor. KD Ankara Kentsel Dönüşüm Strateji Merkezi olarak, bu yazımızda 2026 kira yardımı tutarlarını ve başvuru şartlarını detaylandırıyoruz.</p>

                <h2>2026 Yılında İllere Göre Kentsel Dönüşüm Kira Yardımları</h2>
                <p>Bakanlık, kira yardımı tutarlarını illerin nüfus yoğunluğuna ve emlak piyasasına göre kademelendirmektedir. 2026 yılı güncel verilerine göre İstanbul, Ankara ve İzmir gibi büyükşehirlerde kira yardımları en üst limitten ödenmektedir. Özellikle Ankara'da (Çankaya, Yenimahalle, Keçiören vb.) ikamet eden ve binası 'Riskli Yapı' kapsamına alınan hak sahipleri, 18 aya (bazı özel durumlarda 48 aya) varan sürelerle bu karşılıksız destekten faydalanabilmektedir. Kiracılar için ise taşınma desteği olarak defaten (tek seferlik) ödeme yapılmaktadır.</p>

                <h2>Kira Yardımından Faydalanma Şartları Nelerdir?</h2>
                <p>Bu destekten faydalanabilmek için sürecin resmi ve yasalara uygun yürütülmesi şarttır:</p>
                <ul>
                    <li><strong>Riskli Yapı Tespiti:</strong> Binanızın Çevre ve Şehircilik Bakanlığı lisanslı kuruluşları tarafından karot testi yapılarak 'Riskli Yapı' olarak onaylanması gerekir.</li>
                    <li><strong>Tahliye ve Yıkım:</strong> Binanın tahliye edilip yıkım sürecinin resmen başlamış olması ve yıkım tutanağının alınması zorunludur.</li>
                    <li><strong>İkamet Şartı:</strong> Mülk sahibinin veya kiracının, riskli yapı onayından önceki son bir yıl içinde o adreste ikamet ettiğini (fatura veya ikametgah ile) belgelemesi gerekmektedir.</li>
                </ul>

                <h3>Süreci KD Ankara ile Güvenle Yönetin</h3>
                <p>Kira yardımı başvuruları, riskli yapı tespiti, teknik şartnamelerin hazırlanması ve müteahhit uzlaşma süreçleri karmaşık ve hata kabul etmeyen işlemlerdir. KD Ankara olarak, evrak hazırlığından bakanlık onayına kadar tüm hukuki ve teknik süreci sizin adınıza şeffaf bir şekilde yürütüyoruz. Mülkünüzün değerini korurken, devlet desteklerinden eksiksiz faydalanmanız için profesyonel danışmanlık hizmetimizden yararlanın. Ücretsiz ön analiz formumuzu doldurarak veya bizimle iletişime geçerek kentsel dönüşüm yolculuğunuza güvenle başlayabilirsiniz.</p>
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
        content: (
            <>
                <p>Kentsel dönüşüm sürecine giren veya arsasını müteahhide kat karşılığı vermek isteyen mülk sahiplerinin en sık karşılaştığı terimlerin başında TAKS, KAKS (Emsal) ve Arsa Payı gelir. Bir arsa üzerine yapılabilecek binanın taban oturumunu, toplam inşaat alanını ve hak sahiplerinin yeni projedeki paylarını belirleyen bu kavramlar, kentsel dönüşümün anayasası niteliğindedir. KD Ankara Kentsel Dönüşüm Strateji Merkezi olarak, bu teknik terimleri ve hesaplama yöntemlerini sizin için şeffaflaştırıyoruz.</p>

                <h2>TAKS (Taban Alanı Katsayısı) Nedir?</h2>
                <p>TAKS, yapılacak olan binanın arsa üzerinde ne kadarlık bir tabana (zemin alanına) oturabileceğini gösteren orandır. Amacı, arsa içinde yeşil alan, otopark ve sosyal donatılara yer kalmasını sağlamaktır.</p>
                <p><strong>Hesaplama Örneği:</strong> Ankara'da 1.000 metrekarelik bir arsanız var ve belediye imar durumunda TAKS değeri 0.40 olarak belirlenmiş. Bu durumda binanızın taban oturum alanı en fazla 1.000 x 0.40 = 400 metrekare olabilir. Kalan 600 metrekarelik alan ise bahçe ve açık alan olarak bırakılmalıdır.</p>

                <h2>KAKS (Emsal) Nedir ve Toplam İnşaat Alanı Nasıl Bulunur?</h2>
                <p>KAKS (Kat Alanı Katsayısı) veya halk arasındaki adıyla 'Emsal', o arsa üzerine yapılabilecek maksimum net inşaat alanını ifade eder. Binanın kaç katlı olacağı ve toplamda kaç daire çıkacağı doğrudan bu değere bağlıdır.</p>
                <p><strong>Hesaplama Örneği:</strong> Aynı 1.000 metrekarelik arsanız için Emsal (KAKS) değerinin 2.0 olduğunu varsayalım. Bu arsa üzerine yapılabilecek toplam net inşaat alanı 1.000 x 2.0 = 2.000 metrekaredir. Balkonlar, asansör boşlukları, otoparklar ve yangın merdivenleri gibi 'Emsal Harici Alanlar' eklendiğinde brüt inşaat alanı çok daha yüksek çıkacaktır. Müteahhit ile yapılacak sözleşmelerde net/brüt alan ayrımı hayati önem taşır.</p>

                <h2>Arsa Payı Nedir ve Neden Çok Önemlidir?</h2>
                <p>Arsa payı, ana yapının (binanın) üzerinde bulunduğu arsadan, bağımsız bölümlere (daire, dükkan vb.) değerleri oranında tahsis edilen ortak mülkiyet payıdır. Kentsel dönüşümde arsa payı iki kritik noktada devreye girer:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Karar Alma Süreçleri:</strong> 6306 sayılı Kentsel Dönüşüm Kanunu kapsamında alınacak yıkım ve yeniden yapım kararlarında (çoğunluk sağlanırken) daire sayısına değil, sahip olunan arsa payı oranına bakılır.</li>
                    <li><strong>Yeni Daire Paylaşımı:</strong> Müteahhit ile yapılan anlaşmalarda, yeni binadan alacağınız dairenin büyüklüğü veya şerefiyesi, mevcut arsa payınızla doğru orantılıdır. Arsa payının yanlış veya haksız dağıtıldığı durumlarda 'Arsa Payı Düzeltim Davası' açılması gerekebilir.</li>
                </ul>

                <h3 className="mt-8">KD Ankara ile Hakkınızı Güvenceye Alın</h3>
                <p>Kentsel dönüşüm bir matematik hesabı olduğu kadar, doğru yönetilmesi gereken hukuki bir süreçtir. Sitemizdeki Emsal ve Arsa Payı Hesaplama Araçlarını kullanarak ön bilgi edinebilirsiniz. Ancak arsa payı uyuşmazlıkları, şerefiye analizleri ve adil müteahhit sözleşmeleri için Ankara'nın tüm ilçelerinde hizmet veren KD Ankara uzman ekibinden danışmanlık almanızı tavsiye ederiz. Riskleri minimize etmek ve mülkünüzün değerini korumak için bizimle iletişime geçin.</p>
            </>
        )
    },
    {
        id: 'muteahhit-secerken-dikkat-edilmesi-gerekenler',
        title: 'Kentsel Dönüşümde Müteahhit Seçimi: Mağdur Olmamak İçin 5 Altın Kural',
        excerpt: 'Ankara’da binanızı yenilerken doğru müteahhit nasıl seçilir? Teknik yeterlilik, mali analiz ve referans kontrolü gibi hayati adımları uzmanından öğrenin.',
        date: '22 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Tavsiyeler',
        imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
        content: (
            <>
                <p>Ankara'da kentsel dönüşüm süreci, mülk sahipleri için hayat boyu biriktirilen sermayenin geleceğe taşınmasıdır. Bu sürecin en kritik adımı ise doğru müteahhit veya yüklenici firmayı seçmektir. Yanlış tercih, projenin yarım kalmasına veya kalitesiz bir yapıya yol açabilir. KD Ankara olarak, güvenli bir dönüşüm için müteahhit seçiminde dikkat etmeniz gerekenleri sıraladık.</p>

                <h2>1. Teknik ve Mali Yeterlilik Analizi</h2>
                <p>Bir müteahhit firmanın sadece referanslarına bakmak yeterli değildir. Firmanın özkaynakları, banka teminat kapasitesi ve güncel inşaat maliyetlerini karşılama gücü incelenmelidir. Ankara imar dinamiklerine hakim, Bakanlık tarafından verilmiş 'Müteahhitlik Yetki Belgesi' (Grup sınıfı) projenin büyüklüğüne uygun olan firmalar tercih edilmelidir.</p>

                <h2>2. Referansların Yerinde İncelenmesi</h2>
                <p>Firmanın daha önce tamamladığı projeleri yerinde ziyaret edin. Teslim edilen dairelerin işçilik kalitesi, malzeme standartlarına uyum ve projenin zamanında teslim edilip edilmediği, firmanın güvenilirliği hakkında en dürüst bilgiyi verecektir.</p>

                <h3>KD Ankara ile Doğru Müteahhidi Bulun</h3>
                <p>Mülk sahiplerinin her teknik detayı bilmesi zordur. KD Ankara olarak; firmaların mali analizini yapıyor, teknik şartnameleri hazırlıyor ve hukuki süreci yönetiyoruz. Amacımız, en yüksek teklifi veren değil, projeyi en güvenli şekilde tamamlayacak müteahhidi bulmanızı sağlamaktır.</p>
            </>
        )
    }
];

export default function Blog() {
    useSEO(
        'Blog & Bilgi Bankası',
        'Kentsel dönüşüm hakkında güncel haberler, mevzuat rehberleri ve emsal hesaplama detayları için KD Ankara Bilgi Bankası.'
    );

    return (
        <div className="bg-gray-50/50 min-h-screen pb-24">
            <section className="bg-primary-950 text-white py-16 border-b border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Bilgi Bankası</h1>
                        <p className="text-lg text-gray-300">
                            Kentsel dönüşümle ilgili en güncel haberler ve kılavuz niteliğindeki makaleler.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-4 mt-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <motion.div 
                            key={post.id}
                            {...fadeInUp} transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10" />
                                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white/90 backdrop-blur text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                
                                <Link to={`/blog/${post.id}`} className="inline-flex items-center font-semibold text-accent hover:text-accent-600 transition-colors mt-auto">
                                    Devamını Oku <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
