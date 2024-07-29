import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import "./App.css" 
import AdminPortal from './Components/AdminPortal'
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import UserDashboard from './Components/UserDashboard'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/admindashboard' element={<AdminPortal/>} />
        <Route path='/userdashboard' element={<UserDashboard/>} />
      </Routes>
    </div>
  )
}
