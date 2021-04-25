let placeholder = document.getElementById('placeholder');
let notification = document.getElementById('notification');
const tableArr = [
    { name: "Black Panther", strength: 66, age: 53 },
    { name: "Captain America", strength: 79, age: 137 },
    { name: "Captain Marvel", strength: 97, age: 26 },
    { name: "Hulk", strength: 80, age: 49 },
    { name: "Iron Man", strength: 88, age: 48 },
    { name: "Spider-Man", strength: 78, age: 16 },
    { name: "Thanos", strength: 99, age: 1000 },
    { name: "Thor", strength: 95, age: 1000 },
    { name: "Yon-Rogg", strength: 73, age: 52 }

];
let tableEl = document.createElement("table");
let asc = true;

function sortTable(sortBy) {
    if (asc === true) {
        asc = false;
        tableArr.sort(function comparator(a, b) {
            if (sortBy === "name") {
                if (a[sortBy] < b[sortBy]) { return -1; }
                if (a[sortBy] > b[sortBy]) { return 1; }
                return 0;
            }
            return a[sortBy] - b[sortBy];
        });
    } else {
        asc = true;
        tableArr.sort(function comparator(a, b) {
            if (sortBy === "name") {
                if (a[sortBy] > b[sortBy]) { return -1; }
                if (a[sortBy] < b[sortBy]) { return 1; }
                return 0;
            }
            return b[sortBy] - a[sortBy];
        });
    }

    generateTable();
}

function generateTable() {
    tableEl.innerHTML = '';
    let tableHeader = document.createElement("tr");
    let tableName = document.createElement("th");
    let tableStrength = document.createElement("th");
    let tableAge = document.createElement("th");
    tableName.innerText = "Name";
    tableStrength.innerText = "Strength";
    tableAge.innerText = "Age";
    tableHeader.appendChild(tableName);
    tableHeader.appendChild(tableStrength);
    tableHeader.appendChild(tableAge);
    tableEl.appendChild(tableHeader);

    tableName.addEventListener("click", () => sortTable("name"));
    tableStrength.addEventListener("click", () => sortTable("strength"));
    tableAge.addEventListener("click", () => sortTable("age"));

    for (let i = 0; i < tableArr.length; i++) {
        let tableRow = document.createElement("tr");
        let cellName = document.createElement("td");
        let cellStrength = document.createElement("td");
        let cellAge = document.createElement("td");
        cellName.innerText = tableArr[i].name;
        cellStrength.innerText = tableArr[i].strength;
        cellAge.innerText = tableArr[i].age;
        tableRow.appendChild(cellName);
        tableRow.appendChild(cellStrength);
        tableRow.appendChild(cellAge);
        tableEl.appendChild(tableRow);

    }

}

generateTable();
document.body.appendChild(tableEl);
