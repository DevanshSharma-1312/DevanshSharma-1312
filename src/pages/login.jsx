import React from 'react';
import './LoginSignup.css';
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          {/* <input type="text" placeholder='Your Name'/> */}
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <NavLink to='/fresh'>

        <button>Continue</button>
        </NavLink>
        
      </div> 
    </div>
  )
}

export default Login
