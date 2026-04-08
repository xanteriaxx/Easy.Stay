import './Home.css'
import homeImageUrl from '../../assets/home/pic.svg'
import { CardsSection } from '../../components/cards'
import { HotelCardsSection } from '../../components/hotel-cards'
import { PostCardsSection } from '../../components/post-cards'
import { blogPostCards, featureCards, popularHotelCards } from '../../data'

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="home-page__hero">
        <img className="home-page__image" src={homeImageUrl} alt="Home visual" />
      </section>

      <CardsSection cards={featureCards} />
      <HotelCardsSection cards={popularHotelCards} />
      <PostCardsSection cards={blogPostCards} />
    </div>
  )
}
