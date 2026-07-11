import { format, parseISO } from 'date-fns';
import './Hero.css';

const buildDescription = (current, today) => {
  const wind = Math.round(current.wind_kph);
  const rainChance = today?.day?.daily_chance_of_rain ?? 0;
  const high = Math.round(current.maxtemp_c);

  return `${current.condition.text}. Wind speed around ${wind} km/h. Chance of rain sits near ${rainChance}%, with a high near ${high}°.`;
};

const Hero = ({ current, daily }) => {
  const today = daily?.[0];

  return (
    <section className="hero">
      <div className="hero-scrim" />

      <div className="hero-top">
        <span className="hero-eyebrow">Weather Forecast</span>
        <h1 className="hero-headline">{current.condition.text}</h1>
        <p className="hero-description">{buildDescription(current, today)}</p>
      </div>

      <div className="hero-strip">
        {daily.map((day, index) => {
          const isToday = index === 0;
          return (
            <div key={day.date} className={`hero-day ${isToday ? 'is-active' : ''}`}>
              <div className="hero-day-top">
                <span className="hero-day-temp">{Math.round(day.day.maxtemp_c)}°</span>
                <img src={day.day.condition.icon} alt={day.day.condition.text} className="hero-day-icon" />
              </div>
              <span className="hero-day-name">{format(parseISO(day.date), 'EEEE')}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
