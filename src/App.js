import { useEffect, useState } from 'react';
import './App.scss';

const App = () => {

  const [location, setLocation] = useState('Edirne');
  const [weatherInfo, setWeatherInfo] = useState({})
  const [city, setCity] = useState('')

  const params = {
    key: 'b928a896daee4e71b26225453210603',
    location
  }

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${params.key}&q=${params.location}`)
      .then(response => response.json())
      .then(data => setWeatherInfo(data))
  }, [location])


  return (
    <div className="weather-wrapper">
      <input 
        onKeyDown={(event) => event.keyCode === 13 ? setLocation(city) : null } 
        onChange={(event) => setCity(event.target.value)}
        onBlur={() => setLocation(city)}
         />
      <div className="weather-card">
        {weatherInfo.current && (
          <>
            <img className="weather-icon" src={weatherInfo.current.condition.icon} alt={'asdsadas'} />
            <h1>{weatherInfo.current.temp_c}</h1>
            <p>{weatherInfo.location.name} - <span>{weatherInfo.current.condition.text}</span></p>
          </>
        )
        }
      </div>
    </div>
  );
}

export default App;
