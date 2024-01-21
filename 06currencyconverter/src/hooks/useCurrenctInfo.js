/* this hook is nothing more than the function 
this is used to fetch the date get the data and return the value */
import { useEffect, useState } from "react";

/* this is a custom hooks what we create look like */
function useCurrencyInfo(currency/* user provide atleast one the currency data based on this the function call the api like  usd or inr or birr... in selected field */){
const [data, setData] = useState({})/* this object means the fetched data is an object thats why we use the value is object */

useEffect(() => {
  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) => res.json())
  .then((data) => setData(data[currency])) /* we have the right to do setData(res) but we get the entire data means the data also include date and other but we need only the currency means usd object values so we use setData(res[currenct/usd]) [by square bracket we get opject values]*/ 
}, [currency /* any time currency change refetched the api */])

// console.log(data)
return data;
}


export default useCurrencyInfo