const searchBox = document.querySelector('.search-btn');
const inputBox = document.querySelector('.input-box');
const tmp = document.querySelector('.temperature');
const dsc = document.querySelector('.description');
const hum = document.querySelector('.humidity1');
const win = document.querySelector('.wind1');



searchBox.addEventListener("click",()=>{
    console.log("clicked");
   checkWeather(inputBox.value);
})


async function checkWeather(city){
    const api_key="d33a0cb04b6372a97185c75493bfa451";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
   

    const weather_data = await fetch(`${url}`).then(response=>response.json());


    console.log(weather_data);
    if(weather_data.cod =='404'){
        console.log("error");
        document.querySelector('.weather-body').style.display= "none";
        document.querySelector('.location-not-found').style.display= "flex";
        return;

    }


    document.querySelector('.location-not-found').style.display= "none";
    document.querySelector('.weather-body').style.display= "flex";
  
  
    const temp = weather_data.main.temp;
    const desc = weather_data.weather[0].description;
    const humidity = weather_data.main.humidity;
    const wind = weather_data.wind.speed;

    tmp.innerHTML = `${Math.floor(temp-273.15)}<sup>°C</sup>`;
    dsc.textContent = `${desc}`;
    hum.textContent = `${humidity}%`;
    win.textContent = `${wind} m/s`;
    

    switch(weather_data.weather[0].main){
        case "Rain":
            document.querySelector('.weather-img').src = "assets/rain.png"
            break;
            case "Thunderstorm":
            document.querySelector('.weather-img').src = "assets/rain.png"
            break;
            case "Clouds":
            document.querySelector('.weather-img').src = "assets/cloud.png"
            break;
            case "Clear":
            document.querySelector('.weather-img').src = "assets/clear.png"
            break;
            case "Mist":
            document.querySelector('.weather-img').src = "assets/mist.png"
            break;
            case "Haze":
            document.querySelector('.weather-img').src = "assets/mist.png"
            break;
            case "Snow":
            document.querySelector('.weather-img').src = "assets/snow.png"
            break;


    }



    }









