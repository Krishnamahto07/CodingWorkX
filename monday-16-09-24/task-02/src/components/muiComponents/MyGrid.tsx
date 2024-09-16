import { Grid2 } from '@mui/material';
import React, { ReactNode } from 'react'
interface MyGridProps{
    children : ReactNode,
}
const MyGrid:React.FC<MyGridProps> = (props) => {
    const {children} = props;
  return (
    // <div></div>
    <Grid2>
        {children}
    </Grid2>
  )
}

export default MyGrid