import "./App.css";
import React from "react";
function Alaba({data}) {
  console.log(data)
  return <div>
    <h1>My name is {data.name}</h1>
    <p>their age is {data.age}</p>    
    </div>
}



function App() {
  const users = [{
    name: 'Oladejo',
    age: 12,
  },

  {
    name: 'Alaba',
    age:20,
  }]
  const listItems = users.map((user)=>{
    return <Alaba data = {user}/>
  })
  

  
  return (
    <section>
      {listItems}
    </section>
  )
}
export default App;

import "./App.css";
import React from "react";
function Alaba({data}) {
return <h1>My name is {data.age}</h1>
}



function App() {
  return (
    <section>
      <Alaba
      data = {{
        name: "Oladejo",
        age: 10,
        }}
        />
    </section>
  )
}
export default App;
