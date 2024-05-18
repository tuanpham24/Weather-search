
// DOM
const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const wind = document.querySelector('.wind');
const searchInput = document.querySelector('#search-input');
const formSearch = document.querySelector('#form-search');
const weatherIcon = document.querySelector('.weather-icon');
const apiKey = "4269652c5e1b6a66a34f9d3d16ecc098"; 

// Hàm xử lý tìm kiếm
function handleSearch(event) {
  event.preventDefault();

  // B1: Lấy giá trị nhập vào từ ô input
  let searchString = searchInput.value;

  console.log(searchString);

  // Gửi yêu cầu lấy dữ liệu đến OpenWeatherMap
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=${apiKey}&lang=vi&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      cityName.textContent = data.name;
      description.textContent = data.weather[0].description;
      temperature.textContent = data.main.temp + "oC";
      weatherIcon.src =  `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      wind.textContent = "Tốc dộ gió: " + data.wind.speed + "km/h";

      // ...

    })
    .catch(error => console.error("Lỗi fetch data:", error));

}

formSearch.addEventListener('submit', function(event) {
  handleSearch(event)
})
