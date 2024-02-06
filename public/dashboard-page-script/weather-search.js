 apiKey = "af420b9f11addf4695a637749b746fac"
 username = sessionStorage.getItem("username")

async function updateCurrentWeatherData1(city) {

    let url = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey
    console.log(url)
    const coordinates = async () => {
        const response = await fetch(url)
        //extract JSON from the http response
        return response.json()
    }
    const result = await coordinates();// Use await here
    console.log(result)
    const cityFromInput = result[0].name
    const lat = result[0].lat
    const lon = result[0].lon

    return [lat, lon, cityFromInput]

}

 async function getTemperature(lat,lon) {

     let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&lat="+lat+"&lon="+lon+"&appid=" + apiKey

     console.log("Latitude:", lat);
     console.log("Longitude:", lon);

     const weather = async () => {
         const response = await fetch(url)
         return response.json()
     }

     const resultOfWeather = await weather();// Use await here
     console.log(resultOfWeather)
     return [resultOfWeather.main.temp, resultOfWeather.weather[0].main, resultOfWeather.name, resultOfWeather.sys.country]

 }


let searchQuery
async function showSearchedWeather(event) {
    event.preventDefault()
    function updateSearchText(city, r) {
        let searchText = document.getElementById("search-results")
        searchText.textContent = "Weather in " + city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() + " (" + r[3] + ")  is " + r[1] + " | " + r[0] + " degrees Celsius"

    }
    let userSearchCity = document.getElementById("search-text").value
    await updateCurrentWeatherData1(userSearchCity).then(r => searchQuery = r )
    await getTemperature(searchQuery[0], searchQuery[1]).then(r => updateSearchText(searchQuery[2], r))

}

