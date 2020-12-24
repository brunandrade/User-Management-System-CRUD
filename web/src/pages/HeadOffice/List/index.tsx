import React from 'react';
import NavBar from '../../../components/NavBar'
import Label from '../../../components/Label'
import Input from '../../../components/InputWhite'
import LargeButton from '../../../components/LargeButton'
import {Container, Filter, FilterContainer, FilterBox,Table, DetailButton, ContentHeader, ContentTitle, ContentResult, Result} from './styles'

export default function HeadOfficerList(){
    
    return(      
        <>
        <NavBar/>
          <Container>
            <FilterContainer>
                <h2>HeadOfficers</h2>
                <Filter>
                  <FilterBox>
                    <Label label="Nome:"/>
                    <Input placeholder="Digite o nome do HeadOffice."/>
                  </FilterBox>   

                   <FilterBox>
                    <Label label="CNPJ:"/>
                    <Input placeholder="Digite o CNPJ do HeadOffice."/>
                  </FilterBox>    

                   <FilterBox>
                    <Label label="Estado:"/>
                    <Input placeholder="Escolha o estado do usuário."/>
                  </FilterBox>    

                  <FilterBox>
                    <Label label="Cidade:"/>
                    <Input placeholder="Escolha a cidade do usuário."/>
                  </FilterBox>  
                  <LargeButton text="Buscar"/>               
                </Filter>

            </FilterContainer>   

            <Table>
              <ContentHeader>              
                  <ContentTitle>Id</ContentTitle>
                  <ContentTitle>Nome</ContentTitle>
                  <ContentTitle>CPF</ContentTitle>
                  <ContentTitle>HeadOffice</ContentTitle>
                  <ContentTitle>Perfil</ContentTitle>
                  <ContentTitle>Cargo</ContentTitle>
                  <ContentTitle>Detalhe</ContentTitle>           
            </ContentHeader>
                <ContentResult>
                  <Result>sdfsdfsdfsdfsdf</Result>
                  <Result>Jill</Result>
                  <Result>Jill</Result>
                  <Result>Jill</Result>
                  <Result>Jill</Result>
                  <Result>Jill</Result>
                  <DetailButton>Detalhe</DetailButton>
                 
                </ContentResult>
                <ContentResult>
                <Result>Jill</Result>
                  <Result>Jill</Result>
                  <Result>Jill</Result>
                  <Result>Jill</Result>
                  <Result>Jill</Result>
                  <Result>Jill</Result>
                  <DetailButton>Detalhe</DetailButton>
                </ContentResult>
          </Table>     
          </Container>
        </>      
       
    );

}