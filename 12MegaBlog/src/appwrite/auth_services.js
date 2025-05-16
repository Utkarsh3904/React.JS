import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

//SEE THSI CODE IS DIRECTLY FROM APPWRITE BUT I HAVE MODIFIED IT TO WORK WITH VITE THAT WE CALLED IS QUALITY CODE.

// const client = new Client()
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                         // Your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     'email@example.com', 
//     'password'
// );

//authservice is an object as anyone calls AuthService which is a class then it needs a onbject therefore we create an object for ease, so that we directly use this object whenever we need to use the class methods

export class AuthService {

  constructor() {

    this.client = new Client( )
      .setEndpoint(conf.appwriteUrl)      // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.account = new Account(this.client);
  }

  //for to create an account
  async createAccount({email, password, name}){          //might be ERROR   aayega idhar coz here userid instead of name
      try {
          const userAccount = await this.account.create(
          ID.unique(),                                  // Unique ID for the user as in above second line there is id for the user
          email,                                        // also in appwrite docs it is mentioned that first should be the ID.
          password,name); 

          // if n else is to chk ki koi bus mere se glti na hojaye
          if (userAccount){
            return this.login ({email, password});      //call another function like login for here
          }
          else{
              return userAccount
          }
      } catch (error) {
          throw error;
      }
  }

 //for to login an account
    async login({ email, password }) {
  try {
    return await this.account.createSession(email, password);
  } catch (error) {
    throw error;
  }
 }

 // for to check the current user logged in or not?
 async getCurrentUser(){
    try {
        return await this.account.get(); //it tells ki logged in hai ya nahi
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error); // option hai isse likhna 
        
        throw error;
    }
 // nhi hoga log in tho , ye sb if else se bhi kr skte the instead of try catch
 return null; 
 }

 //for to logout an account
 async logout (){
    try{
         await this.account.deleteSessions('current');  //no return needed as we dont expect any return
    }catch (error){
        console.log("Appwrite service :: logout :: error", error); // option hai isse likhna
        throw error;
    }
}


}
const authservice = new AuthService();

export default authservice;