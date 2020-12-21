import React from 'react'
import styled from 'styled-components'

interface Props{
  text:string;
}
 const ButtonComponent = styled.button`
    width:350px;
    height:40px;
    background-color:#415A77;
    color: white;
    font-size:16px;
    border:0;
    cursor: pointer;
    border-radius:9px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin-bottom:20px;
    &:hover{
        opacity:0.9;
    }
`

const LargeButton: React.FC<Props> = ({text})=>{
    return(
      <ButtonComponent>{text}</ButtonComponent> 
    );
}

export default LargeButton;