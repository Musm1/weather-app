import React from 'react'

function TopBar() {

    const cities=[
        {
            id:1,
            title:'london'
        },
        {
            id:2,
            title:'testing'
        },
        {
            id:3,
            title:'huawei'
        },
        {
            id:4,
            title:'compton'
        },
        {
            id:5,
            title:'paris'
        },

    ]

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map(city=>(
            <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopBar