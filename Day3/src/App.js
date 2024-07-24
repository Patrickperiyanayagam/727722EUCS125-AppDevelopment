import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import Registration from './Registration'

export default function App() {
  const [login,setlogin] = useState(false)

  const toggle = ()=>{
    setlogin(!login)
  }
  return (
    <div>
      {/* {login ? <Login toggle={toggle}/> : <Registration toggle={toggle}/>} */}
      {/* <HomePage/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration/>}/>
      </Routes> 
    </div>
  )
}
