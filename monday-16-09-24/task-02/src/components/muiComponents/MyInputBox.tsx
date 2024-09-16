import { TextField } from "@mui/material"
import { useState } from "react";
import styled from "styled-components"

interface MyInputBoxProps{
    textProp : string,
}
const MyInputBox:React.FC<MyInputBoxProps> = (props) =>{

    const [data , setData] = useState<string>('');
    const { textProp } = props;

    const changeHandler = ( e:React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value);
    }

    const MyInput = styled(TextField)(()=>(
        {
            background:"white",
            color:"black"
        }
    ))

    return <MyInput value={data} label={textProp} onChange={changeHandler} sx={{outline:"none"}} />
}
export default MyInputBox;