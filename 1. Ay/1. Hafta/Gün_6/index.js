/*EVENT HANDLİNG
 Event: Kullanıcı etkileşimi sonucu oluşan durum.
 Event Handling: Kullanıcı etkileşimlerini yakalamak ve bu etkileşimlere tepki vermek için kullanılan yöntemlerdir.
JavaScript ile, kullanıcılar sayfa ile etkileşime girdiğinde belirli "olaylar" tetiklenir ve biz bu olaylara nasıl tepki vereceğimizi event listeners)olay dinleyicileri)
kullanarak belirleriz. Olay dinleyicileri, belirli bir olay meydana geldiğinde bir işlevi tetikleyen JavaScript kodlarıdır.
Örn:
*Bir butona tıklandığında bir mesaj göstermek.
*Bir form gönderildiğinde verileri doğrulamak.
*Fareyi bir öğe üzerinde hareket ettirdiğimizde bir stil değişikliği yapmak.
*Bir tuşa basıldığında bir işlevi tetiklemek.
Bu olaylar meydana geldiğinde JavaScript ile bu olayları yakalar ve işleriz.

Event Handling ile ilgili terimler:
Event Type: Olay türü/türleri, hangi tür etkileşşimlerin meydana geldiğini belirtir.
Event Target: Olayın gerçekleştiği öğeyi ifade eder. Örneğin bir butona tıklanması halinde o buton olayın hedefidir.
Event Listener: Olay Dinleyicisi, belirli bir Event Target'ta herhanhgi bir durumun meydana gelip gelmediğini kontrol eden bir işlevdir.
----------------------------------------------------------------------------------------------------------------------------
DOM ile Etkileşimli Butonlar
Bir butona kullanıcı tıkladığında DOM üzerinden sayfanın içeriğinde değişiklik yapmamızdır. Yani butona tıklanınca algılamakla kalmayıp sayfadaki bir öğeyi değiştiriyoruz, 
güncelliyoruz, ekliyoruz veya kaldırıyoruz.
İki ana temel üzerine kuruludur:
1-Event Handling: Butona tıklanınca birşey olsun.
2-DOM Manipulation: Butona tıklanınca sayfadaki bir öğeyi değiştir.
*/