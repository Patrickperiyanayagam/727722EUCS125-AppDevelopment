import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import '../StylingComponents/SignUp.css';
export default function SignUp() {
    useEffect(()=>{
        document.title = 'SignUp';

    })
    const [email,setemail] = useState('');
    const [name,setname] = useState('');
    const [password,setpassword] = useState('');
    const [type, settype] = useState('');
    const [passwordError, setPasswordError] = useState("");

  const handleChange = (event) => {
    settype(event.target.value);
  };
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const validatePassword = (password) => {
    if (passwordRegex.test(password)) {
      setPasswordError("");
      return true;
    } else {
      setPasswordError("Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return false;
    }
  };
    const link2 = useNavigate();
    async function change(v){
  
        v.preventDefault();
        console.log(email)
        console.log(name)
        console.log(password)
        console.log(type)
        // toast.success('Successfully Created an Account!',{duration:3000})

        if(type === 'User' &&  passwordError === "")
        {
            const values = {"username":name,"email":email,"password":password}
            axios.post('http://localhost:8080/user/post',values)
            .then((data)=>{
                if(data.data === "exist"){
                    toast.error('Account alreay exist',{duration:1000});
                }
                else if(data.data === "saved"){
                    toast.success("Account created Successfully",{duration:800})
                    setTimeout(nextpage,1000)
                }
            })
            .catch((err)=>{console.log(err)})
        }
        else if(type === 'Admin' && passwordError === "")
        {
            const values = {"adminName":name,"adminEmail":email,"adminPassword":password}
            axios.post('http://localhost:8080/admin/post',values)
            .then((data)=>{
                if(data.data === "exist"){
                    toast.error('Account alreay exist',{duration:1000});
                }
                else if(data.data === "saved"){
                    toast.success("Account created Successfully",{duration:800})
                    setTimeout(nextpage,1000)
                }
            })
            .catch((err)=>{console.log(err)})
        }
        else if(type === "Transport Provider" && passwordError === ""){
            const values = {"tprovidername":name,"tprovideremail":email,"tproviderpassword":password}
            axios.post('http://localhost:8080/tprovider/post',values)
            .then((data)=>{
                if(data.data === "exist"){
                    toast.error('Account alreay exist',{duration:1000});
                }
                else if(data.data === "saved"){
                    toast.success("Account created Successfully",{duration:800})
                    setTimeout(nextpage,1000)
                }
            })
            .catch((err)=>{console.log(err)})
        }
    }
    function nextpage()
    {
        link2('/login')

    }
  return (
    <>
    <div className='signup_body'>
        <div className="signup_Outer">
            <div className='signup_segment1'>
                <p className='signup_text'><center>Join Us Today and Unlock a World of Possibilities in Logistics Management</center></p>
                <br/>
                <p className='signup_text'><center>Sign up now to experience seamless access to exclusive logistics features!</center></p>
            </div>
            <div className='signup_segment2'>
                <form onSubmit={change}>
                    <div className="signup_Inner">
                        <h3>Sign Up</h3>
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'270px'}} value={email} onChange={(event)=>{setemail(event.target.value)}} required/>
                        <TextField id="outlined-basic" label="Username" variant="outlined" sx={{width:'270px'}} value={name} onChange={(event)=>{setname(event.target.value)}} required/>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" sx={{width:'270px'}} onChange={(event)=>{setpassword(event.target.value);validatePassword(event.target.value);}} required/>
                        {passwordError && <p style={{fontSize:'10px',color:'red',textAlign:'center',width:'270px'}}>{passwordError}</p>}

                        <Box sx={{ minWidth: 260 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type of Registration</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type of Registration"
                            onChange={handleChange}
                            required
                            >
                            <MenuItem value={'Admin'}>Admin</MenuItem>
                            <MenuItem value={'User'}>User</MenuItem>
                            <MenuItem value={'Transport Provider'}>Transport Provider</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>

                        <label className='signup_read'><input type="checkbox"></input> I read and agree to <span>Terms and Conditions</span></label>
                        <button className='signup_button'>Sign Up</button>
                        <label className='signup_already'>Already Have an Account? <span><Link to='/login'>sign in</Link></span></label>
                        {/* <label className='signup_already'>Already Have an Account? </label> */}

                    </div>
                </form>
            </div>
        </div>
        </div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}
