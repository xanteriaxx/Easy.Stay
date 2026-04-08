import './home.css'
import homeImageUrl from '../../assets/home/pic.svg'

export const createHomePage = () => {
  const section = document.createElement('section')
  section.className = 'home-page'
  section.innerHTML = `
    <img class="home-page__image" src="${homeImageUrl}" alt="Home visual">
  `

  return section
}
