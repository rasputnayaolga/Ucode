// let name = prompt('What animal is the superhero most similar to?'),
// b = new RegExp('[A-Za-z]'),
// c = new RegExp("male","i" || "female","i" || "","s"),
// y = new RegExp("^[1-9][0-9]*$");
// if (name.length  <= 20 && b.test(name)) {
// let gender = prompt('Is the superhero male or female? Leave blank if unknown or other');
//     if (c.test(gender)) {
//         let age = prompt('How old is the superhero?'); 

//         if (y.test(age) && y.length <= 5) {
//             alert('Good job');
//             function result(name, gender, age) {
//                 // let end = ("The superhero name is: 
//                 if (gender=="male" && age<18) {
//                     return "boy"
//                 } else if (gender=="male" && age>=18) {
//                     return "man"
//                 }else if (gender=="female" && age<18) {
//                     return "girl"
//                 }else if (gender=="female" && age>=18) {
//                     return "woman"
//                 }else if (gender=="" && age<18) {
//                     return "kid"
//                 }else if (gender=="" && age>=18) {
//                     return "hero"
//                 }
//             }
//             result(cat, female, 3);
//         }
//         else {
//             alert("wrong input");
//         }
//     }
//     else  {
//         alert("Wrong input")
//     }
// } 
// else {
//     alert('Wrong input');
// }
let name = prompt('What animal is the superhero most similar to?');
let b = new RegExp('^[A-Za-z]*$');
let c = new RegExp("male", "i" || "female", "i" || "", "s");
let y = new RegExp("^[1-9][0-9]*$");

if (name.length <= 20 && b.test(name)) {
    let gender = prompt('Is the superhero male or female? Leave blank if unknown or other');

    if (c.test(gender)) {
        let age = prompt('How old is the superhero?');

        if (y.test(age) && age.length <= 5) {
            let secondName = result(name, gender, age);
            alert(`The superhero name is: ${name}-${secondName}`);
        } else {
            alert("wrong input");
        }
    } else {
        alert("Wrong input")
    }
} else {
    alert('Wrong input');
}

function result(name, gender, age) {
    if (gender == "male" && age < 18) {
        return "boy";
    } else if (gender == "male" && age >= 18) {
        return "man";
    } else if (gender == "female" && age < 18) {
        return "girl";
    } else if (gender == "female" && age >= 18) {
        return "woman";
    } else if (gender == "" && age < 18) {
        return "kid";
    } else if (gender == "" && age >= 18) {
        return "hero";
    }
}