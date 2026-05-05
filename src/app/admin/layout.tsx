import LogoutButton from "@/components/admin/LogoutButton";
import Link from "next/link";
import { Building2 } from "lucide-react";
import { Toaster } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-navy border-b border-gray-200 py-4 px-6 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-gold/20 p-2 rounded-lg">
            <Building2 className="w-6 h-6 text-gold" />
          </div>
          <Link href="/admin">
            <h1 className="text-xl font-bold text-white tracking-tight">
              KD Ankara <span className="text-gold font-medium">| CRM Paneli</span>
            </h1>
          </Link>
        </div>
        <LogoutButton />
      </header>
      <main className="flex-1 p-6 overflow-hidden flex flex-col">
        {children}
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
}
