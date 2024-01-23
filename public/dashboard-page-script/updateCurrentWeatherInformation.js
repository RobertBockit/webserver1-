const apiKey = "af420b9f11addf4695a637749b746fac"



async function updateCurrentWeatherData() {



    const city = "Berlin"
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
        return resultOfWeather.main.temp

}
function updateText(){
    getTemperature().then(function (result) {
        const weatherBox = document.getElementById("weatherNotice")
        weatherBox.textContent = "Currently, temperature in Berlin is " + result
    })


}