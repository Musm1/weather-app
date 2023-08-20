import React, { useState } from 'react'
import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons'
import { ToastContainer, toast } from 'react-toastify';

function Inputs({setQuery, setUnits, units}) {
  const [city, setCity]= useState("");

const handleClick=()=>{
  if(city!== ''){
    setQuery({q:city})
  }
}

const handleLocationClick= ()=>{
  if (navigator.geolocation){
     toast.info('Fetching users location')
    navigator.geolocation.getCurrentPosition((position)=>{
      toast.success("Location Fetched");
      let lat= position.coords.latitude
      let lon= position.coords.longitude

      setQuery({
        lat,
        lon
      })
    })
  }
}
const handleUnitChange=(e)=>{
  const selectedUnit= e.currentTarget.name
  if(units !== selectedUnit) setUnits(selectedUnit);
}
  return (
    <div className='flex flex-row justify-center my-6'>

      <div className='flex flex-row items-center justify-center w-3/4 space-x-4'>
        <input 
        type='text'
        value={city}
        onChange={(e)=>setCity(e.currentTarget.value)} 
        placeholder='Search...'
        className='p-2 text-xl font-light capitalize focus:outline-none placeholder:lowercase dark:bg-black dark:text-white'/>
        <UilSearch
          onClick={handleClick}
          size={25} 
          className="text-white transition ease-out cursor-pointer hover:scale-125"/>
        <UilLocationPoint 
          onClick= {handleLocationClick}
          size={25} 
          className="text-white transition ease-out cursor-pointer hover:scale-125"/>
      </div>

      <div className='flex flex-row items-center justify-center w-1/4'>
        <button 
          name='metric' 
          onClick={handleUnitChange}
          className='text-xl font-light text-white'>
          °C
        </button>
        <p className='mx-1 text-xl text-white'>|</p>
        <button 
          name='imperial' 
          onClick={handleUnitChange}
          className='text-xl font-light text-white'>
          °F
        </button>
      </div>

    </div>
  )
}

export default Inputs