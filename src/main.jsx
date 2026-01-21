import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom' // 1. Import this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* 2. Wrap App with this */}
      <App />
    </HashRouter>
  </StrictMode>,
)
