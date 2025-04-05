import React from 'react'

function Card({username, btnText="visit me"}) {  // define here the props and default value jo bhi variables use honge

    return (
        <>
   <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://images.pexels.com/photos/1144279/pexels-photo-1144279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />

        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>  {/*yhan mention krna padega tbhi tho pta chalege ki value kahan update hogi*/}
            
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}  {/*same comment*/}
          </button>
        </div>
      </div>
  
        </>
    )
}
export default Card

