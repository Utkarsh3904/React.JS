import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Card from './Componets/card'  //importing the card component to use it in app.jsx


function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username: "John Doe",
    age: 30,
  }

  let newArr = [1,2,3,4,5]


  return (
    <>
     <h1 className="bg-red-600 text-white p-8 rounded-xl">test tailwind</h1>  // Just a button to test tailwind css

    <Card username = "chai aur code" btnText="click me" />   {/* so to pass something in button we have to pass it as props measn with a variable  */}
    <Card username = "chai aur code" btnText={newArr} />     {/* button me 1234 aa gya   */}
    <Card username = "bili bili"  />                         {/*isme bili bili aur button ke liye default value aayegi ie visit me */}
    
    </>
  )
}

export default App
