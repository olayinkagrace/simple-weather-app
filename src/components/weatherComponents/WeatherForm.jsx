"use client";
import React from "react";
import {toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherForm = ({ location, setLocation, getWeather }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() === "") {
      toast.error("Please enter a valid location");
      return;
    }
    getWeather(e);
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center"
      >
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 w-full sm:w-3/4 border border-gray-300 rounded-md mb-4 sm:mb-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out transform focus:scale-105"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 sm:ml-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default WeatherForm;
