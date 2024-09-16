import React from 'react';
import { Box, Drawer ,List , ListItem, ListItemButton , ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import './App.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from './assests/Logo.png'
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";
import { RiPlayListAddFill } from "react-icons/ri";
import { FcLikePlaceholder } from "react-icons/fc";

 


const links = [
  {
    name:"Home",
    path:'/',
    icon: FaHome,
  },
  {
    name:"Search",
    path:'/search',
    icon:CiSearch,
  },
  {
    name:"Your Library",
    path:'/library',
    icon:BiLibrary,
  },
  {
    name:"Create Playlist",
    path:'/library',
    icon:RiPlayListAddFill,
  },
  {
    name:"Liked Songs",
    path:'/library',
    icon:FcLikePlaceholder,
  },
];


const drawerWidth = 239


function App() {
  // const {pathname} = useLocation();
  return (
    <Box sx={{backgroundColor:"#161616", color:"white"}}>
        <Drawer sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor:"#161616",
            color:"white"
          },
        }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar sx={{
            display:"flex",
            justifyContent:"start",
            alignItems:"center"
          }}><img src={Logo} alt='Logo' width={119} height={35}/></Toolbar>

          {links.map((link,i) => {
              return <ListItem  key={i}>
                {link.name}
              </ListItem>
            })}
        </Drawer>

        <Toolbar />
        <Box>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi libero deserunt tempore incidunt ex voluptates doloribus ab ullam porro molestias assumenda, nisi in rem fugit dolor a perspiciatis id non.
        </Box>
    </Box>
  );
}

export default App;

{/* <RouterProvider router={router} /> */}


// if(i !== 2){
//   return <>
//     <ListItem key={i} disablePadding>
//       <ListItemButton>
//         {/* <ListItemIcon>
          
//         </ListItemIcon> */}
//         <p>{link.name}</p>
//         <ListItemText primary={link.name} />
//       </ListItemButton>
//     </ListItem>
//   </>
