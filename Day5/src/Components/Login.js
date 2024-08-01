import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import loginimg from '../Assets/loginimg.png';
import { useStateContext } from '../Context/ContextProvider';
import '../StylingComponents/Login.css';
export default function Login({toggle}) {
    useEffect(()=>{
        document.title = 'Login';
    })

    const {setuserdetails} = useStateContext();
    const [showPassword, setShowPassword] = useState(false);
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [type, settype] = useState('');
    const [receivedadata,setreceivedata] = useState({})

  const handleChange = (event) => {
    settype(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
};


const navigate = useNavigate()
function nextpage()
{
    if(type === 'Admin'){
        navigate('/admindashboard')
    }
    else if(type === 'User'){
        navigate("/userdashboard")
    }
    
}

const change = async(v)=>{
    v.preventDefault();
    console.log(email)
    console.log(password)
    
    // axios.get(`http://localhost:5000/user?email=${email}`)
    // .then(res=>{
            //     if(res.data.length>0){
                //         toast.success('Login Successfull!',{duration:2000});
                //         toggle()
                //         setTimeout(nextpage,500)
                //     }
                //     else{
                    //         toast.error("Login Unsuccessful\nInvalid username or password")
                    //     }
        // })
        // .catch(err=>{console.log(err)})
    //     try{

    //         const { data: users } = await axios.get(`http://localhost:8080/user?email=${email}`);
    //         const user = users[0];
    //         if(user) {
    //             if (user.password === password) {
    //                 toast.success('Login Successfull!',{duration:2000});
    //                 setuserdetails(user)
    //                 toggle()
    //                 setTimeout(nextpage,500)
    //             } else {
    //                 toast.error('Invalid password', { duration: 2000 });
    //             }
    //         }
    //         else {
        //             toast.error('Invalid email', { duration: 2000 });
        //         }
        //     }
    //     catch(err) {
        //         console.error(err);
        //         toast.error('An error occurred', { duration: 2000 });
        //     }
        if(type === 'User'){
            axios.get(`http://localhost:8080/user/validate/${email}/${password}`)
            .then(res=>{
                if(res.data.length>0){
                console.log(res.data[0])
                setuserdetails(res.data[0])
                toast.success('Login Successfull!');
                setTimeout(nextpage,2000)
            }
            else{
                toast.error("Login Unsuccessful\nInvalid User Credentials")
            }
        })
        .catch(err=>{console.log(err)})
    }
        else if(type === 'Admin'){
            axios.get(`http://localhost:8080/admin/validate/${email}/${password}`)
        .then(res=>{
            if(res.data.length>0){
                console.log(res.data[0])
                setuserdetails(res.data[0])
                toast.success('Login Successfull!');
                setTimeout(nextpage,2000)
            }
            else{
                toast.error("Login Unsuccessful\nInvalid Admin Credentials")
            }
        })
        .catch(err=>{console.log(err)})
}

    
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
                    <div style={{paddingBottom:'20px'}}>
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
                    <div style={{paddingBottom:'20px'}}>

                    <Box sx={{ maxWidth: 300}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type of Login</InputLabel>
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
                    </div>
                    <button className='loginbtn'>Sign in</button>
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
