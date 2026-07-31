import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const SHEET_NAME = 'Sayfa1';

function getSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

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
    const submissionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const row = { ...body, submissionId };

    const sheets = getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_NAME}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [Object.values(row).map((v) => (v === undefined || v === null ? '' : String(v)))],
      },
    });

    return NextResponse.json({ success: true, submissionId }, { status: 200 });
  } catch (err) {
    console.error('submit-form error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
