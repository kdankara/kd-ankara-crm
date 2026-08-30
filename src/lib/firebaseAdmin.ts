import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId) {
    throw new Error('Missing NEXT_PUBLIC_FIREBASE_PROJECT_ID');
}

if (!clientEmail) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_EMAIL');
}

if (!privateKey) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY');
}

const firebaseAdminApp =
    getApps().length > 0
        ? getApps()[0]
        : initializeApp({
              credential: cert({
                  projectId,
                  clientEmail,
                  privateKey,
              }),
              databaseURL:
                  process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ||
                  `https://${projectId}-default-rtdb.firebaseio.com`,
          });

export const adminDb = getDatabase(firebaseAdminApp);
