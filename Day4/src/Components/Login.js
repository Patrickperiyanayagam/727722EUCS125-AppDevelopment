import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import loginimg from '../Assets/loginimg.png';
import '../StylingComponents/Login.css';
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const navigate = useNavigate()
  function nextpage()
    {
        if(email.includes("@admin.com")){
            navigate('/admindashboard')
        }
        else{
            navigate("/userdashboard")
        }

    }

  const change = (v)=>{
    v.preventDefault();
        console.log(email)
        console.log(password)
        axios.get(`http://localhost:5000/user?email=${email}&&password=${password}`)
        .then(res=>{
            if(res.data.length>0){
                toast.success('Login Successfull!',{duration:2000});
                setTimeout(nextpage,500)
            }
            else{
                toast.error("Login Unsuccessful\nInvalid username or password")
            }
        })
        .catch(err=>{console.log(err)})
  }
    return (
        <>
    <div className='loginbody'>
        <div className='loginform'>
            <div className='loginformdiv'>
                <form onSubmit={change}>
                    <h1>Sign in to Logzz.</h1>
                    <h2>New here? <span onClick={()=>{navigate('/signup')}}>Create an account</span></h2>

                    <p>Email</p>
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'300px'}} value={email} onChange={(event)=>{setemail(event.target.value)}} required/>
                    <p>Password</p>
                    <div style={{paddingBottom:'30px'}}>
                    <FormControl sx={{width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        sx={{width:'300px'}} value={password} onChange={(event)=>{setpassword(event.target.value)}} required/>
                        </FormControl>
                    </div>
                    <button className='loginbtn' >Sign in</button>
                </form>

            </div>
        </div>
        <div className='loginimg'>
            <img src={loginimg} alt='loginimage'></img>
        </div>
    </div>
    <Toaster
    position="top-center"
    reverseOrder={false}
    />
    </>
    )
}
