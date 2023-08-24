import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { UilLightbulb } from '@iconscout/react-unicons'
import Inputs from './compoents/Inputs';
import TimeLocation from './compoents/TimeLocation';
import TempAndDetail from './compoents/TempAndDetail';
import Forecast from './compoents/Forecast';
import getFormattedWeatherData from './logic/weatherLogic'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery]= useState({q: 'peshawar'});
  const [units, setUnits]= useState('metric');
  const [weather, setWeather]= useState(null);
  const [newerr, setNewError]= useState(false);
  
  //darkmode
  const [theme, setTheme]= useState("light");

  useEffect(()=>{
    if(theme=== "dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme])

  useEffect(()=>{
    const message= query.q ? query.q : 'current location'
    toast.info('Fetching weather for ' + message)
  const fetchWeather= async ()=>{
    await getFormattedWeatherData( {...query, units})
    .then((data)=>{
      toast.success(`Successfully fetched the weather for ${data.name}, ${data.country}`)
      setWeather(data)
      setNewError(false)
    })
    .catch(err=>{
      setNewError(true)
    })
  }
  fetchWeather();
  },[query, units])

const handleTheme= ()=>{
  setTheme(theme=== "dark"? "light": "dark")
}

  return (
    <div className='dark:bg-black'>
      <div className='max-w-screen-md md:w-[768px] py-5 pt-4 mx-auto shadow-xl px-28 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-400'>
          <div className='flex flex-col items-center justify-around my-6 md:flex-row'>
            <div className='text-lg font-medium text-center text-white'>
                Mishkat Weather App
            </div>
           <UilLightbulb size={32} onClick={handleTheme} className={`${theme=== "dark" ? 'fill-white' : 'fill-black'} transition ease-out cursor-pointer hover:scale-125 mt-4 md:mt-0 ` }/>
          </div>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
        {newerr && (
          <div className='flex items-center justify-center m-auto text-white'>
            <span className='items-center justify-center text-center'>Try a different name, this name doesnt exist</span>
          </div>
        )}

        {weather && (
          <div>
              <TimeLocation weather={weather}/>
              <TempAndDetail weather={weather}/>
              <Forecast title={"Hourly Forecast (Cant fetch hourly and daily Cause of new paying limitations.)"}/>
              <Forecast title={"Daily Forecast (Cant fetch hourly and daily Cause of new paying limitations.)"}/>
          </div>
        )}

      
      </div>
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
    </div>
  );
}

export default App;
