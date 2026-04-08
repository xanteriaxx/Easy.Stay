import { Search } from '../../components/Search'
import './Home.css'
import homeImageUrl from '../../assets/home/pic.svg'

export const HomePage = () => {
  return (
    <section className="home-page">
      <div className="home-page__media">
        <img className="home-page__image" src={homeImageUrl} alt="Home visual" />

        <div className="home-page__content">
          <h1 className="home-page__title">
            იპოვეთ სასტუმრო
            <br />
            დასასვენებლად
          </h1>

          <p className="home-page__description">
            ჩვენ გვაქვს რამდენიმე ათასი ბინა ყველა გემოვნებისთვის მსოფლიოს ყველა კუთხეში
          </p>
        </div>
      </div>

      <div className="home-page__search">
        <Search />
      </div>
    </section>
  )
}
