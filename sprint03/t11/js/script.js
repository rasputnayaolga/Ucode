let textArea = document.querySelector("textarea");
let buttonAdd = document.querySelector("#add");
let buttonClear = document.querySelector("#clear");
let paragraphs = document.querySelector(".saved");

let savedNotes = getCookies();

if(savedNotes && !savedNotes[""]){
    paragraphs.innerHTML = "";
    
    for(cookieName in savedNotes) {
        let paragraph = document.createElement("p");
        paragraph.innerText = savedNotes[cookieName];
        paragraphs.appendChild(paragraph);
    }
}

buttonAdd.addEventListener("click", () => add());
buttonClear.addEventListener("click", () => clear());

function add() {
    let text = textArea.value;

    if (text.length !== 0) {
        let date = new Date;
        let paragraph = document.createElement("p");
        let currSavedNotes = getCookies();

        writeCookie(date, text, 30);
        
        if(currSavedNotes && currSavedNotes[""]) {
            paragraphs.innerHTML = "";
        }

        paragraph.innerText = text;
        paragraphs.appendChild(paragraph);
        textArea.value = "";

    } else {
        alert("It's empty. Try to input something in \"Text input\".");
    }

}

function clear() {
    if (window.confirm("Are you sure?")) {
        deleteCookies();
        paragraphs.innerHTML = "Empty";
    }
}

function writeCookie(date, val, expires) {
    let name = date.toUTCString();
    date.setDate(date.getDate() + expires);
    document.cookie = name + "=" + val + "; path=/; expires=" + date.toUTCString();
}
 
function getCookies(){
    let pairs = document.cookie.split(";");
    let cookies = {};
    for (let i=0; i<pairs.length; i++){
      let pair = pairs[i].split("=");
      cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
}

function deleteCookies() { 
    var allCookies = document.cookie.split(';'); 

    for (var i = 0; i < allCookies.length; i++) {
        document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString(); 
    }
}