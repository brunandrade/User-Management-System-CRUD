import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
    background-color: #FFFFFF;
    
    @media (max-width: 1010px) {
      flex-direction:column;        
  }
`

export const FilterContainer = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    background-color: #f5f5f5;
    padding:15px;
    height:100%;
    width:100%;


    @media (max-width: 1010px) {
      flex-direction:column;        
  }
`
export const Filter = styled.div`
    display: flex;
    align-items:center;
    margin-top:20px;
    flex-direction:row;
    justify-content:space-between;
    padding:10px;
    height:100%;
    width:100%;
    flex-wrap: wrap;
`

export const FilterBox = styled.div`
    display: flex;
    flex-direction:column;
    margin-bottom:20px;

`

export const Content = styled.div`
    display: flex;
    flex-direction:column;
    height:100%;
    width:100%;

`
export const ContentHeader = styled.tr`
    background-color: #415A77;
    width:100%;
    height:40px;
 
`

export const ContentTitle = styled.td`
 
    color: white;
    font-size:16px;   
    padding:10px;
`

export const Result = styled.td`
    color: black;
    font-size:16px;   
    padding:0 10px;
`

export const Table = styled.table`
    width:100%;
`
export const ContentResult = styled.tr`
    width:100%;
    height:40px;
    padding:20px;
   
`

export const DetailButton = styled.button`
    align-self:center;
    width:100px;
    height:30px;
    background-color:#E3B23C;
    color: black;
    font-size:14px;
    border:0;
    cursor: pointer;
    border-radius:9px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    margin-top:5px;
    &:hover{
        opacity:0.9;
    }
`


