const sayi1 = document.getElementById("sayi1");
const sayi2 = document.getElementById("sayi2");
const sonuc = document.getElementById("sonuc");

document.getElementById("toplaBtn").addEventListener("click", function() {
    const toplam = Number(sayi1.value) + Number(sayi2.value);
    sonuc.innerText = "Sonuç: " + toplam;
});

document.getElementById("cikarBtn").addEventListener("click", function() {
    const fark = Number(sayi1.value) - Number(sayi2.value);
    sonuc.innerText = "Sonuç: " + fark;
});

document.getElementById("carpBtn").addEventListener("click", function() {
    const carpim = Number(sayi1.value) * Number(sayi2.value);
    sonuc.innerText = "Sonuç: " + carpim;
});

document.getElementById("bolBtn").addEventListener("click", function() {
    if (Number(sayi2.value) === 0) {
        sonuc.innerText = "Bir sayı 0'a bölünemez!";
    } else {
        const bolum = Number(sayi1.value) / Number(sayi2.value);
        sonuc.innerText = "Sonuç: " + bolum;
    }
});