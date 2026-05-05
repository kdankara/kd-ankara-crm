"use client";

// Lead Capture Modal Component for Calculator Tools

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { submitToGoogleSheets } from '@/lib/googleSheets';
import { toast } from 'sonner';
import { validatePhoneNumber, formatPhoneNumber } from '@/lib/calculators/utils';
import type { FormType } from '@/types/calculator';
import { trackFormSubmission } from '@/lib/gtag';


interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    calculatorType: FormType;
    calculatorData: any;
    preFilledData?: {
        ilce?: string;
        mahalle?: string;
    };
}

export default function LeadModal({
    isOpen,
    onClose,
    calculatorType,
    calculatorData,
    preFilledData,
}: LeadModalProps) {
    const [formData, setFormData] = useState({
        adSoyad: '',
        telefon: '',
        ilce: preFilledData?.ilce || '',
        mahalle: preFilledData?.mahalle || '',
        adaParsel: '',
        tapuImarBelgesi: 'hayir' as 'evet' | 'hayir',
        notlar: '',
        kvkkOnay: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.adSoyad.trim()) {
            newErrors.adSoyad = 'Ad Soyad zorunludur';
        }

        if (!formData.telefon.trim()) {
            newErrors.telefon = 'Telefon numarası zorunludur';
        } else if (!validatePhoneNumber(formData.telefon)) {
            newErrors.telefon = 'Geçerli bir telefon numarası girin (örn: 0532 123 45 67)';
        }

        if (!formData.ilce.trim()) {
            newErrors.ilce = 'İlçe zorunludur';
        }

        if (!formData.mahalle.trim()) {
            newErrors.mahalle = 'Mahalle zorunludur';
        }

        if (!formData.kvkkOnay) {
            newErrors.kvkkOnay = 'KVKK onayı zorunludur';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            toast.error('Lütfen tüm zorunlu alanları doldurun');
            return;
        }

        setIsSubmitting(true);

        try {
            const calculatorNameMap: Record<string, string> = {
                emsal: 'Emsal',
                daire: 'Daire Adedi',
                'firsat-havuzu': 'Fırsat Havuzu',
                maliyet: 'Maliyet',
                'muteahhit-mini': 'Müteahhit Mini',
                paylasim: 'Paylaşım',
                takvim: 'Takvim',
                arsapayi: 'Arsa Payı',
                destek: 'Kira/Destek'
            };

            const calculatorName = calculatorNameMap[calculatorType] || calculatorType;

            await submitToGoogleSheets({
                formType: `hesaplama-${calculatorType}` as any,
                ...formData,
                telefon: formatPhoneNumber(formData.telefon),
                calculatorData: JSON.stringify(calculatorData),
                source: `Web ${calculatorName} Aracından Geldi`,
                timestamp: new Date().toISOString(),
            });

            // Track conversion in Google Ads
            trackFormSubmission();


            toast.success('Talebiniz alındı! 72 saat içinde detaylı rapor hazırlayacağız.');
            onClose();

            // Reset form
            setFormData({
                adSoyad: '',
                telefon: '',
                ilce: preFilledData?.ilce || '',
                mahalle: preFilledData?.mahalle || '',
                adaParsel: '',
                tapuImarBelgesi: 'hayir',
                notlar: '',
                kvkkOnay: false,
            });
        } catch (error) {
            toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (!isSubmitting) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-xl max-w-lg w-full my-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h3 className="text-xl font-bold text-primary-900">Raporu Almak İçin Numaranızı Bırakın</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Bilgilerinizi bırakın, size özel rapor hazırlayalım
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        disabled={isSubmitting}
                        className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Ad Soyad */}
                    <div>
                        <Label htmlFor="adSoyad">
                            Ad Soyad <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="adSoyad"
                            type="text"
                            placeholder="Ahmet Yılmaz"
                            value={formData.adSoyad}
                            onChange={(e) => setFormData({ ...formData, adSoyad: e.target.value })}
                            className={errors.adSoyad ? 'border-red-500' : ''}
                        />
                        {errors.adSoyad && (
                            <p className="text-xs text-red-500 mt-1">{errors.adSoyad}</p>
                        )}
                    </div>

                    {/* Telefon */}
                    <div>
                        <Label htmlFor="telefon">
                            Telefon <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="telefon"
                            type="tel"
                            placeholder="0532 123 45 67"
                            value={formData.telefon}
                            onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                            className={errors.telefon ? 'border-red-500' : ''}
                        />
                        {errors.telefon && (
                            <p className="text-xs text-red-500 mt-1">{errors.telefon}</p>
                        )}
                    </div>

                    {/* İlçe & Mahalle */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="ilce">
                                İlçe <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="ilce"
                                type="text"
                                placeholder="Çankaya"
                                value={formData.ilce}
                                onChange={(e) => setFormData({ ...formData, ilce: e.target.value })}
                                className={errors.ilce ? 'border-red-500' : ''}
                            />
                            {errors.ilce && (
                                <p className="text-xs text-red-500 mt-1">{errors.ilce}</p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="mahalle">
                                Mahalle <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="mahalle"
                                type="text"
                                placeholder="Konutkent"
                                value={formData.mahalle}
                                onChange={(e) => setFormData({ ...formData, mahalle: e.target.value })}
                                className={errors.mahalle ? 'border-red-500' : ''}
                            />
                            {errors.mahalle && (
                                <p className="text-xs text-red-500 mt-1">{errors.mahalle}</p>
                            )}
                        </div>
                    </div>

                    {/* Ada / Parsel */}
                    <div>
                        <Label htmlFor="adaParsel">Ada / Parsel (Opsiyonel)</Label>
                        <Input
                            id="adaParsel"
                            type="text"
                            placeholder="1234 / 5"
                            value={formData.adaParsel}
                            onChange={(e) => setFormData({ ...formData, adaParsel: e.target.value })}
                        />
                    </div>

                    {/* Tapu/İmar Belgesi */}
                    <div>
                        <Label>Tapu veya İmar Belgesi Var mı?</Label>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="tapuImarBelgesi"
                                    value="evet"
                                    checked={formData.tapuImarBelgesi === 'evet'}
                                    onChange={(e) =>
                                        setFormData({ ...formData, tapuImarBelgesi: e.target.value as 'evet' })
                                    }
                                    className="w-4 h-4 text-accent"
                                />
                                <span className="text-sm">Evet</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="tapuImarBelgesi"
                                    value="hayir"
                                    checked={formData.tapuImarBelgesi === 'hayir'}
                                    onChange={(e) =>
                                        setFormData({ ...formData, tapuImarBelgesi: e.target.value as 'hayir' })
                                    }
                                    className="w-4 h-4 text-accent"
                                />
                                <span className="text-sm">Hayır</span>
                            </label>
                        </div>
                    </div>

                    {/* Notlar */}
                    <div>
                        <Label htmlFor="notlar">Notlar (Opsiyonel)</Label>
                        <Textarea
                            id="notlar"
                            placeholder="Ek bilgi veya sorularınız..."
                            value={formData.notlar}
                            onChange={(e) => setFormData({ ...formData, notlar: e.target.value })}
                            rows={3}
                        />
                    </div>

                    {/* KVKK Onayı */}
                    <div className="flex items-start gap-2">
                        <Checkbox
                            id="kvkkOnay"
                            checked={formData.kvkkOnay}
                            onCheckedChange={(checked) =>
                                setFormData({ ...formData, kvkkOnay: checked as boolean })
                            }
                            className={errors.kvkkOnay ? 'border-red-500' : ''}
                        />
                        <label htmlFor="kvkkOnay" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                            <span className="text-red-500">*</span> Kişisel verilerimin{' '}
                            <a href="/kvkk" target="_blank" className="text-accent hover:underline">
                                KVKK kapsamında
                            </a>{' '}
                            işlenmesini ve tarafımla iletişime geçilmesini kabul ediyorum.
                        </label>
                    </div>
                    {errors.kvkkOnay && (
                        <p className="text-xs text-red-500 -mt-2">{errors.kvkkOnay}</p>
                    )}

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 h-12 text-base font-semibold"
                    >
                        {isSubmitting ? 'Gönderiliyor...' : 'Rapor Talebi Oluştur'}
                    </Button>

                    {/* Info */}
                    <p className="text-xs text-gray-500 text-center">
                        📧 Rapor e-posta ve WhatsApp ile gönderilecektir
                    </p>
                </form>
            </div>
        </div>
    );
}
