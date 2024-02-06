

function formatDate(timestamp) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date(timestamp * 1000);
    return `${daysOfWeek[date.getDay()]}, ${monthsOfYear[date.getMonth()]} ${date.getDate()}, ${date.getHours() % 12 || 12} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
}



async function getWeatherForecastData(){
    username = sessionStorage.getItem("username")

    userCity = await fetch("/api/" + username + "/city"
    ).then(result => result.json()).then(res => res)

    let userCoordinates;
    await updateCurrentWeatherData(userCity).then( r => userCoordinates = r)
    console.log("userCoordinates")
    const lat = userCoordinates[0]
    const lon = userCoordinates[1]
    console.log(lon,lat)


    const url = "https://api.openweathermap.org/data/2.5/forecast?units=metric&lat="+lat+"&lon="+lon+"&appid=" + apiKey

    const weatherForecast = async () => {
        const response = await fetch(url)
        return response.json()
    }

    return await weatherForecast()

}

function addDivs(data){
    for(let i = 0 ; i < 40; i++ ){

        const cardDiv = document.createElement('div');
        cardDiv.className = 'forecast-small-card';

        const cardContent = `
        <div>
            <p class="date">` + formatDate(data[i].dt) + `</p>
            <p>`  + data[i].main.temp + " " + data[i].weather[0].main + `</p>
        </div>
    `;

        cardDiv.innerHTML = cardContent;
        document.getElementById('forecast').appendChild(cardDiv);


    }
}

async function updateWeatherForecast(){
    let data;
    await getWeatherForecastData().then(r => data = r)


    addDivs(data.list)

}

