document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "4a2c25e95b9dacaaf970671e7335341f";

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City Not Found!");
        }
        return await response.json();
    }

    function displayWeatherData(weatherData) {
        const { name, main, weather } = weatherData;
        cityNameDisplay.textContent = name;
        const celsius = Math.round(main.temp - 273.15);
        temperatureDisplay.textContent = `Temperature: ${celsius}°C`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description.toUpperCase()}`;
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

    function showError() {
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
});
