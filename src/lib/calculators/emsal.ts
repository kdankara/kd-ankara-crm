// Emsal (TAKS-KAKS) Calculator Utilities

import type { EmsalInputs, EmsalResults } from '@/types/calculator';

export function calculateEmsal(inputs: EmsalInputs): EmsalResults {
    const { arsaAlani, kaks, taks, katYuksekligi = 3 } = inputs;

    // Total construction area = Land area × KAKS
    const toplamInsaatAlani = kaks ? arsaAlani * kaks : 0;

    // Base footprint (if TAKS provided)
    const tabanOturumu = taks ? arsaAlani * taks : undefined;

    // Estimated floor count (if TAKS provided)
    let tahminiKatSayisi: number | undefined;
    if (tabanOturumu && tabanOturumu > 0) {
        // HATA DÜZELTMESİ: 1.625 gibi değerler 2 kata ihtiyaç duyar. Her zaman yukarı yuvarlanmalı.
        tahminiKatSayisi = Math.ceil(toplamInsaatAlani / tabanOturumu);
    }

    // Total building height (m)
    const toplamBinaYuksekligi = tahminiKatSayisi ? tahminiKatSayisi * katYuksekligi : undefined;

    return {
        timestamp: new Date().toISOString(),
        formType: 'emsal',
        toplamInsaatAlani,
        tabanOturumu,
        tahminiKatSayisi,
        toplamBinaYuksekligi,
        inputs,
    } as any;
}

export function validateEmsalInputs(inputs: Partial<EmsalInputs>): string[] {
    const errors: string[] = [];

    if (!inputs.arsaAlani || inputs.arsaAlani <= 0) {
        errors.push('Lütfen geçerli bir arsa alanı girin.');
    }

    if (!inputs.kaks || inputs.kaks <= 0) {
        errors.push('Lütfen geçerli bir KAKS/Emsal değeri girin.');
    }

    if (inputs.taks && inputs.taks > 1) {
        errors.push('TAKS değeri 1\'den büyük olamaz.');
    }

    if (inputs.kaks && inputs.taks && inputs.kaks < inputs.taks) {
        errors.push('KAKS değeri TAKS değerinden küçük olamaz.');
    }

    return errors;
}