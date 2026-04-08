import './main.css'
import { createHeader } from './components/header/header'
import { createHomePage } from './pages/Home/Home'
import { createAboutPage } from './pages/About'
import { createContactPage } from './pages/Contact'
import { createReservationPage } from './Reservation'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root #app not found')
}

const content = document.createElement('main')
content.className = 'page-content'

const renderRoute = () => {
  const route = window.location.hash || '#/'
  content.replaceChildren()

  if (route === '#/about') {
    content.append(createAboutPage())
    return
  }

  if (route === '#/contact') {
    content.append(createContactPage())
    return
  }

  if (route === '#/reservation') {
    content.append(createReservationPage())
    return
  }

  content.append(createHomePage())
}

app.append(createHeader(), content)
renderRoute()
window.addEventListener('hashchange', renderRoute)
