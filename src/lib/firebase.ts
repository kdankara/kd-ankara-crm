import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Sadece config varsa ve uygulama daha önce başlatılmadıysa başlat
let app;
try {
    if (firebaseConfig.apiKey && firebaseConfig.projectId) {
        app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    } else {
        console.warn("Firebase ayarları eksik. Lütfen .env dosyasını oluşturup API anahtarlarını girin.");
    }
} catch (error) {
    console.error("Firebase başlatılırken bir hata oluştu:", error);
}

const auth = app ? getAuth(app) : null;
const db = app ? getFirestore(app) : null;

export { app, auth, db };
