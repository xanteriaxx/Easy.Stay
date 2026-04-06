import './main.css'
import { createButton } from './components/button'
import { createHotelCardsSection } from './components/hotel-cards'
import { createPostCardsSection } from './components/post-cards'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root #app not found')
}

const hotelCards = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    rating: '4.8',
    title: 'Номер у окна',
    location: 'Старый Тбилиси',
    date: '28 октября — 1 ноября',
    price: '₾2016',
    priceSuffix: '/ 6 дней',
    features: ['4 кровати', '8 гостей', '1350 кв. футов'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    rating: '4.8',
    title: 'Светлый люкс',
    location: 'Ваке, Тбилиси',
    date: '28 октября — 1 ноября',
    price: '₾2016',
    priceSuffix: '/ 6 дней',
    features: ['4 кровати', '8 гостей', '1350 кв. футов'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    rating: '4.8',
    title: 'Классический номер',
    location: 'Сололаки, Тбилиси',
    date: '28 октября — 1 ноября',
    price: '$2016',
    priceSuffix: '/ 6 night',
    features: ['4 beds', '8 guests', '1350 sq. feet'],
  },
] as const

const postCards = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?auto=format&fit=crop&w=900&q=80',
    date: '2022 года 20 мая',
    readTime: '5:60',
    title: 'Мегаполис Афины',
    description: 'Актуальные локации для прогулок, короткий гид по району и лучшие панорамные точки города.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    date: '2022 года 20 мая',
    readTime: '5:60',
    title: 'Видения и горизонты',
    description: 'Истории из путешествия и заметки о том, как выбрать маршрут для насыщенного выходного.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
    date: '2022 года 20 мая',
    readTime: '5:60',
    title: 'Путешествие дня',
    description: 'Практичные советы по перелётам, пересадкам и быстрому планированию коротких поездок.',
  },
] as const

app.innerHTML = `
  <section class="page-intro">
    <p class="eyebrow">UI Component</p>
    <h1>Компоненты карточек</h1>
    <p class="lead">
      Два отдельных типа карточек: для отелей и для постов блога.
    </p>
  </section>
`

const intro = app.querySelector<HTMLElement>('.page-intro')

if (!intro) {
  throw new Error('Intro section not found')
}

const actions = document.createElement('div')
actions.className = 'page-intro__actions'
actions.append(
  createButton({ label: 'Основная кнопка', variant: 'primary', href: '#' }),
  createButton({ label: 'Прозрачная', variant: 'secondary', href: '#' }),
)

intro.append(actions)
app.append(createHotelCardsSection(hotelCards))
app.append(createPostCardsSection(postCards))
