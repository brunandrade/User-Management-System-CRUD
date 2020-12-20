import React from 'react'
import styled from 'styled-components'
interface Props{
  title:string;
}

const Title = styled.p`
    font-family: Arial,source-code-pro, Roboto, Menlo, Monaco, Consolas, "Courier New";
    font-size:24px;
    font-weight: bold;
    color: #1B263B;

    @media (max-width: 618px) {
        align-self:center;
             
  }
`


const Button: React.FC<Props> = ({title})=>{
    return(
        <Title>{title}</Title>
    );
}

export default Button;