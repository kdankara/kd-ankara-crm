export type FormType =
    | 'on-analiz'
    | 'iletisim'
    | 'firsat-havuzu';

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

const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzKDcXKj8SfreepHyQgSn2-V26jtm-VuZCOSxTKilEzfrGbUSwzkyMDD3K44WXGF6dX/exec';

export async function submitToGoogleSheets(
    data: FormSubmission
): Promise<SubmitResponse> {
    const webhookUrl = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL
        || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
        || DEFAULT_WEBHOOK_URL;

    if (!webhookUrl) {
        return {
            success: false,
            error: 'Form webhook is not configured.',
            code: 'CONFIG_ERROR',
        };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(data),
        });

        const responseData: SubmitResponse =
            await response.json().catch(() => ({
                success: true,
                submissionId: `LEGACY-${Date.now()}`,
            }));

        if (!response.ok && responseData.code) {
            console.error(
                '[FormSubmission] API submission failed:',
                responseData
            );
            return responseData;
        }

        console.log(
            '[FormSubmission] Submission successful:',
            responseData.submissionId || 'OK'
        );

        return {
            success: true,
            submissionId: responseData.submissionId || `SUB-${Date.now()}`,
        };
    } catch (error) {
        console.error('[FormSubmission] Unexpected error:', error);
        return {
            success: false,
            error: 'Network error or server unreachable',
            code: 'NETWORK_ERROR',
        };
    }
}