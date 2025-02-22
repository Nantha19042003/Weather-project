

import './App.css'
import searchIcon from "./assets/search.gif";
import clearIcon from "./assets/sunny.png";
import cloudIcon from "./assets/sunny.png";
import drizzleIcon from "./assets/rain sun.png";

import rainIcon from "./assets/rain sun.png";
import windIcon from "./assets/rain sun.png";
import snowIcon from "./assets/snow.png";
import humidityIcon from "./assets/sun.png";

  const WeatherDetails = ({icon})=>{

    return(
      <>
      <div className='image'>
  
        <img src={icon} alt="" />
      </div>
      </>




    );

  }



function App() {
  

  return (
    <>

      <div className='container'>
        <div className='input-container'>

           <input type="text" className='city'placeholder='Search City'/>
           <div className='search-icon'>
               <img src={searchIcon}alt="Search" />

           </div>
           <WeatherDetails icon={} />
        </div>










      </div>



   









    </>
  )
}

export default App
