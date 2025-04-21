/* var, let, const

var: Fonksiyon scope yapısına sahiptir. Bir fonksiyon içerisinde ki tanımlanan var değişkeni sadece o fonksiyon içerisinden ulaşılabilir. 
var değişkeni bir kere tanımlandıktan sonra içeriği değiştirilebilir. 

let: let değişkeni block scope yapğısına sahiptir. Yani bir değişkeni tanımladığımız blok içerisinde geçerlidir.
let değişkeni bir kere tanımlandıktan sonra içeriği değiştirilebilir.

const: const değişkeni block scope yapısına sahiptir. Yani bir değişkeni tanımladığımız blok içerisinde geçerlidir.
const değişkeni bir kere tanımlandıktan sonra içeriği değiştirilemez. Ancak içeriği bir obje ise o objenin içindeki değerler değiştirilebilir.

değişken isimleri harf,rakam ve alt çizgi ile başlayabilir.
 değişken isimleri özel karakter ile ve büyük harfle başlayamaz ve türkçe karakter içermemelidir. JavaScript büyük ve küçük harfleri ayırt eden bir yapıdır.

 let myVariable = 10;
 let myvariable = 10; bu şekilde iki tane değişken oluşturulabilir çünkü büyük ve küçük harfler ayırt ediliyor.

 Javascript Veri Tipleri 

    Primitif Veri Tipleri: String, number, boolean, Undefined ve Null. Temel veri türleridir. 
    

    String: Metin veri tipidir. Tek tırnak veya çift tırnak ile tanımlanabilir.
    Number: Sayı veri tipidir. Tam sayı veya ondalıklı sayı olabilir.
    Boolean: Mantıksal veri tipidir. Sadece iki değer alabilir bunlar true ve false.
    Undefined: Tanımlanmamış bir değeri belirtir. Bir değişken tanımlandığında ve bir değer atanmadan önce undefined olarak kabul edilir.
    Null: Boş bir değeri belirtir. Bir değişken tanımlanmış ancak bir değer atanmamışsa null olarak kabul edilir.
*/

let name = "Evren"; // String veri tipi
console.log(name); // "Evren" yazdırır
console.log(typeof name); // "string" yazdırır

let number = 10; // Number veri tipi
console.log(number); // 10 yazdırır
console.log(typeof number); // "number" yazdırır

let isTrue = true; // Boolean veri tipi
console.log(isTrue); // true yazdırır
console.log(typeof isTrue); // "boolean" yazdırır

let emptyValue; // Undefined veri tipi
console.log(emptyValue); // undefined yazdırır
console.log(typeof emptyValue); // "undefined" yazdırır

let emptyObject = null; // Null veri tipi
console.log(emptyObject); // null yazdırır  
console.log(typeof emptyObject); // "object" yazdırır (bu bir hata, ancak JavaScript böyle tasarlanmıştır)

/*  Referans Veri Tipleri: Object, Array ve Function. Karmaşık veri yapılarını temsil ederler.

    Object: Bir nesne veri tipidir. Anahtar-değer çiftleri ile tanımlanır. Farklı veri tiplerini bir arada tutabilir.
    Array: Bir dizi veri tipidir. Birden fazla değeri tek bir değişken altında saklamak için kullanılır.
    Function: Bir fonksiyon veri tipidir. Belirli bir işlemi gerçekleştirmek için kullanılır.
*/

//Object veri tipi
let person = {
    name: "Evren",
    age: 23
}
console.log(person); // { name: "Evren", age: 23 } yazdırır
console.log(typeof person); // "object" yazdırır

// Array veri tipi
let fruits = ["apple", "banana", "orange"]; // Array veri tipi
console.log(fruits); // ["apple", "banana", "orange"] yazdırır
console.log(typeof fruits); // "object" yazdırır (Array'ler de nesne olarak kabul edilir)

// Function veri tipi
function greet() {
    console.log("Hello, World!");
} // greet fonnksiyonu çağırıldığında "Hello, World!" yazdırır
//veya
function greet(name){
    return `Hello, ${name}!`;
}
console.log(greet("Evren")); // "Hello, Evren!" yazdırır
//gibi fonksiyonlar tek bir yapıda olmaz

/*
JavaScript Koşullu İfadeler
if: Belirli bir koşulun doğru olup olmadığını kontrol eder.
if ... else : Belirli bir koşul doğruysa bir işlem, yanlışsa başka bir işlem yapar.
else if: Birden fazla koşulu kontrol etmek için kullanılır.
Koşullu Operatör (Ternary)
switch: Birden fazla durumu kontrol etmek için kullanılır. Belirli bir değere göre farklı işlemler yapar.
*/

let number2 = 10;

if (number2 > 5) {
    console.log("Sayı 5'ten büyüktür"); // Sayının 5'ten büyük olduğu durumlarda "Sayı 5'ten büyüktür" yazdırır.
}
//-----------------------------------------------------------------------------------------------------------------------
if (number2 < 5) {
    console.log("Sayı 5'ten küçüktür"); // Sayının 5'ten küçük olduğu durumlarda "Sayı 5'ten küçüktür" yazdırır.
}
else {
    console.log("Sayı 5'e eşit veya büyüktür"); // Kalan her durumda "Sayı 5'e eşit veya büyüktür" yazdırır.
}
//-----------------------------------------------------------------------------------------------------------------------
if (number2 < 5) {
    console.log("Sayı 5'ten küçüktür"); // Sayının 5'ten küçük olduğu durumlarda "Sayı 5'ten küçüktür" yazdırır.
}
else if (number2 > 5) {
    console.log("Sayı 5'ten büyüktür"); // Sayının 5'ten büyük olduğu durumlarda "Sayı 5'ten büyüktür" yazdırır.
}
else {
    console.log("Sayı 5'e eşittir"); // Kalan her durumda "Sayı 5'e eşittir" yazdırır.
}
//------------------------------------------------------------------------------------------------------------------------
let number3 = 7;
let result = (number3 > 5) ? "Sayı 5'ten büyüktür" : "Sayı 5'ten büyük değil"; // number3 5'ten büyükse "Sayı 5'ten büyüktür", değilse "Sayı 5'ten büyük değil" yazdırır.
console.log(result); // "Sayı 5'ten büyüktür" yazdırır.
//------------------------------------------------------------------------------------------------------------------------
let day =3;
switch (day) {
    case 1:
        console.log("Pazartesi"); // 1 ise "Pazartesi" yazdırır
        break;
    case 2:
        console.log("Salı"); // 2 ise "Salı" yazdırır
        break;
    case 3:
        console.log("Çarşamba"); // 3 ise "Çarşamba" yazdırır
        break;
    default:
        console.log("Geçersiz gün"); // Diğer durumlarda "Geçersiz gün" yazdırır
}