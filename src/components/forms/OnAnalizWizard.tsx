"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Building2, MapPin, User, Phone, Send, CheckCircle, ShieldCheck, AlertCircle
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
}

const initialData: FormData = {
    name: '',
    phone: '',
    district: '',
    neighborhood: '',
    adaParsel: '',
    requestType: 'Ücretsiz Ön Analiz',
};

export default function OnAnalizWizard() {
    const [formData, setFormData] = useState<FormData>(initialData);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [submissionId, setSubmissionId] = useState('');

    const validateForm = () => {
        return formData.name && formData.phone && formData.district && formData.neighborhood && formData.requestType;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error('Lütfen tüm zorunlu alanları doldurun');
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const result = await submitToGoogleSheets({
                formType: 'on-analiz',
                name: formData.name,
                phone: formData.phone,
                email: '', // Optional for this form
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Talebiniz başarıyla alındı.</h3>
                        <p className="text-gray-600 mb-4 max-w-sm mx-auto leading-relaxed">
                            KD Ankara Strateji ekibimiz, bölgenizin imar durumunu inceleyip 24 saat içinde sizinle iletişime geçecektir.
                        </p>
                        {submissionId && (
                            <p className="text-xs text-gray-500 mt-6 font-mono bg-gray-50 p-3 rounded">
                                Talep ID: {submissionId}
                            </p>
                        )}
                    </motion.div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full bg-white text-gray-900 shadow-2xl border-t-4 border-t-accent overflow-hidden flex flex-col h-full max-h-[700px]">
            <CardHeader className="bg-slate-50 border-b border-gray-100 p-4 shrink-0">
                <CardTitle className="flex items-center gap-2 text-lg text-primary-900">
                    <Building2 className="w-5 h-5 text-accent" />
                    Ücretsiz Ön Danışmanlık ve Analiz
                </CardTitle>
            </CardHeader>

            <CardContent className="p-6 overflow-y-auto grow custom-scrollbar">
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

                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="space-y-1.5">
                        <Label htmlFor="fullname">Ad Soyad <span className="text-accent">*</span></Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                id="fullname"
                                placeholder="Adınız Soyadınız"
                                className="pl-10 h-11"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <Label htmlFor="phone">Telefon Numaranız <span className="text-accent">*</span></Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="05XX XXX XX XX"
                                className="pl-10 h-11"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                            <Label htmlFor="district">İlçe <span className="text-accent">*</span></Label>
                            <Select
                                value={formData.district}
                                onValueChange={(value) => setFormData({ ...formData, district: value, neighborhood: '' })}
                                disabled={isSubmitting}
                            >
                                <SelectTrigger className="h-11 ring-offset-0 focus:ring-accent">
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
                            <Label htmlFor="neighborhood">Mahalle <span className="text-accent">*</span></Label>
                            <Select
                                value={formData.neighborhood}
                                onValueChange={(value) => setFormData({ ...formData, neighborhood: value })}
                                disabled={!formData.district || isSubmitting}
                            >
                                <SelectTrigger className="h-11 ring-offset-0 focus:ring-accent">
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
                        <Label htmlFor="adaParsel">Ada / Parsel Bilgisi (İsteğe Bağlı)</Label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                id="adaParsel"
                                placeholder="Örn: 101/5"
                                className="pl-10 h-11 border-gray-200"
                                value={formData.adaParsel}
                                onChange={(e) => setFormData({ ...formData, adaParsel: e.target.value })}
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <Label>Talep Türü <span className="text-accent">*</span></Label>
                        <Select
                            value={formData.requestType}
                            onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                            disabled={isSubmitting}
                        >
                            <SelectTrigger className="h-11">
                                <SelectValue placeholder="Talebinizi Seçin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Ücretsiz Ön Danışmanlık">Ücretsiz Ön Danışmanlık</SelectItem>
                                <SelectItem value="Riskli Yapı Analizi">Riskli Yapı Analizi</SelectItem>
                                <SelectItem value="Teklif Değerlendirme">Teklif Değerlendirme</SelectItem>
                                <SelectItem value="Genel Bilgi Talebi">Genel Bilgi Talebi</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting || !validateForm()}
                        className="w-full h-12 bg-accent hover:bg-accent-600 text-white font-bold text-base shadow-lg mt-4 transition-all"
                    >
                        {isSubmitting ? (
                            <span className="animate-pulse">Gönderiliyor...</span>
                        ) : (
                            <>
                                Ön Analiz Talebi Gönder
                                <Send className="w-4 h-4 ml-2" />
                            </>
                        )}
                    </Button>

                    <div className="flex items-start gap-2 mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100 text-xs text-gray-500 justify-center">
                        <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                            Bilgileriniz yalnızca ön değerlendirme ve size geri dönüş sağlamak amacıyla kullanılacaktır.
                        </p>
                    </div>

                </form>
            </CardContent>
        </Card>
    );
}
