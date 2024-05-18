// Trong tệp app.js
const searchForm = document.querySelector("#search-form");
const searchCity = document.querySelector("#search-city");
const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const weatherIcon = document.querySelector("#weather-icon");

const apiKey = "4269652c5e1b6a66a34f9d3d16ecc098"; 

function handleSearch(event) {
  event.preventDefault();

  const searchCityValue = searchCity.value;

  // Gửi yêu cầu API đến OpenWeatherMap
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCityValue}&appid=${apiKey}&lang=vi&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Hiển thị thông tin thời tiết
      cityName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp} °C`;
      description.textContent = `Description: ${data.weather[0].description}`;
      weatherIcon.src =  `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || '';
      
      console.log(data);
    })
    .catch(error => console.error("Error fetching weather data:", error));
}

searchForm.addEventListener('submit', handleSearch);
