import React from 'react'
import './ForecastShimmer.css'
import { icon } from './Forecast'
import DateRangeIcon from '@mui/icons-material/DateRange';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AirIcon from '@mui/icons-material/Air';
import { blue } from '@mui/material/colors';


function ForecastShimmer() {

    
  return (
    <div className='single-forecast'>
                  <div className="f-icon-min-max">
                    <img src={icon("11d")} alt="" />
                    <div className='min-max'>
                    <p>~°C</p>
                    <p>~°C</p>

                  </div>
                  </div>
                  
                  <div className="second-row">
                  <div className='visibility'>
                    <VisibilityIcon fontSize='small' sx={{color:"greenyellow"}}/>
                    ~ m
                  </div>
                  <div className="wind-speed">
                    <AirIcon fontSize="large" sx={{color:blue[200]}} />
                    <p>~ m/s</p>
                  </div>
                  </div>
                  <div className="third-row">
                    <DateRangeIcon/>
                    <div className="date">MM, DD</div>
                  </div>
                  

        </div>
  )
}

export default ForecastShimmer