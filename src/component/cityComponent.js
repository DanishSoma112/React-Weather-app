import React,{useState} from "react";
import axios from 'axios';

const CityComponent = ({setWeatherData}) => {
   const apiId = '1c8750d17477c8f091f7a28691e88c26'
   const [city,setCity] = useState("");
   const [error,setError] = useState(false);
   const [loading,setLoading] = useState(false);
   const [error404,setError404] = useState(false)

   const fetchWeather = async(e) => {
      e.preventDefault()
      try{
        setLoading(true)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}`)
        setWeatherData(response.data)
        setLoading(false)
        setCity("")
      }
      catch(error){
         if(error.response.data.cod === "404"){
            setLoading(false)
            setError404(true);
         }
         setError(true)
         setLoading(false)
      }
   }

   if(loading){
       return (
        <p>Loading...</p>
       )
   }

   if(error404){
      return (
        <p>City not found.</p>
      )
   }

   return (
    <>
      <div>
        <form onSubmit={fetchWeather}>
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <button type="submit" disabled={!Boolean(city)}>Submit</button>
        </form>
      </div>
      {error && <p>Please enter a valid city name</p>}
    </>
   )

}

export default CityComponent;