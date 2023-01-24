import { useState } from 'react';
import CityComponent from './component/cityComponent';
import WeatherComponent from './component/weatherComponent';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState()
  console.log("danish",weatherData);
  return ( 
    <div className="container">
        <p className="heading">React Weather App</p>
        <CityComponent setWeatherData={setWeatherData}/>
        {weatherData && <WeatherComponent props={weatherData} />}
    </div>
  );

}

export default App;
