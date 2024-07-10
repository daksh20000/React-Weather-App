import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Stack, TextField } from '@mui/material';
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';


function SearchBar(props) {
    const [cityName, setCityName] = useState("")

    function handleInput(e){
      setCityName(e.target.value)
    }

    function handleSubmit(e){
      e.preventDefault()
      if(cityName.trim()===""){

      }
      else{
      props.onSubmit(cityName)}

    }

  return (
    <div className='search-bar'>
       
        <input value={cityName} onChange={handleInput} />
        <button onClick={handleSubmit} ><SearchIcon/></button>
        

        
    </div>
  )
}

export default SearchBar