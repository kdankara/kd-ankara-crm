import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

type LeadInsert = {
  isim: string;
  telefon: string;
  ilce: string;
  mahalle?: string;
  ada?: string;
  parsel?: string;
  daire_sayisi?: number;
  talep_turu: string;
};

export async function POST(request: Request) {
  try {
    const body: LeadInsert = await request.json();
    const {
      isim,
      telefon,
      ilce,
      mahalle = null,
      ada = null,
      parsel = null,
      daire_sayisi = null,
      talep_turu,
    } = body;

    const { data, error } = await supabase.from('leads').insert({
      isim,
      telefon,
      ilce,
      mahalle,
      ada,
      parsel,
      daire_sayisi,
      talep_turu,
      status: 'Yeni Talep',
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, lead: data?.[0] }, { status: 200 });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
