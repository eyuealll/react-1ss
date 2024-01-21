/* this project basically teach react custom hook fitch fetching API about conveting currency*/
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrenctInfo' /* is my hook */
import {Inputbox} from './components/input.js'
/* in this project 1st go to InputBox.jsx then index.js then hooks/useCurrentInfo.js then app.jsx all input box props is created here*/
function App() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("etb")
  const [convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo/* this variable is store returned object data from useCurrencyInfo*/ = useCurrencyInfo(from) /* this is hook created by me in hooks folder */

const options = Object.keys(currencyInfo)/* extracted the from the obj and give it to options */

 const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])/* this is used to convert a value the user input by the selected currency value */
 }
 const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'  
    style= {{backgroundImage: `url(https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=600)`}}
    >
 <div className='w-full'>
<div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
<form onSubmit={(e) => {
e.preventDefault()
convert()
}}
>
<div className='w-full mb-1'>
<Inputbox
label="from"
amount={amount}
currencyOptions = {options} 
onCurrencyChange={(currency) => setFrom(currency)}/* is when the user click and choose the currency immediately update the form option with the new currency */
onAmountChange={(amount) => setAmount(amount)}
selectedCurrency={from}
/>
</div>
<div className='relative w-full h-0.5'>
  <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
</div>
<div className='w-full mb-1'>
  <Inputbox
  label = "to"
  currencyOptions = {options}
  amount = {convertedAmount}
  amountDisabled = {true}
  onCurrencyChange = {(currency) => setTo(currency)}
  selectedCurrency = {to}
  />
</div>
<button type='submit' 
className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
  Convert {from.toUpperCase()} To {to.toUpperCase()}
  </button>
</form>
</div>
 </div>

    </div>
  )
}

export default App
