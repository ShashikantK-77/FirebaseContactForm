import React, { useState } from 'react'
import "./style.css";

const Form = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    message:"",
  });
  let name,value;
const getUserData = (event) =>{
  name=event.target.name;
  value=event.target.value;

  setUser({...user,[name]:value});

}; 
const postData= async (e)=>{
e.preventDefault();

const{name,email,phone,address,message}=user;
if(name && email && phone && address && message){
  const res = await fetch("https://reactform-c8f3d-default-rtdb.firebaseio.com/reactform.json",{
    method:"POST",
    headers:{
              "Content-Type":"application/json",         
    },
    body:JSON.stringify({
      name,
      email,
      phone,
      address,
      message,
    })
  });
  if(res){
    setUser({
      name:"",
      email:"",
      phone:"",
      address:"",
      message:"",
    });
    alert("Data Stored Succesfully");
   
  }
}else{
    alert("Plz Fill All The Data");
}



};

  return (
   <>
   <body>
    <form action="/" className="decor" method="POST">
      <div className="form-left-decoration"></div>
      <div className="form-right-decoration"></div>
      <div className="circle"></div>
      <div className="form-inner">
        <h1>Contact us</h1>
        <input type="text" name="name" value={user.name} onChange={getUserData} placeholder="Username" autoComplete="off" required/>
        <input type="email" name="email" value={user.email} onChange={getUserData} placeholder="Email" autoComplete="off"/>
        <input type="text" name="phone" value={user.phone} onChange={getUserData} placeholder="Phone" autoComplete="off"/>
        <input type="text" name="address" value={user.address} onChange={getUserData} placeholder="Address" autoComplete="off"/>
        <input type="text" name="message" value={user.message} onChange={getUserData} placeholder="Message..." autoComplete="off"/>
        
        <button onClick={postData} type="submit" >Submit</button>
      </div>
    </form>
  </body>
   </>
  )
}

export default Form
