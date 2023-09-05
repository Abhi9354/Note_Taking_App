 import React from 'react'
import {Box} from '@mui/material'
import { Typography } from '@mui/material'
import { Login } from '../components/Login'
import { Register } from '../components/Register'

 export const UserPage = () => {
   return (<>
   <Typography>Register</Typography>
    <Box> <Register/></Box>
     <Box><Login/></Box>
     
     </>
   )
 }
 
 
 