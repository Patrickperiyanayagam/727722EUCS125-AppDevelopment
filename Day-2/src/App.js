import React, { useState } from 'react'
import Login from './Login'
import Registration from './Registration'

export default function App() {
  const [login,setlogin] = useState(false)

  const toggle = ()=>{
    setlogin(!login)
  }
  return (
    <div>
      {login ? <Login toggle={toggle}/> : <Registration toggle={toggle}/>}
    </div>
  )
}
