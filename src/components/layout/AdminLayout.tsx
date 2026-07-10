"use client";


import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Shield, LogOut, ArrowLeft } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { user, profile, loading, signOut } = useAuth();

    // Profil + auth yüklenene kadar bekle
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mb-4"></div>
                <p className="text-gray-600 font-medium font-sans">Yönetim paneli yükleniyor...</p>
            </div>
        );
    }

    // Giriş yapılmamışsa login'e yönlendir
    if (!user) {
        redirect('/admin/login');
    }

    // Giriş yapılmış ama rol admin değilse yetkisiz
    if (!profile || profile.role !== 'admin') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md border border-red-100">
                    <div className="text-red-500 text-5xl mb-4">🚫</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Yetkisiz Erişim</h2>
                    <p className="text-gray-600 mb-2">
                        Oturum açık: <strong>{user.email}</strong>
                    </p>
                    <p className="text-gray-500 text-sm mb-6">
                        Bu hesabın admin yetkisi yok. Firestore'da <code>users/{user.uid}</code> belgesine <code>role: "admin"</code> ekleyin.
                    </p>
                    <div className="space-y-3">
                        <Button onClick={() => window.location.href = '/'} className="w-full bg-primary-900">
                            Ana Sayfaya Dön
                        </Button>
                        <Button variant="outline" onClick={signOut} className="w-full text-red-600 border-red-200">
                            Çıkış Yap
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // Admin - paneli göster
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-primary-950 text-white shadow-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-accent" />
                        <span className="font-bold text-lg">KD Ankara Yönetim Paneli</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm">
                            <ArrowLeft className="w-4 h-4" /> Siteye Dön
                        </Link>
                        <div className="w-px h-6 bg-white/20"></div>
                        <span className="text-sm text-gray-300">{user.email}</span>
                        <Button variant="ghost" size="sm" onClick={signOut} className="text-red-400 hover:text-red-300 hover:bg-red-950/30">
                            <LogOut className="w-4 h-4 mr-2" /> Çıkış
                        </Button>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex">
                <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
                    <nav className="p-4 space-y-2">
                        <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-accent/10 text-primary-900 rounded-lg font-medium">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            Fırsat Havuzu Ana
                        </Link>
                    </nav>
                </aside>

                <main className="flex-1 p-6 md:p-8 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
