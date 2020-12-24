import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items:center;
    flex-direction:row;
    justify-content:center;
    background-color: #FFFFFF;
    padding:40px;

    @media (max-width: 1010px) {
      flex-direction:column;        
  }
`

export const Content = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    background-color: #f5f5f5;
    padding:20px;
    width:990px;
    height:100%; 
    border-radius:9px;

    @media (max-width: 1010px) {
      width:100%; 
      height:100%; 
  }
`

export const ContentBox = styled.div`
    display: flex;
    flex-direction:column;
`

export const Box = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:30px;
    width:100%;
    padding:0 60px;

    @media (max-width: 1010px) {
      flex-direction:column;      
      padding:0px;  
  }
`

export const InputArea = styled.textarea`
   width:830px;
   height:200px;
   padding:10px;
   border:0;
   color:black;
   border-radius:9px;
   background-color:#FFFFFF;
   margin-bottom:10px;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

   @media (max-width: 1010px) {
        width:90%;
       
  }
`




