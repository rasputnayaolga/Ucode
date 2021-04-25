const magician = {
  _hat: './assets/images/hat.png',
  _getPortrait() {
    if (this._portrait) return this._portrait;
    else return './assets/images/magician.png';
  },
  'do magic'() {
    console.log(`ABRACADABRAThe prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  }
}

const properties = document.querySelector("#properties");
function generateProperties() {
properties.innerHTML = "";

const buttons = document.createElement("div");

  for (key in magician) {
    if (typeof magician[key] === "function") {
      if (key==='do magic' || key==='sayHello'){
        const button = document.createElement("button");
        button.innerText = key;
        button.addEventListener("click", magician[key].bind(magician));
        buttons.appendChild(button);
  
      }

      if(key==="_getPortrait"){
      document.getElementById("head").src = magician._getPortrait();

      }
     
    } else {
      if(key!=="_hat" && key!=="_portrait"){
        const textProperty = `<p class="propValue">${key}:<a>${magician[key]}</a></p>`;
        properties.insertAdjacentHTML('beforeend', textProperty);
      }
      
    }
  }

  properties.prepend(buttons);

}
generateProperties();
function Human(job) {
  this.job = job;
  this._portrait = './assets/images/human.png';
};

function Dog(color) {
  this.color = color;
  this._portrait = './assets/images/dog.png';
};

function Vampire(title) {
  Human.prototype = new Creature('Dracula', 300, 'human');
  Human.prototype.constructor = Human;
  this.__proto__ = new Human('vampire');
  this.title = title;
  this._portrait = './assets/images/vampire.png';
};

function Creature(name, age, species) {
  this.name = name;
  this.age = age;
  this.species = species;
  this.sayHello = function () {
    console.log(`Hello! My name is ${this.name}`);
  }
}

Human.prototype = new Creature('Olya', 26, 'human');
Human.prototype.constructor = Human;

Dog.prototype = new Creature('Lassie', 3, 'dog');
Dog.prototype.constructor = Dog;

const human = new Human('developer');
const dog = new Dog('sable');
const vampire = new Vampire('count');

function changeMagicianProtoTo(whom) {
  switch (whom) {
    case 'human':
      magician.__proto__ = Object.create(human);
      generateProperties();
      break

    case 'vampire':
      magician.__proto__ = Object.create(vampire);
      generateProperties();
      break

    case 'dog':
      magician.__proto__ = Object.create(dog);
      generateProperties();
      break

    default:
      magician.__proto__ = Object.create({});
      generateProperties();
      break
  }

}