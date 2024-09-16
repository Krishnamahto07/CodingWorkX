import React, { useState } from 'react';
import './App.css';
import {  Box , Button, TextField , Grid2 } from '@mui/material';
import Navbar from './components/Navbar';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Btn from "./components/muiComponents/CustomButton"
import ContainerBox from './components/muiComponents/ContainerBox';
import MyContainer from './components/muiComponents/MyContainer';
// import MyInputBox from './components/muiComponents/MyInputBox'
import ComplexGrid from './components/muiComponents/GridBox'
import CustomButton from './components/muiComponents/CustomButton';
import styled from 'styled-components';

function App() {

  

  return (
    // <MyContainer>
    //   <Grid2 container spacing={5} sx={{
    //       p:2,
    //       mt:5,
    //       mx:"auto",
    //       border:1,
    //       width:{
    //         xs:"100%",
    //         md:"100%",
    //         lg:"60%"
    //       },
    //       bgcolor:{
    //         xs:"white",
    //         md:"greenyellow",
    //         lg:"skyblue"
    //       },
    //       display:"grid",

    //     }} >
    //     <TextField type='email'  label="Enter your email" variant='outlined' value={email} onChange={emailHandler} />
    //     <TextField label="Enter your password" variant='outlined' value={password} onChange={(e)=>setPassword(e.target.value)}/>

    //   </Grid2>
    // </MyContainer>

   

    <>
      <ResponsiveAppBar />
    </>
    
  );
}

export default App;

{/* <MyInputBox valueProp={val} onChangeProp={setVal} textProp={"Enter Your Email"} /> */}
       {/* <MyInputBox valueProp={val} textProp="Enter Your email" onChangeProps={inputHandler}/> */}
       
      {/* <Box sx={{
        display:Grid2,
      }}>
        <TextField label="Enter your email" variant='outlined' />
      </Box> */}