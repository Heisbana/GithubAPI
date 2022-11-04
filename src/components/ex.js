import React, { useState } from 'react';
function App() {
  const [val, setVal]= useState('');
  // const [alaba,setAlaba] = useState('');
  function backspaceClear(e){
    e.preventDefault();
    try{
      setVal((val.slice(0,-1)))
    }
    catch (error){
      setVal(' ');
    }
    
  }

  function calculate(e){
    e.preventDefault();
    try{
      setVal((eval(val)))
    }
    catch(error){
      setVal('Syntax error')
      
    }
  }
  

  return (
    <section>
      <div className='container'>
        <div> <h1 style={{fontSize:'auto'}}>CALCULATOR</h1></div>
        <div className='display'>
          <input className='screen' type = 'text' value = {val} onChange={(e)=>setVal(e.target.value)}/>
        </div>
        <div className='buttons'>
            <button value = '7' onClick={(e)=>setVal(val + e.target.value)}>7</button>
            <button value = '8' onClick={(e)=>setVal(val + e.target.value)}>8</button>
            <button value = '9' onClick={(e)=>setVal(val + e.target.value)}>9</button>
            <button style={{backgroundColor:'blue'}} value = 'CE' onClick={backspaceClear}>CE/C</button>

            <button value = '4' onClick={(e)=>setVal(val + e.target.value)}>4</button>
            <button value = '5' onClick={(e)=>setVal(val + e.target.value)}>5</button>
            <button value = '6' onClick={(e)=>setVal(val + e.target.value)}>6</button>
            <button style={{backgroundColor:'blue'}} value = '*' onClick={(e)=>setVal(val + e.target.value)}>X</button>

            <button value = '1' onClick={(e)=>setVal(val + e.target.value)}>1</button>
            <button value = '2' onClick={(e)=>setVal(val + e.target.value)}>2</button>
            <button value = '3' onClick={(e)=>setVal(val + e.target.value)}>3</button>         
            <button style={{backgroundColor:'blue'}} value = '/' onClick={(e)=>setVal(val + e.target.value)}>/</button>
         
            <button value = '0' onClick={(e)=>setVal(val + e.target.value)}>0</button>
            <button style={{backgroundColor:'blue'}} value = '.' onClick={(e)=>setVal(val + e.target.value)}>.</button>
            <button style={{backgroundColor:'blue'}} value = '-' onClick={(e)=>setVal(val + e.target.value)}>-</button>
            <button style={{backgroundColor:'blue'}} value = '+' onClick={(e)=>setVal(val + e.target.value)}>+</button>
            <button style={{backgroundColor:'green'}} value = '=' onClick={calculate}>=</button>
          
        </div>
      </div>
    </section> 
  )
}
export default App;

