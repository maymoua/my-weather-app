function formatDate(timestamp) {
  let data = new Date(timestamp);
  let hours = timestamp.getHours();
  if (hours < 10) {
    hours = `0${mintues}`;
  }
  let minutes = date.getMintues();
  if (minutes < 10) {
    mintues = `0${mintues};`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temeratureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.spead);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "cf0f1f173fb62dd2bd98180f65a77eaf";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apikey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
