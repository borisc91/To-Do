import './App.scss'
import Todos from './components/Todos'
import React, { useContext } from 'react'
import ItemContext from './context/ItemContext'





function App() {


  const ctx = useContext(ItemContext)

  

 

  return (
    
    <div className={`${ctx.themeLight ? "whiteBg" : "app"}`}>
      <div className={`${ctx.themeLight ? "hwhiteBG" : "header" }`}></div>
        <Todos/>
    </div>
   
  )
}

export default App
