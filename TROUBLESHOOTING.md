# Google Sheets Form Submission - Tanı ve Test Kılavuzu

## 🔧 Sorun Giderme Adımları

### 1. Environment Variables Kontrolü

Öncelikle `.env.local` dosyanızda aşağıdaki değişkenlerin doğru şekilde tanımlandığını kontrol edin:

```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

**⚠️ Önemli Notlar:**
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` değerinin özel karakterleri (`\n`) içermesi gerekir
- Değeri tırnak işareti içinde olmalıdır
- Sheet ID, Google Sheets URL'sinin ortasında bulunan uzun karakterlerden oluşur

---

### 2. Tarayıcı Console'da Hataları Kontrol Etme

1. Web sitenizde formu açın (İletişim sayfası veya Ön Analiz formu)
2. **F12** tuşuna basarak Developer Tools'u açın
3. **Console** sekmesine gidin
4. Formu doldurup **Gönder** butonuna tıklayın
5. Console'da çıkan hataları kontrol edin:

**Olası Hata Mesajları:**

| Hata | Anlam | Çözüm |
|------|-------|-------|
| `Missing Google Service Account credentials` | Environment variables eksik | `.env.local` dosyasını kontrol edin |
| `GOOGLE_SHEET_ID is not configured` | Sheet ID tanımlanmamış | `GOOGLE_SHEET_ID` ekleyin |
| `Network error` | İnternet bağlantı sorunu | İnternet bağlantınızı kontrol edin |
| `Unauthorized (401)` | Service Account yetkisi yok | Sheet paylaşım ayarlarını kontrol edin |
| `Not Found (404)` | Google Sheet bulunamadı | Sheet ID'nin doğru olduğunu kontrol edin |

---

### 3. Network Tab'ında API Çağrısını İnceleme

1. Developer Tools'da **Network** sekmesine gidin
2. Formu göndermeyi deneyin
3. `submit-form` isteğine tıklayın
4. **Response** sekmesine bakın:

**Başarılı Yanıt (200):**
```json
{
  "success": true,
  "submissionId": "1693456789123-abc123xyz",
  "message": "Form submitted successfully"
}
```

**Hata Yanıtı (400/500):**
```json
{
  "success": false,
  "error": "Hata mesajı",
  "code": "ERROR_CODE"
}
```

---

### 4. Google Cloud Ayarlarını Kontrol Etme

#### Service Account Oluşturma / Kontrol Etme:

1. [Google Cloud Console](https://console.cloud.google.com) açın
2. **IAM & Admin** → **Service Accounts** gidin
3. Service account'u seçin ve **Keys** sekmesine gidin
4. JSON türünde bir key oluşturun veya mevcut olanı indirin
5. Aşağıdaki değerleri `.env.local`'a kopyalayın:
   - `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`

#### Google Sheet Paylaşım Ayarları:

1. Google Sheets'te ilgili sheet'i açın
2. **Paylaş** butonuna tıklayın
3. Service account e-postasını **Düzenleyici (Editor)** izniyle ekleyin
4. Paylaşım bağlantısını kopyalayın ve URL'den **Sheet ID**'yi alın:
   - URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

---

### 5. Server Loglarını Kontrol Etme

Eğer Next.js'i lokal çalıştırıyorsanız:

```bash
npm run dev
```

Form gönderimi sırasında terminal'de şuna benzer loglar göreceksiniz:

```
[1693456789123-abc123xyz] Starting form submission: {
  formType: 'iletisim',
  timestamp: '2024-09-01T10:30:00.000Z',
  dataFields: ['name', 'email', 'phone', 'message']
}

[1693456789123-abc123xyz] Successfully submitted to Google Sheets: {
  updatedRange: 'Sayfa1!A2:H2',
  updatedRows: 1
}
```

Hata durumunda:
```
[ERROR] submit-form error: {
  message: 'Unauthorized',
  stack: '...'
}
```

---

## 📋 Test Checklist

Form gönderiminin çalışması için aşağıdakileri kontrol edin:

- [ ] `.env.local` dosyasında tüm environment variables tanımlanmış
- [ ] `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` değerinde `\n` karakterleri var
- [ ] Google Cloud'da Service Account aktif
- [ ] Service Account'ın geçerli bir private key'i var
- [ ] Google Sheet, Service Account e-postasıyla paylaşılmış
- [ ] Sheet'in adı `Sayfa1` veya doğru isim `route.ts`'de tanımlanmış
- [ ] İnternet bağlantısı normal
- [ ] Tarayıcı Console'da hata yok
- [ ] Network tab'ında `/api/submit-form` isteği 200 statusu dönüyor

---

## 🧪 Manual Test Örneği

Terminal'de curl kullanarak API'yi test edin:

```bash
curl -X POST http://localhost:3000/api/submit-form \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "iletisim",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "05321234567",
    "message": "Test mesajı"
  }'
```

Başarılı yanıt:
```json
{
  "success": true,
  "submissionId": "1693456789123-abc123xyz",
  "message": "Form submitted successfully"
}
```

---

## 📞 Destek Gerekirse

Aşağıdaki bilgileri not alarak destek talebinde bulunun:

1. **Hata Mesajı**: Console'dan tam hata metni
2. **Submission ID**: Formdan gelen yanıtın `submissionId` değeri
3. **Sheet ID**: Google Sheets URL'sinden Sheet ID
4. **Lokasyon**: Hangi form (İletişim, Ön Analiz, etc.)
5. **Browser**: Tarayıcı ve sürümü
6. **Network Tab Screenshotı**: API isteğinin tam response'u

---

## 🔍 Sık Karşılaşılan Sorunlar

### Sorun: "Bir hata oluştu. Lütfen tekrar deneyin."

**Çözüm:**
1. Console'a bakın ve kod (`code`) değerini kontrol edin
2. Kod `CONFIG_ERROR` ise: env variables eksik
3. Kod `AUTH_ERROR` ise: Sheet paylaşım izni yok
4. Kod `NETWORK_ERROR` ise: İnternet bağlantısı kesik

### Sorun: Data Google Sheets'e gitmiyorsa

**Kontrol Edin:**
- Network tab'ında `/api/submit-form` 200 dönüyor mu?
- Server loglarında başarılı mesaj var mı?
- Google Sheet'in doğru hesapta açılmış mı?
- Sheet'in adı tamamen `Sayfa1` mi?

### Sorun: "Google Sheet not found"

**Çözüm:**
- `GOOGLE_SHEET_ID` değeri kopyalayıp URL'ye yapıştırın
- Sheet'i aç→kapat→yeniden aç
- Service account e-postasını yeniden paylaş

---

**Güncellenme Tarihi:** 2024-09-01
**Son Değişiklik:** Error logging ve handling iyileştirmeleri eklendi
