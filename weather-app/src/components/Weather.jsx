import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWind, faDroplet, faTemperature0, faCloud, faTemperatureThreeQuarters} from '@fortawesome/free-solid-svg-icons'

function Weather ({ data }) {
    return (
        <div className="container">
            <h2>Today Overview  </h2>
            <div className="row1">
                {/* <div className="card">
                    <div className='title'>
                        <h1>Current Temperature</h1> 
                        <FontAwesomeIcon icon={faTemperature0} size="lg" style={{color: "#ff9500",}}s/>
                    </div>
                
                {data.main ? <h2> {data.main.temp}°C</h2> :null}
                </div> */}

                <div className="card">
                    <div className='title'  >
                        <h1>Humidity</h1>  
                        <FontAwesomeIcon icon={faDroplet} size="lg"  className='icon'/>
                    </div>
                
                {data.main ?  <h2>{data.main.humidity}%</h2> :  null
                }
                
                </div>
                <div className="card">
                    <div className='title'>
                        <h1>Wind Speed</h1>
                        <FontAwesomeIcon icon={faWind} size="lg" className='icon'/>
                    </div>
            
                
                {data.main ? <h2>{data.wind.speed} km/h</h2> : null
                }
                </div>
                <div className="card">
                    <div className='title'>
                        <h1>Pressure</h1>
                        <FontAwesomeIcon icon={faCloud} size="lg" className='icon'/>
                    </div>
                {data.main ? <h2>{data.main.pressure} hPa</h2> : null }
                </div>
                
                <div className="card">
                    <div className='title'>
                        <h1>Wind Temperature</h1>
                        <FontAwesomeIcon icon={faTemperatureThreeQuarters} size="lg" className='icon'/>
                    </div>
                {data.main ? <h2>{data.wind.deg}°C</h2> : null }
                </div>
            </div>
        </div>
    )
}

export default Weather