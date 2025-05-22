import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId }){
        try {
            await this.databases.createDocument(
                conf.appwriteDatabaseId,        // these all IDs needed as per the document on appwrite
                conf.appwriteCollectionId,
                slug,                      // taken as unique id instead of ID.unique() 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId 
                }    
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);        
        }
    }   

    async updatePost(slug, {title, content, featuredImage, status}){  // slug phle n no userID
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,                      // taken as unique id instead of ID.unique() 
                {
                    title,
                    content,
                    featuredImage,
                    status
                }    
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);        
        }
    }    

    async deletePost(slug){  //only slug
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,                      // taken as unique id instead of ID.unique() 
            )
            return true;                   //if deleted return true

        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);   
            return false;     
        }
    }

    async getPost(slug){  
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,                      // taken as unique id instead of ID.unique() 
            )
        }catch(error){
            console.log("Appwrite service :: getPost :: error", error);   
            return false;     
        }
    }

    async getPosts(queries =[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries           //queries as ref of above
            )
        }catch(error){
            console.log("Appwrite service :: getPosts :: error", error);   
            return false;       
        }
    }

    //file upload service

    async uploadFIle(file){   //fiel here is the file object
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(), // unique id for the file
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFIle :: error", error);   
            return false;          
        }
    }

    async deleteFile(fileId){  //fileId here
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);   
            return false;             
        }
    }

    //For preview we dont need async ye aaise hi bhot fast hai

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }

}

const services = new Service();
export default service