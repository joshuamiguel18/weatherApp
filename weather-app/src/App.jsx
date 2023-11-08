import { useState } from 'react'
import './App.css'
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import drizzle from './assets/drizzle.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'
import TemperatureGraph from './components/weatherChart'
import Navigation from './Nav';
import Hero from './components/Hero'
import Weather from './components/Weather'

function App() {
  const API_KEY = "a66fac648c963aea8e11a6aa875b5c18"

  const [data, setData] = useState({})
  const [data2, setData2] = useState({})
  const [location, setLocation] = useState('Manila')

  

  const [icon, setIcon] = useState(clear)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
  const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`

  //Load Default Location   
  window.onload = async () => { 
    const response = await fetch(url);
    const result = await response.json();
    const response2 = await fetch(url2);
    const result2 = await response2.json();
    setData(result);
    setData2(result2);
    setLocation("")
    putIcon()
  } 
   

  async function searchLocation(event) {
    if (event.key === 'Enter') {
      if (location === "") return;
      const response = await fetch(url);
      const result = await response.json();
      const response2 = await fetch(url2);
      const result2 = await response2.json();
      setData(result);
      setData2(result2);

    } else {
      return;
    }
    putIcon()
    setLocation("");
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
      <Navigation
        location={location}
        onLocationChange={setLocation}
        onLocationSearch={searchLocation}
      />

      <main>
          <Hero
            data={data} 
            icon={icon}
          />

          <div className="body">

            
            <Weather data={data} 
            />
            {data ? 
            <div className="row2">
              <h3 className='forecast'>5 Days Forecast</h3>
              <TemperatureGraph temps={data2}/> 
            </div> 
            : <h1></h1>}
            
          </div>
      </main> 
     

    </>
  )
}

export default App
