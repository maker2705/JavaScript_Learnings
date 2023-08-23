       //* Dynamic typing of the search box's placeholder text. 
        const inputElement = document.querySelector('.search input');
        const placeholderText = inputElement.getAttribute('placeholder');
        const searchButton = document.querySelector('.search button');

        let index = 0;
        const typingInterval = 100; // Adjust the typing speed here
        const typingTimeout = 1000; // Adjust the time before the typing starts here
        function typePlaceholder() {
          if (index <= placeholderText.length) {
            inputElement.setAttribute('placeholder', placeholderText.slice(0, index));
            index++;
            setTimeout(typePlaceholder, typingInterval);
          }
        }
        setTimeout(typePlaceholder, typingTimeout);

//* =========xx======xx========= FETCHING AND DISPLAYING THE API DATA =========xx=========xx=========

        const temperature = document.querySelector('.temperature') ;
        const city = document.querySelector('.city');
        const wind = document.querySelector('.wind');
        const humidity = document.querySelector('.humidity'); 

async function checkWeather(cityName){

    const apiKey = 'fb039655456c4355c172fb4719754a04';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
    const apiData = await fetch(`${apiURL}`).then(response => response.json());
    temperature.textContent = Math.round(apiData.main.temp)+'°C';
    city.textContent= `${apiData.name}`;
    humidity.textContent= `${apiData.main.humidity}`;
    wind.textContent= `${apiData.wind.speed}Km/h`;

    if (apiData.weather[0].main.toLowerCase()==='clouds') {
      document.querySelector('.main-weather').textContent = `${apiData.weather[0].main}`
      document.querySelector('.weather-icon').setAttribute('src','clouds.png');

    }
    else if (apiData.weather[0].main.toLowerCase()==='rain'){
      document.querySelector('.main-weather').textContent = `${apiData.weather[0].main}`
      document.querySelector('.weather-icon').setAttribute('src','rain.png');
    }
    else if (apiData.weather[0].main.toLowerCase()==='snow') {
      document.querySelector('.main-weather').textContent = `${apiData.weather[0].main}`
      document.querySelector('.weather-icon').setAttribute('src','snow.png');
    }
    else if (apiData.weather[0].main.toLowerCase()==='clear') {
      document.querySelector('.main-weather').textContent = `${apiData.weather[0].main}`
      document.querySelector('.weather-icon').setAttribute('src','clear.png');
    }
    else if (apiData.weather[0].main.toLowerCase()==='haze') {
      document.querySelector('.main-weather').textContent = `${apiData.weather[0].main}`
      document.querySelector('.weather-icon').setAttribute('src','haze.png');
    }

}
searchButton.addEventListener('click',() => {

    checkWeather(inputElement.value);

}, false)






