import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
         <div className='top'>
            <div className='Wrappper'>
                <img className='logo' src='./Netflixlogo.png' alt=''></img>
            </div>
        </div>
        <div className='container'>
            <form>
                 <h1>Sign In</h1>
                 <input type='email' placeholder='email or phone number'></input>
                 <input type='password' placeholder='password'></input>
                 <button className='loginbutton'>Sign In</button>
                 <span>New to Netflix? <b>Sign Up now</b></span>
                 <span>This page is protected by Google reCAPTCHA to ensure you are not a bot <b>Learn more</b></span>
            </form>
           
        </div>
    </div>
  )
}

export default Login