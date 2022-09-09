import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let { isAuth, Loginhandler } = React.useContext(AuthContext);
  const [email, Setemail] = React.useState("");
  const [pass, Setpass] = React.useState("");
  const navigate = useNavigate();

  const handleEmail=(e)=>{
 
  Setemail(e.target.value)
  }
  const handlePass=(e)=>{
   Setpass(e.target.value)
  }

  const handleInput=()=>{
    let payload = {
      email : email,
      password : pass
    }

    postData(payload)
  }

  const postData = (payload) => {
    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) => {
      if(res.status == 201){
        alert("ligin Success");
        navigate("/");
         Loginhandler(true);
      }else{
         alert("something went wrong")
      }
      
     
    }).catch((err)=>console.log("Error ==",err ))
}

  return (
    <div>
      <input type="email" value={email} onChange={handleEmail} data-cy="login-email" />
      <input type="password" value={pass} onChange={handlePass} data-cy="login-password" />
      <button onClick={handleInput} data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
