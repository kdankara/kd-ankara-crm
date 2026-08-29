import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'KD Ankara | Kentsel Dönüşüm',
  description: 'Ankara Kentsel Dönüşüm Danışmanlığı',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="font-sans antialiased text-gray-900 bg-white">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}