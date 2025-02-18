import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HolaMundo from './HolaMundo.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HolaMundo />  
  </StrictMode>,
)