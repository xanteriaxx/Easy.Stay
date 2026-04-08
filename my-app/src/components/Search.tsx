import './Search.css'

const LocationIcon = () => (
  <svg className="search__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 21s-6-5.686-6-11a6 6 0 1 1 12 0c0 5.314-6 11-6 11Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="search__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
)

const SearchIcon = () => (
  <svg className="search__submit-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20l-4.2-4.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
  </svg>
)

export const Search = () => {
  return (
    <div className="search">
      <div className="search__section">
        <LocationIcon />
        <div className="search__text">
          <span className="search__label">სად</span>
          <span className="search__value">დანიშნულების ძიება</span>
        </div>
      </div>

      <div className="search__divider" />

      <div className="search__section">
        <CalendarIcon />
        <div className="search__text">
          <span className="search__label">როდის</span>
          <span className="search__value">თარიღის არჩევა</span>
        </div>
      </div>

      <button className="search__submit" type="button" aria-label="Search">
        <SearchIcon />
      </button>
    </div>
  )
}
