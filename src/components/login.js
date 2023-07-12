import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
    <div className='container'>
    <div className='head'>
      Get Your <span className='span1'> Book</span>
    </div>
    <div className='input1'>
        <input className='inp' type='email' placeholder='Email ID'></input>
        <input className='inp' type='password' placeholder='Password'></input>
        <input className='inp' type='password' placeholder='Re-enter password'></input>
        <button className='inp1'>Sign in</button>
    </div>
    </div>
    </>
  )
}

export default Login
