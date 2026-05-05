"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 rounded-md border border-gold/30 bg-navy/50 px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold/10 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy"
    >
      <LogOut className="h-4 w-4" />
      Çıkış Yap
    </button>
  );
}
