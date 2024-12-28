import React, { useState,useRef } from 'react'
import './Register.css'

const Register = () => {
    const [email,setemail] = useState("")
    const [password , setpassword] = useState("")
    const emailRef = useRef();
    const passwordRef = useRef();
    const handelStart = ()=>{
        setemail(emailRef.current.value)
    };

    const handelFinish = ()=>{
        setpassword(passwordRef.current.value)
    };
  return (
    <div className='Register'>
        <div className='top'>
            <div className='Wrappper'>
                <img className='logo' src='./Netflixlogo.png' alt=''></img>
                <button className='loginbutton'>Sign Up</button>
            </div>
        </div>
        <div className='container'>
            <h1>Unlimited movies,Tv Shows and more.</h1>
            <h2>Watch anywhere. Cancel any time</h2>
            <p>Ready to watch? enter you email to create or restart your membership. </p>
            {!email ? (<div className='input' >
                <input type='email' placeholder='email address' ref={emailRef}></input>
                <button className='registrationbutton' onClick={handelStart}>Get Started</button>
            </div>) : (<div className='input' >
                <input type='password' placeholder='password' ref={passwordRef}></input>
                <button className='registrationbutton' onClick={handelFinish}>Start</button>
            </div>)}
        </div>
    </div>
  )
}

export default Register