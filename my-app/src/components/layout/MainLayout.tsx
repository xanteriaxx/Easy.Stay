import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { errorRoute, routes } from '../../router/routes'
import { Footer } from '../footer/Footer'
import { Header } from '../header/header'

export const MainLayout = () => {
  const location = useLocation()
  const currentRoute = routes.find((route) => route.path === location.pathname)
  const currentPageTitle = currentRoute?.pageTitle ?? errorRoute.pageTitle

  useEffect(() => {
    document.title = `${currentPageTitle ?? 'Easy Stay'} | Easy Stay`
    window.scrollTo(0, 0)
  }, [currentPageTitle, location.pathname])

  return (
    <div className="main-layout">
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
