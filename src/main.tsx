import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyled } from './style/globalStyled.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyled/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
