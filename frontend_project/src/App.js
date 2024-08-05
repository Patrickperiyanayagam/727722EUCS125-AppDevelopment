import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import "./App.css" 
import AdminPortal from './Components/AdminPortal'
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import UserDashboard from './Components/UserDashboard'
import UserNotifications from './Components/UserNotification'
import { useStateContext } from './Context/ContextProvider'
export default function App() {
  const {loggedin} = useStateContext()
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/admindashboard' element={ loggedin ? (<AdminPortal/>) : (<Navigate to="/login" />)}/>
        <Route path='/userdashboard' element={ loggedin ? (<UserDashboard/>) : (<Navigate to="/login" />)} />
        <Route path='/usernotification' element={<UserNotifications/>} />
      </Routes>
    </div>
  )
}
