import React from 'react'
import styled from 'styled-components'

interface Props{
  placeholder:string;
}

const InputComponent = styled.input`
   width:350px;
   height:40px;
   padding:10px;
   border:0;
   color:black;
   border-radius:9px;
   background-color:#EAE6E5;
   margin-bottom:10px;
   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.12);

   @media (max-width: 618px) {
        width:90%;
       
  }
`


const Input: React.FC<Props> = ({placeholder})=>{
    return(
        <InputComponent placeholder={placeholder}/>
    );
}

export default Input;