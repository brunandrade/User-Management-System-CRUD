import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
    background-color: #FFFFFF;
    padding:40px;

    @media (max-width: 1010px) {
      flex-direction:column;        
  }
`

export const Content = styled.div`
    display: flex;
    flex-direction:column;  
    background-color: #f5f5f5;   
    width:800px;
    height:500px;
    border-radius:9px;  
    margin-bottom:10px; 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`

export const ContentHeader = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;   
    background-color: #415A77;
    padding:10px;
    width:800px;
    height:40px;
    border-top-left-radius:9px;
    border-top-right-radius:9px;
    
`


