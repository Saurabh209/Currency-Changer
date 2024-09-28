import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './components/component0.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>  

  <Container  Name = "Saurabh" conversion = "From"/>
  <Container  Name = "Kumar" conversion = "To" />
  <App />
  </>

)
