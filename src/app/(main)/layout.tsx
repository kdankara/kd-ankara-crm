import Layout from '@/components/layout/Layout';
import SEOUpdater from '@/components/SEOUpdater';
import { AuthProvider } from '@/contexts/AuthContext';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Layout>
        <SEOUpdater />
        {children}
      </Layout>
    </AuthProvider>
  );
}
