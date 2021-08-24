import { useEffect, useState } from "react";
import { WeatherTile } from "./components/WeatherTile";

export const App = () => {

  const locationName = 'Poole';
  const units = 'metric';
  const apiKey = 'a3674d4b59a77755d8567fbbe4a1a2f7';

  const [weatherInfo, setweatherInfo] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=${units}&appid=${apiKey}`
      )
      .then(res => res.json())
      .then(res => setweatherInfo({
        location: res.name,
        weatherType: 'test',
        minTemp: res.main.temp_min,
        maxTemp: res.main.temp_max
      }));
  }, [])

  return (
    <div className="App">
      Location: {weatherInfo.location}
      <WeatherTile 
        weatherType={weatherInfo.weatherType} 
        minTemp={weatherInfo.minTemp} 
        maxTemp={weatherInfo.maxTemp}/>
    </div>
  );
}