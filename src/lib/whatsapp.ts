// WhatsApp Deep Linking Utilities

import type { WhatsAppMessageData } from '@/types/calculator';
import { trackWhatsAppClick } from './gtag';


/**
 * Generate WhatsApp deep link with pre-filled message
 */
export function generateWhatsAppLink(data: WhatsAppMessageData): string {
    const phoneNumber = '905322361017'; // KD Ankara WhatsApp number (without +)

    const message = generateWhatsAppMessage(data);
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Generate WhatsApp message template
 */
function generateWhatsAppMessage(data: WhatsAppMessageData): string {
    const { ilce, mahalle, arsaTipi, arsaM2, emsal, sonucOzet, telefon } = data;

    let message = `Merhaba KD Ankara,\n\n`;
    message += `${ilce} ${mahalle}'de ${arsaTipi} için bilgi almak istiyorum.\n\n`;

    if (arsaM2) {
        message += `📐 Arsa: ${arsaM2} m²\n`;
    }

    if (emsal) {
        message += `📊 Emsal: ${emsal}\n`;
    }

    message += `\n✨ Hesaplama Sonucu:\n${sonucOzet}\n\n`;
    message += `📞 İletişim: ${telefon}\n\n`;
    message += `Detaylı bilgi ve fizibilite raporu için görüşmek isterim.`;

    return message;
}

/**
 * Open WhatsApp with pre-filled message
 */
export function openWhatsApp(data: WhatsAppMessageData): void {
    const link = generateWhatsAppLink(data);
    trackWhatsAppClick();
    window.open(link, '_blank');
}

/**
 * Generate calculator result summary for WhatsApp
 */
export function generateResultSummary(calculatorType: string, results: any): string {
    switch (calculatorType) {
        case 'emsal':
            return `Toplam İnşaat: ${results.toplamInsaatAlani} m²${results.tahminiKatSayisi ? `, ~${results.tahminiKatSayisi} kat` : ''
                }`;

        case 'daire':
            return `Tahmini ${results.tahminiDaireAdedi} daire, ${results.satilabilirBrutAlan} m² satılabilir alan`;

        case 'paylasim':
            return `Malik Payı: %${results.malikPayOrani.toFixed(1)}, Müteahhit Payı: %${results.muteahhitPayOrani.toFixed(1)}`;

        case 'maliyet':
            return `Maliyet: ${results.dusukSenaryo.toLocaleString('tr-TR')} - ${results.yuksekSenaryo.toLocaleString('tr-TR')} TL`;

        default:
            return 'Hesaplama tamamlandı';
    }
}
