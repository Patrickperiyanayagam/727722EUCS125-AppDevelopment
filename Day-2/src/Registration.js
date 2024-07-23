import React, { useState } from 'react'
import './Registration.css'
export default function Registration({toggle}) {
    const [name,setname] = useState('')
    const [regno,setregno] = useState('')
    const [email,setemail] = useState('')
    const [age,setage] = useState('')
    const [password,setpassword] = useState('')
    const register = ()=>{
        console.log(name,regno,email,age,password)
        alert('Registration Successfull')
        toggle()
    }
  return (
    <div className='regbody'>
        <h1>Registration Form</h1>
      <div className='regbox'>
            <label>Name: </label>
            <input value={name} type='text' placeholder='Enter your Name' onChange={(e)=>{setname(e.target.value)}}></input>
            <label>Register Number: </label>
            <input value={regno} type='text' placeholder='Enter your Register Number' onChange={(e)=>{setregno(e.target.value)}}></input>
            <label>Email: </label>
            <input value={email} type='email' placeholder='Enter your Email' onChange={(e)=>{setemail(e.target.value)}}></input>
            <label>Age: </label>
            <input value={age} type='number' placeholder='Enter your Age' onChange={(e)=>{setage(e.target.value)}}></input>
            <label>Password: </label>
            <input value={password} type='password' placeholder='Enter your Password' onChange={(e)=>{setpassword(e.target.value)}}></input>
        <div>
            <button onClick={register}>Register</button>
        </div>
      </div>
    </div>
  )
}
