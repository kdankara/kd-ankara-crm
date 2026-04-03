import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '@/contexts/AuthContext';
import { CheckCircle2, Clock, CircleAlert, Building2 } from 'lucide-react';

interface ProcessStep {
    id: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'pending';
    date?: string;
}

interface BuildingInfo {
    address: string;
    projectManager: string;
    currentStage: string;
    overallProgress: number; // 0-100
    steps: ProcessStep[];
}

export default function ClientDashboard() {
    const { user } = useAuth();
    const [buildingInfo, setBuildingInfo] = useState<BuildingInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProcessData = async () => {
            if (!user || !db) return;
            try {
                // Her müşterinin UUID'sine göre "customer_processes" koleksiyonundan veriyi çekiyoruz
                const docRef = doc(db, 'customer_processes', user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setBuildingInfo(docSnap.data() as BuildingInfo);
                } else {
                    // Veri yoksa Placeholder göster veya bilgi ver
                    setBuildingInfo(null);
                }
            } catch (error) {
                console.error("Süreç verisi çekilirken hata:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProcessData();
    }, [user]);

    if (loading) {
        return <div className="animate-pulse bg-white p-8 rounded-xl border border-gray-100 h-64"></div>;
    }

    if (!buildingInfo) {
        return (
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-gray-300" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Henüz Bir Proje Tanımlanmadı</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                    Kentsel dönüşüm sürecinizle ilgili veriler sistemimize kaydedildiğinde bu ekrandan tüm aşamaları takip edebileceksiniz. Lütfen danışmanınızla iletişime geçin.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header / Summary Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-primary-900 mb-1">Bina Dönüşüm Süreci</h1>
                        <p className="text-gray-500 flex items-center gap-1">
                            <Building2 className="w-4 h-4" /> {buildingInfo.address}
                        </p>
                    </div>
                    <div className="bg-primary-50 px-4 py-3 rounded-lg text-right">
                        <p className="text-xs text-primary-600 font-bold uppercase tracking-wider mb-1">PROJE YÖNETİCİSİ</p>
                        <p className="font-medium text-primary-900">{buildingInfo.projectManager}</p>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">GENEL İLERLEME</p>
                            <p className="text-lg font-bold text-accent">{buildingInfo.currentStage}</p>
                        </div>
                        <span className="text-2xl font-bold text-primary-900">%{buildingInfo.overallProgress}</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-accent transition-all duration-1000 ease-out relative overflow-hidden" 
                            style={{ width: `${buildingInfo.overallProgress}%` }}
                        >
                            <div className="absolute inset-0 bg-white/20 w-full h-full skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="text-lg font-bold text-primary-900 mb-6">Süreç Aşamaları</h2>
                <div className="relative border-l-2 border-gray-100 ml-4 space-y-8">
                    {buildingInfo.steps.map((step) => (
                        <div key={step.id} className="relative pl-8">
                            {/* Marker */}
                            <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full flex items-center justify-center
                                ${step.status === 'completed' ? 'bg-green-500 text-white shadow-sm ring-4 ring-white' : 
                                  step.status === 'current' ? 'bg-accent text-white shadow-sm ring-4 ring-white animate-pulse' : 
                                  'bg-gray-200 border-2 border-white'}`}
                            >
                                {step.status === 'completed' ? <CheckCircle2 className="w-3 h-3" /> : 
                                 step.status === 'current' ? <Clock className="w-3 h-3" /> : null}
                            </div>
                            
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
                                    <h3 className={`font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>
                                        {step.title}
                                    </h3>
                                    {step.date && (
                                        <span className={`text-xs px-2 py-1 rounded-md font-medium
                                            ${step.status === 'completed' ? 'bg-green-50 text-green-700' : 
                                              step.status === 'current' ? 'bg-accent/10 text-accent' : 
                                              'text-gray-400'}`}
                                        >
                                            {step.date}
                                        </span>
                                    )}
                                </div>
                                <p className={`text-sm ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Info Alert */}
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                <CircleAlert className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Bilgilendirme</p>
                    <p>Süreç adımları tamamlandıkça bu ekrandaki ilerleme çubuğu ve aşamalar yönetim ekibimiz tarafından otomatik olarak güncellenecektir.</p>
                </div>
            </div>
        </div>
    );
}
