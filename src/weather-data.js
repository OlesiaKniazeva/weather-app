const WEATHER_API_KEY = "34573fa62b5c47cd93243644241805";
const BASE_URL = "http://api.weatherapi.com/v1";

import _ from "lodash";

async function fetchWeatherData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log("Unable to get weather data: ", err);
  }
}

export async function getForecast(location, days = 1) {
  const URL = `${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=${days}`;

  const data = await fetchWeatherData(URL);

  const processedData = processForecastData(data);
  return processedData;
}

function processForecastData(forecast) {
  const locationKeys = ["name", "region", "country"];
  const location = _.pick(forecast.location, locationKeys);

  const currentForecastKeys = [
    "condition.icon",
    "condition.text",
    "feelslike_c",
    "feelslike_f",
    "temp_c",
    "temp_f",
  ];
  const currentForecast = _.pickBy(
    _.mapValues(_.keyBy(currentForecastKeys), (value, key) =>
      _.get(forecast.current, key)
    ),
    _.identity
  );

  const nextDaysForecastKeys = [
    "date",
    "day.maxtemp_c",
    "day.maxtemp_f",
    "day.mintemp_c",
    "day.mintemp_f",
    "day.avgtemp_c",
    "day.avgtemp_f",
  ];

  const nextDaysForecast = [];
  forecast.forecast.forecastday.forEach((forecastDay) => {
    const dayData = _.pickBy(
      _.mapValues(_.keyBy(nextDaysForecastKeys), (value, key) =>
        _.get(forecastDay, key)
      ),
      _.identity
    );
    nextDaysForecast.push(dayData);
  });

  return { location, currentForecast, nextDaysForecast };
}
