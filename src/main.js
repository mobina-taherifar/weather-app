import { getWeather } from "./api.js";

const data = await getWeather("London");
console.log(data);