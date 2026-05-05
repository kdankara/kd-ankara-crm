"use client";


import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, ArrowLeft, Home, FileText } from 'lucide-react';

export default function ClientLayout() {
    const { user, profile, loading, signOut } = useAuth();

    // Profil + auth yüklenene kadar bekle
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900 mb-4"></div>
                <p className="text-gray-600 font-medium">Panel yükleniyor...</p>
            </div>
        );
    }

    // Giriş yapılmamışsa login'e yönlendir
    if (!user) {
        return <Navigate to="/giris" replace />;
    }

    // Admin ise admin paneline yönlendir
    if (profile?.role === 'admin') {
        return <Navigate to="/admin" replace />;
    }

    // Profil yoksa ya da müşteri -- paneli göster
    // (profil oluşturulamamış olsa bile loading:false olduktan sonra buraya gelindi)
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-primary-950 text-white shadow-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto brightness-0 invert" />
                        <span className="font-bold text-lg hidden sm:inline">Müşteri Paneli</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm hidden sm:flex">
                            <ArrowLeft className="w-4 h-4" /> Siteye Dön
                        </Link>
                        <div className="w-px h-6 bg-white/20 hidden sm:block"></div>
                        <span className="text-sm text-gray-300 hidden md:inline">{profile?.displayName || user.email}</span>
                        <Button variant="ghost" size="sm" onClick={signOut} className="text-red-400 hover:text-red-300 hover:bg-red-950/30">
                            <LogOut className="w-4 h-4 mr-2" /> Çıkış
                        </Button>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex flex-col md:flex-row container mx-auto px-4 py-8 gap-8">
                <aside className="w-full md:w-64 shrink-0">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-4 bg-primary-50 border-b border-gray-100">
                            <p className="font-semibold text-primary-900 truncate">Hoş Geldiniz,</p>
                            <p className="text-sm text-gray-500 truncate">{profile?.displayName || 'Değerli Müşterimiz'}</p>
                        </div>
                        <nav className="p-2 space-y-1">
                            <Link href="/panel" className="flex items-center gap-3 px-3 py-2.5 bg-accent/10 text-primary-900 rounded-lg font-medium transition-colors">
                                <Home className="w-5 h-5 text-accent" />
                                Süreç Takibi
                            </Link>
                            <Link href="/panel/raporlar" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-900 rounded-lg font-medium transition-colors">
                                <FileText className="w-5 h-5" />
                                Raporlarım
                            </Link>
                        </nav>
                    </div>
                </aside>

                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
