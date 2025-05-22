import React from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
 
function PostForm({post}) {          //here post remember (jab bhi edit button par click krenge tho post ki saari info do)
    const {register, handleSubmit, watch, setValue, getValues, control} = useForm({ //issi control ko rte me bhi pass kra hai tho vahan ka saara conrtol ab isme miljayega
        defaultValues: {             //agr new post bnane aaya hai user tho empty '', lekin agr edit krne aaya hai tho hame kuch default values deni padgi jo hamare apperite se aayegi
            title: post?.title || '',
            slug: post?.slug ||'',
            content: post?.content || '',
            status: post?.status || 'active',

        }
    })
    const navigate =useNavigate()
    const userData = useSelector(state => state.user.userData)
 
//ab user jab submit krega tho agr phle se kuch hoga tho usse update kro nhi hai tho new entry generate kro    
    const submit =async (data)=> {
        if (post){                    //first handle file in which file ko upload krdo
            const file = data.image[0]? appwriteService.uploadFile(data.image[0]) :null
            //purani image delete
            if (file){
                appwriteService.deleteFile(post.featuredImage)
            }
            //update post
            const dbPost = await appwriteService.updatePost(post.$id, {       //post.$id is for slug 
                ...data,
                featuredImage: file ? file.$id : undefined  //sbko spread krdiya aaise hi chl jayega featuredImage ko overwrite krna padega, undefined is a error case
            })
            if (dbPost){
                navigate (`/post/${dbPost.$id}`)
            }
            
            //This is for to create new ENTRY
        } else {
            //ab chk nhi kr rhe ki file hai ki nhi sidha new create kr rhe hai krne ko kr bhi skte hai chk
            const file = await appwriteService.uploadFIle(data.image[0]);
//TODO
            if (file){
                const fielId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                })
                if(dbPost) {
                    navigate(`/post${dbPost.$id}`)
                }

            }
        }
        }
        //title ke according respective slug generate krna hai
        const slugTransform = useCallback((value)=> {
            if (value && typeof value ==='string') 
                return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d\s]+/g,'-')  //from gpt
                .replace(/\s/g,'-')
            
            return ''    

        },[])

    React.useEffect(() => {
        const subscription = watch((value, {name}) => {
            if (name === 'title'){
                setValue('slug', slugTransform (value.title, 
                    {shouldValidte: true}))         //'slug' ke andr slugtranform(value.title ) dal jayegi
                }
        })

        return () => {
            subscription.unsubscribe()    //for optimisation of memory management (interview ques)
        }

    }, [watch, slugTransform , setValue])    

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}


