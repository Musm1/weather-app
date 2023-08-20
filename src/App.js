import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopBar from './compoents/TopBar';
import Inputs from './compoents/Inputs';
import TimeLocation from './compoents/TimeLocation';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
    from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopBar/>
      <Inputs/>

      <TimeLocation/>
    </div>
  );
}

export default App;
