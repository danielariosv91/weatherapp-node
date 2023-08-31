
# WeatherMap App using Node.js, Mapbox, and OpenWeather

The WeatherMap app is a Node.js application that allows users to search for a city and retrieve its current weather information. The app combines data from the Mapbox API to obtain the latitude and longitude of the searched city and then uses the OpenWeather API to fetch the current climate conditions for that location.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: The WeatherMap app is built using Node.js, so you'll need to have it installed on your system. You can download it from the official Node.js website: https://nodejs.org/

## Installation

1. Clone or download the WeatherMap repository from GitHub:

```bash
git clone git@github.com:danielariosv91/weatherapp-node.git
```

2. Navigate to the project directory:

```bash
cd weatherapp-node
```

3. Install the required npm packages:

```bash
npm install
```

## Usage

1. Sign up for API keys:

   - Mapbox: Visit the Mapbox website (https://www.mapbox.com/) and create an account to obtain your API key.
   - OpenWeather: Sign up on the OpenWeather website (https://openweathermap.org/) to get your API key.

2. Configure your API keys:

   Rename the `.env.example` file to `.env` and replace the placeholders with your actual API keys:

   ```env
   MAPBOX_API_KEY=your_mapbox_api_key
   OPENWEATHER_API_KEY=your_openweather_api_key
   ```

3. Run the app:

```bash
npm start
```


## Dependencies

- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [dotenv](https://github.com/motdotla/dotenv): A module to load environment variables from a `.env` file.