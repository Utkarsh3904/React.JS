import React from 'react'


//COMMON BUTTON DESIGN import whenever needed
function Button({
    buttontxt,       // ye button ka text hai ise children bhi keh sakte hain (just a fancy name)
    type ='button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className ='',  //just for user agr usme bhi koi property deni ho, nothing more
    ...props    //nhi bhi use karenge tho chalega

}) {
    return (
        <button className ={`py-2 px-4 rounded-lg shadow-md hover:shadow-lg duration-200 
        ${bgColor} ${textColor} ${className}`} {...props} >
            {buttontxt}
        </button>
    )
}

export default Button
