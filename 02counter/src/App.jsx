import { useState } from 'react'/* any change in the state rerender the ui on the web */

import './App.css'

function App() {

  const[counter/*is a variable*/, setCounter/*this is method*/] = useState(15)
// let counter = 15
const addValue = () =>{
  setCounter((prevCounter) => prevCounter + 1)/* by only this method can update the value of a variable */
  setCounter((prevCounter) => prevCounter + 1)/* by only this method can update the value of a variable */
  setCounter((prevCounter) => prevCounter + 1)/* by only this method can update the value of a variable */
  setCounter((prevCounter) =>/* this is a callback function */ prevCounter + 1)/* by only this method can update the value of a variable */
}

const removeValue = () => {
  setCounter(counter - 1)
}


  return (
    <>
     <h1>React course with eyueal {counter}</h1>
     <h2>counter value: {counter}</h2> 
     <button
     onClick={addValue}>Add value</button>{" "}
     <button onClick={removeValue}>remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
