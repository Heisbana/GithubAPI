import "./index.css";
import React from "react";
import { NavLink, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import FeaturedItems from "./FeaturedItems";
import OldProduct from "./OldProduct";
import Avatar from './Avatar';

function NavlinkStyles({ isActive }) {
  return {
    textDecoration: isActive ? "none" : "underline",

  };
}

function Layout() {
  return (
    <nav className="me">
      <div className="alaba">
        <NavLink className="home" style={NavlinkStyles} to="/">
          Home page
        </NavLink>
        <NavLink className="home" style={NavlinkStyles} to="/about">
          About{" "}
        </NavLink>
        <NavLink className="home" style={NavlinkStyles} to="/product">
          Product of Items
        </NavLink>
        <Avatar/>
      </div>
      <Outlet />
    </nav>
  );
}
function Home() {
  return <h1>Help me this is Home page</h1>;
}
function About() {
  return <h1>this is about page</h1>;
}
function Error() {
  return <h1>Error 404</h1>;
}

function Product(){
  const navigate = useNavigate();

  return(
    <>
      <div>
        <p>I am under the product</p>
        <button onClick={()=>navigate('/about')}>click here to go to about</button>
      </div>
      <NavLink className = 'items'  to = 'featured'>Feature Items</NavLink>
      {/* <p>List of Items</p> */}
      <NavLink className='items' to ='old'>Old Product</NavLink>
      <Outlet/>
      
    </>
    
  )
}


function App() {
  return (
    <section>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product/>}>
          <Route path = 'featured' element ={<FeaturedItems/>}/>
          <Route path ='old' element = {<OldProduct/>}/>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  );
}
export default App;
