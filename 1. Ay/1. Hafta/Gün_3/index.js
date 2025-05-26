/*
 ---ARRAYS---
Array yani diziler, birden fazla veriyi tek bir değişkende saklamamızı sağlar.Diziler, sıralı bir şekilde verileri saklar ve her bir veriye bir indeks numarası ile erişilir.
 Diziler, JavaScript'te çok yaygın olarak kullanılır ve birçok yerleşik yöntemle birlikte gelir.
*/
// Diziler iki farklı şekilde tanımlanabilir:
var dizi = [1, 2, 3, 4, 5]; // Dizi tanımlama
console.log(dizi); // Diziye erişim
console.log(dizi[0]); // Diziye erişim (belirtilen indeks numarasındaki eleman, dizi elemanların indeks numarası 0'dan başlar)
var dizi2 = new Array(a, b, c, d, e); // Diğer bir dizi tanımlama yöntemi
console.log(dizi2); // Diziye erişim
console.log(dizi2[3]); // Diziye erişim (4. sıradaki eleman)

// Diziler birden fazla türde değişken tutabilir:
var dizi3 = [1, "a", true, null, undefined]; // Farklı türde değişkenler içeren dizi

console.log(dizi.length); // Dizinin uzunluğunu verir (dizideki eleman sayısı)


// Diziye Eleman Ekleyip Çıkarma

// Diziye eleman eklemek için push() ve unshift() yöntemini kullanabiliriz, temelde farkları push komutu dizinin sonuna eklerken unshift komutu başına ekler
let diziOrnek = [1, 2]; // 1, 2
diziOrnek.push(3); // 1, 2, 3

// Dizinin sondaki elemanını silmek için pop() yöntemini kullanabiliriz
diziOrnek.pop(); // 1, 2

// Dizinin başındaki elemanı silmek için shift() yöntemini kullanabiliriz
diziOrnek.shift(); // 2

// Dizinin indeks numarasındaki elemanı silmek için splice() yöntemini kullanabiliriz
// Splice yapısı şu şekilde oluşur: splice(indeks numarası, silinecek eleman sayısı, eklenecek eleman1, eklenecek eleman2, ...)
let diziOrnek2 = [1, 2, 3, 4, 5]; // 1, 2, 3, 4, 5
diziOrnek2.splice(2, 1); // 1, 2, 4, 5 (2. indekste bulunan elemanı siler)
// Belirtilen indekse eleman eklemek içinde yine aynı komutu kullanabiliriz
diziOrnek2.splice(2, 0, 3); // 1, 2, 3, 4, 5 (2. indekse 3 elemanını ekler)
// Aynı komut ile belirtilen bir elemanın silerken ekleme yapıp istediğimiz bir elemanı değiştirebiliriz
diziOrnek2.splice(2, 1, 6); // 1, 2, 6, 4, 5 (2. indekste bulunan elemanı siler ve yerine 6 elemanını ekler)


// Döngü ile dizi elemanlarına erişim
// Dizinin elemanlarına erişmek için for ve foreach döngüsünü kullanabiliriz

let meyveler = ["Elma", "Muz", "Kiraz"];
for (let i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]);
}// meyveler dizisinin i değişkeni ile belirtilen indeks numarasındaki elemanını alır ve ekrana yazdırır

meyveler.forEach(function(meyve) {
    console.log(meyve);
  });// foreach komutu bir komutu bütün elemanlara uyguladığından değişken belirtmeye gerek duyulmaz
//----------------------------------------------------------------------------------------------- 

//---OBJECTS---
/*
JavaScript'te nesneler, birden fazla veriyi tek bir değişkende saklamamızı sağlar. Nesneler, anahtar-değer çiftleri 
şeklinde verileri saklar ve her bir veriye anahtar adı ile erişilir. örn: bir kullanıcı adı ve bir parola gibi.
*/
// en yaygın Object tanımlama yöntemi:
var insan = { // nesne tanımlama
  ad: "Ali", // anahtar-değer çifti
  yas: 25, // anahtar-değer çifti
  meslek: "Mühendis" // anahtar-değer çifti
};
// new Object() ile nesne tanımlama yöntemi(bu yöntem pek kullanılmaz):
let araba = new Object();
araba.marka = "Toyota";
araba.model = "Corolla";
araba.yil = 2020;

// Objenin özelliklerine erişim
console.log(insan.ad); // Nokta kullanımı ile erişim
console.log(insan["yas"]); // Köşeli parantez kullanımı ile erişim

// Özelliği değişkene atama
let ozellik = "meslek"; // değişken tanımlama
console.log(insan[ozellik]); // değişken ile erişim

// Özellik Ekleme, Değiştirme ve Silme
insan.ad = "Mehmet"; // Özelliği değiştirme
insan.boy = 180; // Özellik ekleme
delete insan.meslek; // Özelliği silme

// Nesnede döngüye girmek
for (let key in insan) {
  console.log(key + ": " + insan[key]); // Anahtar-değer çiftlerini yazdırma
} // for döngüsü ile nesnenin anahtarlarını alır ve değerlerini yazdırır

// Nesne içine fonksiyon ekleme
tanit: function() { // fonksiyon tanımlama
  console.log("Benim adım " + this.ad + " ve " + this.yas + " yaşındayım."); // this ile nesneye erişim
} // fonksiyon tanımlama
ogrenci.tanit(); // fonksiyonu çağırma

// Faydalı Object Metotları
// Object.keys() ile nesnenin anahtarlarını alabiliriz
Object.keys(araba); // ["marka", "model", "yil"]
// Object.values() ile nesnenin değerlerini alabiliriz
Object.values(araba); // ["Toyota", "Corolla", 2020]
// Object.entries() ile nesnenin anahtar-değer çiftlerini alabiliriz
Object.entries(araba); // [["marka", "Toyota"], ["model", "Corolla"], ["yil", 2020]]

//Obje içine obje tanımlama
let kullanici = {
  ad: "Ahmet",
  adres: {
    sehir: "İstanbul",
    postaKodu: 34000
  }
};

console.log(kullanici.adres.sehir); // "İstanbul"
