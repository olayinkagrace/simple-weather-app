"use client";

import React, { useState } from "react";
import Loader from "./Loader";
import WeatherForm from "./WeatherForm";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";

const WeatherComponent = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const getWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("Please enter a correct location.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="flex flex-col items-center justify-center h-screen py-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/cloudy1.jpg')" }}
    >
      <div className="bg-opacity-80 p-8 w-full max-w-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-8 text-center drop-shadow-md">
          Weather Forecast
        </h1>

        <WeatherForm
          location={location}
          setLocation={setLocation}
          getWeather={getWeather}
        />

        {loading && <Loader />}

        {error && (
          <p className="mt-6 text-lg text-red-600 text-center">{error}</p>
        )}

        {weatherData && !loading && (
          <WeatherDetails weatherData={weatherData} />
        )}
      </div>
    </main>
  );
};

export default WeatherComponent;
