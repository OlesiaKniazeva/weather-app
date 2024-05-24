const parser = new DOMParser();
const messageBox = document.querySelector(".message-to-user");
const weatherContainer = document.querySelector(".weather-data-container");

export function showForecast(forecastData) {
  weatherContainer.innerHTML = "";

  const currentForecastData = createCurrentForecastElement(
    forecastData.location,
    forecastData.currentForecast
  );
  const nextDaysForecast = createNextDaysForecastContainer(
    forecastData.nextDaysForecast
  );

  weatherContainer.appendChild(currentForecastData);
  weatherContainer.appendChild(nextDaysForecast);
}

function createCurrentForecastElement(location, currentForecast) {
  const currentForecastContainer = createElementWithClassList("div", [
    "current-forecast",
  ]);

  const locationContainer = createLocationNode(location);
  const weatherContainer = createWeatherNode(currentForecast);

  currentForecastContainer.appendChild(locationContainer);
  currentForecastContainer.appendChild(weatherContainer);

  return currentForecastContainer;
}

function createNextDaysForecastContainer(forecast) {
  const forecastContainer = createElementWithClassList(
    "div",
    "forecast-container",
    "next-days-forecast"
  );

  const header = createElementWithClassList('h2', 'forecast-header');
  header.textContent = `${forecast.length} Days Forecast`;

  const forecastCardsContainer = createElementWithClassList(
    "div",
    "forecast-cards-container"
  );

  forecast.forEach((day) => {
    const forecastCard = createForecastCard(day);
    forecastCardsContainer.appendChild(forecastCard);
  });

  forecastContainer.appendChild(header);
  forecastContainer.appendChild(forecastCardsContainer);

  return forecastContainer;
}

function createForecastCard(data) {
  const weatherCard = createElementWithClassList("div", "weather-card");

  const date = createElementWithClassList("div", "date");
  date.textContent = data.date;

  const icon = createImg(data.icon);
  const description = createElementWithClassList("div", "description");
  description.textContent = data.description;

  const maxTemp = createElementWithClassList("div", "max-temp");
  maxTemp.textContent = `Max ${data.maxtemp}`;

  const minTemp = createElementWithClassList("div", "min-temp");
  minTemp.textContent = `Min ${data.mintemp}`;

  const avgTemp = createElementWithClassList("div", "avg-temp");
  avgTemp.textContent = `Average ${data.avgtemp}`;

  weatherCard.appendChild(date);
  weatherCard.appendChild(icon);
  weatherCard.appendChild(description);
  weatherCard.appendChild(maxTemp);
  weatherCard.appendChild(minTemp);
  weatherCard.appendChild(avgTemp);

  return weatherCard;
}

export function showLoadingMessage() {
  messageBox.style.visibility = "visible";
  messageBox.textContent = 'Loading ...';
}

export function hideMessage() {
  messageBox.textContent = '';
  messageBox.style.visibility = 'hidden';
}

export function showNotFoundMessage(place) {
  const bold = document.createElement("span");
  bold.textContent = place;
  bold.style.fontWeight = "bold";

  const textPart = document.createTextNode("City ");
  const textPart2 = document.createTextNode(" not found, enter another city!");

  messageBox.textContent = "";
  messageBox.style.visibility = "visible";
  messageBox.appendChild(textPart);
  messageBox.appendChild(bold);
  messageBox.appendChild(textPart2);
}

function createLocationNode(location) {
  const locationIconString = `<svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' viewBox="0 0 24 24"><path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" /></svg>`;
  const locationImg = parser.parseFromString(
    locationIconString,
    "image/svg+xml"
  ).documentElement;

  const locationContainer = createElementWithClassList(
    "div",
    "location-container"
  );

  const locationText = document.createTextNode(
    `${location.city}, ${location.region}, ${location.country}`
  );

  locationContainer.appendChild(locationImg);
  locationContainer.appendChild(locationText);

  return locationContainer;
}

function createWeatherNode(currentForecast) {
  const currentWeatherContainer = createElementWithClassList(
    "div",
    "weather-container"
  );

  const weatherCondition = createElementWithClassList(
    "div",
    "weather-condition-container"
  );

  const weatherImg = createImg(currentForecast.icon);
  const temperature = createElementWithClassList("span", "current-temperature");
  temperature.textContent = currentForecast.temp;

  weatherCondition.appendChild(weatherImg);
  weatherCondition.appendChild(temperature);

  const description = createElementWithClassList("div", "weather-description");
  description.textContent = currentForecast.description;

  const feelsTemp = createElementWithClassList("div", "weather-feelslike");
  feelsTemp.textContent = `Feels like ${currentForecast.feelslike}`;

  currentWeatherContainer.appendChild(weatherCondition);
  currentWeatherContainer.appendChild(description);
  currentWeatherContainer.appendChild(feelsTemp);

  return currentWeatherContainer;
}

function createElementWithClassList(type, classNames) {
  classNames = [].concat(classNames);

  const element = document.createElement(type);
  classNames.forEach((className) => element.classList.add(className));

  return element;
}

function createImg(src) {
  const image = new Image();
  image.src = src;

  return image;
}
