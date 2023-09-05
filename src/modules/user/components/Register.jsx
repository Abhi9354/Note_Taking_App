import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';

export const Register = () => {
    const[message,setMessage]=useState('')
    const emailRef=useRef();
    const passRef=useRef();
    const nameRef=useRef();
    const phoneRef=useRef();



const doRegister=async()=>{
    const userInfo={
        'email':emailRef.current.value,
        'password':passRef.current.value,
        'name':nameRef.current.value,
        'phone':phoneRef.current.value,
    }

    try{
const response =await apiClient.post(process.env.REACT_APP_REGISTER,userInfo);
setMessage(response.data.message);
console.log("response",response)
    console.log("userInfo",userInfo);}
    catch(err){
        setMessage("regisetr fail....")
        throw err;
    }
}
    return (
        <Container>
            <p>{message}</p>
        <TextField inputRef={emailRef} id="outlined-basic" label="Email" variant="outlined" />
        <TextField inputRef={passRef} id="outlined-basic" label="Password" variant="outlined" />
        <TextField inputRef={nameRef} id="outlined-basic" label="Name" variant="outlined" />
        <TextField inputRef={phoneRef} id="outlined-basic" label="Phone" variant="outlined" />
        <Button onClick={doRegister} variant="contained">Register</Button>
        </Container>
           )
}

