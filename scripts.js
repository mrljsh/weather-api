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
const para = document.querySelector('p');

searchButton.addEventListener('click', () => {
    if(cityInput.value === ""){
        para.textContent = "Please enter city name";
        return;
    }
    weather(cityInput.value);
});

const weather = async ( location ) => {
    const weatherData = await getWeather(location);
    const weatherTemperature = await Math.floor(parseFloat(weatherData.main.temp));
    const weatherLocation = await weatherData.name;
    para.textContent = `The temperature in ${await weatherLocation}, ${await weatherData.sys.country} is ${await weatherTemperature}°C`
}

