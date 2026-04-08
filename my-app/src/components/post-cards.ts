import type { PostCardItem } from '../types'

const createPostCard = (card: PostCardItem): HTMLElement => {
  const article = document.createElement('article')
  article.className = 'post-card'
  article.innerHTML = `
    <img class="post-card__image" src="${card.imageUrl}" alt="${card.title}">
    <div class="post-card__meta">
      <span>${card.date}</span>
      <span>◔ ${card.readTime}</span>
    </div>
    <div class="post-card__content">
      <h3 class="post-card__title">${card.title}</h3>
      <p class="post-card__description">${card.description}</p>
    </div>
  `

  return article
}

export const createPostCardsSection = (cards: readonly PostCardItem[]): HTMLElement => {
  const section = document.createElement('section')
  section.className = 'content-section content-section--spaced'

  const heading = document.createElement('div')
  heading.className = 'section-heading'
  heading.innerHTML = '<h2 class="h2-bold">Блог посты</h2>'

  const grid = document.createElement('div')
  grid.className = 'post-cards-grid'

  cards.forEach((card) => {
    grid.append(createPostCard(card))
  })

  section.append(heading, grid)
  return section
}
