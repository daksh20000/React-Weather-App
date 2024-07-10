import React, { useEffect, useState } from 'react'
import getForecast from '../Services/fetchForecastWeather'
import './Forecast.css'
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { blue, grey } from '@mui/material/colors';
import getDate from '../Services/formDate';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ForecastShimmer from './ForecastShimmer';
import { FaxRounded } from '@mui/icons-material';

export const icon= (iconNum="10d")=> (`https://openweathermap.org/img/wn/${iconNum}@2x.png`)

function Forecast(props) {



  const {cityName} =props
  const [forecastData, setForecastData] =useState([])
  const [loading, setLoading] = useState(true)

  


   
  useEffect(()=>{
   async function fetchForecast(){
    const fData = await getForecast(cityName);
    setForecastData(fData)
    setLoading(false)
   } 
   fetchForecast()
  },[cityName])
 
  
  return (
    <div className='forecast-container'>
      {
        loading
        ?<div className="loading-data">
          Fetching forecast Data for you
        </div>
        : <div className="forecast">
            <div className=''>
              <h2 className='heading'>Forecast (5 Days) </h2>
            </div>
            <div className="filtered-data">
              {
              (!forecastData || forecastData.length===0)
              ?<><div className='shimmer-container'>
                <ForecastShimmer/>
                <ForecastShimmer/>
                <ForecastShimmer/>
                <ForecastShimmer/>
                <ForecastShimmer/>          
                </div>
                <div><h4>jghd</h4></div></>
              :forecastData?.map((item, id)=>{
                return( 
                <div className='single-forecast' key={id}>
                  <div className="f-icon-min-max">
                    <img src={icon(item?.weather[0].icon)} alt="" />
                    <div className='min-max'>
                    <p>{item?.main?.temp_min}°C</p>
                    <p>{item?.main?.temp_max}°C</p>

                  </div>
                  </div>
                  
                  <div className="second-row">
                  <div className='visibility'>
                    <VisibilityIcon fontSize='small' sx={{color:"greenyellow"}}/>
                    {item?.visibility} m
                  </div>
                  <div className="wind-speed">
                    <AirIcon fontSize="large" sx={{color:blue[200]}} />
                    <p>{item?.wind?.speed} m/s</p>
                  </div>
                  </div>
                  <div className="third-row">
                    <DateRangeIcon/>
                    {getDate(item?.dt_txt)}
                  </div>
                  

                </div>)
              })
              }
              
            </div>
        </div>
      }
    </div>
  )
}

export default Forecast
