const url = "https://script.google.com/macros/s/AKfycbzRHtYcOW2UQl9Phqx44UJuDrk3NasvaPlTo_nyFpwaC2j2nNkdS-3-44txU0sATnj1/exec";
const data = {
  formType: "test-submission",
  name: "Antigravity Node",
  phone: "5551234567",
  requestType: "Test"
};

fetch(url, {
  method: "POST",
  body: JSON.stringify(data)
})
.then(res => res.text())
.then(text => console.log("Success:", text))
.catch(err => console.error("Error:", err));
