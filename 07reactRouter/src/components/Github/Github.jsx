import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
    const data=useLoaderData()
    //console kra hai tho lekin page ke andr kuch render nhi hoga isliye ek state ki need hai
    //YE NICHE VLA BHI KR SKTE THE FIR LOADER KA CONCEPT USE NHI HOTA
    // const [data,setdata] =useState([]) 
    // useEffect(()=>{
    //     fetch ('https://api.github.com/users/Utkarsh3904')
    // .then (response =>response.json())
    // .then(data=>{
    //     console.log(data);
    //     setdata(data)
    // })
    // },[])

    return (
        <div className = "text-center m-4 bg-gray-800 text-white p-4 text-2xl rounded-xl pb-5">Github followers: {data.followers}
        <div className="flex justify-center p-2 ">
        <img src={data.avatar_url} alt="Git picture" 
        width={300} 
        className="rounded-lg"/>
        </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Utkarsh3904')
    return response.json()

} 

//loader is faster as it start working before the click only just by cursor reach at github word it starts fetching data