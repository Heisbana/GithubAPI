import "./App.css";
import React, {useState}from "react";

function App() {
  const [value, setValue]= useState('My name is Alaba');
  const handleMouse = (event)=>{
    // setValue('My name is Alaba');
    setTimeout(() => {
      setValue('His name has changed') 
    }, 1000);
    setTimeout(() => {
      setValue('My name is Oladejo')
      
    }, 2000);
  }  
  return (
    <section>
    <h1 onMouseOver= {handleMouse}>{value}</h1>
    </section>
  )
}
export default App;

