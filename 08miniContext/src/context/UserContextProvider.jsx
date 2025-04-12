import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) =>{
    const [user,setUser]= React.useState(null)  //useState ko aaise bhhi likh skte hai varna yaha react nhi tho import krna padega
    return(
        <UserContext.Provider value = {{user,setUser}}>
        {children}
        </UserContext.Provider>
    ) 
}

export default UserContextProvider
