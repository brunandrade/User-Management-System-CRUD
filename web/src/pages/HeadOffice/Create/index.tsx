import React from 'react';
import NavBar from '../../../components/NavBar'
import Input from '../../../components/InputWhite'
import Label from '../../../components/Label'
import LargeButton from '../../../components/LargeButton'
import {Container, Content, Box, ContentBox, InputArea} from './styles'

export default function HeadOfficeCreate(){
    return(      
        <>
        <NavBar/>
          <Container>
            <Content>
                <h2>Adicionar HeadOffice</h2>
                <Box>
                  <ContentBox>
                    <Label label="Nome:"/>
                    <Input placeholder="Digite o nome completo do HeadOffice."/>
                  </ContentBox>
                  <ContentBox>
                    <Label label="CNPJ:"/>
                    <Input placeholder="Digite o CNPJ do HeadOffice."/>
                  </ContentBox>
                </Box>
                <Box>
                  <ContentBox>
                    <Label label="Cidade:"/>
                    <Input placeholder="Digite uma Cidade do HeadOffice."/>
                  </ContentBox>
                  <ContentBox>
                    <Label label="Estado:"/>
                    <Input placeholder="Digite o Estado do HeadOffice."/>
                  </ContentBox>                  
                </Box>
                <Box>
                  <ContentBox>
                    <Label label="Descrição:"/>
                    <InputArea placeholder="Digite o Descrição do HeadOffice."/>
                  </ContentBox>   
                </Box>
                <LargeButton text="Criar HeadOffice"/>      
            </Content>
          </Container>
        </>     
    );
}