import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'

import App from './App'
import './styles/index.css'

// SPLASH SCREEN
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash')
    const root = document.getElementById('root')

    if (splash) splash.remove()
    if (root) root.style.visibility = 'visible'
  }, 1500)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
)
