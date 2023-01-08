import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { ItemContextProvider } from './context/ItemContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ItemContextProvider> <App />  </ItemContextProvider>
  
)
