import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Ankara'da kentsel dönüşüm süreci ne kadar sürer?",
        answer: "Ankara'da kentsel dönüşüm süreci projenin büyüklüğüne ve maliklerin uzlaşma hızına bağlı olarak değişir. Ön analiz, riskli yapı tespiti ve müteahhit ile sözleşme aşamaları ortalama 3-6 ay sürer. İnşaat ruhsatının alınması ve inşaat süreci ise genellikle 12-18 ay arasında tamamlanır. Sürecin sorunsuz ilerlemesi için KD Ankara gibi profesyonel danışmanlık hizmeti almak süreyi önemli ölçüde kısaltır."
    },
    {
        question: "Riskli yapı raporu alındıktan sonra tahliye süreci nasıl işler?",
        answer: "6306 Sayılı Kanun kapsamında binanız için 'Riskli Yapı Raporu' kesinleştikten sonra, mülk sahiplerine ve kiracılara tahliye için en az 60 gün süre verilir. Gerekli durumlarda bu süreye ek olarak en fazla 30 günlük bir ek süre daha tanınabilir. Bu yasal sürelerin sonunda binanın tahliye edilmesi ve yıkım işlemlerinin başlatılması zorunludur."
    },
    {
        question: "Müteahhit seçiminde nelere dikkat edilmeli?",
        answer: "Müteahhit seçiminde firmanın finansal yeterliliği, geçmişte tamamladığı referans projeler ve sunduğu teknik şartname detaylıca incelenmelidir. Yarım kalan projelerden korunmak için sadece en yüksek paylaşım oranını veren değil, teminat mektubu sunabilen, yasal gecikme cezalarını kabul eden kurumsal firmalar tercih edilmelidir. KD Ankara olarak, 'Müteahhit Fizibilite Raporumuz' ile sizi bu risklerden koruyoruz."
    },
    {
        question: "2026 yılı güncel kentsel dönüşüm kira yardımı ve kredi destekleri nelerdir?",
        answer: "2026 yılı itibarıyla Ankara için Bakanlık tarafından belirlenen kentsel dönüşüm kira yardımı, riskli yapısını tahliye eden hak sahiplerine 18 ay boyunca karşılıksız olarak ödenmektedir. Ayrıca, kendi binasını yapmak isteyen mülk sahipleri için devlet destekli ve düşük faizli kentsel dönüşüm kredisi imkanları da sunulmaktadır. (Güncel rakamlar için Çevre ve Şehircilik Bakanlığı'nın duyuruları esas alınır.)"
    }
];

export default function FAQSection() {
    // Google ve Yapay Zekalar için JSON-LD FAQ Şeması
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-24 bg-gray-50">
            {/* ŞEMA BURADA SAYFAYA EKLENİYOR (Kullanıcılar görmez, sadece botlar okur) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
                    <p className="text-gray-600 text-lg">
                        Kentsel dönüşüm süreciyle ilgili en çok merak edilenleri uzmanlarımız yanıtlıyor.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            open={index === 0}
                            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <summary className="w-full list-none px-6 py-5 flex items-center justify-between focus:outline-none cursor-pointer [&::-webkit-details-marker]:hidden">
                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                <ChevronDown
                                    className="w-5 h-5 text-accent shrink-0 transition-transform duration-300 group-open:rotate-180"
                                />
                            </summary>
                            <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}