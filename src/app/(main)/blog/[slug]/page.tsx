import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.id === slug);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-32 text-center min-h-[50vh]">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Makale bulunamadı.</h1>
                <Link href="/blog" className="text-accent hover:underline">Blog sayfasına dön</Link>
            </div>
        );
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': post.title,
        'description': post.excerpt,
        'image': post.imageUrl,
        'datePublished': post.date,
        'author': {
            '@type': 'Person',
            'name': post.author
        },
        'publisher': { '@id': 'https://kdankara.com/#organization' }
    };

    return (
        <article className="pb-24 bg-gray-50/50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Header / Hero */}
            <header className="relative pt-32 pb-24 text-white overflow-hidden">
                <div className="absolute inset-0 bg-primary-950" />
                <div className="absolute inset-0 opacity-40">
                    <img src={post.imageUrl} alt={post.imageAlt} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 to-transparent" />
                
                <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Blog'a Dön
                    </Link>
                    
                    <div className="mb-6">
                        <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {post.category}
                        </span>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
                    </div>
                </div>
            </header>

            {/* Content Container */}
            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 max-w-3xl mx-auto prose prose-lg prose-blue">
                    {/* Post Content */}
                    <div className="content">
                        {post.content ? (
                            <div className="custom-content space-y-6">
                                {post.content}
                            </div>
                        ) : (
                            <>
                                <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-accent pl-4 italic">
                                    {post.excerpt}
                                </p>
                                
                                <p>
                                    Türkiye genelinde kentsel dönüşüm projeleri devam ederken, en çok merak edilen konulardan biri de devletin sunduğu destekler ve teknik süreçlerin nasıl işlediğidir. Özellikle büyük şehirlerde yaşayan apartman sakinleri için bu kararı almak hem maddi hem de teknik açıdan önemli bir süreçtir.
                                </p>
                                
                                <h2>Süreç Nereden Başlıyor?</h2>
                                <p>
                                    Öncelikle binanızın riskli yapı grubuna girip girmediğinin tespit edilmesi gerekmektedir. Uzman kuruluşlar tarafından yapılan karot testleri sonucunda binanın mevcut dayanım düzeyi çıkarılır ve Çevre Şehircilik Bakanlığı'nın sistemine yüklenir.
                                </p>
                                
                                <h3>Dikkat Edilmesi Gereken Belirli Unsurlar</h3>
                                <ul>
                                    <li>Lisanslı bir laboratuvar ile çalışılması</li>
                                    <li>Tüm kat maliklerinin süreç hakkında detaylıca bilgilendirilmesi</li>
                                    <li>Sözleşme aşamasına gelmeden önce teknik şartnamenin net bir şekilde hazırlanması</li>
                                </ul>
                            </>
                        )}
                        
                        <p className="mt-8">
                            Daha fazla bilgi almak ve kentsel dönüşüm potansiyelinizi analiz etmek için ücretsiz ön analiz anketimizi doldurabilir, uzman ekibimizle iletişime geçebilirsiniz.
                        </p>
                    </div>

                    <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100 text-center">
                        <h3 className="text-primary-900 font-bold mb-2">Binanızın Durumunu Öğrenin</h3>
                        <p className="text-sm text-gray-600 mb-4">Ücretsiz ön analiz raporu için hemen başvurun.</p>
                        <Link href="/on-analiz" className="inline-block bg-accent hover:bg-accent-600 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                            Analiz Başlat
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}