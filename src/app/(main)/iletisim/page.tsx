"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { submitToGoogleSheets } from '@/lib/googleSheets';
import { toast } from 'sonner';
import { useSEO } from '@/hooks/useSEO';
import { trackFormSubmission } from '@/lib/gtag';


export default function Contact() {
    useSEO(
        'İletişim | Ankara Kentsel Dönüşüm Danışmanlığı',
        'KD Ankara kentsel dönüşüm danışmanlık merkezi iletişim bilgileri. Çankaya ofisimizden veya telefonla bize ulaşın. Adres: Konutkent Mah. Çankaya, Ankara.'
    );
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const result = await submitToGoogleSheets({
                formType: 'iletisim',
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
                requestType: 'İletişim Formu',
                timestamp: new Date().toISOString(),
            });

            if (result.success) {
                trackFormSubmission();
                setSubmitStatus('success');
                toast.success('Mesajınız başarıyla gönderildi!');
                setFormData({ name: '', email: '', phone: '', message: '' });
                
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                const userFriendlyError = getErrorMessage(result.code);
                setErrorMessage(userFriendlyError);
                toast.error(userFriendlyError);
                console.error('Form submission error:', result);
            }
        } catch (error) {
            setSubmitStatus('error');
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

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-primary-950 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">İletişim</h1>
                    <p className="text-xl text-primary-200">Sorularınız için bize ulaşın.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Ofisimiz</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Adres</h3>
                                    <p className="text-gray-600">Konutkent Mahallesi 2987. Sokak No:18</p>
                                    <p className="text-gray-600">Çankaya, Ankara</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                                    <p className="text-gray-600">0312 236 10 17</p>
                                    <p className="text-gray-600">0533 682 09 42</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">E-posta</h3>
                                    <p className="text-gray-600">info@kdankara.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Çalışma Saatleri</h3>
                                    <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                                    <p className="text-gray-600">Cumartesi: 10:00 - 14:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="mt-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Konutkent+Mahallesi+2987.+Sokak+No:18+Çankaya+Ankara&zoom=15"
                                width="100%"
                                height="320"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="KD Ankara Ofis Konumu"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
                        
                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-green-900">Başarılı!</h3>
                                    <p className="text-sm text-green-700">Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.</p>
                                </div>
                            </div>
                        )}

                        {/* Error Message */}
                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-red-900">Hata</h3>
                                    <p className="text-sm text-red-700">{errorMessage}</p>
                                </div>
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <Label htmlFor="name">Ad Soyad</Label>
                                <Input
                                    id="name"
                                    placeholder="Adınız Soyadınız"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">E-posta</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="ornek@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Telefon</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="05XX XXX XX XX"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Mesajınız</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Size nasıl yardımcı olabiliriz?"
                                    className="min-h-[120px]"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-800 h-12 font-bold"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
