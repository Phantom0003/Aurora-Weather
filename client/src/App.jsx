import { useEffect, useState } from 'react';
import './App.css';
import { getWeatherData } from './api';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import CurrentWeather from './components/CurrentWeather';
import WeeklyForecast from './components/WeeklyForecast';
import SearchBar from './components/SearchBar';

function App() {
  const [city, setCity] = useState('Auckland');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const data = await getWeatherData(city);
        const { mintemp_c, maxtemp_c } = data.forecast.forecastday[0].day;
        setWeatherData({
          current: { ...data.current, mintemp_c, maxtemp_c },
          daily: data.forecast.forecastday,
          upcoming: data.forecast.forecastday.slice(1),
          location: data.location,
        });
        setError('');
      } catch (err) {
        setError('Error fetching weather data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="app">
      <Sidebar active="dashboard" />

      <div className="app-main">
        <Header
          userName={weatherData?.location?.name ?? 'Guest'}
          onSearchClick={() => setShowSearch((prev) => !prev)}
        />

        {showSearch && (
          <SearchBar
            onSearch={(value) => {
              setCity(value);
              setShowSearch(false);
            }}
          />
        )}

        {loading && <p className="app-status">Loading...</p>}
        {error && <p className="app-status app-status-error">{error}</p>}

        {weatherData && (
          <div className="app-content">
            <Hero current={weatherData.current} daily={weatherData.daily} />

            <aside className="app-rail">
              <CurrentWeather data={weatherData.current} location={weatherData.location} />
              <WeeklyForecast data={weatherData.upcoming} location={weatherData.location} />
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
