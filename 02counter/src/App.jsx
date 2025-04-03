import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
             //setcounter
let [counter,chaicounter] = useState(15)

  //let counter  = 15  no need after hook

  const addValue = () => {
    console.log("clicked ", counter);  // it is just too see in inspect-console
    //counter = counter + 1
    chaicounter(counter+1)
  }

  const removeValue = ()=>{
    chaicounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter} </h2>

      <button onClick = {addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter} </button>
      <footer>footer:{counter}</footer>
    </>
  )
}

export default App
