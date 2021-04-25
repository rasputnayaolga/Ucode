let user = {
  name: document.getElementById('name').value,
  age: document.getElementById('age').value,
  email: document.getElementById('email').value
};

// Don't edit above this line

const nameRgx = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;

//Email address regex https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const button = document.getElementById("outside");
let prevValueAge = document.getElementById('age').value;
let prevValueEmail =  document.getElementById('email').value;

document.addEventListener('click', function(event) {
  const element = event.target;
  if (element.innerText === 'edit') {
    if (event.target.previousElementSibling.id = 'age') {
      prevValueAge =  event.target.previousElementSibling.value;
    } else if (event.target.previousElementSibling.id = 'email') {
      prevValueEmail =  event.target.previousElementSibling.value;
    }    
  }
});

//https://learn.javascript.ru/proxy
user = new Proxy(user, {

  //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
  get(user, value) {

    //https://learn.javascript.ru/switch
    switch (value) {
      case 'name':
        if (nameRgx.test(user[value])) {
          return user[value];
        } else {
          let result = user[value];

          //Trim redundant spaces
          //https://stackoverflow.com/questions/10575086/regex-to-remove-all-whitescape-except-one-between-words
          result.replace(/\s{2,}/g,' ').trim();
          
          return titleCase(result);
        }
      case 'age':
        const age = Number(user[value]);

        //https://learn.javascript.ru/ifelse#uslovnyy-operator
        return age && age > 0 && age < 999 ? age : prevValueAge;
      case 'email':
        return emailRgx.test(user[value]) ? user[value] : prevValueEmail;
    }
  }
});


// https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  // Directly return the joined string
  return splitStr.join(' '); 
}

// Don't edit below this line

function edit(btn) {
  btn.innerHTML = 'save';
  btn.setAttribute('onclick', 'save(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.removeAttribute('disabled');
}

function save(btn) {
  btn.innerHTML = 'edit';
  btn.setAttribute('onclick', 'edit(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.setAttribute('disabled', 'true');
  user[input.id] = document.getElementById(input.id).value;
  document.getElementById(input.id).value = user[input.id];
}