import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorDisplay from "./components/ErrorDisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (query) => {
    try {
      const API_KEY = "cbde8d54de6b7e2baa9a44514c958552"; // Replace with your OpenWeather API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setWeatherData(null);
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <ErrorDisplay message={error} />}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
