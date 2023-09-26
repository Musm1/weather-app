import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../logic/weatherLogic'

function TempAndDetail({weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like
}}) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-col items-center justify-between py-3 text-white md:flex-row'>
            <img 
            className='w-20'
            src={iconUrlFromCode(icon)} alt=''/>
            <p className='text-5xl text-black dark:text-white'>{temp.toFixed()}°</p>
            <div className='flex flex-col space-y-3 text-black dark:text-white'>
                <div className='flex items-center justify-center mt-2 font-light md:mt-2 '>
                    <UilTemperature size={18} className="mr-1"/>
                    Real Feal:
                    <span className='ml-1 font-medium'>{feels_like.toFixed()}°</span>
                </div>
                <div className='flex items-center justify-center font-light'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className='ml-1 font-medium'>{humidity.toFixed()} %</span>
                </div>
                <div className='flex items-center justify-center font-light'>
                    <UilTemperature size={18} className="mr-1"/>
                    Wind:
                    <span className='ml-1 font-medium'>{speed.toFixed()} km/h</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center py-3 space-x-2 text-sm text-black dark:text-white'>
            <UilSun/>
            <p className='font-light'>High: <span className='ml-1 font-medium'>{temp_max.toFixed()}°</span></p>
            <p className='font-light'>|</p>
            <UilSun/>
            <p className='font-light'>Low: <span className='ml-1 font-medium'>{temp_min.toFixed()}°</span></p>
        </div>
    </div>
  )
}

export default TempAndDetail