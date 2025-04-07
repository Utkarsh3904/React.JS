import { useState,useCallback, useEffect ,useRef} from 'react'  //here useCallback aayega
//upar saare hooks ke naam aate hai

//useState is used to create state variables in functional components
//useCallback is used to memoize the function, so that it doesn't get recreated on every render
//useEffect is used to perform side effects in functional components
//useRef is used to create a reference to a DOM element or a value that persists across renders
import './App.css'

function App() {
  const [length,setlength] = useState(0)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(false);
  const [password,setpassword] = useState("");  //isme password ki value store hogi, phle isme bhi valse likha tha lekin vo fir container me dikh rha tha likha hua

  //useRef hook
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

  //for COPY
const CopyToClipboard = useCallback(() => {
  passwordref.current?.select() // ye select karega password ko, ? is for optional select may be current value zero ho
  passwordref.current?.setSelectionRange(0, 3); // might be somewhere useful its for range
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(() => {
    passwordGenerator()
  } ,[length, numberAllowed,charAllowed, passwordGenerator]) // ye useEffect hai jo function ko call karega jab bhi koi change hoga

  return (
    <>
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
      <button onClick = {CopyToClipboard}
       className = "outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
    </div> 
    
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
