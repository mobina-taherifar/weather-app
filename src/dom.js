const tempNum = document.querySelector("h1");
const condition = document.querySelector("h2");
const cityName = document.querySelector("h3");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const scenario = document.querySelector(".scenario");
const characterImg = document.querySelector(".character-img");
const conditionIcon = document.querySelector(".condition-icon");

const weatherMap = {
  Clear:        { theme: "theme-sunny",  image: "/images/sunny.png",   icon: "/images/weather-sun.svg" },
  Clouds:       { theme: "theme-cloudy", image: "/images/cloudy.png",  icon: "/images/weather-storm.svg" },
  Rain:         { theme: "theme-rainy",  image: "/images/rainy.png",   icon: "/images/weather-rain.svg" },
  Thunderstorm: { theme: "theme-windy",  image: "/images/windy.png",   icon: "/images/weather-storm.svg" },
  Snow:         { theme: "theme-snowy",  image: "/images/snowy.png",   icon: "/images/weather-snow.svg" },
  Mist:         { theme: "theme-mist",   image: "/images/mist.png",    icon: "/images/weather-rain.svg" },
};

export function displayWeather(data) {
    const mainCondition = data.weather[0].main;
    const weather = weatherMap[mainCondition] ?? {
        theme: "theme-default",
        image: "/images/default.png",
        icon: ""
    };

    scenario.className = `scenario ${weather.theme}`;
    characterImg.src = weather.image;
    conditionIcon.src = weather.icon;

    tempNum.textContent = `${Math.round(data.main.temp)}°C`;
    condition.textContent = mainCondition;
    cityName.textContent = data.name;
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} m/s`;
}

