import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode> // Faz com que no devTools a mensagem se repita, pode deixa, apenas comentado pra não ficar repetindo.
    <App />
  // </React.StrictMode>,
)
