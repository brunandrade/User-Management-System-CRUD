import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    background-color: #282c34;
    height:100vh;

    @media (max-width: 618px) {
        height:100%;   
        padding:10px;           
  }
`


export const Content = styled.div`
    display: flex;
    flex-direction:column;
    padding:15px;
    align-items:center;
    justify-content:center;
    background-color: #E3B23C;
    width:600px;
    height:100%x;
    border-radius:9px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 618px) {
        width:80%;              
  }
`


export const Header = styled.div`
    display: flex;
    flex-direction:row;   
    justify-content:center;
    align-items:center;
    margin-bottom:30px;

    @media (max-width: 618px) {
        width:80%;
        flex-direction:column;   
  }
   
`
export const Body = styled.div`
    display: flex;
    flex-direction:column;   
    align-items:flex-start;
    margin-bottom:10px;

    @media (max-width: 618px) {
        width:80%;
        
  }
`


