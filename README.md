# Weather App

This project is a simple weather app built with React that allows users to fetch and display current weather information for a specified location.

## Features

- **Search Weather**: Users can enter a location (city or zip code) to get the current weather.
- **API Integration**: Weather data is fetched from the OpenWeatherMap API.
- **Loading State**: A loading indicator is shown while fetching data.
- **Error Handling**: Displays an error message if the API call fails.
- **Responsive Design**: The app is styled for a clean and user-friendly experience across devices.

## Installation

1. **Clone the repository**:

   git clone https://github.com/yourusername/weather-app.git
   cd weather-app

2. **Install dependencies:**:
   npm install

3. **Add your OpenWeatherMap API Key:**:

    Create a .env.local file in the project root.
    Add your API key as follows:

    NEXT_PUBLIC_API_KEY=your_api_key_here

4. **Run the app:**
   npm run dev

5. **Run Unit Tests**
   npm run test

## Folder Structure

    src/
    |-- components/
    | |-- WeatherComponent.js
    | |-- WeatherForm.js
    | |-- WeatherDetails.js
    | |-- Loader.js
    |-- **tests**/
    | |-- WeatherComponent.test.js

## Testing

This project uses Jest and React Testing Library for unit tests.

To run the tests, use npm run test.
Tests are located in the **tests** folder.
