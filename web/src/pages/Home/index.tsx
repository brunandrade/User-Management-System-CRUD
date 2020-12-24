import React from 'react';
import NavBar from '../../components/NavBar'
import {Container, Content} from './styles'
import { FiUsers, FiSave, FiList } from 'react-icons/fi';

export default function Home(){
    
    return(      
        <>
        <NavBar/>
          <Container>
              <Content>
                    <FiUsers size={34} color="#1B263B"/>   
                    <h2>Lista de Usuários</h2>                    
              </Content>    

              <Content>
                    <FiList size={34} color="#1B263B"/>   
                    <h2>Lista de HeadOffices</h2>                    
              </Content>

              <Content>
                    <FiSave size={34} color="#1B263B"/>   
                    <h2>Adicionar HeadOffice</h2>                    
              </Content>              

          </Container>
          
        </>      
       
    );

}