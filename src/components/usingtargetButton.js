import "./App.css";
import React from "react";


function App() {
  return (
    <section>
      <form 
        onSubmit ={(event)=>{
          event.preventDefault();
          const {name, tel} = event.target.elements;
          console.log(name.value, tel.value)
        }}>
        <input type = 'text'  placeholder = 'Enter your name' name = 'name'/>
        <input type = 'tel'  placeholder = 'Enter your phone number'name = 'tel'/>
        <button type ='submit'> Click me</button>
      </form>
    </section>
  )
}
export default App;
