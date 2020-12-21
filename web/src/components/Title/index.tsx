import React from 'react'
import styled from 'styled-components'

interface Props{
  title:string;
  color: boolean;
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


const WhiteTitle = styled.p`
    font-family: Arial,source-code-pro, Roboto, Menlo, Monaco, Consolas, "Courier New";
    font-size:24px;
    font-weight: bold;
    color: white;

    @media (max-width: 618px) {
        align-self:center;
             
  }
`


const TitleComponent: React.FC<Props> = ({title, color})=>{
    return(
      <>
        {color === true ?  <WhiteTitle>{title}</WhiteTitle>: <Title>{title}</Title>}     
      </>
       
    );
}

export default TitleComponent;