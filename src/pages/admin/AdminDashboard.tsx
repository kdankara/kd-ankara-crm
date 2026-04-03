import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, Home, MapPin } from 'lucide-react';
import { toast } from 'sonner';

interface Lead {
    id: string;
    title: string;
    location: string;
    details: string;
    status: 'active' | 'sold';
}

export default function AdminDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    
    // New Lead Form State
    const [newTitle, setNewTitle] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newDetails, setNewDetails] = useState('');

    const fetchLeads = async () => {
        if (!db) return;
        setLoading(true);
        try {
            const leadsCol = collection(db, 'leads');
            const leadsSnapshot = await getDocs(leadsCol);
            const leadsList = leadsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Lead[];
            setLeads(leadsList);
        } catch (error) {
            console.error("Error fetching leads:", error);
            toast.error("Fırsatlar yüklenirken hata oluştu.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const handleDelete = async (id: string) => {
        if (!db) return;
        if (!window.confirm('Bu fırsatı silmek istediğinize emin misiniz?')) return;
        
        try {
            await deleteDoc(doc(db, 'leads', id));
            toast.success("Fırsat başarıyla silindi");
            fetchLeads();
        } catch (error) {
            console.error("Error deleting lead:", error);
            toast.error("Silme işlemi başarısız.");
        }
    };

    const handleAddLead = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!db) return;

        try {
            await addDoc(collection(db, 'leads'), {
                title: newTitle,
                location: newLocation,
                details: newDetails,
                status: 'active'
            });
            toast.success("Yeni portföy eklendi");
            setIsAdding(false);
            setNewTitle(''); setNewLocation(''); setNewDetails('');
            fetchLeads();
        } catch (error) {
            console.error("Error adding lead:", error);
            toast.error("Ekleme işlemi başarısız.");
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Fırsat Havuzu Yönetimi</h1>
                    <p className="text-gray-500 text-sm mt-1">Sitede yayınlanan arsaları ve kat karşılığı projeleri buradan yönetebilirsiniz.</p>
                </div>
                <Button onClick={() => setIsAdding(!isAdding)} className="bg-accent hover:bg-accent-600 text-white">
                    {isAdding ? 'İptal' : <><Plus className="w-4 h-4 mr-2" /> Yeni Portföy Ekle</>}
                </Button>
            </div>

            {isAdding && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8 animate-in fade-in slide-in-from-top-4">
                    <h2 className="text-lg font-bold mb-4">Yeni Portföy Detayları</h2>
                    <form onSubmit={handleAddLead} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Başlık (Örn: Çankaya'da Yatırımlık Arsa)</label>
                            <input required value={newTitle} onChange={e => setNewTitle(e.target.value)} className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Konum</label>
                            <input required value={newLocation} onChange={e => setNewLocation(e.target.value)} className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Detaylar (Emsal, alan vb.)</label>
                            <textarea required value={newDetails} onChange={e => setNewDetails(e.target.value)} className="w-full p-2 border rounded-md h-24" />
                        </div>
                        <div className="flex justify-end gap-3">
                            <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>İptal</Button>
                            <Button type="submit" className="bg-primary-900 text-white hover:bg-primary-800">Kaydet ve Yayınla</Button>
                        </div>
                    </form>
                </div>
            )}

            {loading ? (
                <div className="text-center py-12 text-gray-500">Yükleniyor...</div>
            ) : leads.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                    <Home className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">Henüz eklenmiş bir fırsat bulunmuyor.</p>
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {leads.map(lead => (
                        <div key={lead.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative group hover:border-accent transition-colors">
                            <button 
                                onClick={() => handleDelete(lead.id)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Fırsatı Sil"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                            <div className="pr-8">
                                <h3 className="font-bold text-lg mb-2 text-primary-900 leading-tight">{lead.title}</h3>
                                <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                                    <MapPin className="w-4 h-4" /> {lead.location}
                                </div>
                                <p className="text-sm text-gray-600 line-clamp-3">{lead.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
