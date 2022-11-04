import React, { useEffect, useState } from 'react'
import './App.css';

export default function Github() {
  const[num, setNum]= useState(1)
  const[loading, setLoading]= useState(true)
    const[user,setUser]= useState()
    const [count,setCount]= useState()
    useEffect(()=>{
       try{
        async function github(){
          const url = `https://api.github.com/users/Heisbana/repos`;
          const resp = await fetch(url);
          const data = await resp.json();
          // console.log(data[1])
          setCount(data)
          setUser(data.slice(-1+num,0+num))
          setLoading(false)
      }
      github();
    }
      catch(error){
        console.log(error)
      }   
    })
  return (
    <div>
      {loading || !user?(
        <div className='loaderContainer'> Loading...</div>):
        (<div>
          {user?.map((item,index)=>{
            return(
              <div>
                <h1 align = 'center' style={{marginBottom:'10px', fontSize:'40px'}}> User Github Repos</h1>
              <div className='Border'>
              <div><a style={{textDecoration:'none',}} href={item.html_url} target= '_blank' rel="noreferrer">
              <div><h1 style={{fontSize:'45px'}}>{item.owner.login}</h1></div>
                <div key = {index} style={{fontSize:'25px'}}> {item.full_name}</div>
                <div><h1>ID: {item.id}</h1></div>
                </a></div>
              </div>
              <div className='headButton'>
                <button
                disabled={count?.length ===num}
                onClick={()=>{
                  setNum(prev=> prev+1)}} className= 'button'>{'>>'}</button>
    
                <button
                disabled ={num<=1}
                 onClick={()=>setNum((prev)=>prev-1)} className= 'button'>{'<<'}</button>
                {Array.from({length:count?.length}, (value, index)=> index+1).map((each)=>(
                <button
                onClick={()=> setNum(each)} key = {each} className= 'button'>{each}</button>
              ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
      </div>
  )   
}
