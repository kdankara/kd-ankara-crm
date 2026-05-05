const url = 'https://script.google.com/macros/s/AKfycbzRHtYcOW2UQl9Phqx44UJuDrk3NasvaPlTo_nyFpwaC2j2nNkdS-3-44txU0sATnj1/exec';
const data = {
    formType: 'simple-on-analiz',
    source: 'Ücretsiz Ön Analiz Formu',
    name: "Node Fetch Test",
    phone: "1234567890",
    district: "Çankaya",
    neighborhood: "Kızılay",
    requestType: "Ücretsiz Ön Analiz"
};

fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then(res => {
    console.log("Fetch success opaquely", res.type);
}).catch(err => {
    console.error("Fetch failed", err);
});
