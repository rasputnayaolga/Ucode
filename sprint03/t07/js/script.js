function characters (){
    let charactersArray = document.querySelectorAll("li"); //выбираем все элементы li из HTML и записываем в charactersArray

    for(let i=0; i<charactersArray.length; i++){ //Начинаем цикл от 0 до послднего элемента li в charactersArray
        let character = charactersArray[i]; //выбираем i элемент массива и присваиваем его character
        
        // Добавил отступ от имени к кружкам
        let lineBreak = document.createElement("br"); //coздаем элемент <br>
        character.appendChild(lineBreak); //вставляет его первым внтутрь li перед тем как будет вставлять кружки
        // все
        
        if(character.className !== "good" && character.className !== "evil" && character.className !== "unknown") { //если имя класса не равно good, evil и unknown
          character.className = "unknown"; //присваиваем значение класса unknown
        }

        if(!character.hasAttribute("data-element")) { //проверяем если нет аттрибута data-element
            character.setAttribute("data-element", "none"); //добавляем аттрибут data-element со значением none
        }

        if(character.getAttribute("data-element") === "none") { //если аттрибут data-element равен none
            let circle = document.createElement("div"); //создаем новый элемент div и присваиваем переменной circle
            let line = document.createElement("div"); //создаем новый элемент div и присваиваем переменной line
            line.className = "line"; //добавляем класс line div'у line
            circle.className = "elem"; //добавляем класс elem div'у circle
            circle.appendChild(line); //вставляем div line в div circle
            character.appendChild(circle); //вставляем circle в элемент li
        } else { //если аттрибут data-element не равен none
            let elements = character.getAttribute("data-element"); //выбираем все элементы по аттрибуту data-element в строку и присваиваем elements
            let elementsArr = elements.split(" "); //разбиваем строку на массив элементов и присваиваем elementsArr

            for(let j = 0; j < elementsArr.length; j++) { //начинаем цикл с 0 до конца массива elementsArr
                let circle = document.createElement("div"); //создаем новый элемент div и присваиваем новой переменной circle
                circle.className = elementsArr[j]; //добавляем новому div класс по значению элемента из массива elementsArr
                circle.classList.add("elem"); //добавляем класс elem в список классов
                character.appendChild(circle); //вставляем каждый элемент из списка отдельным кругом в li
            }
        }
    }
}
characters(); //вызываем функцию
