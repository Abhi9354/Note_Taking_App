import React, { useState,useRef } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';
import { NavLink } from 'react-router-dom'
import { Route, Routes } from "react-router"
import { Dashboard } from '../../notes/pages/dashboard';

export const Login = () => {
  const[message,setMessage]=useState('');
  const emailRef=useRef();
  const passRef=useRef();
  const doLogin=async()=>{
            const userInfo={
              'email':emailRef.current.value,
              'password':passRef.current.value
            }
            try{
            const response=await apiClient.post(process.env.REACT_APP_LOGIN,userInfo);
            setMessage(response.data.message);
          console.log("userinfo ",userInfo)
          
          

        }
            catch(err){
              setMessage("login Fail");
              console.log(err);
            }
  }
  return (
    <Container>
    <p>{message}</p>
<TextField inputRef={emailRef} id="outlined-basic" label="Email" variant="outlined" />
<TextField inputRef={passRef} id="outlined-basic" label="Password" variant="outlined" />
<Button onClick={doLogin} variant="contained"> <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/></Routes><NavLink to="/dashboard">Login</NavLink></Button>
</Container>
  )
}


