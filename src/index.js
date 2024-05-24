import { fetchForecastData } from "./api-interactions";
import {
  showForecast,
  showNotFoundMessage,
  hideMessage,
} from "./dom-manipulator";

import "./style.css";

const userInput = document.getElementById("city-name");
const button = document.getElementById("form-button");

const toggler = document.querySelector(".temperature-toggler");
const celsius = toggler.querySelector(".celsius");
const fahrengheit = toggler.querySelector(".fahrengheit");

let currentTemperatureUnit = celsius;
let currentPlace = "Moscow";

const temperatureUnits = {
  celsius: "°C",
  fahrengheit: "°F",
};

toggler.addEventListener("click", toggleTemperatureUnit);
button.addEventListener("click", getUserInput);
userInput.addEventListener("focus", hideMessageBox);

processForecast(currentPlace);


function hideMessageBox() {
  hideMessage();
}

function toggleTemperatureUnit(event) {
  if (event.target.classList.contains("active")) {
    return;
  }

  celsius.classList.toggle("active");
  fahrengheit.classList.toggle("active");
  currentTemperatureUnit = event.target;

  processForecast(currentPlace);
}

function getUserInput(event) {
  event.preventDefault();

  if (!userInput.value) {
    return;
  }

  const value = userInput.value;
  currentPlace = value;
  processForecast(currentPlace);

  userInput.value = "";
}

function processForecast(place) {
  fetchForecastData(place, 3).then((data) => {
    if (!data) {
      showNotFoundMessage(place);
    } else {
      chooseForecastDataToShow(data);
    }
  });
}

function chooseForecastDataToShow(data) {
  if (currentTemperatureUnit.classList.contains("celsius")) {
    const celsiusData = prepareCelsiusData(data);
    showForecast(celsiusData);
  } else {
    const fahrengheitData = prepareFahrengheitData(data);
    showForecast(fahrengheitData);
  }
}

function prepareCelsiusData(data) {
  console.log("celsius");

  const newData = {};

  newData.location = data.location;

  newData.currentForecast = {};
  newData.nextDaysForecast = [];

  for (const [key, value] of Object.entries(data.currentForecast)) {
    if (key.endsWith("_c")) {
      newData.currentForecast[key.slice(0, -2)] =
        `${value} ${temperatureUnits.celsius}`;
    } else if (!key.endsWith("_f")) {
      newData.currentForecast[key] = value;
    }
  }

  data.nextDaysForecast.forEach((day) => {
    const celciusDay = {};
    for (const [key, value] of Object.entries(day)) {
      if (key.endsWith("_c")) {
        celciusDay[key.slice(0, -2)] = `${value} ${temperatureUnits.celsius}`;
      } else if (!key.endsWith("_f")) {
        celciusDay[key] = value;
      }
    }
    newData.nextDaysForecast.push(celciusDay);
  });

  return newData;
}

function prepareFahrengheitData(data) {
  console.log("fahrengheit");

  const newData = {};

  newData.location = data.location;

  newData.currentForecast = {};
  newData.nextDaysForecast = [];

  for (const [key, value] of Object.entries(data.currentForecast)) {
    if (key.endsWith("_f")) {
      newData.currentForecast[key.slice(0, -2)] =
        `${value} ${temperatureUnits.fahrengheit}`;
    } else if (!key.endsWith("_c")) {
      newData.currentForecast[key] = value;
    }
  }

  data.nextDaysForecast.forEach((day) => {
    const fahrengheitDay = {};
    for (const [key, value] of Object.entries(day)) {
      if (key.endsWith("_f")) {
        fahrengheitDay[key.slice(0, -2)] =
          `${value} ${temperatureUnits.fahrengheit}`;
      } else if (!key.endsWith("_c")) {
        fahrengheitDay[key] = value;
      }
    }
    newData.nextDaysForecast.push(fahrengheitDay);
  });

  return newData;
}
