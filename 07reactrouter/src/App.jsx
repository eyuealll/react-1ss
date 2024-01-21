import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/* 1st router concept with with router dependencies npm react-router-dom import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from the dependencies then create router function with createBrowserRouter() method and createRoutesFromElements() method inside createRoutesFromElements we inject components the first component is Layout inside Layout we inject header and footer components because they appear always in their specific place then we use Outlet from react-router-dom this is used for inject any component inside header and footer any component are inject by the place of <Outlet /> so the Layout component is the root of all component in the concept of router so router variable hold all components so the router varible is inject in routerProvider like a value <RuterProvider router={router} /> */
/* this project is used for teching me about 2 hooks 1st useParams and 2nd useLoaderData */ 
/* 3rd project teach me about Link and NavLink has function isActive and isPending */
/* finally its teach me about how a component preload when they aren't active by only hover property so this method is useLoaderData hook and inside main.jsx loader attribute give the exported function to useLoaderData hook to get the data from the function */  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1 className='w-full bg-green-500 '> react router dom</h1>
    </>
  )
}

export default App
