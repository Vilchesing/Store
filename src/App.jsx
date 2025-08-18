import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import "./component-style/mainstore.css"
import "./component-style/mediaquerys.css"
import "./component-style/fonts.css"
import { AppRoutes } from './routes/AppRoutes.jsx';


function App() {
  return(
<BrowserRouter>
  <AppRoutes/>
</BrowserRouter>  
  )
}

export default App
