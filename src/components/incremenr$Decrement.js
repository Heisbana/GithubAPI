import "./App.css";
import React, {useState}from "react";


function App() {
  const [value, setValue]= useState(0)
  const handleIncrement =(event)=>{
    event.preventDefault();
    setValue((prev)=>
    prev +1)
  }

  const handleDecrement = (event)=>{
    event.preventDefault();
    setValue((prev)=>
    prev-1)
  }
  return (
    <section>
      <h1> {value}</h1>
      <button onClick = {handleIncrement}> Increment</button>
      <button onClick={handleDecrement}> Decrement</button>

    </section>
  )
}
export default App;
