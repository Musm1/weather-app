import React from 'react'
import { formatToLocalTime } from '../logic/weatherLogic'

function TimeLocation({weather : {dt, name, country}}) {
  return (
    <div data-testid='time-1'>
        <div className='flex items-center justify-center my-6'>
            <p className='text-xl font-light text-center text-black dark:text-white '>
                {formatToLocalTime(dt)}
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-3xl font-medium text-center text-black dark:text-white'>
                {`${name}, ${country}`}
            </p>
        </div>
    </div>
  )
}

export default TimeLocation