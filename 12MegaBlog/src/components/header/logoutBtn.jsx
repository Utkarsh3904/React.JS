import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())                 // dispatch logout so that logout store me update ho jaye
        })
    
    }
    return (
        <div
        className = "inline-block px-6 py-2 duraation-200 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg cursor-pointer"
        >logoutBtn</div>
    )
}

export default LogoutBtn
