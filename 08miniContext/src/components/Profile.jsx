import React , {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)  //not setUser here this time only user
   if(!user) return <div>Please Login</div>

   return <div>WELCOME {user.username} </div>
}

export default Profile

//ye dene ke liye