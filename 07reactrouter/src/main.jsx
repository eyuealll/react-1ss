import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'/* this is 2nd */
import NotFound from './components/Notfound/Notfound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>{/* this routes is work like component it self this work like sandouch model */}
      <Route path='' element={<Home />} />{/* this '' in path means its home all thing start from and this is display at Outlet place*/}
      <Route path='about' element={<About/>} />
      <Route path='user/' element={<User/>} >{/* when we use only one Route method it work only for user/userid means localhost:5173/user/*** something but not work for onl user */}
      <Route path=':userid' element={<User />}/>{/* useParams hook */}
      </Route>
      <Route path='*' element={<NotFound/>}/>{/* this NotFound is used for no found component */}
      <Route loader={githubInfoLoader /* this is 2nd this loader is default prop for useLoaderData the loader is give the method to useLoaderData hook in Github.jsx */} path='github/' element={<Github/>} > 
      <Route path=':userGit' element={<Github/>}/>
      </Route>
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
