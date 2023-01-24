import React from 'react';

const mapImage = {
  'Sunrise': "/icons/01d.png",
  'Humidity': "/icons/04n.png",
  'Wind': "/icons/50d.png",
  'Pressure': "/icons/13n.png",
  'Sunset':'/icons/01n.png'
}

const WeatherInfoComponent = (props) => {

  return (
    <>
    <div className="weather-info-container">
    <img src={mapImage[props.name]} />
    <div>
      <p>{props.value}</p>
      <p>{props.name}</p>
    </div>
    </div>
    </>
  )
}

export default WeatherInfoComponent