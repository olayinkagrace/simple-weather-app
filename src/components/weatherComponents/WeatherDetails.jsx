"use client";
import React from 'react';
const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="mt-8 text-center animate-fadeIn text-white">
      <h2 className="text-2xl sm:text-3xl font-bold">{weatherData.name}</h2>
      <p className="text-5xl sm:text-6xl my-7">{weatherData.main.temp}°C</p>
      <p className="text-lg sm:text-xl">{weatherData.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto mt-4 w-24 h-24 sm:w-32 sm:h-32"
      />
    </div>
  );
};

export default WeatherDetails;
