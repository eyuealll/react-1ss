import React,{useId} from 'react' /*generated a unique id */
/* this is an input box used to convert currency and the take many props because each props are triggered the component */

const Inputbox = ({
    label/* from , to ...*/,
    amount/* the user input amount value*/,
    onAmountChange/*what happen when amount change*/,
    onCurrencyChange/* what happen when usd or birr ... options change */,
    currencyOptions = []/* the option values stored here like usd, birr, euro... */,
    selectedCurrency = "usd"/* by default value of selected option is usd dollar */,
    amountDisabled = false/* by default converted amount is disabled */,
    currencyDisabled = false/* by defaulted to or currenct option the converted one is disabled */,
    className = ""

}) => {

    const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
<div className='w-1-2'>
<label
htmlFor={id} className='text-black/40 mb-2 inline-block'>
    {label}
</label>
<input 
id={id}
type="number"
className='outline-none w-full bg-transparent py-1.5'
placeholder='amount'
disabled = {amountDisabled}
value={amount}
onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}/* this is used for adition safty cheak you can use onAmountChange(e.target.value) might work but user type string so that string must change to number */
/>
</div>
<div className='w-1/2 flex flex-wrap justify-end text-right'>
    <p className='text-black/40 mb-2 w-full'>
        currency type
    </p>
    <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectedCurrency}
    onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}/* this is same as onAmountChange except Number() method because its a character */
    disabled={currencyDisabled}
    >
        {currencyOptions.map((currency) => (/* dont do a mistake if there is tag after map you use normal bracket()*/
            <option
             key={currency} /* is unique all country currency name */
             value={currency}
             >
                {currency}
            </option>
        ))}
    </select>

</div>

    </div>
  )
}

export default Inputbox