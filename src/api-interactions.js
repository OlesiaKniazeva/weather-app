const WEATHER_API_KEY = "34573fa62b5c47cd93243644241805";
const BASE_URL = "https://api.weatherapi.com/v1";

import { showLoadingMessage, hideMessage } from "./dom-manipulator";

async function fetchWeatherData(url) {
  showLoadingMessage();

  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("Unable to get weather data: ", err);
  }
}

export async function fetchForecastData(location, days = 1) {
  const URL = `${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=${days}`;

  const data = await fetchWeatherData(URL);

  if (data.error && data.error.code === 1006) {
    console.log(data.error);
    return null;
  }

  const processedData = processForecastData(data);

  hideMessage();
  return processedData;
}

function processForecastData(forecast) {
  const location = {
    city: forecast.location.name,
    region: forecast.location.region,
    country: forecast.location.country,
  };

  const current = forecast.current;
  const currentForecast = {
    icon: current.condition.icon,
    description: current.condition.text,
    temp_c: current.temp_c,
    temp_f: current.temp_f,
    feelslike_c: current.feelslike_c,
    feelslike_f: current.feelslike_f,
  };

  const nextDaysForecast = [];
  forecast.forecast.forecastday.forEach((forecastDay) => {
    const forecastData = {
      maxtemp_c: forecastDay.day.maxtemp_c,
      maxtemp_f: forecastDay.day.maxtemp_f,
      mintemp_c: forecastDay.day.mintemp_c,
      mintemp_f: forecastDay.day.mintemp_f,
      avgtemp_c: forecastDay.day.avgtemp_c,
      avgtemp_f: forecastDay.day.avgtemp_f,
      date: forecastDay.date,
      icon: forecastDay.day.condition.icon,
      description: forecastDay.day.condition.text,
    };
    nextDaysForecast.push(forecastData);
  });

  return { location, currentForecast, nextDaysForecast };
}
