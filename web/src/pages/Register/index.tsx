import React from 'react';
import { FiUser } from 'react-icons/fi';
import Title from '../../components/Title'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import {Link} from 'react-router-dom'


import {Container, Content, Header,Body} from './styles'


export default function Register(){
    return(
        <Container>
            <Content>
                <Header>
                <FiUser size={34} color="#1B263B"/>     
                <Title title="User Management System" color={false}/>
                </Header>
                <Body>
                    <Label label="Name:"/>
                    <Input placeholder="Digite seu nome."/>

                    <Label label="CPF:"/>
                    <Input placeholder="Digite seu nome."/>

                    <Label label="Email:"/>
                    <Input placeholder="Digite seu melhor emai."/>  

                    <Label label="Estado:"/>
                    <Input placeholder="Digite seu nome."/>  

                     <Label label="Cidade:"/>
                    <Input placeholder="Digite seu nome."/>         

                     <Label label="HeadOffice:"/>
                    <Input placeholder="Digite seu nome."/>      

                    <Label label="Perfil:"/>
                    <Input placeholder="Digite seu nome."/>    

                     <Label label="Perfil:"/>
                    <Input placeholder="Digite seu nome."/>  

                     <Label label="Cargo:"/>
                    <Input placeholder="Digite seu nome."/>      
                </Body> 

                <Link to='/Home'>
                 <Button text="Cadastrar"/>
                </Link>  
               
                <Link to='/'>
                    <LinkButton text="Ja possui acesso? Clique Aqui!"/>  
                </Link>  
                
                                 
            </Content>          
        </Container>
    );
}