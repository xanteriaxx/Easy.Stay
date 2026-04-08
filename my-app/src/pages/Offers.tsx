import './Offers.css'
import { CardsSection } from '../components/cards'
import { HotelCardsSection } from '../components/hotel-cards'
import { PostCardsSection } from '../components/post-cards'
import { blogPostCards, featureCards, popularHotelCards, whyUsItems } from '../data'

export const OffersPage = () => {
  return (
    <div className="offers-page">
      <section className="offers-page__hero">
        <h1 className="offers-page__title">შეთავაზებები</h1>
        <p className="offers-page__copy">
          შეარჩიე შენთვის სასურველი ნომერი, გაეცანი დეტალებს და ნახე, რატომ ირჩევენ სტუმრები Easy
          Stay-ს.
        </p>
      </section>

      <HotelCardsSection cards={popularHotelCards} />
      <CardsSection cards={featureCards} />

      <section className="offers-page__why-us">
        <div className="section-heading section-heading--left">
          <h2 className="h2-bold">რატომ ჩვენ</h2>
        </div>

        <div className="offers-page__why-us-grid">
          {whyUsItems.map((item) => (
            <article key={item.title} className="offers-page__why-us-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <PostCardsSection cards={blogPostCards} />
    </div>
  )
}
