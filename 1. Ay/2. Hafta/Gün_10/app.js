const sorular = [
    {
      soru: "Türkiye'nin başkenti neresidir?",
      secenekler: ["İstanbul", "Ankara", "İzmir", "Bursa"],
      cevap: "Ankara"
    },
    {
      soru: "Aşağıdakilerden hangisi deniz canlısı değildir?",
      secenekler: ["Balina", "Köpekbalığı", "Yunus", "Kedi"],
      cevap: "Kedi"
    },
    {
      soru: "Aşağıdakilerden hangisi 4 ayaklı bir hayvan değildir?",
      secenekler: ["Kaplan", "Fil", "Maymun", "At"],
      cevap: "Maymun"
    },
    {
      soru: "Aşağıdakilerden hangisi Türkiye'nin bir şehridir?",
      secenekler: ["Kilis", "Wrexham", "Lazio", "Monaco"],
      cevap: "Kilis"
    }
  ];
  
  let mevcutSoru = 0;
  let dogruSayisi = 0;
  
  function sorulariGoster() {
    const soruDiv = document.getElementById("soru");
    const seceneklerDiv = document.querySelector(".secenekler");
    const mevcutSoruObj = sorular[mevcutSoru];
  
    soruDiv.innerText = mevcutSoruObj.soru;
  
    seceneklerDiv.innerHTML = "";
  
    mevcutSoruObj.secenekler.forEach(secenek => {
      const buton = document.createElement("button");
      buton.innerText = secenek;
      buton.classList.add("secenek");
      buton.addEventListener("click", () => secimiKontrolEt(secenek));
      seceneklerDiv.appendChild(buton);
    });
  
    document.getElementById("sonraki").style.display = "none";
  }
  
  function secimiKontrolEt(secilen) {
    const dogruCevap = sorular[mevcutSoru].cevap;
    if (secilen === dogruCevap) {
      dogruSayisi++;
    }
  
    mevcutSoru++;
  
    if (mevcutSoru < sorular.length) {
      sorulariGoster();
    } else {
      sonucuGoster();
    }
  }
  
  function sonucuGoster() {
    const quizKutusu = document.querySelector(".quiz-kutu");
    quizKutusu.innerHTML = `<h2>Quiz Bitti!</h2>
      <p>Doğru sayısı: ${dogruSayisi} / ${sorular.length}</p>`;
  }
  
  sorulariGoster();