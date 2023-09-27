import React, { useEffect, useState } from 'react'
import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons'
import { ToastContainer, toast } from 'react-toastify';

function Inputs({setQuery, setUnits, units}) {
  const [city, setCity]= useState("");

  const [term, setTerm]= useState('');
  const [options, setOptions]= useState([]);
  const [addOpt, setAddOpt]= useState(null);

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

//new search options test

const getSearchOptions=(value)=>{
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
    process.env.REACT_APP_API_KEY
  }`).then((res)=> res.json()
  ).then((data)=> setOptions(data))
  .catch(err=>{
    toast.error(`Couldnt fetch result, Try new name`)
  })
}

const onInputChange= (e)=>{
  const value=e.currentTarget.value.trim();
  setTerm(value);
  if(value === '') return;
  getSearchOptions(value)
}

const onOptionClick=(option)=>{
  setQuery({q:option.name})
  setAddOpt(option.name)
}

useEffect(()=>{
  if(addOpt){
    setTerm(addOpt.name)
    setOptions([]);
    setCity('')
  }
},[addOpt])

  return (

    <div className='flex flex-col justify-center my-6 md:flex-row'>

      <div className='flex flex-col items-center justify-center space-x-4 sm:w-2/4 md:w-3/4 md:flex-row'>
        <div className='relative'>
          <input 
            type='text'
            value={city}
            // onChange={(e)=>setCity(e.currentTarget.value)} 
            onChange={(e)=>(setCity(e.currentTarget.value) , onInputChange(e))}
            placeholder='Search...'
            className='p-2 text-xl font-light capitalize rounded-lg focus:outline-none placeholder:lowercase dark:bg-black dark:text-white'
          />
            <ul className='absolute bg-white top-13 rounded-b-md dark:bg-black'>
              {options.map((option,index)=> (
                <li key={index}>
                  <button
                  onClick={()=>onOptionClick(option)}
                  className='w-full px-3 py-2 text-sm text-left text-black cursor-pointer hover:bg-zinc-500 hover:text-white dark:text-white'>
                    {option.name}
                  </button>
                </li>
              ))}
            </ul>
        </div>
        <div className='flex flex-row mt-3 -mx-6 md:mt-0'>
        <UilSearch
          onClick={handleClick}
          size={25} 
          className="text-white transition ease-out cursor-pointer fill-black dark:fill-white hover:scale-125"/>
        <UilLocationPoint 
          onClick= {handleLocationClick}
          size={25} 
          className="mx-2 text-white transition ease-out cursor-pointer fill-black dark:fill-white hover:scale-125"/>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center mt-3 md:mt-0 md:w-1/4'>
        <button 
          name='metric' 
          onClick={handleUnitChange}
          className='mx-[-2px] md:mx-0 text-xl font-light text-black dark:text-white'>
          °C
        </button>
        <p className='mx-1 text-xl text-black dark:text-white'>|</p>
        <button 
          name='imperial' 
          onClick={handleUnitChange}
          className='text-xl font-light text-black dark:text-white'>
          °F
        </button>
      </div>

    </div>
  )
}

export default Inputs