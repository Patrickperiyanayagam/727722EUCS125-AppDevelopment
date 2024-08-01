import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import "./App.css" 
import AdminPortal from './Components/AdminPortal'
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import UserDashboard from './Components/UserDashboard'
import UserNotifications from './Components/UserNotification'
export default function App() {
  const [loggedin,setloggedin] = useState(false)
  const toggle = ()=>{
    setloggedin(true)
    console.log(loggedin)
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login toggle={toggle}/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/admindashboard' element={<AdminPortal/>}/>
        <Route path='/userdashboard' element={<UserDashboard/>} />
        <Route path='/usernotification' element={<UserNotifications/>} />
      </Routes>
    </div>
  )
}
