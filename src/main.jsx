import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Admin from './Admin.jsx'
import './styles.css'

const path = location.pathname.replace(/\/+$/, '')
const isAdmin = path === '/admin'
if (isAdmin) {
  document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex,nofollow,noarchive')
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>{isAdmin ? <Admin /> : <App />}</React.StrictMode>
)
