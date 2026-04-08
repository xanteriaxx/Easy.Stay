import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { errorRoute, routes } from './router/routes'

export const App = () => {
  const ErrorComponent = errorRoute.component

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<MainLayout />}>
          {routes.map((route) => {
            const Page = route.component

            return (
              <Route key={route.path} path={route.path} element={<Page />} handle={{ pageTitle: route.pageTitle }} />
            )
          })}

          <Route path={errorRoute.path} element={<ErrorComponent />} handle={{ pageTitle: errorRoute.pageTitle }} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
