import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faWind, faDroplet, faTemperature0, faCloud, faTemperatureThreeQuarters} from '@fortawesome/free-solid-svg-icons'
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import drizzle from './assets/drizzle.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'


function App() {
  const API_KEY = "a66fac648c963aea8e11a6aa875b5c18"

  const [data, setData] = useState({})
  const [location, setLocation] = useState('Cebu')
  const [icon, setIcon] = useState(clear)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  //Load Default Location   
  window.onload = async () => { 
    const response = await fetch(url);
    const result = await response.json();
    setData(result)
    setLocation("")
    putIcon()
  } 
   


  async function searchLocation(event) {
    if(event.key === 'Enter') {
      const response = await fetch(url);
      const result = await response.json();
      setData(result)
      console.log(result)
    } else{
      return
    }
    putIcon()
    setLocation("")
  }
  function putIcon() {
    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
      setIcon(clear)
    }else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
      setIcon(cloud)
    }
    else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
      setIcon(drizzle)
    }else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
      setIcon(drizzle)
    }else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
      setIcon(rain)
    }else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
      setIcon(rain)
    }else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
      setIcon(snow)
    }else{
      setIcon(clear)
    }
  }
  

  return (
    
    <>
      <nav>
        <h2>Weather<span>Today</span></h2>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
          value={location} 
          onChange={event => setLocation(event.target.value)} 
          onKeyDown={searchLocation}
          placeholder='Search location'
          type="text"/>
        </div>
      </nav>
      <main>
          <div className="hero">
              
              
              {data.name ? <h1>{data.name}</h1>: <h1>Manila</h1>}
              <div className="temp">
                  {data.main ? <h2> {data.main.temp}°C</h2> :<h2>30°C</h2>}
                  <img src={icon} alt="" />
              </div>
              
              {data.weather ? <p>{data.weather[0].description}</p> : null}
              
          </div>
          <div className="row1">
              <div className="card">
                <div className='title'>
                  <h1>Current Temperature</h1> 
                  <FontAwesomeIcon icon={faTemperature0} size="lg" style={{color: "#ff9500",}}s/>
                </div>
                
                {data.main ? <h2> {data.main.temp}°C</h2> :null}
              </div>

              <div className="card">
                <div className='title'  >
                  <h1>Humidity</h1>  
                  <FontAwesomeIcon icon={faDroplet} size="lg"  style={{color: "#ff9500",}}/>
                </div>
                
                {data.main ?  <h2>{data.main.humidity}%</h2> :  null
                }
                
              </div>
              <div className="card">
                <div className='title'>
                  <h1>Wind Speed</h1>
                  <FontAwesomeIcon icon={faWind} size="lg" style={{color: "#ff9500",}}/>
                </div>
        
                
              {data.main ? <h2>{data.wind.speed} km/h</h2> : null
                }
              </div>
              <div className="card">
                <div className='title'>
                  <h1>Pressure</h1>
                  <FontAwesomeIcon icon={faCloud} size="lg" style={{color: "#ff9500",}}/>
                </div>
                {data.main ? <h2>{data.main.pressure} hPa</h2> : null }
              </div>
              
              <div className="card">
                <div className='title'>
                  <h1>Wind Temperature</h1>
                  <FontAwesomeIcon icon={faTemperatureThreeQuarters} size="lg" style={{color: "#ff9500",}}/>
                </div>
                {data.main ? <h2>{data.wind.deg}°C</h2> : null }
              </div>
          </div>
          <div className="row2">
            
          </div>
      </main>
    </>
  )
}

export default App
