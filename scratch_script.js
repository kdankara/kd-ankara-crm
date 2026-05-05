function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0]; 
    var contents = e.postData.contents;
    var data = JSON.parse(contents);
    
    var isim = data.adSoyad || data.name || "";
    var telefon = data.telefon || data.phone || "";
    var adaParsel = data.adaParsel || "";
    
    if (!adaParsel && (data.ada || data.parsel)) {
      adaParsel = (data.ada || "") + " / " + (data.parsel || "");
    }
    
    var ilce = data.ilce || data.district || "";
    var mahalle = data.mahalle || data.neighborhood || "";
    
    var row = [];
    row[0] = new Date();       // A: Kayıt Tarihi
    row[1] = isim;             // B: Müşteri Adı
    row[2] = telefon;          // C: Telefon
    row[3] = "1. Yeni Lead";   // D: Süreç Aşaması
    row[4] = adaParsel;        // E: Ada / Parsel / Bölge
    row[5] = ilce;             // F: İlgilenilen Ürün
    row[6] = mahalle;          // G: Mahalle
    row[7] = data.source || "Ön Analiz Formu"; // H: Son Görüşme Notu
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
