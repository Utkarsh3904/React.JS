import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth_services'
import {login,logout} from './store/authSlice'

import './App.css'

function App() {
const [loading, setloading] = React.useState(true)
const dispatch = useDispatch();

//now we will check if the user is logged in or not 

useEffect(() => {                    //userData ko dispatch krna padega taki authSlice ke ander action me userData mil jaye
  authservice.getCurrentUser()
  .then((userData)=>{
    if (userData){
      dispatch(login( {userData} ))  //login is the action and userData is the payload
    }else {
      dispatch(logout())             //ya tho user ka data milega ya store update hojayega ki logout ho gaya
    }
  })
  .finally (() => setloading(false))   //// it runs always 
  
},[])


//for if not loading then show the page otherwiswe shoe null
return !loading ?(
  <div classname ='min-h-screen flex flex-wrap content-between bg-gray-400' >
    <div className='w-full block '>
      <header/>
        <main>
         TODO: <outlet />
        </main>
      <footer />
    </div>
  </div>
) : null

}

export default App
