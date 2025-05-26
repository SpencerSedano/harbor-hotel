
import './App.css'

import HotelLogo from "./assets/logo.svg";

function App() {
  return (
    <div className=''>
      <nav className='flex justify-around items-center h-18 bg-transparent z-20 '>
        <div className='flex'>
          <li className='list-none'>Menu</li>
          <li className='list-none'>Languages</li>
        </div>
        <div>
          <img className='w-64 h-64' src={HotelLogo} alt="Logo" />
        </div>
        <div>Reserve</div>
      </nav>
      <img className='z-10 h-dvh w-dvw' src="room-1.webp" alt="Room"/>
    </div>
  )
}

export default App;
