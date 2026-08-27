import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const SHEET_NAME = 'Sayfa1';

function getSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    throw new Error('Missing Google Service Account credentials (EMAIL or PRIVATE_KEY)');
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
    let body: Record<string, unknown>;
    try {
      const parsedBody = await request.json();

      if (!parsedBody || typeof parsedBody !== 'object' || Array.isArray(parsedBody)) {
        return NextResponse.json(
          { error: 'Invalid request body', success: false, code: 'INVALID_BODY' },
          { status: 400 }
        );
      }

      body = parsedBody as Record<string, unknown>;
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body', success: false, code: 'INVALID_JSON' },
        { status: 400 }
      );
    }
    
    // Validate required fields
    if (!body.formType) {
      return NextResponse.json(
        { error: 'Missing formType field', success: false },
        { status: 400 }
      );
    }

    const submissionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const row: Record<string, unknown> = { submissionId, timestamp: new Date().toISOString(), ...body };

    // Check if Google Sheet ID is configured
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      console.error('GOOGLE_SHEET_ID is not configured');
      return NextResponse.json(
        { error: 'Google Sheets configuration missing', success: false, code: 'MISSING_CONFIG' },
        { status: 500 }
      );
    }

    console.log(`[${submissionId}] Starting form submission:`, {
      formType: body.formType,
      timestamp: new Date().toISOString(),
      dataFields: Object.keys(body),
    });

    const sheets = getSheetsClient();

    // Get headers first to know which columns to use
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${SHEET_NAME}!1:1`,
    });

    const existingHeaders = headerResponse.data.values?.[0] || [];
    const newKeys = Object.keys(row).filter(key => !existingHeaders.includes(key));
    
    // Add new headers if needed
    if (newKeys.length > 0) {
      const newHeaders = [...existingHeaders, ...newKeys];
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${SHEET_NAME}!1:1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [newHeaders],
        },
      });
      console.log(`[${submissionId}] Added new headers:`, newKeys);
    }

    // Prepare row values in correct column order
    const allHeaders = [...existingHeaders, ...newKeys];
    const rowValues = allHeaders.map((header: string) => {
      const value = row[header];
      return value === undefined || value === null ? '' : String(value);
    });

    // Append the row
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_NAME}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowValues],
      },
    });

    console.log(`[${submissionId}] Successfully submitted to Google Sheets:`, {
      updatedRange: appendResponse.data.updates?.updatedRange,
      updatedRows: appendResponse.data.updates?.updatedRows,
    });

    return NextResponse.json(
      { 
        success: true, 
        submissionId,
        message: 'Form submitted successfully',
      },
      { status: 200 }
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error('[ERROR] submit-form error:', {
      message: errorMessage,
      stack: err instanceof Error ? err.stack : undefined,
      timestamp: new Date().toISOString(),
    });

    // Provide more specific error messages
    let userMessage = 'Internal server error. Please try again later.';
    let errorCode = 'INTERNAL_ERROR';

    if (errorMessage.includes('Missing Google Service Account')) {
      userMessage = 'Server configuration error. Please contact support.';
      errorCode = 'CONFIG_ERROR';
    } else if (errorMessage.includes('ENOTFOUND') || errorMessage.includes('ECONNREFUSED')) {
      userMessage = 'Network error. Please check your internet connection.';
      errorCode = 'NETWORK_ERROR';
    } else if (errorMessage.includes('401') || errorMessage.includes('Unauthorized')) {
      userMessage = 'Authorization failed. Please contact support.';
      errorCode = 'AUTH_ERROR';
    } else if (errorMessage.includes('404') || errorMessage.includes('Not Found')) {
      userMessage = 'Google Sheet not found. Please verify the sheet ID.';
      errorCode = 'SHEET_NOT_FOUND';
    }

    return NextResponse.json(
      { 
        error: userMessage,
        success: false,
        code: errorCode,
      },
      { status: 500 }
    );
  }
}
