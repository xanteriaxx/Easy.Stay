import './Home.css'
import homeImageUrl from '../../assets/home/pic.svg'

export const HomePage = () => {
  return (
    <section className="home-page">
      <img className="home-page__image" src={homeImageUrl} alt="Home visual" />
    </section>
  )
}
