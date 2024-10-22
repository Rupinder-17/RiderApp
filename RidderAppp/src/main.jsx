import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { IndexRider } from './components/IndexRider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexRider/>
  </StrictMode>,
)
