import React , {useEffect, useState} from 'react'  //saare postko ek query me krna padega tho use useState
import appwriteService from '../appwrite/config'
import {Container, PostCard } from '../components' 

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })

return (
    <div className = 'w-full py-8'>
        <Container>
            <div classaName ='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
        
    )
}
export default AllPost
