import "./App.css";
import React, { useState, useEffect } from "react";

function useGetData(type){
  const [data, setData] = useState([]);
  useEffect(()=>{
    const cars =[
      'lexus',
      'beamer',
    ]
    const books =[
      'me',
      'you',
    ]
    if (type === 'cars'){
      setData(cars)
    }
    else if(type === 'books'){
      setData(books)
    }
  },[type]);
  return [data]
}



function App() {
  const [data] = useGetData('cars')
  console.log(data)
  return (
    <section>
      <h1>My name is Alaba</h1>
    </section>
  )
}
export default App;
