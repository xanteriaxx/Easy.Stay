import type { PostCardItem } from '../types'

interface PostCardsSectionProps {
  cards: readonly PostCardItem[]
}

const PostCard = ({ imageUrl, date, readTime, title, description }: PostCardItem) => {
  return (
    <article className="post-card">
      <img className="post-card__image" src={imageUrl} alt={title} />

      <div className="post-card__meta">
        <span>{date}</span>
        <span>◔ {readTime}</span>
      </div>

      <div className="post-card__content">
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__description">{description}</p>
      </div>
    </article>
  )
}

export const PostCardsSection = ({ cards }: PostCardsSectionProps) => {
  return (
    <section className="content-section content-section--spaced">
      <div className="section-heading">
        <h2 className="h2-bold">Блог посты</h2>
      </div>

      <div className="post-cards-grid">
        {cards.map((card) => (
          <PostCard key={`${card.title}-${card.date}`} {...card} />
        ))}
      </div>
    </section>
  )
}
