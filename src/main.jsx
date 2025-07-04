import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './App.jsx'
import "./styles.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Board />
  </StrictMode>,
)
