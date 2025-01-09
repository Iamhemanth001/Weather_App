/* eslint-disable react/prop-types */
/* eslint-disable no-useless-catch */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }

      const data = await response.json();

      const result = {
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
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    setError(""); // Reset error when user starts typing
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!city.trim()) {
        throw new Error("City name cannot be empty.");
      }

      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); // Clear the input field after a successful search
    } catch (err) {
      setError(err.message); // Set the error message for display
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          error={Boolean(error)}
          helperText={error}
          color="#121212"
          sx={{
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    border: 'none', // Removes the border
                },
            },
        }}
        /> &nbsp;&nbsp;
        <Button variant="outlined" type="submit" color="success">
          Search
        </Button>
      </form>
    </div>
  );
}
