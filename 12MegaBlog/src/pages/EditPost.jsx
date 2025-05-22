import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import appwriteServices from '../appwrite/config'
import {Container, PostForm} from '../components'

function EditPost() {
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const {slug}= useParams()   // click krenge edit tho uske url par jayega, tho url se  value nikalne ke liye useParams use karenge
    
    useEffect(()=>{
        if(slug){
            appwriteServices.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])

    return post ? (
    <div clasName='py-8'>
        <Container>
            <PostForm  post={post} />
        </Container>
    </div>
    ) :null
}

export default  EditPost
