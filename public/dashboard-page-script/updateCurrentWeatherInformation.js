let apiKey = "af420b9f11addf4695a637749b746fac"



let username = sessionStorage.getItem("username")
let userCity;

async function updateCurrentWeatherData() {


    let city = await fetch("/api/" + username + "/city"
    ).then(result => result.json()).then(res => res)

    userCity = city


    const url = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey
    console.log(url)
    const coordinates = async () => {
        const response = await fetch(url)
         //extract JSON from the http response
        return response.json()
    }
    const result = await coordinates();// Use await here
    const lat = result[0].lat
    const lon = result[0].lon

    return [lat, lon]

}

async function getTemperature() {
        const result = await updateCurrentWeatherData();

        const lat = result[0];
        const lon = result[1];

        const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&lat="+lat+"&lon="+lon+"&appid=" + apiKey

        console.log("Latitude:", lat);
        console.log("Longitude:", lon);

        const weather = async () => {
            const response = await fetch(url)

            //extract JSON from the http response
            return response.json()
        }

        const resultOfWeather = await weather();// Use await here
        return [resultOfWeather.main.temp, resultOfWeather.weather[0].main]

}

let weather;
function updateText(){
    getTemperature().then(function (result) {
        const weatherBox = document.getElementById("weatherNotice")
        weatherBox.textContent = "Currently, temperature in " + userCity + " is " + result[0]
        console.log(result)
        weather = result[1]
        console.log(weather)

        let path;

        switch (weather){
            case "Thunderstorm" : path = "/weather-images/thundrestorm.png"; break
            case "Rain" : path = "/weather-images/rain.png"; break
            case "Clear" : path = "/weather-images/sunny.png"; break
            case "Clouds" : path = "/weather-images/cloudy.png"; break
            case "Snow" : path = "/weather-images/snowy.png"; break
        }

        console.log(path)

        const elem = document.createElement("img");
        elem.src = path
        document.getElementById(" weather-image").appendChild(elem);

    })
}
