import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Forecast from './Forecast'
import './Weather.css'
import { BASE_URL, API_ID } from '../Services/fetchWeather'
import CloudIcon from '@mui/icons-material/Cloud';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { blue, green, grey, orange, red } from '@mui/material/colors'
import LanguageIcon from '@mui/icons-material/Language';
import getForecast from '../Services/fetchForecastWeather'
import TemperatureChart from './TemperatureChart';


function Weather() {
  const [ cityName, setCityName] = useState("delhi")
  const[weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [forecastData, setForecastData] = useState([])



  function getCityName(nameQuery){
    setCityName(nameQuery)
  }

  useEffect( () => {
    async function getData(){
      try {const res = await fetch(BASE_URL + cityName + API_ID)
      if(!res.ok){
        throw new Error('Network response was not ok ' + res.statusText);
      }
      else{
      const jsonData = await res.json()
      setWeatherData(jsonData)
      const resForecast = await getForecast(cityName)
      setForecastData(resForecast);


      
    }}
    catch(err){
      alert("Problem with fetch request, make sure you enter appropriate input" )
      setWeatherData({
        main: { temp: '~', feels_like: '~', humidity: '~' },
        wind: { speed: '~' },
      });
    }finally {
      setLoading(false);
    }

      
    }
    getData()
}, [cityName]);



  // const backgroundColorClasses = weatherData?.weather[0]?.main?.toLowerCase()

  // ${backgroundColorClasses}
  return (
     
     
     <div className={`container  `} >

        <div className="top">
        <div className="top-left">
        <div className="logos">
        <a href="https://openweathermap.org/" target="_blank" >
          <img src="https://seeklogo.com/images/O/openweather-logo-3CE20F48B5-seeklogo.com.png" alt="" className='logos-image' />
        </a>
          <img src="https://images.squarespace-cdn.com/content/v1/5ef0133cca56f8787be3b195/1594139463556-WP6ZEFHLC6ZRO6ZN8H5G/vertical-divider.png" alt="" className='logos-image' />
        <a href="https://www.weatherapi.com/" target="_blank" >
          <img src="https://my-first-website-328020.firebaseapp.com/assets/img/homepage/weatherAPI.png" alt="" className='logos-image' />
        </a>
        </div>
        <div className="search">
          <SearchBar onSubmit={getCityName}/> 
        </div>
        
        
        {loading ? (
          <div>
            Fetching {cityName} weather details....
          </div>
        ) :
        (
        <div className='first-layer'> 
            <div className='trans-weather'>
            <div className="area-weather">
              <div className="area">
              <h2><LocationCityIcon  sx={{color:orange[300], fontSize:27}} /></h2>
              <h2>{cityName.charAt(0).toUpperCase() + cityName.slice(1)}</h2>
              <h2>|</h2>
              <h2><LanguageIcon sx={{color:green[800], fontSize:27}}/></h2>
              <h2>{weatherData?.sys?.country}</h2>
              </div>
              <div className="weather">
              {weatherData?.weather && weatherData.weather[0] && (
                            <>
                              <img
                                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                alt=""
                              />
                              <h2>{weatherData.weather[0].main}</h2>
                            </>
                          )}
              </div>
              
            </div>
            <div className="data">
                <div className="left-side">
                  <h3><CloudIcon className='icons' sx={{ color: 'skyblue' }} alt="weather" />  {weatherData?.main?.temp} °C</h3>
                  <h3><ThermostatIcon className='icons' sx={{ color: orange[500] }}/>  {weatherData?.main?.feels_like} °C</h3>
                </div>
                <div className="right-side">
                  <h3><WaterDropIcon className='icons' sx={{ color: blue[500] }}/>  {weatherData?.main?.humidity} g/m^3</h3>
                  <h3><AirIcon className='icons' sx={{ color: blue[200] }}/> {weatherData?.wind?.speed} m/s</h3>
                </div>
                
              </div>
              </div>
              
          </div>
          
          
        ) }
        </div>
      <div className="top-right">
        <TemperatureChart forecastData={forecastData} cityName={cityName}   />
      </div>

        </div>
      
        <div className="bottom">
          <div className="forecast">
            <Forecast cityName={cityName}/>
          </div> 
        </div>  

    </div>
 
    
  )
}

export default Weather