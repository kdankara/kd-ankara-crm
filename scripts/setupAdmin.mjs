import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGpi0w9i82lEBbiqWKLTLEaYacqXQMl-E",
    authDomain: "kdankara-efcb4.firebaseapp.com",
    projectId: "kdankara-efcb4",
    storageBucket: "kdankara-efcb4.firebasestorage.app",
    messagingSenderId: "452637045100",
    appId: "1:452637045100:web:72cdaed915343c0dfd0349",
    measurementId: "G-31TP8L19HS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function setupAdmin() {
    const email = "info@kdankara.com";
    const password = "123456";
    
    try {
        console.log("Starting Admin Setup...");
        let user;
        
        try {
            console.log(`Attempting to sign in as ${email}...`);
            const cred = await signInWithEmailAndPassword(auth, email, password);
            user = cred.user;
            console.log("User successfully signed in.");
        } catch (error) {
            console.log(`User not found or incorrect password. Attempting to create user ${email}...`);
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            user = cred.user;
            console.log("User successfully created.");
        }
        
        console.log(`Setting admin role for UID ${user.uid} in Firestore...`);
        await setDoc(doc(db, "users", user.uid), {
            email: email,
            role: "admin",
            updatedAt: new Date().toISOString()
        }, { merge: true });
        
        console.log("SUCCESS! The user has been granted admin privileges.");
        process.exit(0);
    } catch (err) {
        console.error("FAILED TO SETUP ADMIN:", err);
        process.exit(1);
    }
}

setupAdmin();
