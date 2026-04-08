import type { PropsWithChildren } from 'react'
import { Footer } from '../footer/Footer'
import { Header } from '../header/header'
import type { RoutePath } from '../../router/routes'

interface MainLayoutProps extends PropsWithChildren {
  currentPath: RoutePath
}

export const MainLayout = ({ children, currentPath }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Header currentPath={currentPath} />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  )
}
