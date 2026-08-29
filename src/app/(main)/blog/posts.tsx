export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '2026-kentsel-donusum-kira-yardimi',
        title: 'Ankara Kentsel Dönüşüm Kira Yardımı Rehberi (2025-2026)',
        excerpt: "Ankara'da ev sahipleri için aylık 6.500 TL (18 ay), kiracılar için 13.000 TL tek seferlik kentsel dönüşüm kira yardımı başvuru şartları, gerekli belgeler ve e-Devlet rehberi.",
        date: '30 Ağustos 2026',
        author: 'KD Ankara Ekibi',
        category: 'Mevzuat & Teşvikler',
        imageUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop',
        imageAlt: 'Ankara kentsel dönüşüm kira yardımı başvuru şartları'
    },
    {
        id: 'emsal-hesaplama-rehberi',
        title: 'Emsal (KAKS) ve TAKS Nedir? Kentsel Dönüşümde Arsa Payı Nasıl Hesaplanır?',
        excerpt: 'Kentsel dönüşümde arsanızın değerini belirleyen TAKS, KAKS (Emsal) ve Arsa Payı kavramlarını örneklerle açıklıyoruz. Toplam inşaat alanı nasıl hesaplanır?',
        date: '22 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Rehber',
        imageUrl: 'https://images.unsplash.com/photo-1541888081600-482a52efc18b?q=80&w=2072&auto=format&fit=crop',
        imageAlt: 'Ankara imar durumu emsal hesaplama tablosu'
    },
    {
        id: 'muteahhit-secerken-dikkat-edilmesi-gerekenler',
        title: 'Kentsel Dönüşümde Müteahhit Seçimi: Mağdur Olmamak İçin 5 Altın Kural',
        excerpt: "Ankara'da binanızı yenilerken doğru müteahhit nasıl seçilir? Teknik yeterlilik, mali analiz ve referans kontrolü gibi hayati adımları uzmanından öğrenin.",
        date: '22 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Tavsiyeler',
        imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Güvenilir kentsel dönüşüm müteahhit firmaları Ankara'
    },
    {
        id: '6306-sayili-kanun-haklariniz',
        title: '6306 Sayılı Kanun: Kentsel Dönüşümde Haklarınız ve Bilmeniz Gerekenler',
        excerpt: '6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun kapsamında mülk sahiplerinin hakları, kira yardımı ve riskli yapı tespit süreci detayları.',
        date: '25 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Mevzuat & Teşvikler',
        imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop',
        imageAlt: 'Kentsel dönüşüm yasası mülk sahibi hakları'
    },
    {
        id: 'teknik-kadro-uzmanligimiz',
        title: 'Teknik Kadro Uzmanlığımız: KD Ankara Kimdir?',
        excerpt: 'Kentsel dönüşüm sürecinde yanınızda olan KD Ankara ekibinin inşaat mühendisleri, mimarlar ve hukuk danışmanlarından oluşan uzman kadrosu ile tanışın.',
        date: '24 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Hakkımızda',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
        imageAlt: 'KD Ankara uzman kentsel dönüşüm mühendisleri'
    },
    {
        id: 'ankara-referans-projeler',
        title: 'Ankara Referans Projeler ve Süreç Yönetimi Deneyimlerimiz',
        excerpt: 'Ankara genelinde tamamladığımız ön analizler, malik uzlaşmaları ve başarıyla yönetilen kentsel dönüşüm projelerinden örnekler.',
        date: '23 Mart 2026',
        author: 'KD Ankara Ekibi',
        category: 'Referanslar',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
        imageAlt: 'Çankaya tamamlanan kentsel dönüşüm projesi'
    }
];