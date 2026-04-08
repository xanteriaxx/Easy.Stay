import type { ComponentType } from 'react'
import { ReservationPage } from '../Reservation'
import { AboutPage } from '../pages/About'
import { ContactPage } from '../pages/Contact'
import { HomePage } from '../pages/Home/Home'
import { OffersPage } from '../pages/Offers'

export type RoutePath = '#/' | '#/about' | '#/contact' | '#/reservation' | '#/offers'

export interface AppRoute {
  path: RoutePath
  label: string
  showInNav: boolean
  pageTitle: string
  component: ComponentType
}

export const routes: readonly AppRoute[] = [
  {
    path: '#/',
    label: 'მთავარი გვერდი',
    showInNav: true,
    pageTitle: 'Home',
    component: HomePage,
  },
  {
    path: '#/offers',
    label: 'შეთავაზებები',
    showInNav: true,
    pageTitle: 'Offers',
    component: OffersPage,
  },
  {
    path: '#/reservation',
    label: 'დაჯავშნა',
    showInNav: true,
    pageTitle: 'Reservation',
    component: ReservationPage,
  },
  {
    path: '#/about',
    label: 'ჩვენი შესახებ',
    showInNav: true,
    pageTitle: 'About',
    component: AboutPage,
  },
  {
    path: '#/contact',
    label: 'დაგვიკავშირდით',
    showInNav: true,
    pageTitle: 'Contact',
    component: ContactPage,
  },
] as const

export const navRoutes = routes.filter((route) => route.showInNav)

export const getCurrentPath = (): RoutePath => {
  const currentHash = window.location.hash as RoutePath

  return routes.some((route) => route.path === currentHash) ? currentHash : '#/'
}

export const getRouteByPath = (path: RoutePath): AppRoute =>
  routes.find((route) => route.path === path) ?? routes[0]
