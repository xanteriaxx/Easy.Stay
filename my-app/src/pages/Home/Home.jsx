import './home.css'

export const createHomePage = () => {
  const section = document.createElement('section')
  section.className = 'home-page'
  section.innerHTML = `
    <img class="home-page__image" src="/home/pic.svg" alt="Home visual">
  `

  return section
}
