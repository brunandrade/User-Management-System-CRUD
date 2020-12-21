import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

export const Nav = styled.nav`
    background-color: #282c34;
    height:80px;
    display: flex;
    justify-content:space-between;
    padding:0.5rem calc((100vw - 1000px)/2);
    z-index:10;

`

export const NavLink = styled(Link)`
    color:#fff;
    display: flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 65px;
    cursor: pointer;
    font-family: Arial, source-code-pro, Roboto, Menlo, Monaco, Consolas, "Courier New";
    font-size:16px;
    opacity:0.8;

    &:hover{
        opacity:0.6;
    }

`

export const NavMenu= styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    margin-right: --24px;
    cursor: pointer;

  @media screen and (max-width: 1010px){
    display:none;
  }
`
export const NavMenuVertical= styled.div`
    display:none;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    background-color: #282c34;;
    position:fixed;
    top:0;
    right:0;
   
    height: 100vh;
    width:300px;
    padding-top:3.5rem;
   

  @media screen and (max-width: 1010px){
    display:block;
  }
`

export const NavLinkBtn = styled(Link)`
    color:#1B263B;
    background-color:#E3B23C;
    display: flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 35px;
    border-radius:5px;
    width:80px;
    cursor: pointer;
    font-family: Arial, source-code-pro, Roboto, Menlo, Monaco, Consolas, "Courier New";
    font-size:16px;
    opacity:0.8;

    &:hover{
        opacity:0.6;
    }

    @media screen and (max-width: 1010px){
        margin-left:1rem;  
        width:150px;  
  }

`

export const Bars= styled(FaBars)`
    display: none;
    color:#E3B23C;


  @media screen and (max-width: 1010px){
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 75%);
    font-size:1.8rem;
    cursor:pointer;
  }
`

export const Close= styled(FaTimes)`
    display: none;
    color:#E3B23C;

  @media screen and (max-width: 1010px){
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 75%);
    font-size:1.8rem;
    cursor:pointer;
  }
`

