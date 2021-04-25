const imgMap = new Map().set("Light freezing rain", "assets/images/weather-24-512.png")
                        .set("Partly cloudy", "assets/images/weather-02-512.png")
                        .set("Overcast", "assets/images/weather-02-512.png");

const week = document.querySelector('.week');

fetch(`http://api.weatherapi.com/v1/forecast.json?key=ffde121dbdf741f49bd213035212403&q=Kiev&days=7&aqi=no&alerts=no`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            if (data.response === "error") {
                alert('Response failed :(');
            } else {
                data.forecast.forecastday.forEach(dayData => {
                    week.insertAdjacentHTML('beforeend', generateForecastForDay(dayData));
                });
            }
        })

function generateForecastForDay(dayData) {
    const date = new Date(dayData.date);


    //https://stackoverflow.com/questions/6040515/how-do-i-get-month-and-date-of-javascript-in-2-digit-format/18610204
    const day = ("0" + date.getDate()).slice(-2)
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const temp = Math.ceil(dayData.day.maxtemp_c);
    const condition = dayData.day.condition.text;

    const image = imgMap.get(condition);

    return `<div class="day">
              <div class="data">${day}.${month}</div>
              <div class="img"><img src="${image}"></div>
              <div class="temperature">${temp}&#176;</div>
            </div>`;
}