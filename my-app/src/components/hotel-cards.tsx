import type { HotelCardItem } from '../types'

interface HotelCardsSectionProps {
  cards: readonly HotelCardItem[]
}

const HotelCard = ({ imageUrl, rating, title, location, date, price, priceSuffix, features }: HotelCardItem) => {
  return (
    <article className="hotel-card">
      <div className="hotel-card__media">
        <img className="hotel-card__image" src={imageUrl} alt={title} />
        <div className="hotel-card__rating">★ {rating}</div>
        <button className="hotel-card__favorite" type="button" aria-label="Добавить в избранное">
          ♡
        </button>
      </div>

      <div className="hotel-card__content">
        <h3 className="hotel-card__title">{title}</h3>
        <p className="hotel-card__location">{location}</p>
        <p className="hotel-card__date">{date}</p>
        <p className="hotel-card__price">
          {price} <span>{priceSuffix}</span>
        </p>

        <div className="hotel-card__meta">
          <span>🛏 {features[0]}</span>
          <span>👤 {features[1]}</span>
          <span>↔ {features[2]}</span>
        </div>
      </div>
    </article>
  )
}

export const HotelCardsSection = ({ cards }: HotelCardsSectionProps) => {
  return (
    <section className="content-section">
      <div className="section-heading section-heading--left">
        <h2 className="h2-bold">Популярные номера</h2>
      </div>

      <div className="hotel-cards-grid">
        {cards.map((card) => (
          <HotelCard key={`${card.title}-${card.date}`} {...card} />
        ))}
      </div>
    </section>
  )
}
