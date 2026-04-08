import './header.css'
import logoUrl from '../../assets/header/Logo.svg'
import moneyIconUrl from '../../assets/header/money.svg'
import languageIconUrl from '../../assets/header/language.svg'
import userIconUrl from '../../assets/header/user.svg'
import { navRoutes, type RoutePath } from '../../router/routes'

interface HeaderProps {
  currentPath: RoutePath
}

export const Header = ({ currentPath }: HeaderProps) => {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#/" aria-label="Easy Stay home">
          <img className="site-header__logo" src={logoUrl} alt="Easy Stay logo" />
        </a>

        <nav className="site-header__nav" aria-label="Main navigation">
          {navRoutes.map((route) => {
            const className =
              route.path === currentPath
                ? 'site-header__nav-link site-header__nav-link--active'
                : 'site-header__nav-link'

            return (
              <a key={route.path} className={className} href={route.path}>
                {route.label}
              </a>
            )
          })}
        </nav>

        <div className="site-header__actions">
          <button
            className="site-header__icon-button site-header__icon-button--money"
            type="button"
            aria-label="Currency selector"
          >
            <img className="site-header__icon" src={moneyIconUrl} alt="" />
          </button>

          <button
            className="site-header__icon-button site-header__icon-button--language"
            type="button"
            aria-label="Language selector"
          >
            <img className="site-header__icon" src={languageIconUrl} alt="" />
          </button>

          <button
            className="site-header__icon-button site-header__icon-button--user"
            type="button"
            aria-label="Profile"
          >
            <img className="site-header__icon site-header__icon--user" src={userIconUrl} alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}
