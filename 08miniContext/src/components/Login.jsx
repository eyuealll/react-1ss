import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
/* this Login component is responsible for setting the data so for setting we use another hook useContext by this we extract the value user and setUser object and we must include from which context we use or extract the value for this we give UserContext */
const Login = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [counta, setCounta] = useState('')

const {setUser} = useContext(UserContext)/* UserContext is means from which context useContext extract the value of setUser */
const {setCo} = useContext(UserContext)



const handleSubmit = (e) => {
e.preventDefault()
setUser({username, password})/* we set user in the UserContext by username and password so all component get this value through user object in UserContext so we set the user but the user value is accessible only to who need username and password if we want to set another we must create another use state [something, setSomething] in the usercontextprovider and adding these something and setSomething in value objects by using comma(,)*/
}
const handleDumb = (e) => {
  e.preventDefault()
  setCo({counta})
}
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
        />
        {" "}
        <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        />
        <button onClick={handleSubmit}> Submit </button>
        <input type="text" onChange={(e) => setCounta(e.target.value)} value={counta}/>
        <button onClick={handleDumb}> dumb</button>
    </div>
  )
}

export default Login