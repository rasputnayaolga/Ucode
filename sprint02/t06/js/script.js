var x = 34;
var looong = 9007199254740991n;
var carName = "BMW";
var nameFieldChecked = true;
var ageFieldChecked = false;
var age = null;
var city;
var person = {firstName: "Olga", lastName: "Rozputna", age: "26"};
var id = Symbol("id");
function displayName() {
    var name = "Olga";
}
alert(` 
${typeof x}
${typeof looong}
${typeof carName}
${typeof nameFieldChecked}
${typeof age}
${typeof city}
${typeof person}
${typeof id}
${typeof displayName}
  `);