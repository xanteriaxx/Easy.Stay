import { useEffect, useState } from 'react'
import { MainLayout } from './components/layout/MainLayout'
import { getCurrentPath, getRouteByPath } from './router/routes'

export const App = () => {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const route = getRouteByPath(currentPath)
  const Page = route.component

  return (
    <MainLayout currentPath={currentPath}>
      <Page />
    </MainLayout>
  )
}
