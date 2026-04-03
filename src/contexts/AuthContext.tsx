import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface UserProfile {
    uid: string;
    email: string | null;
    role: 'admin' | 'customer';
    displayName?: string;
    phone?: string;
    buildingAddress?: string;
}

interface AuthContextType {
    user: User | null;
    profile: UserProfile | null;
    loading: boolean;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    profile: null,
    loading: true,
    signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setLoading(true);
            setUser(currentUser);

            if (currentUser && db) {
                try {
                    const docRef = doc(db, 'users', currentUser.uid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setProfile(docSnap.data() as UserProfile);
                    } else {
                        // Yeni kullanıcı - varsayılan müşteri profili oluştur
                        const newProfile: UserProfile = {
                            uid: currentUser.uid,
                            email: currentUser.email,
                            role: 'customer',
                        };
                        try {
                            await setDoc(docRef, newProfile);
                        } catch (e) {
                            console.warn('Profil kaydedilemedi (Firestore rules?):', e);
                        }
                        setProfile(newProfile);
                    }
                } catch (error) {
                    console.error('Profil yüklenirken hata:', error);
                    // Hata olsa bile profile'ı null bırak, setLoading kapatılacak
                    setProfile(null);
                }
            } else {
                setProfile(null);
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signOut = async () => {
        if (auth) {
            setProfile(null);
            await firebaseSignOut(auth);
        }
    };

    return (
        <AuthContext.Provider value={{ user, profile, loading, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
