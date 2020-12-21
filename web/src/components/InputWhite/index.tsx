import React from 'react'
import styled from 'styled-components'

interface Props{
  placeholder:string;
}

const InputComponentWhite = styled.input`
   width:350px;
   height:40px;
   padding:10px;
   border:0;
   color:black;
   border-radius:9px;
   background-color:#FFFFFF;
   margin-bottom:10px;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

   @media (max-width: 618px) {
        width:90%;
       
  }
`


const InputWhite: React.FC<Props> = ({placeholder})=>{
    return(
        <InputComponentWhite placeholder={placeholder}/>
    );
}

export default InputWhite;