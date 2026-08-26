# KD Ankara CRM

Ankara kentsel dönüşüm danışmanlığı hizmetleri için Next.js + TypeScript tabanlı web uygulaması. İletişim formları, ön analiz sihirbazı ve müteahhit yönetim paneli içerir.

**Live:** https://kd-ankara-crm.vercel.app

## 🚀 Kurulum

### Gereksinimler
- Node.js 20+
- npm veya yarn

### Adımlar

```bash
# Repo'yu klonlayın
git clone https://github.com/kdankara/kd-ankara-crm.git
cd kd-ankara-crm

# Bağımlılıkları kurun
npm install

# Environment variables'ları ayarlayın
cp .env.example .env.local
# .env.local dosyasını düzenleyin ve değerleri girin
```

## 🔐 Environment Variables

`.env.local` dosyasında aşağıdaki değişkenleri tanımlayın:

```env
# Google Sheets Integration
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

### Google Sheets Kurulumu

1. [Google Cloud Console](https://console.cloud.google.com) açın
2. Yeni proje oluşturun veya mevcut projeyi seçin
3. **IAM & Admin** → **Service Accounts** gidin
4. Yeni Service Account oluşturun
5. **Keys** sekmesinde JSON türünde key oluşturun
6. İndirilen JSON dosyasından:
   - `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
7. Google Sheets'te form verilerini tutacak bir sheet oluşturun
8. Sheet ID'sini `.env.local`'a ekleyin
9. **Paylaş** butonundan Service Account e-postasını Düzenleyici olarak ekleyin

## 📦 Teknoloji Stack

- **Framework:** Next.js 16.2.4
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 3.4.19
- **UI Components:** shadcn/ui + Radix UI
- **Form Handling:** React Hook Form + Zod
- **Google APIs:** googleapis 173.0.0
- **Deployment:** Vercel / Firebase Hosting

## 📁 Proje Yapısı

```
src/
  ├── app/                    # Next.js App Router
  │   ├── api/
  │   │   └── submit-form/   # Form submission API endpoint
  │   └── (main)/            # Ana uygulama sayfaları
  │       ├── iletisim/      # İletişim formu sayfası
  │       ├── on-analiz/     # Ön analiz sihirbazı
  │       ├── panel/         # Yönetim paneli
  │       └── ...
  ├── components/            # React bileşenleri
  │   ├── ui/               # shadcn UI bileşenleri
  │   └── forms/            # Form bileşenleri
  ├── lib/                   # Utility fonksiyonları
  │   ├── googleSheets.ts   # Google Sheets integration
  │   ├── firebase.ts       # Firebase configuration
  │   ├── whatsapp.ts       # WhatsApp integration
  │   └── gtag.ts           # Google Analytics
  ├── hooks/                # Custom React hooks
  ├── types/                # TypeScript type definitions
  └── contexts/             # React Context providers
```

## 🏃 Geliştirme

```bash
# Development server başlatın (hot reload ile)
npm run dev

# TypeScript type check
npm run type-check

# Linting
npm run lint

# Production build
npm run build

# Production build'i test edin
npm run start
```

Geliştirme sunucusu `http://localhost:3000` adresinde çalışacaktır.

## 🔗 Form Gönderimi (Google Sheets)

### İletişim Formu (`/iletisim`)

```typescript
{
  formType: "iletisim",
  name: string,
  email: string,
  phone: string,
  message: string,
  timestamp: ISO 8601 datetime
}
```

### Ön Analiz Formu (`/on-analiz`)

```typescript
{
  formType: "on-analiz",
  propertyAddress: string,
  landArea: number,
  buildingArea: number,
  yearBuilt: number,
  // ... diğer alanlar
  timestamp: ISO 8601 datetime
}
```

Veriler otomatik olarak Google Sheets'teki `Sayfa1` isimli sayfaya eklenir.

## 📋 Sorun Giderme

Form gönderimi ile ilgili sorunlar için [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) dosyasını kontrol edin.

**Hızlı Çözüm:**
1. `.env.local` dosyasında tüm değişkenlerin tanımlandığını kontrol edin
2. Tarayıcı Console'da (F12) hata mesajlarını kontrol edin
3. Google Sheet'in Service Account'la paylaşıldığını kontrol edin
4. Network tab'ında `/api/submit-form` isteğinin yanıtını kontrol edin

## 🚀 Deployment

### Vercel (Önerilen)

```bash
# Vercel CLI'yi yükleyin (ilk kez)
npm i -g vercel

# Deploy edin
vercel

# Environment variables'ları Vercel dashboard'dan ayarlayın
```

### Firebase Hosting

```bash
# Firebase CLI'yi yükleyin
npm i -g firebase-tools

# Firebase init
firebase init

# Deploy edin
firebase deploy
```

## 📝 Lisans

Bu proje özel kullanımdır.

## 📧 İletişim

**KD Ankara**
- 📞 0312 236 10 17 / 0533 682 09 42
- 📧 info@kdankara.com
- 📍 Konutkent Mah. 2987. Sok. No:18, Çankaya, Ankara

---

**Son Güncelleme:** 2024-09-01  
**Versiyon:** 1.1.0 (Google Sheets error handling iyileştirmeleri)
