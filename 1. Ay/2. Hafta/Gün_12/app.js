/*Responsive Tasarım Nedir?
Responsive (duyarlı) tasarım, web sitesinin masaüstü, tablet, telefon gibi farklı cihazlarda uyumlu çalışması demektir. 
Kullanıcı ekranı ne kadar küçük veya büyük olursa olsun, içerik düzgün görünmelidir.

Viewport Nedir?
Viewport, cihaz ekranında web sayfasının görünebilir halidir.
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Bu satır mobil cihazların sayfayı doğru şekilde boyutlandırmasını sağlar. Olmazsa sayfan mobilde zoomlu gibi görünür.

Em ve Rem Nedir?
Em, CSS'de birim olarak kullanılan bir ölçü birimidir. Genellikle font boyutları için kullanılır.
1em, 16px'e eşittir. Yani 1em = 16px.
Rem ise "root em" anlamına gelir ve kök (html) elementinin font boyutuna göre ayarlanır. 1rem, her zaman 16px'e eşittir.
px: sabit pixel
em: Ebeveyn boyutuna göre değişir
rem: Kök elementin boyutuna göre değişir
    html {
        font-size: 16px; - 1rem = 16px
    }
    p {
        font-size: 1.5rem; - 24px
    }
    div {
        font-size: 1rem; - Eğer parent font-size 16px ise 1rem = 16px
    }
em: hiyerarşi etkilenir (kapsayan etiketlere bağlı).
rem: sabit ve tutarlı değerler için tercih edilir.

*Genellikle rem kullanılır çünkü daha tutarlı ve yönetimi daha kolaydır.
*Görsel, yazı, boşluklar gibi şeylerde % vw, vh, rem gibi birimler kullanılır.
*Her sayfaya <meta name="viewport"...> satırı eklenmelidir.
*/