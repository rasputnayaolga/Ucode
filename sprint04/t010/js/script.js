class Superhero {
    constructor(supName, name, combat, durability, intelligence, power, speed, strength) {
        this.supName = supName;
        this.name = name;
        this.combat = combat;
        this.durability = durability;
        this.intelligence = intelligence;
        this.power = power;
        this.speed = speed;
        this.strength = strength;
    }
}

let compareData = [];
let searchData = [];
let searchResult = document.querySelector('.search-result');

// Set googlecharts data representation
google.charts.load('current', { 'packages': ['corechart'] });


function search() {
    let name = document.querySelector('#heroname');
    fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3738481352856182/search/${name.value}`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            searchData = [];
            searchResult.innerHTML = '';
            if (data.response === "error") {
                alert('Response failed :(');
            } else {
                data.results.forEach(hero => {
                    const searchHero = new Superhero(
                        hero.name,
                        hero.biography["full-name"],
                        hero.powerstats.combat,
                        hero.powerstats.durability,
                        hero.powerstats.intelligence,
                        hero.powerstats.power,
                        hero.powerstats.speed,
                        hero.powerstats.strength
                    );
                    searchData.push(searchHero);
                    searchResult.innerHTML += generateSupButton(searchData.length - 1, searchHero.supName, searchHero.name);
                })
            }
        })
}

function random() {
    const random = generateRandonNumber(1, 731);
    fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3738481352856182/${random}`)
        .then(function (resp) { return resp.json() })
        .then(function (hero) {
            searchData = [];
            searchResult.innerHTML = '';
            if (hero.response === "error") {
                alert('Response failed :(');
            } else {
                const randomHero = new Superhero(
                    hero.name,
                    hero.biography["full-name"],
                    hero.powerstats.combat,
                    hero.powerstats.durability,
                    hero.powerstats.intelligence,
                    hero.powerstats.power,
                    hero.powerstats.speed,
                    hero.powerstats.strength
                );
                searchData.push(randomHero);
                searchResult.innerHTML += generateSupButton(searchData.length - 1, randomHero.supName, randomHero.name);
            }
        })
}

function pushToCompare(supCounter) {
    compareData.push(searchData[supCounter]);
    let compareCount = document.querySelector('#compare-count');
    compareCount.innerHTML = compareData.length;
}

function generateRandonNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSupButton(supCounter, supName, name) {
    return `<button class="superhero" onclick="pushToCompare(${supCounter})">
                <p class="superhero-name">${supName}</p>
                <p>${name}</p>
            </button>`
}

function compare() {
    // Create the data table.
    const data = new google.visualization.DataTable();
    data.addColumn('string', '');
    data.addColumn('number', 'combat');
    data.addColumn('number', 'durability');
    data.addColumn('number', 'intelligence');
    data.addColumn('number', 'power');
    data.addColumn('number', 'speed');
    data.addColumn('number', 'strength');
    compareData.forEach(hero => {
        data.addRows([
            [
                hero.name,
                Number(hero.combat),
                Number(hero.durability),
                Number(hero.intelligence),
                Number(hero.power),
                Number(hero.speed),
                Number(hero.strength)
            ]
        ]);
    });


    // Set chart options
    const options = {
        width: '100%',
        height: 600,
        backgroundColor: 'gray'
    };

    // Instantiate and draw our chart, passing in some options.
    const chart = new google.visualization.ColumnChart(document.querySelector('.charts'));
    chart.draw(data, options);
}
