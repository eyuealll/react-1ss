import { useState, useCallback, useEffect,useRef } from 'react'/* useEffect is opposite of useCallback means in usecallback is as long as things dont change to frequently actually use it but in useEffect we want to run the method intensionally as soon as something changed */


/* we want generate a password when (the page is load, when changed numberAllowed value or number in the page, when the range is work means when the length is changed and when the charAllowed is changed the value or click the character in the page) for three of them we use useCallback hook means for length, numberAllowed and charAllowed but for page load or reload we use useEffect hook */

function App() {
  const [length, setLength] = useState(8)/* is minimum length of password */
  const [numberAllowed, setNumberAllowed] = useState(false)/* this is about your will for allowed number in your password */
  const [charAllowed, setCharAllowed] = useState(false) /* this is about your will for allowed character in your password */
  const [password, setPassword] = useState('') /* is generated password */

  const generatePassword = useCallback/* this callback has two things first function 2nd dependencies array means when these dependencies are trigger the function always run*/ (() => {
   let pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
   if (numberAllowed) str += "0123456789"
   if(charAllowed) str += "!@#$%^&*()_+"
   for(let i = 0; i<length; i++){
   const char =  Math.floor(Math.random() * str.length + 1)
   pass += str.charAt(char)
   }
   setPassword(pass)
   
  } ,[length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])
  

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select()/*3rd when the button is clicked password will select input field value password*/
  }
  const passwordRef = useRef(null);/* 1st  declaring passwordRef by hook state in useRef with initial value = null*/

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text" 
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly 
    ref={passwordRef /* means it effect in this part*/}
    />  
    <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
      copy
    </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        className='cursor-pointer'
        min={8}
        max={100}
         type="range"
          name="" 
          id="length" 
          value={length}
          onChange={(e) => setLength(e.target.value)}
          />
          <label 
           htmlFor="length"
           >length: {length}
           </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
         name="" 
         id="number"
         defaultChecked = {numberAllowed} 
         onChange={() => {
          setNumberAllowed((prev) => !prev)
          // setNumberAllowed(!numberAllowed)
          console.log(numberAllowed)
         }}
         />
         <label htmlFor="number">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
         name="" 
         id="character"
         defaultChecked = {charAllowed} 
         onChange={() => {
          setCharAllowed((prev) => !prev)
          // setNumberAllowed(!numberAllowed)
          console.log(charAllowed)
         }}
         />
         <label htmlFor="character">Character</label>
      </div>
    </div>
 
   </div>
  )
}

export default App
