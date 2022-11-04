import React from 'react'
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error,resetErrorBoundary}){
    return(
        <div role = 'alert' className='error'>
            <h1 style = {{fontSize:'50px'}}> Something went wrong</h1>
            <pre style={{color:'red', fontSize:'20px'}}>{error.message}</pre>
            <button onClick={resetErrorBoundary} className= 'error-button'>Try Again</button>
        </div>
    )

}

export default function Home() {
    const [name, setName] = useState();
    function Bomb(){
        if (name === 'Alaba'){
            alert('Welcome '+name)
        }
        else if (name === 'Oladejo'){
            alert('Welcome '+name)
        }
        else if (name === 'Tabitha'){
            alert('Welcome '+name)
        }
        else if (name === 'Jerry'){
            alert('Welcome '+name)
        }
        else if (name === 'Uke'){
            alert('Welcome '+name)
        }
        else if (name === 'Rachel'){
            alert('Welcome '+name)
        }
        else if (name === 'username'){
            throw new Error('Wrong Name')
        }

    } 
  return (
    <section>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset = {()=>
        setName('')}>
        <div>
            <h1 className='home-header' align = 'center'> Testing the React Boundary</h1>
        </div>
        <div className='display-data'>
            <div className='data-header'>
                <h1>Accessing the userdatabase</h1>
            </div>
            <div className='username'> 
            <p><i style ={{fontSize:'15px', color:'green'}}>Users e.g Alaba, Oladejo, Jerry,Setemi, Rachel, Tabitha</i></p>
                <label>Username:</label>
                <input type = 'text' placeholder='type your username' value={name} onChange={(e)=>
                    setName(e.target.value)}/>
                <p style={{color:'red', fontSize:'15px'}} align = 'right'><i>Do not type 'username'</i></p>
            </div>
        </div>
        <Bomb/>
        </ErrorBoundary>

    </section>
  )
}
