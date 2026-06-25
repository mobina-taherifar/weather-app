import { getWeather } from "./api.js";
import { displayWeather } from "./dom.js";

const cityInput = document.getElementById("search-input");
const searchBtn = document.querySelector("button");

async function handleSearch(){
    const city = cityInput.value.trim();
    if(!city) return;

    const data = await getWeather(city);  // ✅ actually fetch the data

    if (!data || Number(data.cod) !== 200) return;  // ✅ guard against failed fetches too

    displayWeather(data);
    cityInput.value = "";
}

searchBtn.addEventListener("click", handleSearch);

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});