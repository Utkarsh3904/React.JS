//Its name can be PROTECTOR also

//mechanism to how to protect pages and routes.
//its like a empty container this is used in to whether to show values or not

import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children , authentication = true}){      //here func name is Protected, filename and func name can be different
    
    const navigate = useNavigate()                     //let value is true then chk in if/else really true or false
    const [loader, setLoader ] = useState(true)
    const authStatus = useSelector( state => state.auth.status)     //authstatus is a variable asking the status from the store

    useEffect(()=>{ 

         //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        //ABOVE IS EASIER VERSION BUT TRY TO UNDERSTAND THIS
        if(authentication && authStatus !== authentication){     //True &&  let (false !== true) so its True. So TRUE && TRUE is TRUE            
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)   //at last loader comes to false

    }, [authStatus, navigate, authentication])  //These are dependencies inh me kuch bhi change ho tho yeuseEffect run kr jaaye jo ki redirect krega accordingly

    return loader ? <h1>Loading...</h1> : <>{children}</>
}