import './Header.css';

const Header = ({ userName = 'Guest', onSearchClick }) => {
  return (
    <header className="app-header">
      <div>
        <p className="app-header-eyebrow">Welcome</p>
        <h2 className="app-header-name">{userName}</h2>
      </div>

      <div className="app-header-actions">
        <button type="button" className="header-icon-btn" aria-label="Add location">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <button
          type="button"
          className="header-icon-btn"
          aria-label="Search"
          onClick={onSearchClick}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <button type="button" className="header-icon-btn" aria-label="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M13.7 21a2 2 0 01-3.4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <div className="header-avatar" aria-hidden="true">
          {userName.charAt(0)}
        </div>
      </div>
    </header>
  );
};

export default Header;
