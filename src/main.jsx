import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IndexRider } from './components/Index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexRider/>
  </StrictMode>,
)
