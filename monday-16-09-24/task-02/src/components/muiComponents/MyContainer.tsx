import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface MyContainerProps {
    children : ReactNode
};
const MyContainer:React.FC<MyContainerProps> = ({children}) => {
    const MyBox = styled(Box)(()=>(
        {
            width:"100vw",
            height:"100vh",
            overflow:"hidden",
            backgroundColor:"#cfd8dc"
        }
    ));

  return (
    <>
        <MyBox>{children}</MyBox>
    </>
  )
}

export default MyContainer