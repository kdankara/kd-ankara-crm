import './globals.css';
import { Toaster } from 'sonner';

// Menü ve Footer barındıran ana şablonumuzu çağırıyoruz
import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'KD Ankara | Kentsel Dönüşüm',
  description: 'Ankara Kentsel Dönüşüm Danışmanlığı',
  verification: {
    google: 'WAo-ceGZkKpht-bq4xf3cGPbM6ig4QlfbqzgtlI38jo', // Önceki kodunuzdaki doğrulamayı korudum
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="font-sans antialiased text-gray-900 bg-white">
        
        {/* Tüm sayfaları Layout bileşeni ile sarmalıyoruz */}
        <Layout>
          {children}
        </Layout>
        
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}