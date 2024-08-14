import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import ThemeContextProvider from './context/ThemeContext.tsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
      <ToastContainer position='top-center' />
    </ThemeContextProvider>
  </React.StrictMode>
)
