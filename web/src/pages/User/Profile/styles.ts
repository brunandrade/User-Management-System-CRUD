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



