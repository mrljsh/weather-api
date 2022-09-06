const getWeather = async ( location ) => {
    try {
        const fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=528fbe6cf837a1513049c44f92451bf4&units=metric`);
        const weatherData = await fetchWeather.json();
        return weatherData;
    } catch (error) {
        console.log(error);
    }
    
}

const cityInput = document.querySelector('input');
const searchButton = document.querySelector('button');
const cityParagraph = document.querySelector('.city-name');
const temperatureParagraph = document.querySelector('.current-temperature');
const minMaxTempParagraph = document.querySelector('.min-max-temp')

searchButton.addEventListener('click', () => {
    if(cityInput.value === ""){
        para.textContent = "Please enter city name";
        return;
    }
    weather(cityInput.value);
});

const weather = async ( location ) => {
    const weatherData = await getWeather(location);
    const weatherTemperature = await roundTemp(weatherData.main.temp);
    const weatherLocation = await weatherData.name;



    cityParagraph.textContent = `${await weatherLocation}, ${await weatherData.sys.country}`;
    temperatureParagraph.textContent = `${weatherTemperature}°C`;
    minMaxTempParagraph.textContent = `Min: ${await roundTemp(weatherData.main.temp_min)}°C | Max: ${await roundTemp(weatherData.main.temp_max)}°C`
}

const roundTemp = (temperature) => {
    return Math.floor(parseFloat(temperature));
}