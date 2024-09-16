import React from 'react'
import { PiFilmSlateFill } from "react-icons/pi";
import { LuTv } from "react-icons/lu";
import { FaBookBookmark } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { Box,Typography } from '@mui/material';
import { TiHome } from "react-icons/ti";

const navLinks = [
    {
        name:"Home",
        icon: TiHome,
        link: '/'
    },
    {
        name:"Movies",
        icon: PiFilmSlateFill,
        link: '/movies'
    },
    {
        name:"TvSeries",
        icon: LuTv,
        link: '/tv-series'
    },{
        name:"BookMark",
        icon: FaBookBookmark,
        link: '/bookmark'
    },
];
// console.log(HomeIcon)
const Sidebar : React.FC = () => {
    const {pathname} = useLocation();
  return (
    <Box sx={
        {
            backgroundColor:'161d2f',
            padding:2,
            display:"flex",
            borderRadius:2,
            flexDirection:{
                xs:"row",
                lg:"column",
            },
            alignItems:"center",
            justifyContent:"space-between",
            width:{
                sm:"100%",
                lg:200,
            }
        }
    }>
        <Box  sx={
            {
                display: "flex",
                flexDirection: {
                    xs:"row",
                    lg:"column",
                },
                gap:5,
                alignItems:{
                    xs:"center",
                    ls:"start"
                },
                width:"100%",
            }
        }> 
            <Box sx={
                {
                    display:{
                        xs:"hidden",
                    }
                }
            }>
                <Typography variant='h5' component="h1" my={2} fontWeight={400} fontSize={18} >
                    Spotify
                </Typography>
            </Box>

            <Box sx={
                {
                    py:{
                        xs:"0px",
                        ls:"16px"
                    },
                    display:"flex",
                    flexDirection:{
                        xs:"row",
                        lg:"column"
                    },
                    gap:4,
                }
            }>
                {
                    navLinks.map((item)=> {
                        return(
                        <Link key={item.name} to={item.link} style={{ textDecoration : "none"}}>
                            <Box sx={{

                                display:"flex",
                                alignItems:"center",
                                gap:2,
                                color:"white",
                                textDecoration:"none"
                            }}>
                                
                                <item.icon />

                                <Box sx={
                                    {
                                        display:{
                                            xs:"block",
                                            md:"hidden"
                                        },
                                    }
                                }>
                                    <Typography >{item.name}</Typography>
                                </Box>
                            </Box>
                        </Link>)
                    })
                }

            </Box>

        </Box>
    </Box>
  )
}

export default Sidebar