import React from 'react'
//Mrzi hai ID use krna varna iske bhi ho jayega

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className ="",   //jb deni hogi tb de denge
    ...props         //koi aur prop boli tho add krlnge

}, ref ){             // POINT to note krna hai ki ye ref ko bhi le raha hai

    return (
        <div className = "w-full">
            {label && <label 
            className = "inline-block mb-1 pl-1"
                htmlFor = {props.id}>
                    {label}
                </label>}
            <input
            type = {type}
            className ={`px-3 py-2 rouded-lg bg-white text-black outline-none focus:bg-gray-50 duaration-200 border border-gray-200 w-full ${className}`}
            ref={ref}              //Yhi main ref pass ho rha hai 
            {...props}
            />
            
        </div>
    )

})

export default Input
