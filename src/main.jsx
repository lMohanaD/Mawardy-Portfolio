import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // adjust path/filename if needed
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
