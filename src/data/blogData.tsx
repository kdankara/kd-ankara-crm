import { ShieldCheck, Calculator, TrendingUp, FileText } from 'lucide-react';
import React from 'react';

export const BLOG_POSTS = [
  // --- 1. MAKALE: RİSKLİ YAPI TESPİTİ ---
  {
    slug: 'ankara-riskli-yapi-tespiti-sureci',
    category: 'Hukuki Rehber',
    title: "Ankara'da Riskli Yapı Tespiti: 6306 Sayılı Kanun Kapsamında Yasal Haklarınız",
    description: "Ankara kentsel dönüşüm sürecinde 6306 sayılı kanun kapsamında riskli yapı tespiti, %51 çoğunluk kuralı ve yasal haklarınız için KD Ankara bağımsız danışmanlık rehberi.",
    date: '4 Eylül 2026',
    readTime: '8 dk okuma',
    isFeatured: true,
    highlightBadge: 'YENİ & GÜNCEL MEVZUAT',
    metric: '%51 Çoğunluk Kuralı',
    badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    icon: FileText,
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          Ankara'nın özellikle Çankaya, Altındağ ve Mamak gibi köklü yerleşim bölgelerinde bulunan yaşlı yapı stoku, kentsel dönüşüm süreci adımlarının kaçınılmaz bir ihtiyaç haline geldiğini net bir şekilde ortaya koymaktadır. Ancak bu sürecin en kritik ve geri dönülemez eşiği olan riskli yapı tespiti aşaması, mülk sahipleri için çoğunlukla hukuki ve idari belirsizliklerle doludur.
        </p>
        <p>
          Afet risklerini önceden bertaraf etmek amacıyla hayata geçirilen 6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun, mülk sahiplerine haklarını korumaları için çok önemli yasal güvenceler tanımaktadır. Ankara kentsel dönüşüm sahasında tamamen rasyonel verilere dayalı, bağımsız analizler sunan <strong>KD Ankara</strong> olarak, riskli yapı tespiti sürecinde sahip olduğunuz yasal hakları ve bu hakları koruma yollarını güncel mevzuat hükümleriyle birlikte masaya yatırıyoruz.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Riskli Yapı Tespiti Nasıl Yapılır ve Süreç Nasıl Başlar?</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Tek Bir Malikle Başvuru Yeterlidir:</strong> Kanunun 3. maddesi uyarınca, kat mülkiyeti veya kat irtifakı kurulmuş binalarda süreç, maliklerden yalnızca birinin başvurusu ile resmi olarak başlayabilir. Diğer maliklerin rızası aranmaz.</li>
          <li><strong>Yetkili Kuruluşlar:</strong> Başvurular, Kentsel Dönüşüm Başkanlığı tarafından lisanslandırılmış kamu kurumlarına, üniversitelere veya özel yapı denetim firmalarına yapılır.</li>
          <li><strong>Tapu Şerhi ve Tebligat:</strong> İnceleme sonucunda bina riskli bulunursa tapuya şerh düşülür. Muhtarlıktaki 15 günlük ilanın son günü, tüm hak sahiplerine tebliğ yapılmış sayılır.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Tebligattan Sonra Haklarınız: 15 Günlük Resmi İtiraz Hakkı</h3>
        <p>
          Uygulama Yönetmeliği'nin 7. maddesine göre; tebligatın son gününden itibaren <strong>15 gün içinde</strong> Kentsel Dönüşüm Müdürlüğü'ne itiraz edilebilir. İtirazlar 7 kişilik bağımsız bir Teknik Heyet tarafından karara bağlanır. Kiracıların itiraz hakkı yoktur, sadece tapu malikleri itiraz edebilir.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Yeni Dönem: %51 Salt Çoğunluk Yasası</h3>
        <p>
          7471 sayılı Kanun ile eski 2/3 kuralı kaldırılmıştır. Artık parsellerin birleştirilmesi, müteahhit seçimi ve sözleşme şartlarına, paydaşların sahip oldukları hisseleri oranında <strong>salt çoğunluğu (%51)</strong> ile karar verilmektedir. Karara katılmayanların payları açık artırma ile satılır.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Tahliye ve Yıkım Süreci</h3>
        <p>
          Riskli yapı tespiti kesinleştiğinde maliklere tahliye için ilk olarak 60 gün süre verilir. İhtiyaç halinde 30 günlük ek süre tanınır. Toplam <strong>90 günlük yasal sürede</strong> yapı tahliye edilmezse, elektrik ve su kesilerek kolluk kuvveti desteği ile zorunlu yıkım gerçekleştirilir.
        </p>

        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 mt-10">
          <h4 className="text-xl font-bold text-amber-900 mb-3">KD Ankara: Tamamen Bağımsız Strateji Ortağınız</h4>
          <p className="text-amber-800 text-base">
            KD Ankara bir inşaat firması ya da müteahhit değildir; bizler asla inşaat yapmayız. Mülk sahiplerinin haklarını müteahhitlere karşı koruyan bağımsız bir danışmanlık merkezidir. Yalnızca sizden hizmet bedeli (daire başı sabit ücret veya projeden %1-%2 komisyon) alarak, hiçbir müteahhide gebe kalmadan hakkınızı savunuruz.
          </p>
        </div>
      </div>
    )
  },

  // --- 2. MAKALE: MÜTEAHHİT SÖZLEŞMELERİ ---
  {
    slug: 'muteahhit-sozlesmeleri-kiritik-hukuki-maddeler',
    category: 'Müteahhit Seçimi',
    title: 'Kentsel Dönüşümde Müteahhit Sözleşmeleri: Arsa Sahibini Koruyan Kritik Hukuki Maddeler',
    description: "Ankara'da arsa payı karşılığı inşaat sözleşmelerinde haklarınızı koruyacak bina tamamlama sigortası, salt çoğunluk ve sözleşme feshi gibi kritik hukuki güvenceler.",
    date: '5 Eylül 2026',
    readTime: '7 dk okuma',
    isFeatured: false,
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    icon: TrendingUp, 
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          Ankara'da binanızın ekonomik ömrünü tamamladığını düşünüyor veya deprem güvenliği açısından endişe duyuyorsanız, kentsel dönüşüm süreci hayatınızın en önemli kararlarından biridir. Ancak bu yola çıkarken mülk sahiplerinin en büyük çekincesi, müteahhitlerle yapılacak sözleşmelerde hak kaybına uğramak ve inşaatın yarım kalması gibi risklerle karşılaşmaktır.
        </p>
        <p>
          Bu rehberimizde, <strong>KD Ankara Strateji Merkezi'nin</strong> üst düzey danışmanlık perspektifiyle, arsa sahiplerinin haklarını koruyan en kritik hukuki maddeleri ve kanuni güvenceleri inceliyoruz. Özellikle Ankara'nın kalbi niteliğindeki bölgelerde bir Çankaya riskli yapı dönüşüm projesini yönetirken yasal dayanakları bilmek ve profesyonel bir <strong>Ankara kentsel dönüşüm danışmanlığı</strong> almak sizi telafisi imkansız zararlardan koruyacaktır.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kat Karşılığı İnşaat Sözleşmesinin Hukuki Niteliği ve Şekil Şartı</h3>
        <p>
          Halk arasında "Kat Karşılığı İnşaat Sözleşmesi" olarak bilinen, hukuki literatürde ise "Arsa Payı Karşılığı İnşaat Sözleşmesi" olarak adlandırılan bu sözleşmeler, karma nitelikli bir eser sözleşmesidir. Türk Borçlar Kanunu kapsamında karşılıklı borç yükleyen bu yapıda; arsa sahibi arsa payını devretmeyi, müteahhit ise bunun karşılığında imar planı ve teknik şartnameye uygun inşaat yapmayı yüklenir.
        </p>
        <p>
          Burada dikkat edilmesi gereken en önemli husus <strong>resmi şekil şartıdır</strong>. Yargıtay kararlarında ve ilgili kanunlarda açıkça belirtildiği üzere, bu sözleşmelerin geçerliliği noterde "düzenleme" şeklinde yapılmasına bağlıdır. Noter huzurunda düzenleme şeklinde yapılmayan adi yazılı sözleşmeler kesin olarak hükümsüzdür ve hukuken hiçbir geçerliliği yoktur.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Karar Alma Eşiğinde Yeni Dönem: Salt Çoğunluk (%50+1)</h3>
        <p>
          Kentsel dönüşüm projelerinde geçmişte aranan üçte iki (2/3) çoğunluk şartı karar alma süreçlerini ciddi oranda tıkamaktaydı. Ancak 6306 sayılı Kanun'un 6. maddesinde yapılan son yasal düzenlemeler uyarınca, parsellerin tevhit edilmesi, yeniden bina yaptırılması, payların satışı veya kat karşılığı sözleşme akdedilmesi gibi kararlar artık arsa payı bazında <strong>salt çoğunluk (%50+1)</strong> ile alınabilmektedir.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Arsa Sahibini Koruyan Kritik Hukuki Güvenceler</h3>
        <div className="space-y-6 mt-6 pl-5 border-l-4 border-amber-500 bg-slate-50 p-6 rounded-r-2xl">
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">1. Bina Tamamlama Sigortası Zorunluluğu</h4>
            <p className="text-base">İnşaatın yarım kalması veya müteahhidin finansal darboğaza girmesi riskine karşı en büyük güvenceniz Bina Tamamlama Sigortasıdır. 6306 sayılı Kanun uyarınca, müteahhidin yapı ruhsatı almadan önce bu sigortayı veya belirlenen diğer teminatları sağlaması zorunludur.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">2. Müteahhit Payına Düşen Dairelerin Satışının Kademelendirilmesi</h4>
            <p className="text-base">Müteahhidin hak edeceği bölümleri hemen satıp projeyi terk etmesini engellemek için, satışlar inşaatın ilerleme seviyesine göre idarenin izniyle yapılabilir. Tamamlanma oranında veya üzerindeki bir satış için tüm arsa sahiplerinin onayı şarttır.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">3. Müteahhitten Kaynaklı Gecikmelerde Sözleşmenin Resen Feshi</h4>
            <p className="text-base">Müteahhitten kaynaklanan nedenlerle 1 yıl içinde işe başlanmamışsa veya iş durdurulup en az 6 aydır devam edilmiyorsa, sözleşmelerin feshi için arsa paylarının salt çoğunluğu ile karar alınabilir. İhtara rağmen işe başlanmazsa sözleşmeler resen feshedilmiş sayılır.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">4. Üçüncü Kişilerin Borçlarından Dolayı Haciz ve Tedbir Yasağı</h4>
            <p className="text-base">Müteahhide devredilen taşınmazlar üzerinde, malikler adına kat irtifakı kuruluncaya kadar, müteahhidin üçüncü kişilere olan borçlarından dolayı haciz ve tedbir uygulanamaz. Bu hayati madde, arsanızın yasal olarak bloke edilmesini engeller.</p>
          </div>
        </div>

        <div className="bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-200 mt-10">
          <h4 className="text-2xl font-extrabold text-amber-900 mb-4">Ücretsiz Ön Danışmanlık</h4>
          <p className="text-amber-800 text-base mb-4">
            Kentsel dönüşüm süreci sadece bir inşaat projesi değil; İmar Hukuku, Borçlar Hukuku ve Kentsel Dönüşüm Hukuku'nun sentezinden oluşan son derece karmaşık bir yasal süreçtir. Sözleşme içeriğinde bırakılacak en ufak boşluklar, gelecekte telafisi mümkün olmayan mülkiyet kayıplarına ve ciddi finansal zararlara yol açabilir.
          </p>
          <p className="text-amber-900 text-base font-semibold">
            Ankara genelinde, özellikle de Çankaya bölgesinde mülkünüzün değerini korumak ve süreci yasal güvenceler altında tamamlamak istiyorsanız tek başınıza hareket etmeyin. KD Ankara Strateji Merkezi olarak, uzman ekibimizle sürecin her adımında yanınızdayız. Güvenli bir model kurgulamak için hemen iletişime geçin.
          </p>
        </div>
      </div>
    )
  },

  // --- 3. MAKALE: KİRA YARDIMI VE KREDİ ŞARTLARI ---
  {
    slug: '2026-kentsel-donusum-kira-yardimi',
    category: 'Mevzuat & Teşvikler',
    title: '2026 Kentsel Dönüşüm Kira Yardımı ve Kredi Şartları: Mevzuata Göre Kimler Faydalanabilir?',
    description: "Ankara'da kentsel dönüşüm kira yardımı şartları, 2026 güncel tutarları (6.500 TL), 1 yıllık hak düşürücü süre ve kredi detayları hakkında kapsamlı rehber.",
    date: '6 Eylül 2026',
    readTime: '6 dk okuma',
    isFeatured: false,
    badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    icon: ShieldCheck,
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          Türkiye’nin aktif deprem kuşağında yer alması, yaşlanan yapı stokunun güvenli hale getirilmesini hayati bir beka meselesi haline getirmektedir. Bu doğrultuda yürütülen kentsel dönüşüm süreci, sadece binaların yıkılıp yeniden yapılması değil; hak sahiplerine sunulan hukuki, idari ve finansal desteklerle yönetilen çok boyutlu bir operasyondur. Sürecin en kritik mali destek mekanizmalarını ise devlet tarafından sağlanan kira yardımları ve kentsel dönüşüm kredileri oluşturmaktadır.
        </p>
        <p>
          Özellikle Ankara genelinde mülkünü dönüştürmek isteyen vatandaşlarımız için mevzuat şartlarını bilmek ve doğru adımları atmak büyük önem taşımaktadır. Bir <strong>Çankaya riskli yapı</strong> projesini yönetirken ya da genel olarak Ankara’da haklarınızı kaybetmeden bu desteklerden faydalanabilmek için yasal sınırları doğru analiz etmek gerekir. <strong>KD Ankara Strateji Merkezi</strong> olarak bu rehberimizde, en güncel mevzuat ve kanun hükümleri çerçevesinde kira yardımı ve kredi şartlarını tüm detaylarıyla mercek altına alıyoruz. Profesyonel bir <strong>Ankara kentsel dönüşüm danışmanlığı</strong> alarak bu süreci nasıl sıfır riskle tamamlayabileceğinizi keşfedin.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6306 Sayılı Kanun Kapsamında Kira Yardımı Şartları</h3>
        <p>
          6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun uyarınca, anlaşma ile tahliye edilen riskli yapılardaki hak sahiplerine geçici barınma giderlerini karşılamak amacıyla hibe niteliğinde kira yardımı yapılabilmektedir.
        </p>

        <h4 className="text-xl font-bold text-slate-900 mt-6 mb-3">Kira Yardımından Kimler Yararlanabilir?</h4>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Konut veya İşyeri Malikleri (Ev Sahipleri):</strong> Tapuda bağımsız bölümün sahibi olan kişiler.</li>
          <li><strong>Kiracılar:</strong> Riskli yapıda tahliye tarihinden önce fiilen ikamet eden veya işyeri işletenler.</li>
          <li><strong>Sınırlı Ayni Hak Sahipleri:</strong> İntifa gibi haklarla taşınmazda oturanlar.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2025-2026 Güncel Kira Yardımı Tutarları ve Süreleri</h3>
        <p>Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından yapılan düzenlemelerle kira yardımı miktarları illere ve hak sahipliği statüsüne göre güncellenmiştir.</p>

        <div className="space-y-4 mt-6 pl-5 border-l-4 border-blue-500 bg-slate-50 p-6 rounded-r-2xl">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Ankara’da Uygulanan Kira Desteği Limitleri</h4>
          <p className="text-base">Ankara, kentsel dönüşüm kira desteği sınıflandırmasında ikinci grupta yer almakta olup güncel ödeme tutarları şu şekildedir:</p>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li><strong>Malikler (Ev Sahipleri) İçin:</strong> Aylık 6.500 TL kira desteği sağlanır.</li>
            <li><strong>Kiracılar İçin:</strong> Taşınma desteği niteliğinde tek seferlik 13.000 TL (aylık bedelin 2 katı) ödeme yapılır.</li>
            <li><strong>Sınırlı Ayni Hak Sahipleri İçin:</strong> Bir defaya mahsus olmak üzere tek seferlik 32.500 TL (aylık bedelin 5 katı) ödenir.</li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-slate-900 mt-6 mb-3">Kira Desteği Ödeme Süreleri</h4>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Riskli Yapılarda:</strong> Maliklere yapılan aylık ödemelerin süresi standart olarak 18 ay ile sınırlıdır.</li>
          <li><strong>Riskli ve Rezerv Yapı Alanlarında:</strong> Bu alanlardaki projelerde kira yardımı süresi en fazla 48 aya kadar uzatılabilmektedir.</li>
          <li><strong>Kiracılar ve Ayni Hak Sahipleri:</strong> Bu gruptakilere ödemeler her koşulda tek seferlik (taşınma yardımı) olarak gerçekleştirilir.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kira Yardımı Başvurusunda Hayati Kurallar ve "1 Yıl" Sınırı</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>1 Yıllık Hak Düşürücü Süre:</strong> Kira yardımı başvurularının, riskli yapının tahliye edildiği veya yıkıldığı tarihten itibaren en geç 1 yıl içinde yapılması zorunludur. Bu sürenin geçirilmesi durumunda hak tamamen kaybolur.</li>
          <li><strong>Mükerrer Ödeme Yasağı:</strong> Aynı bağımsız bölüm için birden fazla ödeme yapılmaz. Ayrıca, aynı kişiye ait aynı türden birden fazla taşınmaz için yardım alınamaz (bir konut ve bir işyeri için ayrı ayrı başvuru hariç).</li>
          <li><strong>Kredi ile Birlikte Kullanılamama Kuralı:</strong> 6306 sayılı Kanun kapsamında faiz destekli kredi kullanan hak sahipleri, aynı bağımsız bölüm için ayrıca kira yardımı alamazlar.</li>
          <li><strong>İkametgah ve Fatura Şartı:</strong> Kiracıların yardımdan faydalanabilmesi için riskli yapıda fiilen ikamet ediyor olması ve bunu tahliye tarihinden en geç 3 ay öncesine ait faturalarla (elektrik, su, doğalgaz vb.) belgelemesi şarttır.</li>
          <li><strong>Ziraat Bankası Koşulu:</strong> Tüm ödemeler Ziraat Bankası üzerinden yapılmaktadır; vadesiz bir hesap bulunmalıdır.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kentsel Dönüşüm Kredisi ve Faiz Desteği Şartları</h3>
        <p>
          Konutunu kendi imkanları ile yapmak veya edinmek isteyen hak sahiplerine, bankalardan kullanacakları krediler için Dönüşüm Projeleri Özel Hesabı'ndan karşılanmak üzere faiz desteği sağlanabilmektedir.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Bu kapsamda kullanılan krediler, konut finansmanı amaçlı kredilerden sayılır.</li>
          <li>Devlet destekli bu kredilerin usul ve esasları Cumhurbaşkanınca belirlenmektedir.</li>
          <li><strong>Yarısı Bizden Kampanyası İstisnası:</strong> Yalnızca İstanbul'da uygulanan bu kampanyada 875.000 TL hibe, 875.000 TL kredi desteği sunulmaktadır. (Şu an için sadece İstanbul sınırları içerisinde geçerlidir).</li>
        </ul>

        <div className="bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-200 mt-10">
          <h4 className="text-2xl font-extrabold text-amber-900 mb-4">Ücretsiz Ön Danışmanlık</h4>
          <p className="text-amber-800 text-base mb-4">
            Kentsel dönüşüm, sadece teknik bir inşaat faaliyeti değil; imar haklarından tapu şerhlerine, salt çoğunluk (%50+1) kararlarından kira ve kredi sözleşmelerine kadar uzanan çok katmanlı bir hukuki süreçtir. Başvuru aşamasındaki en ufak bir usul hatası veya süre kaçırılması, kira yardımınızın iptal edilmesine veya kredi hakkınızın yanmasına neden olabilir.
          </p>
          <p className="text-amber-900 text-base font-semibold">
            Ankara’da, özellikle Çankaya riskli yapı projelerinde mülkünüzün değerini ve haklarınızı korumak için süreci tek başınıza yönetmek zorunda değilsiniz. KD Ankara Strateji Merkezi olarak, kentsel dönüşüm alanında uzmanlaşmış ekibimizle yanınızdayız. Hak ettiğiniz devlet desteklerini eksiksiz almak için ücretsiz ön analiz hizmetimizden hemen faydalanın!
          </p>
        </div>
      </div>
    )
  },

  // --- 4. MAKALE: KAT KARŞILIĞI VE ŞEREFİYE ---
  {
    slug: 'ankara-kat-karsiligi-oranlari-serefiye-hesaplama',
    category: 'Piyasa & Emsal Analizi',
    title: 'Ankara Kat Karşılığı Oranları ve Şerefiye Adaleti (2026 Rehberi)',
    description: "Ankara'da Çankaya, Keçiören ve Yenimahalle bölgesel kat karşılığı paylaşım oranları, şerefiye hesaplama kriterleri ve mülk sahiplerinin arsa payı hakkaniyeti.",
    date: '4 Eylül 2026',
    readTime: '6 dk okuma',
    isFeatured: false,
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    icon: Calculator,
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          Ankara kentsel dönüşüm pazarında kat maliklerinin en sık karşı karşıya kaldığı ihtilaf, müteahhitler ile yapılan kat karşılığı paylaşım oranları ve daire dağılımındaki şerefiye dengesizliğidir.
        </p>
        <p>
          Gerek Çankaya'nın yüksek değerli arsalarında gerekse Keçiören ve Yenimahalle'nin yoğun konut dokusunda, doğru analiz edilmeyen paylaşım oranları mülk sahiplerine ciddi mali kayıplar yaşatmaktadır. <strong>KD Ankara Strateji Merkezi</strong> olarak, bölgesel emsal oranlarını ve bilimsel şerefiye kriterlerini mercek altına alıyoruz.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Bölgesel Ankara Kat Karşılığı Paylaşım Oranları</h3>
        <p>
          Arsa rayiç bedelleri, imar durumları ve lokasyonel alım gücüne göre Ankara’daki paylaşım oranları bölgesel bazda değişiklik göstermektedir:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Çankaya (Ayrancı, Bahçelievler, Gaziosmanpaşa):</strong> Yüksek arsa rayiç değerleri ve yüksek metrekare satış fiyatları nedeniyle kat karşılığı paylaşım oranları %50 - %55 bandında seyretmektedir.</li>
          <li><strong>Keçiören (Etlik, İncirli, Subayevleri):</strong> Yoğun yapılaşma ve parsel ölçeğindeki sınırlamalardan dolayı paylaşım oranları ortalama %45 - %50 seviyesindedir.</li>
          <li><strong>Yenimahalle & Batıkent:</strong> Geniş parsel ve site bazlı dönüşüm alanlarında kat karşılığı paylaşımları %45 - %52 aralığında şekillenmektedir.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Şerefiye Hesaplamasında Yapılan Hukuki ve Teknik Hatalar</h3>
        <p>
          Sadece kat numarasına ve cepheye bakılarak yapılan yüzeysel paylaşımlar, dönüşüm sonrasında mülk sahipleri arasında hukuki uzlaşmazlıklara yol açar. Bilimsel bir şerefiye raporunda şu parametreler mutlaka yer almalıdır:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Manzara ve Cephe Açısı:</strong> Güney/Doğu cephe avantajları, gün ışığı alma süreleri ve kapanmaz ön cephe değer katsayıları.</li>
          <li><strong>Kat Yüksekliği ve Gürültü İndeksi:</strong> Alt katlar ile üst katlar arasındaki bağımsız bölüm değerleme farkları.</li>
          <li><strong>Net Kullanım Alanı ve Eklentiler:</strong> Mimari projelerdeki net/brüt metrekare oranları ile kapalı otopark, depo gibi eklenti kullanım hakları.</li>
        </ul>

        <div className="bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-200 mt-10">
          <h4 className="text-2xl font-extrabold text-amber-900 mb-4">KD Ankara Bağımsız Şerefiye Analizi</h4>
          <p className="text-amber-800 text-base mb-4">
            Müteahhit sözleşmesine imza atmadan önce binanıza özel bağımsız bir <strong>Şerefiye Raporu</strong> ve <strong>Arsa Payı Uygunluk Analizi</strong> hazırlatmanız, kat malikleri arasındaki anlaşmazlıkları %100 oranında engeller.
          </p>
          <p className="text-amber-900 text-base font-semibold">
            Müteahhitlerden tamamen bağımsız, tarafsız ve bilimsel verilere dayalı paylaşım raporu almak için hemen KD Ankara uzman ekibiyle iletişime geçin.
          </p>
        </div>
      </div>
    )
  }
];