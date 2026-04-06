type HotelCardItem = {
  imageUrl: string
  rating: string
  title: string
  location: string
  date: string
  price: string
  priceSuffix: string
  features: [string, string, string]
}

const createHotelCard = (card: HotelCardItem): HTMLElement => {
  const article = document.createElement('article')
  article.className = 'hotel-card'
  article.innerHTML = `
    <div class="hotel-card__media">
      <img class="hotel-card__image" src="${card.imageUrl}" alt="${card.title}">
      <div class="hotel-card__rating">★ ${card.rating}</div>
      <button class="hotel-card__favorite" type="button" aria-label="Добавить в избранное">♡</button>
    </div>
    <div class="hotel-card__content">
      <h3 class="hotel-card__title">${card.title}</h3>
      <p class="hotel-card__location">${card.location}</p>
      <p class="hotel-card__date">${card.date}</p>
      <p class="hotel-card__price">${card.price} <span>${card.priceSuffix}</span></p>
      <div class="hotel-card__meta">
        <span>🛏 ${card.features[0]}</span>
        <span>👤 ${card.features[1]}</span>
        <span>↔ ${card.features[2]}</span>
      </div>
    </div>
  `

  return article
}

export const createHotelCardsSection = (cards: readonly HotelCardItem[]): HTMLElement => {
  const section = document.createElement('section')
  section.className = 'content-section'
  section.innerHTML = `
    <div class="section-heading section-heading--left">
      <h2 class="h2-bold">Популярные номера</h2>
    </div>
  `

  const grid = document.createElement('div')
  grid.className = 'hotel-cards-grid'

  cards.forEach((card) => {
    grid.append(createHotelCard(card))
  })

  section.append(grid)
  return section
}
