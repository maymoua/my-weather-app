function displayTemperature(response) {
  console.log(response.data);
  let temeratureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temeratureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.spead);
}

let apiKey = "cf0f1f173fb62dd2bd98180f65a77eaf";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apikey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
