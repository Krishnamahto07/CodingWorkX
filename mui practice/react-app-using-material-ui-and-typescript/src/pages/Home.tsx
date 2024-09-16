import React, { SetStateAction, useState } from 'react'
import Layout from '../Layout'
import { Paper ,Box, InputBase, InputAdornment } from '@mui/material'
import SearchIcon from "../assets/icons/icon-search.svg"

const Home : React.FC = () => {
  const [search , setSearch] = useState<string>("");
  const searchHandler = (e: { target : {value : SetStateAction<string>}}) =>{
    setSearch(e.target.value);
  }
  return (
    <Layout>
      <Box>
        <Paper component="form" 
          sx={
            {
              display:"flex",
              alignItems:"center",
              borderRadius:"default",
              p:1,
              bgcolor:"#10141f",
              border:"none"
            }
          }>
            <InputBase 
              placeholder='Search for movies or TV series' 
              sx={
                {
                  ml:1,
                  flex:1,
                  color:"white",
                  border:"none"
                }
              }
              value={search}
              onChange={searchHandler}
              startAdornment={
                <InputAdornment position='start'>
                  <img src={SearchIcon} alt='search icon' width={20} height={20}/>
                </InputAdornment>
              }
            />
          </Paper>
            
      </Box>
    </Layout>
  )
}

export default Home