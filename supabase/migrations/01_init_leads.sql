create table leads (
  id uuid primary key default uuid_generate_v4(),
  isim text not null,
  telefon text not null,
  ilce text not null,
  mahalle text,
  ada text,
  parsel text,
  daire_sayisi integer,
  talep_turu text check (talep_turu in ('Malik','Müteahhit')),
  status text check (status in ('Yeni Talep','Ön Analiz Aşamasında','Malik Toplantısı Bekliyor','Sözleşme Süreci','Kazanıldı','İptal')),
  created_at timestamp default now()
);

alter table leads enable row level security;

-- Policy for anonymous users to insert leads via public web form
create policy "anon_insert_leads"
  on leads
  for insert
  to anon
  using (true);

-- Policy for authenticated users to select, update, delete leads
create policy "authenticated_full_access"
  on leads
  for all
  to authenticated
  using (true);
