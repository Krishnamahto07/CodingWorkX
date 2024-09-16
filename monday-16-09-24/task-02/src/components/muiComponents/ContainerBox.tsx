import React, { ReactNode } from 'react'
import { Box,styled } from '@mui/material'

interface BoxProps{
    children : ReactNode
};

const ContainerBox:React.FC<BoxProps> = ({children}) => {
    const MyBox = styled(Box)(()=>(
        {
          backgroundColor:"skyblue",
          width:"100%",
          display:"flex",
          justifyContent:"space-around"
        }
      ))
  return (
    <MyBox>{children}</MyBox>
  )
}

export default ContainerBox