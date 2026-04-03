import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { toast } from 'sonner';

export default function AdminLogin() {
    useSEO('Yönetici Girişi');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!auth) throw new Error("Firebase ayarlarında sorun var");

            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Giriş başarılı!");
            // AuthContext profil yükleyecek, AdminLayout role kontrolü yapacak
            navigate('/admin');
        } catch (error: any) {
            const errorCode = error.code;
            let message = "Giriş başarısız.";

            if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-credential') {
                message = "Hatalı e-posta veya şifre.";
            } else if (errorCode === 'auth/network-request-failed') {
                message = "Ağ bağlantısı kurulamadı.";
            } else if (errorCode === 'auth/too-many-requests') {
                message = "Çok fazla hata denemesi. Lütfen bekleyin.";
            } else {
                message = `Bir hata oluştu: ${error.message}`;
            }

            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center text-accent mb-6">
                    <ShieldCheck className="w-16 h-16" />
                </div>
                <h2 className="text-center text-3xl font-extrabold text-primary-900">Yönetim Paneli Girişi</h2>
                <p className="mt-2 text-center text-sm text-gray-600">Sadece yetkili personel giriş yapabilir.</p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Şifre</label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <Button type="submit" className="w-full bg-accent hover:bg-accent-600 text-white" disabled={loading}>
                                {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
