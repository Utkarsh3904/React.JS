import React from 'react'
//for drop down 

function  Select({
   options, 
   label, 
   className ="",
   ...props 
}  , ref) {
    const id = useId()

    return (
        <div className = 'w-full'>
            {label && <label  className = "" htmlFor = {id}> {label}  </label>}

            <select
            {...props}
            id={id}
            ref={ref}              //Yhi main ref pass ho rha hai 
            className ={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            {...props}
            >
                {options ?.map((option) => (             // agr maan lo iss drop down me options hi zero hue tho ye fail kr jayega pura isliye we use ? its like a if/else.
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default  React.foreward(Select)     //yhan bhi  likh skte hai it will be easy
// ye forward ref ki wajah se hum isko kisi aur component me use kar payenge
