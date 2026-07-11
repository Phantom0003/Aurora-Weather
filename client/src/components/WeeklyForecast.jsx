import { format, parseISO } from 'date-fns';
import './WeeklyForecast.css';

const WeeklyForecast = ({ data, location }) => {
  return (
    <div className="upcoming-days">
      {data.map((day) => (
        <div className="upcoming-day-card" key={day.date}>
          <div className="upcoming-day-info">
            <span className="upcoming-day-country">{location?.country}</span>
            <span className="upcoming-day-name">{format(parseISO(day.date), 'EEEE')}</span>
            <span className="upcoming-day-condition">{day.day.condition.text}</span>
          </div>
          <div className="upcoming-day-temp">
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className="upcoming-day-icon"
            />
            {Math.round(day.day.maxtemp_c)}°
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
