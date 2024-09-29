import { createRoot } from 'react-dom/client'
import Container from './components/component0.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>  
  <div className='currencyContainer'>
  <h1>CURRENCY CHANGER</h1>
  <Container   conversion = "From"/>
  <Container  conversion = "To" />
  <div className='buttonContainer'>
    <button className='Button'>Button</button>
  </div>
</div>
  
  <App />
  </>

)
