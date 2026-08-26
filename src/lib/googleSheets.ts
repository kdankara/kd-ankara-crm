export type FormType = 'on-analiz' | 'iletisim' | 'firsat-havuzu';

export interface FormSubmission {
    formType: string;
    [key: string]: any;
}

export interface SubmitResponse {
    success: boolean;
    submissionId?: string;
    error?: string;
    code?: string;
    message?: string;
}

export async function submitToGoogleSheets(data: FormSubmission): Promise<SubmitResponse> {
    try {
        console.log('[GoogleSheets] Submitting form:', { formType: data.formType, timestamp: new Date().toISOString() });

        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData: SubmitResponse = await response.json().catch(() => ({
            success: false,
            error: 'Invalid server response',
            code: 'INVALID_RESPONSE',
        }));

        if (!response.ok) {
            console.error('[GoogleSheets] Submission failed:', {
                status: response.status,
                error: responseData.error,
                code: responseData.code,
            });
            return responseData;
        }

        console.log('[GoogleSheets] Submission successful:', {
            submissionId: responseData.submissionId,
            message: responseData.message,
        });

        return responseData;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error('[GoogleSheets] Network error:', {
            message: errorMessage,
            timestamp: new Date().toISOString(),
        });

        return {
            success: false,
            error: 'Network error. Please check your internet connection and try again.',
            code: 'NETWORK_ERROR',
        };
    }
}
