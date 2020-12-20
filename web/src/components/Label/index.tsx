import React from 'react'
import styled from 'styled-components'

interface Props{
  label:string;
}

const LabelCompnenet = styled.p`
    font-family: Arial, source-code-pro, Roboto, Menlo, Monaco, Consolas, "Courier New";
    font-size:16px;
    font-weight: bold;
    color: #423E37;
    margin-bottom:5px;
`


const Label: React.FC<Props> = ({label})=>{
    return(
        <LabelCompnenet>{label}</LabelCompnenet>
    );
}

export default Label;