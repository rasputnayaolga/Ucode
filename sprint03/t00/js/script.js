const superTeam = { //объявляем контанту superTeam и записываем в нее объект
    title: "", //объявляем свойство объекта title, и определяем пустой строкой
    leader: "", //объявляем свойство объекта leader, и определяем пустой строкой
    members: ["", ""], //объявляем свойство объекта members, и определяем массивом с двумя пустыми строками
    agenda: "", //объявляем свойство объекта agenda, и определяем пустой строкой
    isEvil: "", //объявляем свойство объекта isEvil, и определяем пустой строкой
    memberCount: function () { //объявляем метод объекта memberCount
        return this.members.length + 1; //возвращаем из метода значение длинны свойства объекта members в котором хранится массив
    }
}
let title = prompt("please enter the name"); //объявляем переменную title и записываем в нее значение воода пользователя с помощью метода prompt, который возвращает строку введенную пользователем в диалоговом окне 
let leader = prompt("please enter the name of the leader"); //объявляем переменную leader и записываем в нее значение воода пользователя с помощью метода prompt
let members = prompt("please enter members' name separated by a comma"); //объявляем переменную members и записываем в нее значение воода пользователя с помощью метода prompt
let agenda = prompt("please write down goal and ideas of the team"); //объявляем переменную agenda и записываем в нее значение воода пользователя с помощью метода prompt
let isEvil = prompt("please enter evil or not (yes/no)"); //объявляем переменную isEvil и записываем в нее значение воода пользователя с помощью метода prompt

superTeam.title = title;  //присваиваем свойству title объкта superTeam значение переменной title из 11й строчки
superTeam.leader = leader; //присваиваем свойству leader объкта superTeam значение переменной leader из 12й строчки
superTeam.members = members.split(","); //присваиваем свойству members объкта superTeam значение переменной members из 13й строчки, преобразованное в массив с помощью метода split с запятой в качестве разделителя
superTeam.agenda = agenda; //присваиваем свойству agenda объкта superTeam значение переменной agenda из 14й строчки

if (isEvil === "yes") { //проверяем ялвляется ли значение isEvil из 15й строчки строкой yes, если да выполянется код в фигурных скобках
    superTeam.isEvil = true; //присваваем свойству isEvil объекта superTeam значение true 
} else if (isEvil === "no") { //если значение переменной isEvil из 15й строчки равно строке no выполняется код в {}
    superTeam.isEvil = false; //присваваем свойству isEvil объекта superTeam значение false
} 

//выводим в alert стрку сконкатенированную из значения свойств объекта superTeam и текста
alert(`Here's the team: name - ${superTeam.title}
leader - ${superTeam.leader}
members - ${superTeam.members}
memberCount - ${superTeam.memberCount()}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`
);
