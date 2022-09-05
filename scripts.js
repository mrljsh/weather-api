const getWeather = async ( location ) => {
    const fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=528fbe6cf837a1513049c44f92451bf4`);
    const weatherJSON = await fetchWeather.json();
    return weatherJSON;
}

