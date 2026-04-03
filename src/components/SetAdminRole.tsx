import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function SetAdminRole() {
  const { user } = useAuth();

  const becomeAdmin = async () => {
    if (!user || !db) {
      toast.error('Kullanıcı oturumu bulunamadı.');
      return;
    }
    try {
      await setDoc(doc(db, 'users', user.uid), { role: 'admin' }, { merge: true });
      toast.success('Admin rolü verildi. Sayfayı yenileyin.');
    } catch (e) {
      console.error(e);
      toast.error('Admin rolü atanırken hata oluştu.');
    }
  };

  return (
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md mb-4 text-center">
      <p className="mb-2 text-sm text-yellow-800">
        Bu kullanıcı henüz admin değil. Aşağıdaki butona tıklayarak admin rolü
        verebilirsiniz (sadece geliştirme ortamı için).
      </p>
      <Button onClick={becomeAdmin} className="bg-yellow-600 hover:bg-yellow-700">
        Admin Rolü Ver
      </Button>
    </div>
  );
}
