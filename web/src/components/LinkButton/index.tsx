import React from 'react'
import styled from 'styled-components'

interface Props{
  text:string;
}

const LinkButtonComponent = styled.button`
    background:transparent;
    color: #415A77;
    font-size:16px;
    border:0;
    cursor: pointer;
    font-size:14px;
    margin-bottom:10px;
    text-decoration-line: underline;    
    &:hover{
        opacity:0.9;
    }
`

const LinkButton: React.FC<Props> = ({text})=>{
    return(
      <LinkButtonComponent>{text}</LinkButtonComponent>  
    );
}

export default LinkButton;