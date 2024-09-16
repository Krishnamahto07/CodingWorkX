import { Box } from '@mui/material';
import React, { ReactNode } from 'react'
import Sidebar from '../components/Sidebar';

interface LayoutProps{
    children? : ReactNode;
}

const Layout = ({ children} : LayoutProps) => {
  return (
    <Box sx={{
        backgroundColor:"#10141F",
        display:"flex",
        flexDirection:{
            xs:"column",
            lg:"row",
        },
        color:"white",
        padding:3,
        gap:3,
        overflow:"hidden",
        height:"100vh"
    }}>
        {/* left Side bar */}
        <Sidebar />

        {/* Right side Box for main content */}
        <Box sx={{
            width:"100%",
            overflow:"hidden"
        }}>
            {children}
        </Box>
    </Box>
  )
}

export default Layout