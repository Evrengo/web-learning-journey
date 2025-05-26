const gorevInput = document.getElementById("gorevInput");
const ekleBtn = document.getElementById("ekleBtn");
const gorevListesi = document.getElementById("gorevListesi");
const temizleBtn = document.getElementById("temizleBtn");

window.addEventListener("load", gorevleriYukle);

function gorevleriKaydet() {
    const gorevler = [];
    const listeElemanlari = gorevListesi.querySelectorAll("li");
    listeElemanlari.forEach(li => {
        const metin = li.querySelector("span").innerText;
        const tamamlandi = li.querySelector("span").classList.contains("tamamlandi");
        gorevler.push({ metin, tamamlandi });
    });
    localStorage.setItem("gorevler", JSON.stringify(gorevler));
}

function gorevleriYukle() {
    const kayitliGorevler = JSON.parse(localStorage.getItem("gorevler")) || [];
    kayitliGorevler.forEach(gorev => {
        gorevEkle(gorev.metin, gorev.tamamlandi);
    });
}

ekleBtn.addEventListener("click", () => {
    const metin = gorevInput.value.trim();
    if (metin !== "") {
        gorevEkle(metin, false);
        gorevInput.value = "";
        gorevleriKaydet();
    }
});

function gorevEkle(metin, tamamlandi) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = metin;
    if (tamamlandi) {
        span.classList.add("tamamlandi");
    }

    span.addEventListener("click", function () {
        span.classList.toggle("tamamlandi");
        gorevleriKaydet();
    });

    const silBtn = document.createElement("button");
    silBtn.innerText = "Sil";
    silBtn.className = "sil-btn";
    silBtn.addEventListener("click", function () {
        gorevListesi.removeChild(li);
        gorevleriKaydet();
    });

    li.appendChild(span);
    li.appendChild(silBtn);
    gorevListesi.appendChild(li);
}

temizleBtn.addEventListener("click", function () {
    gorevListesi.innerHTML = "";
    localStorage.removeItem("gorevler");
});