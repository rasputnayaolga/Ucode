/*Объявляем переменные для хранения текущего состояния bruceBanner/hulk и определяем их противоположными булевыми true/flase
  значениями, объявляем две константые переменные для хранения в них HTML элементов для дальнейшей манипуляции с ними
*/

let bruceBanner = true; //создаем переменную bruceBanner и присваиваем ей значение true
let hulk = false; //создаем переменную hulk и присваиваем ей значение false
const hero =  document.querySelector("#hero"); //создаем константу hero и присваиваем ей значение DOM узла по id hero из HTML (14 строчка HTML)
const lab = document.querySelector("#lab"); //создаем константу lab и присваиваем ей значение DOM узла по id lab из HTML (13 строчка HTML)


/*Объявляем функцию которая проверяет текущее состояние bruceBanner/hulk и меняет на противоположное, заодно изменяя 
  заданные по условию CSS стили. Функция не вызывается из кода, а вызывается из атрибута onclick на 15 строке в HTML
*/

function transformation(){ //декларируем функцию transformation которая будет вызываться через onclick в HTML (15 строчка index.html)
  if(bruceBanner === true){ //если значение переменной bruceBanner - true, выполняется код в фигурных скобках
    hulk = true; //значение hulk меняется с false на true
    bruceBanner = false; //значение bruceBanner меняется с true на false
    hero.innerText = "Hulk"; //текст DOM элемента в переменной hero меняется на "Hulk"
    hero.style.letterSpacing = "6px"; //letter spacing DOM элемента в переменной hero меняется на 6px
    hero.style.fontSize = "130px"; //font size DOM элемента в переменной hero меняется на 130px
    lab.style.backgroundColor = "#70964b"; "130px"; //background color DOM элемента в переменной lab меняется на #70964b
  } else { //если значение переменной bruceBanner не true
    hulk = false; //значение hulk меняется с true на false
    bruceBanner = true; //значение bruceBanner меняется с false на true
    hero.innerText = "Bruce Banner"; //текст DOM элемента в переменной hero меняется на "Bruce Banner"
    hero.style.letterSpacing = "2px"; //letter spacing DOM элемента в переменной hero меняется на 2px
    hero.style.fontSize = "60px"; //font size DOM элемента в переменной hero меняется на 60px
    lab.style.backgroundColor = "#ffb300"; //background color DOM элемента в переменной lab меняется на #ffb300
  }
}
