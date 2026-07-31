export type FormType = 'on-analiz' | 'iletisim' | 'firsat-havuzu';

export interface FormSubmission {
    formType: string;
    [key: string]: any;
}

export async function submitToGoogleSheets(data: FormSubmission): Promise<boolean> {
    try {
        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            console.error('Error submitting to Google Sheets:', err);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return false;
    }
}
