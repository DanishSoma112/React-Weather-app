import React from 'react';
import WeatherInfoComponent from '../subcomponent/weatherInfoComponent';
import Images from '../imagesDir/images.json'


const mapImage = {
  'Clouds': "/icons/04n.png",
  'Humidity': "/icons/04n.png",
  'Wind': "/icons/50d.png",
  'Pressure': "/icons/13n.png",
  "Clear":"/icons/01d.png"
}


const WeatherComponent = ({props}) => {
  const isDay = props?.weather[0].icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()}  : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  return (
    <>
      <div className="header">
        <p className="heading"><span>{parseInt(props.main.temp) - 273 } &deg;C</span><span> | {props.weather[0].main}</span></p>
        <img src={Images[props.weather[0].main]} alt="test"/>
      </div>
      <p className="city">{props.name}</p>
      <p className="weather-info">Weather Info</p>
      <div className="weather-info-container">
        <WeatherInfoComponent name={isDay ? "Sunset" : "Sunrise"} value={`${getTime(props?.sys[isDay ? "sunset" : "sunrise"])}`}/>
        <WeatherInfoComponent name="Humidity" value={props?.main?.humidity + " g.m-3"} />
        <WeatherInfoComponent name="Wind" value={props?.wind?.speed + " km/hr"} />
        <WeatherInfoComponent name="Pressure" value={props?.main?.pressure + " Bar"} />

      </div>
    </>

  );
}

export default WeatherComponent;
