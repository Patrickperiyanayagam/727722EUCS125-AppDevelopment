import React, { useState } from 'react'
import './Login.css'
export default function Login({toggle}) {
    const [name,setname] = useState('')
    const [regno,setregno] = useState('')
    const [password,setpassword] = useState('')
    const login = ()=>{
        alert('Login Successfull')
        console.log(name,regno,password)
        toggle()
    }
  return (
    <div className='logbody'>
        <h1>Login Form</h1>
      <div className='regbox'>
            <label>Name: </label>
            <input type='text'  onChange={(e)=>{setname(e.target.value)} } placeholder='Enter your Name'></input>
            <label>Register Number: </label>
            <input type='text' placeholder='Enter your register number' onChange={(event)=>{setregno(event.target.value)}}></input>
            <label>Password: </label>
            <input type='password' value={password}  onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter your Password'></input>
        <div>
            <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  )
}
