import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, doc, setDoc } from 'firebase-admin/firestore';
import * as path from 'path';
import * as fs from 'fs';

// ------------------------------------------------------------
// Usage: npx -y ts-node ./scripts/make-admin.ts <user-email>
// ------------------------------------------------------------

const SERVICE_ACCOUNT_PATH = path.resolve(__dirname, '../serviceAccountKey.json');
if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error('❌ Service account key not found at', SERVICE_ACCOUNT_PATH);
  console.error('   Create a service account in Firebase Console > Project Settings > Service Accounts');
  process.exit(1);
}

initializeApp({ credential: cert(require(SERVICE_ACCOUNT_PATH)) });
const db = getFirestore();
const auth = getAuth();

const email = process.argv[2];
if (!email) {
  console.error('❌ Please provide an email address: npx -y ts-node ./scripts/make-admin.ts user@example.com');
  process.exit(1);
}

async function makeAdmin() {
  try {
    const userRecord = await auth.getUserByEmail(email);
    const uid = userRecord.uid;
    // Update Firestore profile
    await setDoc(doc(db, 'users', uid), { role: 'admin' }, { merge: true });
    console.log(`✅ ${email} (uid=${uid}) admin rolü verildi.`);
  } catch (err) {
    console.error('❌ Hata:', err);
  }
}

makeAdmin();
