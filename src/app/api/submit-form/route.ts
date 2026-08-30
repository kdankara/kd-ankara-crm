import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const SHEET_NAME = 'Sayfa1';

function getSheetsClient() {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey =
        process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!email || !privateKey) {
        throw new Error('Missing Google Service Account credentials');
    }

    const auth = new google.auth.JWT({
        email,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (!body.formType) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Missing formType field',
                    code: 'MISSING_FORM_TYPE',
                },
                { status: 400 }
            );
        }

        const submissionId =
            `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

        const timestamp = new Date().toISOString();

        const row = {
            ...body,
            submissionId,
            timestamp,
        };

        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!spreadsheetId) {
            throw new Error('GOOGLE_SHEET_ID is not configured');
        }

        const sheets = getSheetsClient();

        const headerResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: `${SHEET_NAME}!1:1`,
        });

        const existingHeaders =
            headerResponse.data.values?.[0] || [];

        const newKeys = Object.keys(row).filter(
            (key) => !existingHeaders.includes(key)
        );

        if (newKeys.length > 0) {
            const newHeaders = [
                ...existingHeaders,
                ...newKeys,
            ];

            await sheets.spreadsheets.values.update({
                spreadsheetId,
                range: `${SHEET_NAME}!1:1`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [newHeaders],
                },
            });
        }

        const allHeaders = [
            ...existingHeaders,
            ...newKeys,
        ];

        const rowValues = allHeaders.map((header) => {
            const value = row[header];

            if (value === undefined || value === null) {
                return '';
            }

            if (typeof value === 'object') {
                return JSON.stringify(value);
            }

            return String(value);
        });

        const appendResponse =
            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range: `${SHEET_NAME}!A:ZZ`,
                valueInputOption: 'USER_ENTERED',
                insertDataOption: 'INSERT_ROWS',
                requestBody: {
                    values: [rowValues],
                },
            });

        console.log(
            `[${submissionId}] Google Sheets submission successful:`,
            appendResponse.data.updates?.updatedRange
        );

        return NextResponse.json(
            {
                success: true,
                submissionId,
                message: 'Form submitted successfully',
            },
            { status: 200 }
        );
    } catch (err) {
        const errorMessage =
            err instanceof Error
                ? err.message
                : String(err);

        console.error(
            '[submit-form] ERROR:',
            errorMessage
        );

        let userMessage =
            'Internal server error. Please try again later.';

        let errorCode = 'INTERNAL_ERROR';

        if (
            errorMessage.includes(
                'Missing Google Service Account'
            )
        ) {
            userMessage =
                'Server configuration error. Please contact support.';
            errorCode = 'CONFIG_ERROR';
        } else if (
            errorMessage.includes('GOOGLE_SHEET_ID')
        ) {
            userMessage =
                'Google Sheets configuration missing.';
            errorCode = 'MISSING_CONFIG';
        } else if (
            errorMessage.includes('401') ||
            errorMessage.includes('Unauthorized')
        ) {
            userMessage =
                'Google authorization failed.';
            errorCode = 'AUTH_ERROR';
        } else if (
            errorMessage.includes('404') ||
            errorMessage.includes('Not Found')
        ) {
            userMessage =
                'Google Sheet not found.';
            errorCode = 'SHEET_NOT_FOUND';
        }

        return NextResponse.json(
            {
                success: false,
                error: userMessage,
                code: errorCode,
            },
            { status: 500 }
        );
    }
}
