import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { IndexRider } from './components/IndexRider'
// import { Modals } from 'components/Demo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexRider/>
    {/* <Modal/> */}
    {/* <Modals/> */}
  </StrictMode>,
)
