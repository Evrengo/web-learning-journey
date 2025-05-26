/* FONKSİYONLAR
JavaScriptte fonksiyonlar tanımlanırken function anahtar kelimesi kullanılır.
Fonksiyonlar, belirli bir işlemi gerçekleştirmek için kullanılır. Fonksiyonlar, parametre alabilir ve geri değer döndürebilir. Fonksiyonlar, kodun tekrar 
kullanılabilirliğini artırır ve kodun daha düzenli olmasını sağlar.
*/
function hello(){
    console.log("Hello, World!");
}        // fonksiyon olusturma
hello(); // fonksiyonu çağırma

// isimsiz fonksiyon olusturma
const hello = function () {
    console.log("Hello, World!");
} 
// "const hello =" isimsiz fonksiyon olusturur ve hello değişkenine atar. Bu şekilde, hello değişkeni bir fonksiyon olarak kullanılabilir.
hello(); // isimsiz fonksiyonu çağırma
//--------------------------------------------------------
// PARAMETRELI FONKSIYON
function sum(a, b) {
    return a + b; // iki sayıyı toplar ve sonucu döndürür
}
console.log(sum(5, 10)); // 15 yazdırır

let result = sum(5, 10); // 15 dgerini bulup result değişkenine atar
console.log(result); // 15 yazdırır
//--------------------------------------------------------
// ARROW FUNCTİON
// arrow function'ı kullanmak içic bir değişkene atamalıyız.
const summ = (a,b) => {
    return a + b; // iki sayıyı toplar ve sonucu döndürür
}
console.log(summ(4, 9)); // 13 yazdırır
//--------------------------------------------------------
// Varsayilan parametre yapısı
function hello(name = "Evren") {
    console.log(`Hello, ${name}!`); // "Hello, Evren!" yazdırır
}// name değişkeni varsayılan olarak "Evren" değerini alır. Eğer hello fonksiyonu çağrılırken bir parametre verilmezse, name değişkeni "Evren" olur.
hello();// "Hello, Evren!" yazdırır
hello("Ali");// Fonksiyonun içine bir parametre girdiğimiz için name değeri artık "Ali" değerini alır ve ekrana "Hello, Ali!" yazdırır.
//--------------------------------------------------------------------------------------------------------
/* DÖNGÜLER
FOR DÖNGÜSÜ: Belirli bir sayıda tekrarlamak için kullanılır. Başlangıç, bitiş ve artış değerleri belirlenir.
WHILE DÖNGÜSÜ: Belirli bir koşul sağlandığı sürece tekrarlamak için kullanılır. Koşul sağlandığında döngü devam eder, sağlanmadığında döngü sona erer.
*/
for(let i=0; i < 5; i++){
    console.log(i); // i değeri verilen koşula ulaşana kadar sonda belirtilen eylemi gerçekleştirerek içindeki durumu tekrar tekrar harekete 
                    // geçirir bu da ekrana 0, 1, 2, 3, 4 yazdırır
}

for (let i=0; i < 10; i++){
    if (i==2){
        console.log("2'ye ulaşıldı"); // i değeri if'in içindeki şartı karşılayıp 3 olduğunda "3'e ulaşıldı" yazdırır
        continue; // continue verdiğimizde continue'dan önce ki eylemi yaptıktan sonra continue'dan sonraki eylemi atlayarak döngüye devam eder
    }
    if(i==6){
        console.log("4'e ulaşıldı");
        break; // break verdiğimizde döngüden çıkmasını sağlar ve döngü sona erer yani i değeri 6 ya ulaştığında 6 değerini alır ve döngü sona erer ekrana 7,8,9 yazdırmaz
    }
    console.log(i);
}
//-------------------------------------------------------------
for (let i=0; i < 10; i++){
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i); // i değeri 0'dan başlayarak 10'a kadar olan sayıları yazdırır
    i++; // i değerini her döngüde 1 artırır
}
// while döngüsü içerisinde de continue ve break ifadeleri kullanılabilir.

let j = 0;
do {
    console.log(j); // j değerini ekrana yazdırır
    j++; // j değerini her döngüde 1 artırır
}
while (j < 10); // j değeri 10'dan küçük olduğu sürece döngü devam eder
/*do-while döngülerinde durumun karşılanılıp karşılanmadığına sonda bakılır
Sonuç olarak for, while ve do-while döngüleri, belirli bir koşul sağlandığı sürece tekrarlamak için kullanılır.
Her bir döngü türünün kendine özgü kullanım alanları vardır ve hangi döngünün kullanılacağı, duruma bağlı olarak değişir.
Ama çoğunlukla biriyle yapılabilen döngü diğerleriyle de yapılabilir.
Bu nedenle hangi döngünün kullanılacağı, kodun okunabilirliği ve performansı açısından önemlidir.
Bu döngülerin içerisine if gibi durumlarla farklı koşullar sokup döngülerin akışını değiştirebilir veya döngüleri istediğimiz değerleri alıcak şekilde ayarlayabiliriz.
*/
//--------------------------------------------------------------------------------------------------------
/*SCOPE(KAPSAM) YAPISI
Global Scope: Tüm kodda erişilebilen değişkenlerdir. Global değişkenler, tüm fonksiyonlar ve bloklar tarafından erişilebilir.
Function Scope: Sadece fonksiyon içinde erişilebilen değişkenlerdir. Fonksiyon dışındaki koddan erişilemezler.
Block Scope: Sadece belirli bir blok içinde erişilebilen değişkenlerdir. Genellikle if, for, while gibi yapılar içinde kullanılır.
*/
// Global Scope
let globalVar = "Ben global'im!";

function selamla() {
  console.log(globalVar); // Erişilebilir 
}

selamla();
console.log(globalVar); // Erişilebilir 
//-------------------------------------------------------------
// Function Scope
function ornekFonksiyon() {
    let functionVar = "Ben fonksiyon içindeyim!";
    console.log(functionVar); // Erişilebilir 
  }
  
  ornekFonksiyon();
  console.log(functionVar); // HATA: functionVar is not defined
// var, let ve const bu kapsamda farklı davranabilir ama genel olarak var, function scope’a sahiptir.
//------------------------------------------------------------- 
// Block Scope
if (true) {
    let blockVar = "Ben blok içindeyim!";
    console.log(blockVar); // Erişilebilir
  }
  
  console.log(blockVar); // HATA: blockVar is not defined
// var bu durumda farklı davranır: var block scope değil, function scope’a sahiptir.