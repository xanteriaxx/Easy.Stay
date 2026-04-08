import type { CardItem } from '../types'
import { createButton } from './button'

const createCard = (card: CardItem): HTMLElement => {
  const article = document.createElement('article')
  article.className = 'card'

  const eyebrow = document.createElement('p')
  eyebrow.className = 'card__eyebrow'
  eyebrow.textContent = card.eyebrow

  const body = document.createElement('div')
  body.className = 'card__body'
  body.innerHTML = `
    <h2>${card.title}</h2>
    <p class="card__description">${card.description}</p>
  `

  const footer = document.createElement('div')
  footer.className = 'card__footer'

  const meta = document.createElement('span')
  meta.className = 'card__meta'
  meta.textContent = card.meta

  const action = createButton({
    label: card.linkLabel,
    variant: 'secondary',
    href: card.linkHref,
  })

  footer.append(meta, action)
  article.append(eyebrow, body, footer)

  return article
}

export const createCardsSection = (cards: readonly CardItem[]): HTMLElement => {
  const section = document.createElement('section')
  section.className = 'cards-section'

  const header = document.createElement('div')
  header.className = 'section-heading'
  header.innerHTML = `
    <p class="eyebrow">Collection</p>
    <h2>Сетка из карточек</h2>
    <p class="section-copy">Компонент рендерится из массива данных и легко масштабируется.</p>
  `

  const grid = document.createElement('div')
  grid.className = 'cards-grid'

  cards.forEach((card) => {
    grid.append(createCard(card))
  })

  section.append(header, grid)

  return section
}
