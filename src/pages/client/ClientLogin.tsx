import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Building2 } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { toast } from 'sonner';

export default function ClientLogin() {
    useSEO('Müşteri Girişi');

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!auth) throw new Error("Firebase bağlantısı yok");

            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                toast.success("Giriş başarılı!");
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                toast.success("Hesap oluşturuldu ve giriş yapıldı!");
            }
            // AuthContext'te loading true'ya geçecek, profile yüklenince panel açılacak
            navigate('/panel');
        } catch (error: any) {
            const errorCode = error.code;
            let message = "İşlem sırasında bir hata oluştu.";

            switch (errorCode) {
                case 'auth/email-already-in-use':
                    message = "Bu e-posta adresi zaten kullanımda."; break;
                case 'auth/invalid-email':
                    message = "Geçersiz bir e-posta adresi girdiniz."; break;
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                case 'auth/invalid-credential':
                    message = "E-posta adresi veya şifre hatalı."; break;
                case 'auth/network-request-failed':
                    message = "İnternet bağlantınızı kontrol edin."; break;
                case 'auth/too-many-requests':
                    message = "Çok fazla hata denemesi. Lütfen biraz bekleyin."; break;
                case 'auth/weak-password':
                    message = "Şifre çok zayıf. En az 6 karakter kullanın."; break;
                default:
                    message = `Hata: ${error.message}`;
            }
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-96 bg-primary-950 -skew-y-2 origin-top-left -z-10"></div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex justify-center text-white hover:opacity-80 transition-opacity mb-6">
                    <img src="/assets/logo.png" alt="KD Ankara" className="h-16 w-auto brightness-0 invert" />
                </Link>
                <h2 className="text-center text-3xl font-bold text-white mb-2">Müşteri Paneli</h2>
                <p className="text-center text-primary-100 text-sm">Kentsel dönüşüm sürecinizi anlık olarak takip edin.</p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100 relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Building2 className="w-6 h-6" />
                    </div>

                    <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent"
                                placeholder="ornek@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Şifre</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent"
                                placeholder="••••••••"
                            />
                        </div>
                        <Button type="submit" className="w-full h-12 bg-primary-900 hover:bg-primary-800 text-white text-lg rounded-lg" disabled={loading}>
                            {loading ? 'İşlem yapılıyor...' : (isLogin ? 'Giriş Yap' : 'Kayıt Ol')}
                        </Button>
                    </form>

                    <div className="mt-6">
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">
                                {isLogin ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'}
                            </span>
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="w-full flex justify-center py-3 px-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
                            >
                                {isLogin ? 'Yeni Hesap Oluştur' : 'Mevcut Hesaba Giriş Yap'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
                <Link to="/" className="hover:text-primary-900">Ana Sayfaya Dön</Link>
            </div>
        </div>
    );
}
