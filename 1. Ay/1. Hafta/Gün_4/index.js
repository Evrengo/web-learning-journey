/*DOM(Document Object Model) Yapısı
 Dom yapısı web sayfalarının programlı bir şekilde erişilmesi ve değiştirilebilmesi için kullanılan bir yapıdır.
 Web sayfası, aslında HTML ve CSS'ten oluşur. Ancak sayfa yüklendiğinde bu sayfa JavaScript tarafından erişilebilir 
 hale gelir ve JavaScript'in sayfanın içeriğiyle etkileşime girmesini sağlar.
 *HTML ile yazdığımız her bir sayfanın ögesi bir nesne olarak temsil edilir. DOM bu nesneleri ağaç yapısı şeklinde düzenler.

 <!DOCTYPE html>
<html>
  <head>
    <title>DOM Örneği</title>
  </head>
  <body>
    <h1>Merhaba Dünya!</h1>
    <p>Bu bir paragraf.</p>
    <button>Click me!</button>
  </body>
</html>
örnek bir HTML yapısı DOM yapısına dönüştürülürse:
- Document
  - html
    - head
      - title
    - body
      - h1
      - p
      - button
Şeklinde bir ağaç yapısı oluşturur.
*/
// DOM Seçiciler

/* 1.getElementById() 
   Bu yöntem, id özelliği ile belirtilen HTML öğesini seçer. Bu yöntem, yalnızca bir öğe döndürür.
   Örnek: <div id="myDiv">Merhaba</div> öğesini seçmek için:
   let div = document.getElementById("myDiv");   */

/* 2.getElementsByClassName()
   Bu yöntem, class özelliği ile belirtilen HTML öğelerini seçer. Bu yöntem, bir dizi döndürür.
   Örnek: <div class="myClass">Merhaba</div> öğelerini seçmek için:
   let divler = document.getElementsByClassName("myClass");
  getElementsByClassName ile dönen sonuç, bir HTMLCollection'dır, yani bir dizi gibi işlem yapabiliriz.*/

/* 3.querySelector()
   Bu yöntem, CSS seçicileri ile belirtilen HTML öğesini seçer. Bu yöntem, yalnızca bir öğe döndürür.
   Örnek: <div class="selam">Merhaba</div> öğesini seçmek için:
   let div = document.querySelector(".selam);
  querySelector ile sadece ilk bulduğu öğe döner.*/

/* 4.querySelectorAll()
   Bu yöntem, CSS seçicileri ile belirtilen HTML öğelerini seçer. Bu yöntem, bir dizi döndürür.
   Örnek: <p class="para">Paragraf 1</p>
          <p class="para">Paragraf 2</p>
          <p class="para">Paragraf 3</p>

          let paragraphs = document.querySelectorAll(".para");
        paragraphs.forEach(function(para) {
        para.innerText = "Bu paragraf değiştirildi!";
});   
querySelectorAll, tüm eşleşen öğeleri döner ve biz de bunlar üzerinde işlem yapabiliriz.   */

/*innerText ve innerHTML
  innerText, bir HTML öğesinin içeriğini metin olarak alır ve ayarlar. Yani ögenin içindeki metni alır ve sadece metin olarak gösterir.
  <div id="myDiv">Merhaba!</div>
  let div = document.getElementById("myDiv");
div.innerText = "Yeni Metin";  // Bu metni değiştirecek

  innerHTML, bir HTML öğesinin içeriğini HTML olarak alır ve ayarlar. Yani ögenin içindeki HTML'yi alır ve HTML olarak gösterir.
  <div id="myDiv"><h1>Başlık</h1></div>
  let div = document.getElementById("myDiv");
div.innerHTML = "<h2>Yeni Başlık</h2>";  // HTML yapısını değiştirir
*/