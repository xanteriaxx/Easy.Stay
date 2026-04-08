import ReactDOM from 'react-dom/client'
import { App } from './App'
import './main.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root #app not found')
}

ReactDOM.createRoot(app).render(<App />)
