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

    Primitif Veri Tipleri: String, number, boolean, Undefined ve Null
    Referans Veri Tipleri: Object, Array ve Function

    String: Metin veri tipidir. Tek tırnak veya çift tırnak ile tanımlanabilir.
    Number: Sayı veri tipidir. Tam sayı veya ondalıklı sayı olabilir.
    Boolean: Mantıksal veri tipidir. Sadece iki değer alabilir bunlar true ve false.
    Undefined: Tanımlanmamış bir değeri belirtir. Bir değişken tanımlandığında ve bir değer atanmadan önce undefined olarak kabul edilir.
    Null: Boş bir değeri belirtir. Bir değişken tanımlanmış ancak bir değer atanmamışsa null olarak kabul edilir.
    --------------
    Object: Bir nesne veri tipidir. Anahtar-değer çiftleri ile tanımlanır.
    Array: Bir dizi veri tipidir. Birden fazla değeri tek bir değişken altında saklamak için kullanılır.
    Function: Bir fonksiyon veri tipidir. Belirli bir işlemi gerçekleştirmek için kullanılır.
*/

let name = "Evren"; // String veri tipi
console.log(name); // "Evren" yazdırır
console.log(typeof name); // "string" yazdırır