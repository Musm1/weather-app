import React from 'react'

function Forecast({title}) {
  return (
    <div>
        <div className='flex items-center justify-start my-6 '>
            <p className='font-medium text-white uppercase'>
               {title}
            </p>
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light '>
                    04:30PM
                </p>
                <img 
                className='w-12 my-1'
                src='http://openweathermap.org/img/wn/01d@2x.png' alt=''/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light '>
                    04:30PM
                </p>
                <img 
                className='w-12 my-1'
                src='http://openweathermap.org/img/wn/01d@2x.png' alt=''/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light '>
                    04:30PM
                </p>
                <img 
                className='w-12 my-1'
                src='http://openweathermap.org/img/wn/01d@2x.png' alt=''/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light '>
                    04:30PM
                </p>
                <img 
                className='w-12 my-1'
                src='http://openweathermap.org/img/wn/01d@2x.png' alt=''/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light '>
                    04:30PM
                </p>
                <img 
                className='w-12 my-1'
                src='http://openweathermap.org/img/wn/01d@2x.png' alt=''/>
                <p className='font-medium'>22°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast