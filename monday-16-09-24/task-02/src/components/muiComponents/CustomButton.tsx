import styled from '@emotion/styled'
import { Button, ButtonProps } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const CustomButton:React.FC<Props> = ({children}) => {
    const Btn = styled(Button)<ButtonProps>(()=>(
        {
            background:"#82b1ff",
            color:"black",
            "&:hover":{background:"#448aff",
                color:"white",
            }
        }
    ));
  return (
    <>
        <Btn>{children}</Btn>
    </>
  )
}

export default CustomButton