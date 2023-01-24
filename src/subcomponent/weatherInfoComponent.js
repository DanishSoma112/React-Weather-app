import React from 'react';
import Images from '../imagesDir/images.json'

const WeatherInfoComponent = (props) => {

  return (
    <>
    <div className="weather-info-container">
    <img src={Images[props.name]} alt={props.name}/>
    <div>
      <p>{props.value}</p>
      <p>{props.name}</p>
    </div>
    </div>
    </>
  )
}

export default WeatherInfoComponent