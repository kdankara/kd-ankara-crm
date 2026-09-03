"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Building2, MapPin, User, Phone, Send, CheckCircle, ShieldCheck, AlertCircle, Clock, Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import ankaraData from '@/data/ankara-locations.json';
import { submitToGoogleSheets } from '@/lib/googleSheets';

// Get sorted districts from JSON
const districts = Object.keys(ankaraData).sort((a, b) => a.localeCompare(b, 'tr'));

interface FormData {
    name: string;
    phone: string;
    district: string;
    neighborhood: string;
    adaParsel: string;
    requestType: string;
    kvkkConsent: boolean;
}

const initialData: FormData = {
    name: '',
    phone: '',
    district: '',
    neighborhood: '',
    adaParsel: '',
    requestType: 'Ücretsiz Ön Analiz',
    kvkkConsent: true,
};

export default function OnAnalizWizard() {
    const [formData, setFormData] = useState<FormData>(initialData);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [submissionId, setSubmissionId] = useState('');

    const validateForm = () => {
        return (
            formData.name && 
            formData.phone && 
            formData.district && 
            formData.neighborhood && 
            formData.requestType &&
            formData.kvkkConsent
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error('Lütfen tüm zorunlu alanları doldurun ve KVKK onayını işaretleyin');
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const result = await submitToGoogleSheets({
                formType: 'on-analiz',
                name: formData.name,
                phone: formData.phone,
                email: '', 
                district: formData.district,
                neighborhood: formData.neighborhood,
                adaParsel: formData.adaParsel || 'Belirtilmedi',
                requestType: formData.requestType,
                timestamp: new Date().toISOString(),
            });

            if (result.success) {
                setIsSubmitted(true);
                setSubmissionId(result.submissionId || '');
                toast.success('Talebiniz başarıyla alındı!');
                setFormData(initialData);
            } else {
                setErrorMessage(getErrorMessage(result.code));
                toast.error(getErrorMessage(result.code));
                console.error('Form submission error:', result);
            }
        } catch (error) {
            const errorMsg = 'Bir hata oluştu. Lütfen tekrar deneyin.';
            setErrorMessage(errorMsg);
            toast.error(errorMsg);
            console.error('Unexpected error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getErrorMessage = (code?: string): string => {
        switch (code) {
            case 'NETWORK_ERROR':
                return 'İnternet bağlantınızı kontrol edip tekrar deneyin.';
            case 'CONFIG_ERROR':
                return 'Sunucu yapılandırması hatası. Lütfen daha sonra deneyin.';
            case 'AUTH_ERROR':
                return 'Yetkilendirme hatası. Lütfen destek ekibine başvurun.';
            case 'SHEET_NOT_FOUND':
                return 'Veri tabanı hatası. Lütfen destek ekibine başvurun.';
            case 'INVALID_RESPONSE':
                return 'Sunucudan geçersiz yanıt alındı. Lütfen tekrar deneyin.';
            default:
                return 'Bir hata oluştu. Lütfen tekrar deneyin.';
        }
    };

    // Google ve Yapay Zekalar için "ConsultingService" Şeması
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ConsultingService",
        "name": "Ankara Kentsel Dönüşüm Ücretsiz Ön Analiz Hizmeti",
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "KD Ankara Strateji Merkezi"
        },
        "areaServed": {
            "@type": "City",
            "name": "Ankara"
        },
        "description": "Ankara'daki binalar için bağımsız imar durumu, emsal ve risk ön değerlendirme analizi."
    };

    if (isSubmitted) {
        return (
            <Card className="w-full bg-white shadow-xl min-h-[500px] flex items-center justify-center border-t-4 border-t-accent">
                <CardContent className="text-center p-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Talebiniz Başarıyla Alındı</h3>
                        <p className="text-gray-600 mb-4 max-w-sm mx-auto leading-relaxed">
                            KD Ankara bağımsız uzman ekibimiz, binanızın imar ve emsal potansiyelini inceleyerek **24 saat içinde** sizinle iletişime geçecektir.
                        </p>
                        {submissionId && (
                            <p className="text-xs text-gray-500 mt-6 font-mono bg-gray-50 p-3 rounded">
                                Başvuru Takip No: {submissionId}
                            </p>
                        )}
                    </motion.div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full bg-white text-gray-900 shadow-2xl border-t-4 border-t-amber-500 overflow-hidden flex flex-col h-full max-h-[750px]">
            {/* YAPAY ZEKA ŞEMASI */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <CardHeader className="bg-slate-900 text-white p-5 shrink-0">
                <div className="flex items-center justify-between mb-1">
                    <CardTitle className="flex items-center gap-2 text-lg font-bold text-white">
                        <Building2 className="w-5 h-5 text-amber-400" />
                        Ücretsiz Ön Danışmanlık ve Analiz
                    </CardTitle>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                        <ShieldCheck className="w-3 h-3" /> Bağımsız Hizmet
                    </span>
                </div>
                <p className="text-xs text-slate-300">
                    KD Ankara müteahhit değildir; sadece mülk sahiplerinin hakkını korur.
                </p>
            </CardHeader>

            <CardContent className="p-6 overflow-y-auto grow custom-scrollbar">
                {/* Vaat Kutusu (Value Proposition) */}
                <div className="mb-5 p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3 text-xs text-amber-900 font-medium">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Formu doldurun, uzman ekibimiz binanızın dönüşüm potansiyelini <strong>24 saat içinde ücretsiz</strong> analiz etsin.</span>
                </div>

                {/* Error Message */}
                {errorMessage && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                        <div>
                            <h3 className="font-semibold text-red-900">Hata</h3>
                            <p className="text-sm text-red-700">{errorMessage}</p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="space-y-1.5">
                        <Label htmlFor="fullname" className="text-xs font-bold text-slate-700">Ad Soyad <span className="text-amber-600">*</span></Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                id="fullname"
                                placeholder="Adınız Soyadınız"
                                className="pl-10 h-11 text-sm"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-xs font-bold text-slate-700">Telefon Numaranız <span className="text-amber-600">*</span></Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="05XX XXX XX XX"
                                className="pl-10 h-11 text-sm"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                            <Label htmlFor="district" className="text-xs font-bold text-slate-700">İlçe <span className="text-amber-600">*</span></Label>
                            <Select
                                value={formData.district}
                                onValueChange={(value) => setFormData({ ...formData, district: value, neighborhood: '' })}
                                disabled={isSubmitting}
                            >
                                <SelectTrigger className="h-11 text-sm ring-offset-0 focus:ring-amber-500">
                                    <SelectValue placeholder="İlçe Seç" />
                                </SelectTrigger>
                                <SelectContent className="max-h-[200px]">
                                    {districts.map((d) => (
                                        <SelectItem key={d} value={d}>{d}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="neighborhood" className="text-xs font-bold text-slate-700">Mahalle <span className="text-amber-600">*</span></Label>
                            <Select
                                value={formData.neighborhood}
                                onValueChange={(value) => setFormData({ ...formData, neighborhood: value })}
                                disabled={!formData.district || isSubmitting}
                            >
                                <SelectTrigger className="h-11 text-sm ring-offset-0 focus:ring-amber-500">
                                    <SelectValue placeholder="Mahalle Seç" />
                                </SelectTrigger>
                                <SelectContent className="max-h-[200px]">
                                    {formData.district && (ankaraData as Record<string, string[]>)[formData.district]?.map((m) => (
                                        <SelectItem key={m} value={m}>{m}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <Label htmlFor="adaParsel" className="text-xs font-bold text-slate-700">Ada / Parsel Bilgisi (Opsiyonel)</Label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                id="adaParsel"
                                placeholder="Örn: 101/5 (Biliyorsanız daha hızlı analiz yapılır)"
                                className="pl-10 h-11 text-sm border-gray-200"
                                value={formData.adaParsel}
                                onChange={(e) => setFormData({ ...formData, adaParsel: e.target.value })}
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-700">Talep Türü <span className="text-amber-600">*</span></Label>
                        <Select
                            value={formData.requestType}
                            onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                            disabled={isSubmitting}
                        >
                            <SelectTrigger className="h-11 text-sm">
                                <SelectValue placeholder="Talebinizi Seçin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Ücretsiz Ön Danışmanlık">Ücretsiz Ön Danışmanlık ve İmar Analizi</SelectItem>
                                <SelectItem value="Riskli Yapı Analizi">Riskli Yapı Tespiti Rehberliği</SelectItem>
                                <SelectItem value="Teklif Değerlendirme">Müteahhit Teklif Değerlendirmesi</SelectItem>
                                <SelectItem value="Genel Bilgi Talebi">Genel Bilgi Talebi</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* KVKK Onay Kutusu */}
                    <div className="flex items-start gap-2 pt-2">
                        <input
                            type="checkbox"
                            id="kvkk"
                            checked={formData.kvkkConsent}
                            onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                            className="mt-1 w-4 h-4 accent-amber-500 rounded cursor-pointer"
                        />
                        <label htmlFor="kvkk" className="text-[11px] text-slate-500 leading-tight cursor-pointer">
                            Bilgilerimin KVKK kapsamında yalnızca ücretsiz ön analiz ve tarafıma geri dönüş sağlanması amacıyla işlenmesini onaylıyorum.
                        </label>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting || !validateForm()}
                        className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-base shadow-lg mt-3 transition-all cursor-pointer"
                    >
                        {isSubmitting ? (
                            <span className="animate-pulse">Analiz Talebiniz Alınıyor...</span>
                        ) : (
                            <>
                                Ücretsiz Analiz Raporumu Hazırla
                                <Send className="w-4 h-4 ml-2" />
                            </>
                        )}
                    </Button>

                    <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Bilgileriniz %100 gizli tutulur, 3. şahıslarla paylaşılmaz.</span>
                    </div>

                </form>
            </CardContent>
        </Card>
    );
}