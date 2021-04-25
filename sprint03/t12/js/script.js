let textArea = document.querySelector("textarea");
let buttonAdd = document.querySelector("#add");
let buttonClear = document.querySelector("#clear");
let paragraphs = document.querySelector(".saved");
let currSavedNotes = localStorage.getItem("note");

if (currSavedNotes && currSavedNotes.length !== 0) {
    let notes = JSON.parse(currSavedNotes).notes;

    paragraphs.innerHTML = "";

    for(let i = 0; i < notes.length; i++) {
        let paragraph = document.createElement("p");
        paragraph.innerText = notes[i];
        paragraphs.appendChild(paragraph);
    }
}

buttonAdd.addEventListener("click", () => add());
buttonClear.addEventListener("click", () => clear());

function add() {
    let date = new Date;
    let text = textArea.value + " [" + date.toUTCString() + "]";
    let obj = {
        notes: [text]
    }
    let storageData = localStorage.getItem("note");

    if(storageData && storageData.length !== 0) {
        let savedNotes = JSON.parse(storageData);
        obj.notes = obj.notes.concat(savedNotes.notes);
    } else {
        paragraphs.innerHTML = "";
    }

    if (textArea.value.length !== 0) {
        let paragraph = document.createElement("p");
        localStorage.setItem("note", JSON.stringify(obj));
        paragraph.innerText = obj.notes[0];
        paragraphs.appendChild(paragraph);
        textArea.value = "";
    } else {
        alert("It's empty. Try to input something in \"Text input\".");
    }

}

function clear() {
    if (window.confirm("Are you sure?")) {
        localStorage.clear();
        paragraphs.innerHTML = "<p>Empty</p>";
    }
}

// let textArea = document.querySelector("textarea");
// let buttonAdd = document.querySelector("#add");
// let buttonClear = document.querySelector("#clear");
// let paragraphs = document.querySelector("p");

// let notes = localStorage.getItem("note");
// if (notes && notes.length !== 0) {
//     console.log(notes);
// }

// buttonAdd.addEventListener("click", () => add());
// buttonClear.addEventListener("click", () => clear());
// function add() {
//     let date = new Date;
//     let text = textArea.value + " [" + date.toUTCString() + "]";
//     let obj = {
//         note: text
//     }
//     let currNotes = localStorage.getItem("note");

//     text = JSON.stringify(obj);

//     if(currNotes && currNotes.length !== 0) {
//         text += "," + currNotes;
//     } else {
//         paragraphs.innerText = "";
//     }

//     if (textArea.value.length !== 0) {
//         let paragraph = document.createElement("p");
//         localStorage.setItem("note", text);
//         paragraph.innerText = obj.note;
//         paragraphs.appendChild(paragraph);
//         textArea.value = "";
//     } else {
//         alert("It's empty. Try to input something in \"Text input\".");
//     }

// }

// function clear() {
//     if (window.confirm("Are you sure?")) {
//         localStorage.clear();
//         paragraphs.innerHTML = "Empty";
//     }

// }
