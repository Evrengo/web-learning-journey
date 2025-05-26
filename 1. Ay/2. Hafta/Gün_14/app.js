/*
MEDİA QUERY NEDİR?
Media Query, CSS'te farklı ekran boyutlarına özel stiller ve düzenler tanımlamamızı sağlayan bir özelliktir.
Yani: 
*Büyük ekranda büyük font, çok kolonlu düzen
*Orta ekranda orta font, 2 kolonlu düzen
*Küçük ekranda küçük font, tek kolonlu düzen
örnek:
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}

VİEWPORT NEDİR?
Mobilde kullanıcı ekranının büyüklüğü cihazdan cihaza çok değişiklilik gösterir.
HTML dosyasına bu etiket mutlaka eklenmelidir.
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Bu satır: 
*Cihazın ekranına göre sayfa genişliğini ayarlar.
* Zoom davranışını kontrol eder.

WEB SAYFASINI RESPONSIVE HALE GETIRIRKEN EN ONEMLI KONULARDAN BIRISI WIDTH DEGERLERINI YUZDELIK OLARAK VERMEKTIR.
*/