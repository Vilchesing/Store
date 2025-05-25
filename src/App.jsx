import './App.css'
import "./component-style/darkbar.css"
import React from 'react'
import { DarkBar } from './components/darkbar.jsx'
import { BlueBar } from './components/bluebar.jsx'

function App() {


  return (
    <header>
        <DarkBar />
        <BlueBar />
    </header>
  )
}

export default App
