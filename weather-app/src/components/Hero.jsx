import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faLocationDot } from '@fortawesome/free-solid-svg-icons'
 
function Hero({ data, icon }) {

    function formatTime(timestamp) {
        const date = new Date(timestamp * 1000); // Convert the timestamp to milliseconds
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        return formattedTime;
    }
    function hoursAgo(timestamp) {
        const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in seconds
        const timeDifference = currentTimestamp - timestamp;
        const hoursAgo = Math.floor(timeDifference / 3600);
        return hoursAgo;
    }

    return (
        <div className="hero">
            <div className="header">
           
                <div className="city">
                    <FontAwesomeIcon icon={faLocationDot} size="sm" className='icon' />
                    {data.name ? <h2>{data.name}</h2>: <h2>Manila</h2>}
                </div>
                
                <div className="temp-des">
                    <img src={icon} alt="" />
                    <div className="temp">
                        {data.main ? <h2> {data.main.temp}°C</h2> :<h2>30°C</h2>}
                        {data.weather ? <p>{data.weather[0].description}</p> : null}   
                    </div>
                   
                </div>
                
            </div>
            <h4>Sunrise & Sunset</h4>
            <div className="hero-body">
                <div className="card">
                    <div className="time">
                        <FontAwesomeIcon icon={faSun} size="lg" className='icon'/>
                        <div className="text">
                            <h3>Sunrise</h3>
                            {data.sys ? <h2>{formatTime(data.sys.sunrise)}</h2> : null}
                        </div>
                    </div>
                    <div className="hours-ago">
                    {data.sys ? <h5>{hoursAgo(data.sys.sunrise) < 0  ? hoursAgo(data.sys.sunrise) * -1 + 12: hoursAgo(data.sys.sunrise) } hours ago</h5> : null}
                    </div>
                </div>
                <div className="card">
                    <div className="time">
                        <FontAwesomeIcon icon={faSun} size="lg" className='icon'/>
                        <div className="text">
                            <h3>Sunset</h3>
                            {data.sys ? <h2>{formatTime(data.sys.sunset)} </h2> : null}
                        </div>
                    </div>
                    <div className="hours-ago">
                        {data.sys ? <h5>{hoursAgo(data.sys.sunset) < 0  ? hoursAgo(data.sys.sunset) * -1 : hoursAgo(data.sys.sunset) } hours to go</h5> : null}
                    </div>
                </div>
            </div>
         
        </div>
    );
}

export default Hero;