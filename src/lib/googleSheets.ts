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

export async function submitToGoogleSheets(
    data: FormSubmission
): Promise<SubmitResponse> {
    try {
        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData: SubmitResponse =
            await response.json().catch(() => ({
                success: false,
                error: 'Invalid server response',
                code: 'INVALID_RESPONSE',
            }));

        if (!response.ok) {
            console.error(
                '[FormSubmission] API submission failed:',
                responseData
            );

            return responseData;
        }

        console.log(
            '[FormSubmission] Submission successful:',
            responseData.submissionId
        );

        return responseData;
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : String(error);

        console.error(
            '[FormSubmission] Network error:',
            errorMessage
        );

        return {
            success: false,
            error:
                'Network error. Please check your internet connection and try again.',
            code: 'NETWORK_ERROR',
        };
    }
}
