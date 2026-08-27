"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Calendar, Filter, ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { mockLeads } from '@/data/mock-leads';
import { submitToGoogleSheets } from '@/lib/googleSheets';
import { useSEO } from '@/hooks/useSEO';

export default function LeadPool() {
    useSEO(
        'Fırsat Havuzu | Ankara Kentsel Dönüşüm Projeleri',
        'Ankara genelindeki kentsel dönüşüm ve kat karşılığı proje fırsatlarını inceleyin, ilgilendiğiniz projelere teklif verin.'
    );
    const [filterDistrict, setFilterDistrict] = useState<string>('all');
    const [filterType, setFilterType] = useState<string>('all');
    const [selectedLead, setSelectedLead] = useState<string | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const filteredLeads = mockLeads.filter(lead => {
        const matchDistrict = filterDistrict === 'all' || lead.district === filterDistrict;
        const matchType = filterType === 'all' || lead.type === filterType;
        return matchDistrict && matchType;
    });

    const districts = Array.from(new Set(mockLeads.map(l => l.district))).sort();

    const handleApplySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        if (!selectedLead) {
            toast.error('Lütfen önce bir proje seçin.');
            return;
        }

        const response = await submitToGoogleSheets({
            formType: 'firsat-havuzu',
            leadId: selectedLead,
            companyName: String(formData.get('companyName') || ''),
            phone: String(formData.get('phone') || ''),
            notes: String(formData.get('notes') || ''),
            timestamp: new Date().toISOString(),
        });

        if (!response.success) {
            toast.error(response.error || 'Talebiniz gönderilemedi. Lütfen tekrar deneyin.');
            return;
        }

        toast.success(`Fırsat #${selectedLead} için talebiniz alındı. Detaylar e-posta adresinize gönderildi.`);
        setIsDialogOpen(false);
        form.reset();
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-20">
            {/* Header */}
            <div className="bg-primary-950 text-white py-24 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-accent text-primary-950 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
                            <Lock className="w-4 h-4" />
                            Kurumsal Müteahhit ve Yatırımcı Portalı
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            Ankara Kentsel Dönüşüm <br />
                            <span className="text-accent text-3xl md:text-5xl lg:text-6xl italic font-medium">Fırsat Havuzu</span>
                        </h1>
                        <p className="text-xl text-primary-200 leading-relaxed max-w-3xl">
                            Analizleri tamamlanmış, hukuki süreçleri netleşmiş ve yapım aşamasına hazır hale getirilmiş kentsel dönüşüm projelerini tek bir merkezden yönetin.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-16 relative z-20">
                {/* Introduction for SEO */}
                <Card className="mb-12 border-0 shadow-2xl rounded-[2.5rem] overflow-hidden">
                    <CardContent className="p-10 lg:p-14 bg-white">
                        <div className="prose prose-lg prose-slate max-w-none text-gray-700">
                            <h2 className="text-3xl font-bold text-primary-900 mb-8">Neden Bu Havuzdaki Projeler Daha Değerli?</h2>
                            <div className="grid lg:grid-cols-2 gap-12 text-lg">
                                <div className="space-y-4">
                                    <p>
                                        Kentsel dönüşümde bir müteahhit için en büyük risk, <strong>anlaşma sürecinin belirsizliğidir.</strong> KD Ankara Fırsat Havuzu, bu belirsizliği ortadan kaldırır. Listelenen projeler, Strateji Merkezimiz tarafından 360 derece analiz edilmiş; mülk sahiplerinin %90+ oranında "Evet" dediği projelerdir.
                                    </p>
                                    <p>
                                        <strong>Çankaya, Yenimahalle, Etimesgut</strong> gibi ilçelerde, imar durumu (emsal/kat adedi) netleşmemiş hiçbir projeyi bu havuza dahil etmiyoruz. Siz sadece teklifinizi verir ve işe başlarsınız; kapı kapı gezip imza toplamakla vakit kaybetmezsiniz.
                                    </p>
                                </div>
                                <div className="space-y-4 border-l-2 border-accent/20 pl-10">
                                    <h4 className="text-primary-900 font-bold mb-4">Müteahhitler İçin Veri Şeffaflığı:</h4>
                                    <ul className="space-y-3 text-base text-gray-600">
                                        <li>✓ Tapu ve İmar Durumu Ön Analizi</li>
                                        <li>✓ Şerefiye (Değerleme) Tabloları</li>
                                        <li>✓ Hazır Teknik Şartname Taslağı</li>
                                        <li>✓ Uzlaşmış Hak Sahipleri Listesi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Filters */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row gap-6 items-end bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                        <div className="w-full md:w-1/3 space-y-2">
                            <Label className="text-primary-950 font-bold ml-1">📍 Bölge Seçin</Label>
                            <Select value={filterDistrict} onValueChange={setFilterDistrict}>
                                <SelectTrigger className="h-14 rounded-xl bg-slate-50 border-slate-200">
                                    <SelectValue placeholder="Tüm Ankara" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tüm Ankara</SelectItem>
                                    {districts.map(d => (
                                        <SelectItem key={d} value={d}>{d}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full md:w-1/3 space-y-2">
                            <Label className="text-primary-950 font-bold ml-1">🏗️ Proje Kategorisi</Label>
                            <Select value={filterType} onValueChange={setFilterType}>
                                <SelectTrigger className="h-14 rounded-xl bg-slate-50 border-slate-200">
                                    <SelectValue placeholder="Tüm Tipler" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tüm Tipler</SelectItem>
                                    <SelectItem value="Bina">Bina Dönüşümü</SelectItem>
                                    <SelectItem value="Arsa">Arsa Projesi</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full md:w-1/3">
                            <Button variant="outline" className="w-full h-14 rounded-xl border-slate-200 hover:bg-slate-100 text-slate-600 font-bold" onClick={() => { setFilterDistrict('all'); setFilterType('all'); }}>
                                <Filter className="w-4 h-4 mr-2" />
                                Filtreleri Sıfırla
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {filteredLeads.map((lead, index) => (
                        <motion.div
                            key={lead.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="hover:shadow-2xl transition-all duration-500 border-none rounded-[2rem] h-full flex flex-col bg-white group overflow-hidden">
                                <div className="h-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <CardHeader className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${lead.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-800'}`}>
                                            {lead.status}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            {lead.date}
                                        </span>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-primary-950 flex items-center gap-3">
                                        {lead.type === 'Bina' ? <Building2 className="w-6 h-6 text-accent" /> : <MapPin className="w-6 h-6 text-emerald-600" />}
                                        {lead.district}
                                    </CardTitle>
                                    <CardDescription className="text-lg font-medium text-slate-500">{lead.neighborhood}</CardDescription>
                                </CardHeader>
                                <CardContent className="px-8 pb-4 grow space-y-6">
                                    <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Tür</p>
                                            <p className="font-bold text-primary-900">{lead.type}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Toplam Alan</p>
                                            <p className="font-bold text-primary-900">{lead.area} m²</p>
                                        </div>
                                        {lead.floors && (
                                            <div className="space-y-1">
                                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Kat Sayısı</p>
                                                <p className="font-bold text-primary-900">{lead.floors} Kat</p>
                                            </div>
                                        )}
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Şehir</p>
                                            <p className="font-bold text-primary-900">{lead.city}</p>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs text-slate-500 flex gap-3 italic leading-relaxed">
                                        <Lock className="w-5 h-5 shrink-0 text-accent" />
                                        <span>Detaylı teknik dosya ve malik listesi, gizlilik protokolü sonrası paylaşılır.</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-8 pt-4">
                                    <Button
                                        className="w-full bg-primary-950 hover:bg-primary-900 h-14 rounded-xl text-lg font-bold transition-all group-hover:scale-[1.02]"
                                        onClick={() => {
                                            setSelectedLead(lead.id);
                                            setIsDialogOpen(true);
                                        }}
                                    >
                                        Projeye Talip Ol
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Regional Trends Info Section - SEO Expansion */}
                <section className="bg-primary-950 text-white rounded-[3rem] p-12 lg:p-20 mb-20">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold mb-8 text-accent">Ankara'da Bölgesel Dönüşüm Trendleri</h2>
                        <div className="grid md:grid-cols-2 gap-12 text-primary-100">
                            <div className="space-y-4 text-sm leading-relaxed">
                                <p><strong>Çankaya Aksı:</strong> Ayrancı, Bahçelievler ve Emek bölgelerinde parsel bazlı bina dönüşümü yüksek iştahlıdır. Buradaki projeler genellikle butik ve prestij odaklıdır.</p>
                                <p><strong>Yenimahalle Aksı:</strong> Demetevler bölgesinde ada bazlı büyük ölçekli dönüşüm fırsatları ön plandadır. Bu bölgede yüksek hacimli inşaat kapasitesi arayan müteahhitler için büyük potansiyel bulunmaktadır.</p>
                            </div>
                            <div className="space-y-4 text-sm leading-relaxed">
                                <p><strong>Gelişim Bölgeleri:</strong> İncek ve Beytepe hattında boş arsa geliştirme ve hasılat paylaşımı modelleri, yatırımcılar için %40+ yıllık getiri potansiyeli sunmaktadır.</p>
                                <p><strong>Sanayi Dönüşümü:</strong> Ostim ve İvedik çevresinde ticari dönüşüm projeleri, Ankara'nın yeni "Lojistik ve Ofis" merkezi olma yolunda hızla ilerlemektedir.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {filteredLeads.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                        <p className="text-xl text-slate-500 font-medium mb-6">Seçilen kriterlere uygun fırsat bulunamadı.</p>
                        <Button variant="link" className="text-accent text-lg font-bold" onClick={() => { setFilterDistrict('all'); setFilterType('all'); }}>
                            Tüm Projeleri Göster
                        </Button>
                    </div>
                )}

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-10">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-primary-950">Fırsat #{selectedLead} İnceleme Talebi</DialogTitle>
                            <DialogDescription className="text-lg pt-4">
                                Projenin tam teknik dosyası ve şerefiye raporuna erişmek için kurumsal bilgilerinizi girin.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleApplySubmit} className="space-y-6 pt-6">
                            <div className="space-y-2">
                                <Label htmlFor="c-name" className="font-bold text-slate-700">Firma / Yetkili Adı</Label>
                                <Input id="c-name" name="companyName" placeholder="Şirket Adı veya Adınız" className="h-12 rounded-xl" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="c-phone" className="font-bold text-slate-700">Telefon</Label>
                                <Input id="c-phone" name="phone" placeholder="05XX XXX XX XX" className="h-12 rounded-xl" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="c-note" className="font-bold text-slate-700">Notunuz (Opsiyonel)</Label>
                                <Textarea id="c-note" name="notes" placeholder="Örn: Bölgedeki referanslarımız hakkında..." className="min-h-[100px] rounded-xl" />
                            </div>
                            <DialogFooter className="pt-4">
                                <Button type="submit" className="w-full bg-accent hover:bg-accent-600 text-primary-950 h-14 rounded-xl text-lg font-bold">
                                    Detaylı Dosya Talep Et
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
