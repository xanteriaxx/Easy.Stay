import './header.css'

const navItems = [
  { label: 'მთავარი გვერდი', href: '#/' },
  { label: 'დაჯავშნა', href: '#/reservation' },
  { label: 'ჩვენი შესახებ', href: '#/about' },
  { label: 'დაგვიკავშირდით', href: '#/contact' },
] as const

export const createHeader = (): HTMLElement => {
  const header = document.createElement('header')
  header.className = 'site-header'

  const navLinks = navItems
    .map((item) => `<a class="site-header__nav-link" href="${item.href}">${item.label}</a>`)
    .join('')

  header.innerHTML = `
    <div class="site-header__inner">
      <a class="site-header__brand" href="#/" aria-label="Easy Stay home">
        <img class="site-header__logo" src="/header/Logo.svg" alt="Easy Stay logo">
      </a>
      <nav class="site-header__nav" aria-label="Main navigation">
        ${navLinks}
      </nav>
      <div class="site-header__actions">
        <button class="site-header__icon-button site-header__icon-button--money" type="button" aria-label="Currency selector">
          <img class="site-header__icon" src="/header/money.svg" alt="">
        </button>
        <button class="site-header__icon-button site-header__icon-button--language" type="button" aria-label="Language selector">
          <img class="site-header__icon" src="/header/language.svg" alt="">
        </button>
        <button class="site-header__icon-button site-header__icon-button--user" type="button" aria-label="Profile">
          <img class="site-header__icon site-header__icon--user" src="/header/user.svg" alt="">
        </button>
      </div>
    </div>
  `

  return header
}
