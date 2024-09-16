import React,{useState} from 'react'
import {Box, Grid2, TextField , Button} from "@mui/material"
import styled from 'styled-components';
function Login() {
  const [email , setEmail] = useState<string>('');
  const [password , setPassword] = useState<string>('');

  const emailHandler = ( e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const passwordHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.target.value);
  }

  const MyInputBox = styled(TextField)(()=>({
    backgroundColor:"white",
    borderRadius:"50px",
    color:"black",
    border:"none",
    "&:hover":{
      backgroundColor:"skyblue",
    }
  }))
  return (
     <Box>
      <Grid2 container spacing={5} sx={{
          p:2,
          mt:5,
          mx:"auto",
          border:1,
          width:{
            xs:"100%",
            md:"100%",
            lg:"60%"
          },
          bgcolor:{
            xs:"white",
            md:"greenyellow",
            lg:"skyblue"
          },
          display:"grid",
        }} >
        <TextField type='email'  label="Enter your email" variant='outlined' value={email} onChange={emailHandler} />
        <TextField type='password' label="Enter your password" variant='outlined' value={password} onChange={passwordHandler}/>
        <Button variant='outlined' color='secondary' >simple Button</Button>
      </Grid2>
    </Box>
  )
}

export default Login