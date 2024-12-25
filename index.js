// const cityInput = document.querySelector(".city-input");
// const searchButton = document.querySelector(".search-button");

// const weatherInfoSection = document.querySelector(".Weather-info-section");
// const notFoundSection = document.querySelector(".not-found-section");
// const searchCitySection = document.querySelector(".search-city-section");

// const countryTxt = document.querySelector(".country-txt");
// const tempTxt = document.querySelector(".temp-txt");
// const conditionTxt = document.querySelector(".condition-txt");
// const humidityValueTxt = document.querySelector(".humidity-value-txt");
// const windValueTxt = document.querySelector(".wind-value-txt");
// const weatherSummaryImg = document.querySelector(".weather-summary-img");
// const currentDateTxt = document.querySelector(".current-date-txt");

// const section = document.getElementsByTagName("section");
// const forecastItemsContainer = document.querySelector(
//   ".forecast-items-container"
// );

// const apiKey = "fa65d3752888447292be90465cd6c160";

// searchButton.addEventListener("click", () => {
//   if (cityInput.value.trim() != "") {
//     updateWeatherInfo(cityInput.value);
//     cityInput.value = "";
//     cityInput.blur();
//   }
// });

// cityInput.addEventListener("keydown", (event) => {
//   if (event.key == "Enter" && cityInput.value.trim() !== "") {
//     updateWeatherInfo(cityInput.value);
//     cityInput.value = "";
//     cityInput.blur();
//   }
// });

// async function getFetchData(endPoint, city) {
//   const apiurl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
//   //   const apiurl =`https://api.openweathermap.org/data/2.5/weather?q=London&appid=fa65d3752888447292be90465cd6c160&units=metric`
//   const response = await fetch(apiurl);

//   return response.json();
// }

// function getWeatherIcon(id) {
//   if (id <= 232) return "thunderstorm.svg";
//   if (id <= 321) return "drizzle.svg";
//   if (id <= 531) return "rain.svg";
//   if (id <= 622) return "snow.svg";
//   if (id <= 781) return "atmosphere.svg";
//   if (id === 800) return "clear.svg";
//   else return "clouds.svg";
// }

// function getCurrentDate() {
//   const currentDate = new Date();
//   const options = {
//     weekday: "short",
//     day: "2-digit",
//     month: "short",
//   };

//   return currentDate.toLocaleDateString("en-GB", options);
// }

// async function updateWeatherInfo(city) {
//   try {
//     const weatherData = await getFetchData("weather", city);

//     if (weatherData.cod !== 200) {
//       showDisplaySection(notFoundSection);
//       return;
//     }
//     console.log(weatherData);

//     const {
//       name: cityName,
//       main: { temp, humidity },
//       weather: [{ id, main }],
//       wind: { speed },
//     } = weatherData;

//     countryTxt.textContent = cityName;
//     tempTxt.textContent = `${Math.round(temp)} °C `;
//     conditionTxt.textContent = main;

//     //async function updateForecastsInfo(city) {
//     humidityValueTxt.textContent = `${humidity} % `;
//     windValueTxt.textContent = `${speed} M/s`;

//     // currentDateTxt.textContent = getCurrentDate()
//     //  console.log(getCurrentDate())

//     //weatherSummaryImg.src=`assets/weather/${getWeatherIcon(id)}`

//     //  await updateForecastsInfo(city)
//     showDisplaySection(weatherInfoSection);
//   } catch (error) {
//     console.log("Error fetching weather data:", error);
//     showDisplaySection(notFoundSection)
//   }
// }

// async function UpdateForecastsInfo(city) {
//   const forecastsData = await getFetchData("forecast", city);
//   const timeTaken = "12:00:00";
//   const todaydate = new Date().toISOString().split("T")[0];

//   forecastItemsContainer.innerHTML = "";
//   forecastsData.list.forEach((forecastWeather) => {
//     if (
//       forecastWeather.dt_txt.includes(timeTaken) &&
//       !forecastWeather.dt_txt.includes(todaydate)
//     ) {
//       updateForecastsItems(forecastWeather);
//     }
//   });
// }

// function updateForecastItems(weatherData) {
//   //console.log(weatherData)
//   const {
//     dt_txt: date,
//     weather: [{ id }],
//     main: { temp },
//   } = weatherData;

//   const dateTaken = new Date(date);
//   const dateoption = {
//     day: "2-digit",
//     month: "short",
//   };

//   const dateResult = dateTaken.toLocaleDateString("en-US", dateoption);

//   const forecastItem = `
//                     <div class="forecast-item">
//                         <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
//                         <img src="assets/weather/${getWeatherIcon(
//                           id
//                         )}"  class="forecast-item-img">
//                         <h5 class="forecast-item-temp">${Math.round(
//                           temp
//                         )}°C</h5>
//                     </div>
//         `;

//   forecastItemsContainer.insertAdjacentHTML("beforeend", forecastItem);
// }
// const container = document.getElementById('container');

// function showDisplaySection(section) {
//   [weatherInfoSection,searchCitySection,notFoundSection].forEach(sec => {
//       sec.style.display ='none';

//   })

// //   section.style.display = "flex";
//   section.style.display = 'flex';
// }


const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-button");

const weatherInfoSection = document.querySelector(".Weather-info");
const notFoundSection = document.querySelector(".not-found");
const searchCitySection = document.querySelector(".search-city");

const countryTxt = document.querySelector(".country-txt");
const tempTxt = document.querySelector(".temp-txt");
const conditionTxt = document.querySelector(".condition-txt");
const humidityValueTxt = document.querySelector(".humidity-value-txt");
const windValueTxt = document.querySelector(".wind-value-txt");
const weatherSummaryImg = document.querySelector(".weather-summary-img");
const currentDateTxt = document.querySelector(".current-date-txt");

const forecastItemsContainer = document.querySelector(".forecast-items-container");

const apiKey = "fa65d3752888447292be90465cd6c160";

searchButton.addEventListener("click", () => {
  if (cityInput.value.trim() !== "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && cityInput.value.trim() !== "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});

async function getFetchData(endPoint, city) {
  const apiurl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiurl);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

function getWeatherIcon(id) {
  if (id <= 232) return "thunderstorm.svg";
  if (id <= 321) return "drizzle.svg";
  if (id <= 531) return "rain.svg";
  if (id <= 622) return "snow.svg";
  if (id <= 781) return "atmosphere.svg";
  if (id === 800) return "clear.svg";
  return "clouds.svg";
}

function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };

  return currentDate.toLocaleDateString("en-GB", options);
}

async function updateWeatherInfo(city) {
  try {
    const weatherData = await getFetchData("weather", city);

    if (weatherData.cod !== 200) {
      showDisplaySection(notFoundSection);
      return;
    }

    const {
      name: cityName,
      main: { temp, humidity },
      weather: [{ id, main }],
      wind: { speed },
    } = weatherData;

    countryTxt.textContent = cityName;
    tempTxt.textContent = `${Math.round(temp)} °C `;
    conditionTxt.textContent = main;
    humidityValueTxt.textContent = `${humidity} % `;
    windValueTxt.textContent = `${speed} m/s`;
    weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`;
    currentDateTxt.textContent = getCurrentDate();

    await updateForecastsInfo(city);
    showDisplaySection(weatherInfoSection);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    showDisplaySection(notFoundSection);
  }
}

async function updateForecastsInfo(city) {
  try {
    const forecastsData = await getFetchData("forecast", city);
    const timeTaken = "12:00:00";
    const todayDate = new Date().toISOString().split("T")[0];

    forecastItemsContainer.innerHTML = "";
    forecastsData.list.forEach((forecastWeather) => {
      if (
        forecastWeather.dt_txt.includes(timeTaken) &&
        !forecastWeather.dt_txt.includes(todayDate)
      ) {
        updateForecastItem(forecastWeather);
      }
    });
  } catch (error) {
    console.error("Error fetching forecast data:", error);
  }
}

function updateForecastItem(weatherData) {
  const {
    dt_txt: date,
    weather: [{ id }],
    main: { temp },
  } = weatherData;

  const dateTaken = new Date(date);
  const dateOption = {
    day: "2-digit",
    month: "short",
  };

  const dateResult = dateTaken.toLocaleDateString("en-US", dateOption);

  const forecastItem = `
                    <div class="forecast-item">
                        <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
                        <img src="assets/weather/${getWeatherIcon(
                          id
                        )}"  class="forecast-item-img">
                        <h5 class="forecast-item-temp">${Math.round(
                          temp
                        )}°C</h5>
                    </div>
        `;

  forecastItemsContainer.insertAdjacentHTML("beforeend", forecastItem);
}

function showDisplaySection(section) {
  [weatherInfoSection, searchCitySection, notFoundSection].forEach((sec) => {
    sec.style.display = "none";
  });

  section.style.display = "block";
}