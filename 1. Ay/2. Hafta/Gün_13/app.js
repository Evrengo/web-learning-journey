/*
FLEXBOX NEDİR?
Flexbox, HTML öğelerini satırda veya sütunda esnkek ve düzenli bir şekilde sıralamanıza yarayan bir CSS özelliğidir.
Avantajı: Klasik float, inline-block gibi eski yöntemlere göre çok daha kolay hizalama ve dağılım kontrolü sağlar.

FLEXBOX TEMEL YAPISI
HTML Yapısı:
<div class="kapsayici">
  <div class="kutu">1</div>
  <div class="kutu">2</div>
  <div class="kutu">3</div>
</div>

CSS Yapısı:
.kapsayici {
  display: flex;
  gap: 10px;
}

.kutu {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}

EN TEMEL FLEXBOX ÖZELLİKLERİ
display: flex; Flex sistemini aktifleştirir.
flex-direction: satıra göre mi sütuna göre mi düzenleyeceğini belirler.(row, column)
justify-content: öğeleri yatayda nasıl hizalayacağını belirler.
align-items: çapraz eksende hizalama yapar.(center, stretch, flex-start, flex-end)
gap: öğeler arasındaki boşlukları ayarlar.

RESPONSIVE HALE GETIRME
@media (max-width: 768px) {
  .kart-kapsayici {
    flex-direction: column;
    align-items: center;
  }
}
*/