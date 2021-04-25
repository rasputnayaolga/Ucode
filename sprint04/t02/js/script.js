class Human {
    calories = 0;
    eating = false;
    sleeping = false;

    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;

        setTimeout(function () {
            if (this.sleeping || this.eating) {
                return;
            }
            messageContainer.innerText = "i'm hungry"; 
            console.log("i'm hungry")
        }, 5000);

        setInterval((function () {
            if (this.calories > 0) {
                this.calories -= 200;
            } 
            if (this.calories < 500) {
                changeToHuman();
            }
        }).bind(this), 60000);
    }

    sleepFor(sleepingTime) {
        if(this.sleeping || this.eating) {
            return;
        }

        this.sleeping = true;
        messageContainer.innerText = "i'm sleeping " + sleepingTime; 
        console.log("i'm sleeping " + sleepingTime);
        setTimeout((function () { 
            messageContainer.innerText = "i'm awake now"; 
            console.log("i'm awake now");
            this.sleeping = false;
        }).bind(this), sleepingTime);
    }

    feed() {
        if(this.sleeping || this.eating) {
            return;
        }

        this.eating = true;
        messageContainer.innerText = "nom nom nom"; 
        console.log("nom nom nom");
        setTimeout((function () {
            messageContainer.innerText = "nom nom nom"; 
            console.log("nom nom nom");
            this.calories += 200;
            if (this.calories >= 500) {
                messageContainer.innerText = "i'm not hungry"; 
                console.log("i'm not hungry");
            } else {
                messageContainer.innerText = "still hungry"; 
                console.log("still hungry");
            }
            this.eating = false;
        }).bind(this), 10000);
    }
}

class Superhero extends Human {
    canShootWeb = false;
    canRegenerate = true;
    superheroName = 'Deadpool';
    flying = false;

    fly() {
        if (this.sleeping || this.eating || this.flying) {
            return;
        }

        this.flying = true;
        messageContainer.innerText = "i'm flying";
        console.log("i'm flying");
        setTimeout((function () {
            this.flying = false;
            messageContainer.innerText = "finished"; 
            console.log("finished");
        }).bind(this), 10000);
    }

    fightWithEvil() {
        if (this.sleeping || this.eating || this.flying) {
            return;
        }

        messageContainer.innerText = "khhh-chh... Bang-g-g-g... Evil is defeated!";
        console.log("khhh-chh... Bang-g-g-g... Evil is defeated!");
    }
}

const human = new Human('Wade', 'Wilson', 'man', '40');

const superhero = new Superhero('Wade', 'Wilson', 'man', '40');

const image = document.querySelector("#portrait");
const properties = document.querySelector("#properties");
const messageContainer = document.querySelector("#messageContainer");

changeToHuman();

function changeToHuman() {
    image.src = "./assets/images/wade-wilson.png";
    changePersonality(human);
}

function changeToSuperhero() {
    if (human.calories >= 500 && human.sleeping !== true && human.eating !== true) {
        image.src = "./assets/images/deadpool.png";
        changePersonality(superhero);
    } else {
        alert("not enough calories")
    }
}

function changePersonality(personality) {
    properties.innerHTML = "";

    const buttons = document.createElement("div");
    const methods = Object.getOwnPropertyNames(personality.__proto__).filter(prop => prop != "constructor");

    for(let method of methods) {
        const button = document.createElement("button");
        button.innerText = method;
        button.addEventListener("click", function() {
            let time = 0;
            if (method === 'sleepFor') {
                time = prompt('for how long?'); 
            }
            personality[method].call(personality, time);
        });
        buttons.appendChild(button);
    }

    for (let key in personality) {
        const textProperty = `<p class="propValue">${key}: <a>${personality[key]}</a></p>`;
        properties.insertAdjacentHTML('beforeend', textProperty);
    }

    properties.prepend(buttons);
}