/* this is jsx file because this UserContextProvider is a wrapper means wrap all component to allow access and feed the data from and to the components */
import React, {useState} from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
const [user, setUser] = useState(null) /* this user data is accessible to all children components that why we inject user and setUser in inside <UserContext.Provider value = {{user, setUset}}></UserContext.Provider> as a value of Object */
const [co, setCo] = useState(null)
return (
    <UserContext.Provider value = {{user, setUser, co, setCo}}>{/* this provider is come from UserContext by default this actually came from react.createContext() */}
{children }
    </UserContext.Provider>
)
}
/* so all these things are done so next we go and wrap all components in app.jsx by this component function UserContextProvider */

export default UserContextProvider