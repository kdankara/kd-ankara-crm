import { ref, set, serverTimestamp } from 'firebase/database';
import { realtimeDb } from './firebase';

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

/**
 * Submit form data to both Google Sheets (via API) and Firebase Realtime Database
 */
export async function submitToGoogleSheets(data: FormSubmission): Promise<SubmitResponse> {
    try {
        const submissionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        console.log('[FormSubmission] Starting submission:', { 
            formType: data.formType, 
            submissionId,
            timestamp: new Date().toISOString() 
        });

        // Submit to API (Google Sheets)
        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, submissionId }),
        });

        const responseData: SubmitResponse = await response.json().catch(() => ({
            success: false,
            error: 'Invalid server response',
            code: 'INVALID_RESPONSE',
        }));

        if (!response.ok) {
            console.error('[FormSubmission] API submission failed:', {
                status: response.status,
                error: responseData.error,
                code: responseData.code,
                submissionId,
            });
            return responseData;
        }

        console.log('[FormSubmission] API submission successful:', { submissionId });

        // Also submit to Firebase Realtime Database
        if (realtimeDb) {
            try {
                const formPath = `form-submissions/${data.formType}/${submissionId}`;
                await set(ref(realtimeDb, formPath), {
                    ...data,
                    submissionId,
                    timestamp: serverTimestamp(),
                    createdAt: new Date().toISOString(),
                });
                console.log('[FormSubmission] Firebase submission successful:', { submissionId, path: formPath });
            } catch (firebaseError) {
                console.warn('[FormSubmission] Firebase submission warning (data still sent to Google Sheets):', {
                    error: firebaseError instanceof Error ? firebaseError.message : String(firebaseError),
                    submissionId,
                });
                // Don't fail if Firebase fails - Google Sheets submission was successful
            }
        }

        return {
            success: true,
            submissionId,
            message: 'Form submitted successfully',
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error('[FormSubmission] Network error:', {
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

/**
 * Get form submissions from Firebase Realtime Database (admin only)
 */
export async function getFormSubmissions(formType: FormType) {
    if (!realtimeDb) {
        console.error('Firebase Database not initialized');
        return null;
    }

    try {
        const submissionsRef = ref(realtimeDb, `form-submissions/${formType}`);
        // Note: This requires proper Firebase security rules
        // For admin panel, use Firebase Cloud Functions instead
        return submissionsRef;
    } catch (error) {
        console.error('Error fetching submissions:', error);
        return null;
    }
}
