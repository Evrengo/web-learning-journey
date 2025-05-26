// Başlangıç değeri
let sayi = 10;

// Sayacı ekranda göstereceğimiz yer
const sayac = document.getElementById("sayac");

// Zamanlayıcı başlasın
const intervalId = setInterval(function() {
  sayi--; // Sayıyı azalt
  sayac.innerText = sayi; // Ekrana yaz

  if (sayi === 0) {
    clearInterval(intervalId); // Sayaç sıfırlanınca durdur
    sayac.innerText = "Süre doldu!";
  }
}, 1000); // 1000 ms = 1 saniye