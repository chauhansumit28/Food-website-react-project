import React, { useState } from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/assets';
 
const LoginPopup = ({setShowLogin}) => {
    const [currstate,setCurrstate] = useState("Login")
    const [username , setUsername] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [signup ,setSignup] = useState(false);
    const [signin , setSignin] = useState(false)
    const popup = () =>{
      if(currstate === "Sign Up"){
        if(username && email && password){
          localStorage.setItem('username', username)
          localStorage.setItem('email', email)
          localStorage.setItem('password', password)
          alert('Signup Successfully')
          // setSignup('true')
        }

      }
      else{

      
      
      if(email && password){
        const heet = localStorage.getItem('email')
        const nitin = localStorage.getItem('password')
        if(heet == email && nitin == password)
         alert('Signin Successfully')
         else{
           alert('please enter your valid password')
         }
       }
      }
    }

    
      
    
  return (
    <>
   
    <div className='login-popup'>
    <form className="login-popup-container">
       <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div> 
        <div className="login-popup-inputs">
            {currstate==="Login"?<></>:<input type='text' placeholder='Your name'onChange={(e)=>setUsername(e.target.value)} required />}
            <input type='email' placeholder='Your email' onChange={(e)=>setEmail(e.target.value)} required />
            <input type='password' placeholder='Your password' onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <button onClick={()=>popup()}>{currstate==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
           <input type="checkbox" required/> 
           <p>By continuing, i agree to the terms of use & privacy policy.</p> 
        </div>
        {currstate==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrstate("Sign Up")}>Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrstate("Login")}>Login here</span></p>
        }
    </form>
    </div>
    
    </>
  )
}

export default LoginPopup
