import { useState,useCallback, useEffect ,useRef} from 'react'  //here useCallback aayega
//upar saare hooks ke naam aate hai

//useState is used to create state variables in functional components
//useCallback is used to memoize the function, so that it doesn't get recreated on every render
//useEffect is used to perform side effects in functional components
//useRef is used to create a reference to a DOM element or a value that persists across renders
import './App.css'

function App() {
  const [length,setlength] = useState(6)  //phle 0 tha tho refresh par sirf ek alphabet show ho rha tha ab, 6 krne par refreh par bhi 6 ho rhe hai
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(false);
  const [password,setpassword] = useState("");  //isme password ki value store hogi, phle isme bhi valse likha tha lekin vo fir container me dikh rha tha likha hua

  //useRef HOOK
  const passwordref =useRef(null)

  // function to generate a password HOOK
  const passwordGenerator = useCallback(()=> { 
    let pass ="";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string+= "0123456789";
    if (charAllowed) string+= "!@#$%^&*()_+";

    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    
    } 
    

    setpassword(pass);

  },[length, numberAllowed, charAllowed]) //before useCallback the brackets[] we have to create a function

  //for COPY ,HOOK
const CopyToClipboard = useCallback(() => {
  passwordref.current?.select() // ye select karega password ko, ? is for optional select may be current value zero ho
  passwordref.current?.setSelectionRange(0, 3); // might be somewhere useful its for range
  window.navigator.clipboard.writeText(password)
},[password])

//HOOK
  useEffect(() => {
    passwordGenerator()
  } ,[length, numberAllowed,charAllowed, passwordGenerator]) // ye useEffect hai jo function ko call karega jab bhi koi change hoga


  return (
    <>
    {/* Grey n White Container */}
    <div className = "w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600 ">
       <h1 className ="text-white text-center ">Password Generator</h1>
      <div className = "flex shadow rounded-lg overflow-hidden mb-2">  
      <input 
      type="text"
      value = {password}                                         // ye password ki value hai jo humne upar set ki thi , matlb reference yrr
      className = 'outlne-none w-full py-1 px-3 rounded-l-lg'    // ye white conteiner ka hai
      placeholder = "password dedo"                              // isme jo likhenge vo white box me aayega
      readOnly
      ref = {passwordref}                                       // ye password ki value ko copy karne ke liye hai
      />

      {/* Button */}
      <button onClick = {CopyToClipboard}
    
       className = {`outline-none bg-blue-700  transition-all duration-200 text-white px-3 py-0.5 shrink-0 
             rounded-r cursor-pointer hover:scale-105 active:scale-95`}>
              {/* ye jo svg hai vo icon hai */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
             </svg>
              </button>
    </div> 
    
  {/* Cursor-pointer for length */}
  <div className = "flex text-sm gap-x-2">
    <div className = "flex items-center gap-x-1"></div>
    <input 
    type="range" 
    min= {6}
    max= {30}
    value={length}
    className = 'cursor-pointer' 
    onChange={(e)=>{setlength(e.target.value)}}
    />
    <label> Length:{length}</label>
  </div>

  {/* Number checkbox */}
  <div className = "flex items-center gap-x-1">
    <input 
    type="checkbox"
    defaultChecked = {numberAllowed}
    id="numberInput" 
    className = "cursor-pointer"
    onChange= {()=> {setnumberAllowed((prev) => !prev);}}
    />
    <label htmlFor="numberInput"> Numbers</label>
  </div>

 {/* Character checkbox */}
 <div className = "flex items-center gap-x-1">
   <input 
   type="checkbox"
   defaultChecked={charAllowed}
   id="characterInput"
   onChange={()=> {setcharAllowed((prev) => !prev);}}  //previous value true false hoti rhegi
   />
   <label htmlFor="characterInput">Characters</label>
  </div>
</div>

 </>
  )
}

export default App
