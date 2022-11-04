import React from "react";
import { ErrorBoundary} from "react-error-boundary";
import {Routes, Route, NavLink, Outlet} from 'react-router-dom';
import Home from './Home';
import Github from "./Github";
import Alaba from './Alaba.jpeg'

function ErrorFallBack({error, resetErrorBoundary}){
  <div>
    <h1> Something went wrong</h1>
    <pre>{error.message}</pre>
    <button onClick = {resetErrorBoundary}>Try again</button>
  </div>
}

function Layout(){
  return(
    <div className="homeContainer">
      <NavLink style={({isActive})=> isActive? {
        color:'red',
      }:{
        color:'',
      }}  className = 'nav' to ='/'> 
        HOME
      </NavLink>
      <NavLink style={({isActive})=> isActive? {
        color:'red',
      }:{
        color:'',
      }} className = 'nav' to = '/about'>
        ABOUT
      </NavLink>
      <NavLink style={({isActive})=> isActive? {
        color:'red',
      }:{
        color:'',
      }} className = 'nav' to = '/section'>
        SECTION
      </NavLink>
      <Outlet/>
    </div>
  )
}
function Section(){
  return(
    <section>
      <div className="Routes">
        <NavLink to = 'users' className= 'route'
        style={({isActive})=> isActive? {
          color:'red',
        }:{
          color:'',
        }}>Github</NavLink>
        <NavLink to = 'products' className='route'
        style={({isActive})=> isActive? {
          color:'red',
        }:{
          color:'',
        }}>Products</NavLink>
      </div>
      <Outlet/>
    </section>
    
  )
} 
function Product(){
  return (
    <div>
      <div align='center'>
        <dt style={{fontSize:'30px', backgroundColor:'black', color:"white"}}>
          Tools used to develop the whole App
          <li style={{fontSize:'20px'}}>React Router</li>
          <li style={{fontSize:'20px'}}>React Boundary </li>
          <li style={{fontSize:'20px'}}>Fetching API</li>
        </dt>
      </div>
    </div>
  )
}

function ErrorPage(){
  return(
    <h1 className="head">Error 404 page</h1>
  )
}

function About(){
  return(
    <div>
      <div className="header2">
        <div className="about-div">
        <h1 style ={{fontSize:'30px'}}>OLADEJO ALABA</h1>
        <p><strong>MATRIC NUMBER: ALT/SOE/022/2658</strong></p>
        <p style ={{fontSize:'20px'}}> A junior webdeveloper at Altschool Africa</p>
        <img src= {Alaba} alt = 'Alaba' className="Alaba"/>
        </div>
        <div className="about">
          <h1>ABOUT EXAM PROJECT</h1>
        </div>
        <div className="Assignment">
        <dt style={{fontSize:'18px'}}> <strong>List of things done on the Exam Project:</strong>
          <li style = {{fontSize:'22px'}}> I have been able to apply error boundary.</li>
          <li style = {{fontSize:'22px'}}> I have been able to apply Routes, Nested routes.</li>
          <li style = {{fontSize:'22px'}}> I have been able to fetch a github API and also to show the output.</li>
          <li style = {{fontSize:'22px'}}> I have been able to give the API pagination and have a loading state.</li>
        </dt>
        </div>
        
      </div>
    </div>
  )
}
function App() {
  return (
    <section>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Layout />
      <switch>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/section' element = {<Section/>}>
          <Route path = 'users' element = {<Github/>}/>
          <Route path = 'products' element = {<Product/>}/>
        </Route>
        <Route path = '*' element= {<ErrorPage/>}/>
      </Routes>
      </switch>

      </ErrorBoundary>
      
    </section>
  );
}
export default App;
