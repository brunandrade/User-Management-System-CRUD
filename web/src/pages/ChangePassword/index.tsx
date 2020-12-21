import React from 'react';
import { FiUser } from 'react-icons/fi';
import Title from '../../components/Title'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import {Link} from 'react-router-dom'


import {Container, Content, Header,Body} from './styles'


export default function ChangePassword(){
    return(
        <Container>
            <Content>
                <Header>
                <FiUser size={34} color="#1B263B"/>     
                <Title title="User Management System" color={false}/>
                </Header>
                <Body>
                    <Label label="Email:"/>
                    <Input placeholder="Digite seu melhor email."/>

                    <Label label="Senha:"/>
                    <Input placeholder="Digite sua senha."/>  

                    <Label label="Confimre a nova Senha:"/>
                    <Input placeholder="Digite sua senha."/>                            
                </Body> 

                <Link to='/'>
                 <Button text="Redefinir Senha"/>
                </Link>  
               
                <Link to='/Register'>
                    <LinkButton text="Não possui Cadastro? Clique aqui!"/>  
                </Link>                       
            </Content>          
        </Container>
    );
}