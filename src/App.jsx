import { useState } from 'react'
import './App.css'

function App() {

  const [ isDarkMode, setIsDarkMode ] = useState(false)
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setsetLastName ] = useState('')
  const [ hasPets, sethasPets ] = useState(false)
  const [ age, setAge ] = useState(0)

  const handleDarkMode = (evt) => {
    console.log('Dark mode enabled')
    setIsDarkMode(true)
  }

  const handleLightMode = (evt) => {
    console.log('Light mode enabled')
    setIsDarkMode(false)
  }


const handleDarkModeChange = (evt) => {
  if(evt.target.id === 'darkmode'){
    setIsDarkMode(true)
  }else{
    setIsDarkMode(false)
  }

  console.log('isDarkMode', isDarkMode)
}

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>Hello world</h1>
      <p>Dark mode enabled? {`${firstName}, ${lastName}, ${age}`}</p>

      <div>
        <button id="darkmode" onClick={handleDarkModeChange}>Dark Mode</button>
        <button id="lightmode" onClick={handleDarkModeChange}>Light Mode</button>
      </div>
    </div>
  )
}

export default App
