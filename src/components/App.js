import "./App.css";
import React, { useEffect, useState } from "react";

function App(){
  // const [position, setPosition]= useState(0);
  const [news, setNews]= useState(null);
  // const [listItems, setListItems]= useState([])
  useEffect(()=>{
    const newsItem = [{
      Heading: 'Headie one',
      Description:'This is gladly a welcomed nonsense code'
    },
    {
      Heading:'New one',
      Description:'Get the fuck outta here',
    }]
    const item = newsItem[0];
    // setListItems(newsItem);
    setNews(item);
  },[])
  const handleNext = (event)=>{
    event.preventDefault();
    // setPosition((prev)=>
    // prev +1);
  }

  const handlePrev = (event)=>{
    event.preventDefault();
  }

  return (
    <section>
      <div>
        <h1>{news.Heading}</h1>
        <p>{news.Description}</p>
        <button onClick = {handleNext}>Next</button>
        <button onClick= {handlePrev}>Prev</button>
      </div>
     
    
    </section>
  )
}
export default App;

