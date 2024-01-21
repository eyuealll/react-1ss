import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {co} = useContext(UserContext)
  const {user} = useContext(UserContext)
  if(!user) {return <h1> Not logged In</h1>/* this if condition is must otherwise the page is not load the user.username because user by default is null in UserContextProvider.jsx file so the page doesn't read null value so its error so the page is blank white page */ };
  if (!co) {return <h2>no count</h2>}
  return (
    <div className='text-black'>
        <h1> Profile: {user.username} count: {co.counta}</h1>
        <h1>password: {user.password}</h1>
        <h1>More Component</h1>
    </div>
  )
}

export default Profile