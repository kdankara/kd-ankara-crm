const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzRHtYcOW2UQl9Phqx44UJuDrk3NasvaPlTo_nyFpwaC2j2nNkdS-3-44txU0sATnj1/exec';

export type FormType = 'on-analiz' | 'iletisim' | 'firsat-havuzu';

export interface FormSubmission {
    formType: string;
    [key: string]: any;
}

export async function submitToGoogleSheets(data: FormSubmission): Promise<boolean> {
    try {
        // Add a unique ID to allow deduplication in Apps Script
        const submissionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors', // Google Apps Script requires no-cors
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, submissionId }),
        });

        // no-cors mode doesn't allow reading response, so we assume success
        console.log('Form submitted to Google Sheets:', submissionId);
        return true;
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return false;
    }
}
