import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navigation({ location, onLocationChange, onLocationSearch }) {
  return (
    <nav>
      <h2>Weather<span>Today</span></h2>
      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon'/>
        <input
          value={location}
          onChange={event => onLocationChange(event.target.value)}
          onKeyDown={onLocationSearch}
          placeholder='Search location'
          type="text"
        />
      </div>
    </nav>
  );
}

export default Navigation;
