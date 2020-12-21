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
export const ContentHeader = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;   
    background-color: #415A77;
    padding:20px;
    width:100%;
    height:40px;
 
`

export const ContentTitle = styled.p`
    color: white;
    font-size:16px;   
    padding:10px;
`

export const Result = styled.p`
    color: black;
    font-size:16px;   
    padding:10px;
   
`
export const ContentResult = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;   
    padding:20px;
    width:100%;
    height:40px;
 
`

