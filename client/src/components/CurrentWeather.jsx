import './CurrentWeather.css';

const CurrentWeather = ({ data, location }) => {
  const { temp_c, wind_kph, humidity, condition } = data;

  return (
    <div className="current-weather card">
      <div className="current-weather-location">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21s-7-6.1-7-11.2C5 5.9 8.1 3 12 3s7 2.9 7 6.8C19 14.9 12 21 12 21z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="9.8" r="2.3" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        <span>{location.name}</span>
      </div>

      <div className="current-weather-temp-row">
        <span className="current-weather-temp">{Math.round(temp_c)}°C</span>
        <img src={condition.icon} alt={condition.text} className="current-weather-icon" />
      </div>

      <div className="current-weather-details">
        <span className="detail-chip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 8h11a3 3 0 100-6M3 16h15a3 3 0 110 6M3 12h8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          {Math.round(wind_kph)} km/h
        </span>
        <span className="detail-chip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
          {humidity}%
        </span>
      </div>
    </div>
  );
};

export default CurrentWeather;
