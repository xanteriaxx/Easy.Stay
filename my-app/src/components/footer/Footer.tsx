import './footer.css'
import facebookIconUrl from '../../assets/footer/Facebook_black.svg'
import instagramIconUrl from '../../assets/footer/Instagram_black.svg'
import phoneIconUrl from '../../assets/footer/Phone_black.svg'
import telegramIconUrl from '../../assets/footer/Telegram_black.svg'
import youtubeIconUrl from '../../assets/footer/Youtube_black.svg'
import logoUrl from '../../assets/header/Logo.svg'

const footerColumns = [
  {
    title: 'სათაური',
    links: ['სათაური', 'სათაური', 'სათაური'],
  },
  {
    title: 'სათაური',
    links: ['სათაური', 'სათაური', 'სათაური'],
  },
  {
    title: 'სათაური',
    links: ['სათაური', 'სათაური', 'სათაური'],
  },
] as const

const socialLinks = [
  { href: '#', label: 'Phone', icon: phoneIconUrl },
  { href: '#', label: 'Facebook', icon: facebookIconUrl },
  { href: '#', label: 'YouTube', icon: youtubeIconUrl },
  { href: '#', label: 'Instagram', icon: instagramIconUrl },
  { href: '#', label: 'Telegram', icon: telegramIconUrl },
] as const

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__content">
          <div className="site-footer__top">
            {footerColumns.map((column) => (
              <div key={column.title} className="site-footer__column">
                <h3 className="site-footer__title">{column.title}</h3>

                <div className="site-footer__links">
                  {column.links.map((link) => (
                    <a key={link} className="site-footer__link" href="#">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="site-footer__subscribe">
              <h3 className="site-footer__title">გამოიწერეთ</h3>
              <p className="site-footer__subscribe-copy">ელ. ფოსტა</p>

              <form className="site-footer__form">
                <input className="site-footer__input" type="email" aria-label="Email" />
                <button className="site-footer__submit" type="submit" aria-label="Subscribe">
                  <img className="site-footer__submit-icon" src={telegramIconUrl} alt="" />
                </button>
              </form>
            </div>
          </div>

          <div className="site-footer__divider" />

          <div className="site-footer__bottom">
            <a className="site-footer__logo" href="#/">
              <img className="site-footer__logo-image" src={logoUrl} alt="Easy Stay" />
            </a>

            <div className="site-footer__socials">
              {socialLinks.map((link) => (
                <a key={link.label} className="site-footer__social" href={link.href} aria-label={link.label}>
                  <img className="site-footer__social-icon" src={link.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
