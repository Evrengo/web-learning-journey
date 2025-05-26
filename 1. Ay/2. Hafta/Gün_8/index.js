/*ZAMANLAYICI
Zamanlayıcı, belirli bir süre sonra bir işlevi çağırmak için kullanılır.
JavaScript'te zamanlayıcı oluşturabilmemiz için 2 adet ana araç verir ve bunlardan biri setTimeout() diğeri ise setInterval() fonksiyonudur.

1-setTimeout() : Bir kere belirli bir süre çalışan bir fonksiyon oluşturur.
setTimeout(function, süre); yapısında olur.
function: Süre dolunca çalışacak kod bloğu.
süre: Milisaniye cinsinden süre(1000ms = 1sn).
örn:
setTimeout(() => {
    console.log("1sn sonra çalıştım.");
}, 1000); // 1sn sonra çalışır.


2-setInterval() : Belirli aralıklarla tekrar tekrar çalışan bir fonksiyon oluşturur.
setInterval(function, süre); yapısında olur.
function: Süre dolunca çalışacak kod bloğu.
süre: Milisaniye cinsinden tekrar edicek süre(1000ms = 1sn).
örn:
setInterval(() => {
    console.log("1sn aralıklarla çalıştım.");
}, 1000); // 1sn aralıklarla çalışır.

setInterval komutunu durdurmak için clearInterval() fonksiyonu kullanılır.
let sayac = setInterval(function() {
    console.log("çalışıyor");
}, 1000);

 5 saniye sonra durdur
setTimeout(function() {
    clearInterval(sayac);
    console.log("Sayaç durdu.");
}, 5000);
yukarıdaki döngü her saniye çalışır ve 5 saniye sonra durur.
*/