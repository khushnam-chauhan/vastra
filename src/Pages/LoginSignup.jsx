import React from 'react'
import './css/loginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="container">
        <h1>sign up</h1>
        <div className="fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='email address' />
          <input type="password" placeholder='password' />

        </div>
        <button>Continue</button>
        <p className='login'> Already have an account? <span>Login</span></p>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree with the terms and conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
