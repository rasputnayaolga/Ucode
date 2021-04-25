var str1 = "You're catnip to a girl like me. Handsome, dazed, and to die for...";
function charByIndex(str, index) {
  return str1.charAt(2);
}
var length = "You're catnip to a girl like me. Handsome, dazed, and to die for...".length;

var concat = str1 + '- Catwoman';
var str2 = "Batman: \"I tried to save you.\""
var str3 = "Selina Kyle: catwoman \"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful.\"".replace(/catwoman/gi, " ");

str3.replace(/catwoman/gi, " ");
alert(`Just string: ${str1}
  Length: ${length}
  Character number 2 is: ${str1.charAt(2)}
  To uppercase ${str1.toUpperCase()}
  Concatenation in a phrase: ${concat}
  [Batman Returns] Batman: ${str2}
  ${str3}`);