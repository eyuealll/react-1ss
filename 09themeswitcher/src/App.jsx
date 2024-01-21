/* 1st create components in components folder card and themebtn 2nd creating contextAPI in 1 file theme.js 3rd wrapping app.jsx components with the provider or themeProvider then we specify the value to the provier with its attribute value = {{something, something... }}} then give a function to them to work properly or first declase use state for set the value here setSomething(something) bla bla 4th we give a permission to components for accessing these data through the custom hook useTheme  */ 
import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'

/* this project teach us about contextAPI with custom hook and store every thing with only 1 file when we did on the previous 08 project we have 2 files userContext and UserContextProvider on this is only 1 file which have all thing the only difference is the value is given in app.jsx provider wrapper and the function we declare on the createContext is define here app.jsx and configuring  the darkMode tailwind css in the tailwind config file after content like this darkMode: "class" */

function App() {
 const [themeMode, setThemeMode] = useState('light')
 const darkTheme = () => {
  setThemeMode('dark')
 }
 const lightTheme = () => { 
  setThemeMode('light')
  }/* these are just changing the state they have no effect but actually doing in my web we must use useEffect if we want any event on the web page we have to make it happpen  through click changing blalbal if we want happen based on state change we have to use useEffect */

  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])
  

  return (
    <ThemeProvider /* this came from theme.js with the value */ value = {{themeMode, darkTheme, lightTheme}}>
   <div className='flex flex-wrap min-h-screen items-center'>
    <div className='w-full'>s
      <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
        <ThemeBtn /> 
      </div>
      <div>
        <Card />
      </div>
    </div>
   </div>
    </ThemeProvider>
  )
}

export default App
