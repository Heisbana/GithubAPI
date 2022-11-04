import React, { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary';
export default function Users() {
    const [user, setUser] = useState( );
    const [loading, setLoading] = useState(true)
    
    const handleError = useErrorHandler();

    const [page, setPage] = useState(1);
    let results = 12;
    const pages = 10;
    useEffect(()=>{
      try{
        async function component(){
          const url = `https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`;
          const resp = await fetch (url);
          const data = await resp.json();
          console.log(data)
          setUser(data)
          setLoading(false)
      }
      component();
    }
      catch(error){
        handleError(error)
      }   
    })
  return (
    <div className='usersContainer'>
      {loading || !user?(
        <div className='loaderContainer'> Loading...</div>):(
          <div>
        <div>
              {user?.results.map((item, index)=>{
                return(
                  <div className='inline'>
                  <div className='userContainer'>
                    <h1 className='header'>ID {index+1}</h1>
                    <div> <strong>Name:</strong> {item.name.title} {item.name.first} {item.name.last}</div>
                    <div> <strong>Country:</strong> {item.location.country}</div>
                    <div><strong>Age:</strong> {item.dob.age} </div>
                    <img className= 'userPicture' src={item.picture.large} alt ={item.name.first}/>
                  </div>
                  </div>
                )
              })}
        </div>
        <div>
          <div>
            <pre style ={{fontSize:'15px', textAlign:'center'}}>{`Page: ${page} Of ${pages}`}</pre>
          </div>
          <button className= 'button'
          disabled = {page >= pages}
          onClick={()=> setPage(prev=> prev+ 1)}>Next</button>
          <button className= 'button'
          disabled= {page<=1}
          // arial-disabled={page<=1}
          onClick={()=> setPage(prev=> prev- 1)}>Prev</button>
        </div>
        <div>
          {Array.from({length:pages}, (value, index)=> index+1).map((each)=>(
            <button
            disabled = {each === page} 
            onClick={()=> setPage(each)} key = {each} className= 'button'>{each}</button>
          ))}
        </div>
      </div>
      )}
    </div>

    
    

  )
}
