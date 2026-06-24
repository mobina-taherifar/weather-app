const API_KEY = "65ae8e88030145e919274e1da3fc3ad7"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

export async function getWeather(city){
    try{
        let response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
        let data = await response.json();
        return data;
    } catch(error){
        console.log("Something went wrong:", error);
    }
}