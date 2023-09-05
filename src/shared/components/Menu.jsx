import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (<>
  
  <Button variant='contained' size="large"><NavLink to="/home"> Home </NavLink></Button><br />
  <Button variant='contained' size="large"><NavLink to="/add"> Add Note</NavLink></Button><br />
  <Button variant='contained' size="large"><NavLink to="/delete"> Delete Note </NavLink></Button><br />
  <Button variant='contained' size="large"><NavLink to="/view-all"> View Note </NavLink></Button><br />
  <Button variant='contained' size="large"><NavLink to="/search"> Search Note </NavLink></Button><br />
  <Button variant='contained' size="large"><NavLink to="/update"> Update Note </NavLink></Button><br />
  </>)
}


