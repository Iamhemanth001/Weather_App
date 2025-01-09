/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 15.05,
        temp_min: 15.05,
        temp_max: 15.05,
        humidity: 45,
        feelsLike: 15,
        pressure: 1000,
        grnd_level: "N/A",
        sea_level: "N/A",
        description: "fog",
        sunrise: 24425,
        sunset: 68543,
    });

    // Fetch weather info for the default city on initial load
    useEffect(() => {
        const fetchDefaultWeather = async () => {
            try {
                const response = await fetch(
                    `${API_URL}?q=Delhi&appid=${API_KEY}&units=metric`
                );
                const data = await response.json();
                setWeatherInfo({
                    city: data.name,
                    temp: data.main.temp,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    humidity: data.main.humidity,
                    feelsLike: data.main.feels_like,
                    pressure: data.main.pressure,
                    grnd_level: data.main.grnd_level || "N/A",
                    sea_level: data.main.sea_level || "N/A",
                    description: data.weather[0].description,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                });
            } catch (error) {
                console.error("Error fetching default city weather:", error);
            }
        };

        fetchDefaultWeather();
    }, []);

    // Function to update the weather information
    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="WeatherApp">
            
            <h1 style={{ textAlign: "center" }}>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />

        </div>
    );
}
