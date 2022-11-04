import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  user:{
    username:'bana',
    email:'oladejoalaba15@gmail.com',
  },
  verified:false,
})

function AuthProvider(props){
  const [user, setUser] = useState({
    username:'Alaba',
    email:'oyekunmi@yahoo.com'
  });
  return (
    <AuthContext.Provider value={{
      user:user,
      verified:true,
      setUser:setUser,
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
function UserBio(){
  const {user,setUser}= useContext(AuthContext);
  const handleUpdate = (event)=>{
    event.preventDefault();
    setUser((prev)=>{
      return{
        ...prev,
        bio:'My name is Alaba Oladejo, thanks for checking me out'
    }
  })
  }
  return(
    <div>
      <h1>UserBio</h1>
      <div>{user.bio}</div>
      <button onClick={handleUpdate}> Update Bio</button>
    </div>
  )
}
function UserProfile(){
  const {user, verified} = useContext(AuthContext);
  return(
    <div>
      <h1>UserProfile</h1>
      <div>Username:{user.username}</div>
      <div>Email:{user.email}</div>
      <div>Verified:{verified? 'yes':'no'}</div>
      <UserBio/>
    </div>
  )
}
function App() {
  return (
    <AuthProvider>

      <section>
        <UserProfile/>
      </section>

    </AuthProvider>
  );
}
export default App;
