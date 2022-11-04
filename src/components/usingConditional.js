import "./App.css";
import React, { useState } from "react";

function Greeting() {
  return <h1>My name is Alaba</h1>
}
function Surname() {
  return <h1> Alaba is welcoming</h1>
}
function App() {
  const [state, setState] = useState(true)
  setTimeout(() =>
    setState(false), 5000
  )
  return (
    <section>
      {state ? <Greeting /> : <Surname />}

    </section>
  )
}
export default App;
