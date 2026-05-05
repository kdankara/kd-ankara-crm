export interface Lead {
  id: number;
  created_at: string;
  isim: string;
  telefon: string;
  ilce: string;
  mahalle: string;
  ada: string | null;
  parsel: string | null;
  daire_sayisi: number | null;
  talep_turu: string;
  status: string;
}
