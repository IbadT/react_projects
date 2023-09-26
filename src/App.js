import React, { useState } from 'react';
import './App.css';


const api = {
  key: '2a3f3e5363c9d3eec4236988ba890a3e',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [state, setState] = useState('');
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if(e.key === 'Enter'){
      fetch(`${api.base}weather?q=${state}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setState('');
          // console.log(weather)
          console.log(result);
        })
    }
  }

  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = ['Tuesday ' ,'Wednesday ', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
    }

  return (
    <div className="app">
      <main>

        <div className='search-box'>
          <input 
            onChange={e => setState(e.target.value)} 
            onKeyPress={search} value={state} 
            type='text' 
            className='search-bar' 
            placeholder='Search...'
          />
        </div>

        {(typeof weather.main != 'undefined') ? (
          <div>
            
            <div className='location-box'>

              <div className='location'>{weather.name}, {weather.sys.country}</div>
                <div className='date'>{dateBuilder(new Date())}</div>
              </div>

              <div className='weather-box'>
                
                <div className="temp">
                  {Math.round(weather.main.temp)}
                </div>

                <div className="weather">{weather.weather[0].main}</div>
              
              </div>

          </div>
        ) : null }
        
      </main>
    </div>
  );
}

export default App;
