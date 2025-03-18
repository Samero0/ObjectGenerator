import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App'
import './index.css'
import './styles/globalStyles.css';  
import './styles/imt-styles.css';  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)