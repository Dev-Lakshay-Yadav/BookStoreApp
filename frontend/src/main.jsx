import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
        <App />
      </div>
  </BrowserRouter>
)
