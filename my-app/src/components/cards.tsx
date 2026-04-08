import type { CardItem } from '../types'
import { Button } from './button'

interface CardsSectionProps {
  cards: readonly CardItem[]
}

const Card = ({ eyebrow, title, description, meta, linkLabel, linkHref }: CardItem) => {
  return (
    <article className="card">
      <p className="card__eyebrow">{eyebrow}</p>

      <div className="card__body">
        <h2>{title}</h2>
        <p className="card__description">{description}</p>
      </div>

      <div className="card__footer">
        <span className="card__meta">{meta}</span>
        <Button label={linkLabel} variant="secondary" href={linkHref} />
      </div>
    </article>
  )
}

export const CardsSection = ({ cards }: CardsSectionProps) => {
  return (
    <section className="cards-section">
      <div className="section-heading">
        <p className="eyebrow">Collection</p>
        <h2>Сетка из карточек</h2>
        <p className="section-copy">Компонент рендерится из массива данных и легко масштабируется.</p>
      </div>

      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={`${card.title}-${card.linkHref}`} {...card} />
        ))}
      </div>
    </section>
  )
}
