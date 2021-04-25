let name = prompt("Enter your name");
let surname = prompt("Enter your surname");
let regex = new RegExp("^[A-Za-z]*$");
if (regex.test(name) && regex.test(surname)) {
    name = name[0].toUpperCase() + name.slice(1);
    surname = surname[0].toUpperCase() + surname.slice(1);
    alert("Hi, " + name + " " + surname);
    console.log("Hi, " + name + " " + surname);
} else {
    alert("Wrong input!");
    console.log("Wrong input!");
}