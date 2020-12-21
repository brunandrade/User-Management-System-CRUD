import React from 'react';
import NavBar from '../../../components/NavBar'
import Label from '../../../components/Label'
import Input from '../../../components/InputWhite'
import Button from '../../../components/LargeButton'
import {Container, Filter, FilterContainer, FilterBox, Content, ContentHeader, ContentTitle} from './styles'

export default function UserList(){
    
    return(      
        <>
        <NavBar/>
          <Container>
            <FilterContainer>
                <h2>Usuários</h2>
                <Filter>
                  <FilterBox>
                    <Label label="Nome:"/>
                    <Input placeholder="Digite o nome completo do usuário."/>
                  </FilterBox>

                   <FilterBox>
                    <Label label="Email:"/>
                    <Input placeholder="Digite o email do usuário."/>
                  </FilterBox>    

                   <FilterBox>
                    <Label label="CPF:"/>
                    <Input placeholder="Digite o CPF do usuário."/>
                  </FilterBox>    

                   <FilterBox>
                    <Label label="Estado:"/>
                    <Input placeholder="Escolha o estado do usuário."/>
                  </FilterBox>    

                  <FilterBox>
                    <Label label="Cidade:"/>
                    <Input placeholder="Escolha a cidade do usuário."/>
                  </FilterBox>  

                  <FilterBox>
                    <Label label="HeadOffice:"/>
                    <Input placeholder="Escolha o HeadOffice do usuário."/>
                  </FilterBox>       

                  <FilterBox>
                    <Label label="Perfil:"/>
                    <Input placeholder="Escolha o perfil do usuário."/>
                  </FilterBox>  

                  <FilterBox>
                    <Label label="Cargo:"/>
                    <Input placeholder="Escolha o cargo do usuário."/>
                  </FilterBox>  

                   <FilterBox>
                    <Label label="Telefone:"/>
                    <Input placeholder="Digite o telefone do usuário."/>
                  </FilterBox>    

                  <Button text="Buscar"/>               
                </Filter>

            </FilterContainer>   

            <Content>
              <ContentHeader>
              
                 <ContentTitle>Id</ContentTitle>
                 <ContentTitle>Nome</ContentTitle>
                 <ContentTitle>CPF</ContentTitle>
                 <ContentTitle>HeadOffice</ContentTitle>
                 <ContentTitle>Perfil</ContentTitle>
                 <ContentTitle>Cargo</ContentTitle>
                 <ContentTitle></ContentTitle>
               
              </ContentHeader>
            </Content>

          </Container>
        </>      
       
    );

}