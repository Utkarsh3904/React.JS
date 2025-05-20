import React from 'react'
import appwrite from "../appwrite/config"
//ye isliye import krna pda kyunki agr ye state me hota tho hum redux use krke access krte 
import {link} from "react-router-dom"

function PostCard({ $id ,title, featuredImage ,viewCount}) {  //appwrite ka syntax hai id ki $ ke sth use karenge
    return (
        <link to={`/post/${$id}`}>

           <div classname ="w-full bg-gray-100 rounded-xl p-4">
               <div classname='w-full justify-center mb-4'>

                    <img src={appwrite.getFilePreview(featuredImage)} alt={title}     //ye vahan se featuredImage uthayega, title tho aasie hi hai kuch bhi
                    classname='rounded-xl'/>

               </div>
               <h2 classname='text-xl font-bold'>{title}</h2>
           </div>

        </link>

    )
}

export default PostCard
