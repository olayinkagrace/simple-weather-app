import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import WeatherComponent from "../components/weatherComponents";

jest.mock("axios");

describe("WeatherComponent", () => {
  it("renders the WeatherComponent and displays initial elements", () => {
    render(<WeatherComponent />);

    expect(
      screen.getByPlaceholderText("Enter location")
    ).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Weather Forecast")).toBeInTheDocument();
  });

  it("displays weather data on successful API call", async () => {
    const mockData = {
      data: {
        main: { temp: 20 },
        weather: [{ description: "clear sky", icon: "01d" }],
        name: "Lagos",
      },
    };

    axios.get.mockResolvedValue(mockData);

    render(<WeatherComponent />);

    fireEvent.change(screen.getByPlaceholderText("Enter location"), {
      target: { value: "Lagos" },
    });
    fireEvent.click(screen.getByText("Search"));

    const weatherDetails = await screen.findByText("clear sky");
    expect(weatherDetails).toBeInTheDocument();
  });

  it("displays error message on failed API call", async () => {
    axios.get.mockRejectedValueOnce(new Error("Location not found"));

    render(<WeatherComponent />);

    fireEvent.change(screen.getByPlaceholderText("Enter location"), {
      target: { value: "Unknown" },
    });
    fireEvent.click(screen.getByText("Search"));

    const errorMessage = await screen.findByText("Please enter a correct location.");
    expect(errorMessage).toBeInTheDocument();
  });
});
