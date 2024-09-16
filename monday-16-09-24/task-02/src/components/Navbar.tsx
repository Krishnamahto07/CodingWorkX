import React from 'react'
import { AppBar,Container , Toolbar , Typography} from '@mui/material'
import AudiotrackRoundedIcon from '@mui/icons-material/AudiotrackRounded';

function Navbar() {
  return (
    <AppBar position='static' sx={{bgcolor:"blue" }}>
        <Container maxWidth={"xl"}>
          <Toolbar disableGutters>
            <AudiotrackRoundedIcon sx={{display:{ xs:"none" , md:"flex" }}}/>

            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>

            
          </Toolbar>
            
        </Container>
    </AppBar>
  )
}

export default Navbar