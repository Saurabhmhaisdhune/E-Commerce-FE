import React from 'react'
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className='login-main'>
    <div className='login-1'>
        <div className='login-2'>
            <label className='login-name'>
                Login
            </label>
            <div className='login-4'>
                <label className='input-text'>Email</label><br/>
                <input type='email' placeholder='Email..' name='email' className='login-input'/><br/>
                <label className='input-text'>Password</label><br/>
                <input type='password' placeholder='Password..' name='password' className='login-input'/><br/>
                <button className='login-button'>Login</button>
            </div>
        </div>
        <div className='login-3'>
            <label className='login-name'>
                Register
            </label>
            <div className='login-4'>
                <label className='input-text'>Full Name</label><br/>
                <input type='text' placeholder='Full Name..' className='login-input'/><br/>
                <label className='input-text'>Email</label><br/>
                <input type='email' placeholder='Email..' name='email' className='login-input'/><br/>
                <label className='input-text'>Password</label><br/>
                <input type='password' placeholder='Password..' name='password' className='login-input'/><br/>
                <button className='login-button'>Register</button>
            </div>
        </div>
    </div>
    </div>
  )
}
