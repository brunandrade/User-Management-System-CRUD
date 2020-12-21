import React, { useState } from 'react';
import Title from '../../components/Title'
import { FiUser, FiLogOut } from 'react-icons/fi';
import {Nav, NavLink, NavMenu, NavMenuVertical, NavLinkBtn, Bars, Close} from './styles'


  const NavBar: React.FC = ()=>{
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
      return(            
           <Nav>
                <NavLink to="/Home">
                    <FiUser size={34} color="white" />     
                    <Title title="UMS" color={true}/>
                </NavLink>
                <div onClick={handleClick}>
                    {click ? 
                    <>  
                    
                    <NavMenuVertical>
                    <Close/> 
                        <NavLink to="/Home" activeStyle={{opacity:'1', fontWeight:'bold'}}>
                            Home
                        </NavLink>
                        <NavLink to="/User/List" activeStyle={{opacity:'1'}}>
                            Usários 
                        </NavLink>
                        <NavLink to="/HeadOffice/List" activeStyle={{opacity:'1'}}>
                            HeadOfficers 
                        </NavLink>
                        <NavLink to="/HeadOffice/Create" activeStyle={{opacity:'1'}}>
                            Adicionar HeadOffice 
                        </NavLink>
                        <NavLink to="/User/Profile" activeStyle={{opacity:'1'}} >
                            Perfil 
                        </NavLink>
                        <NavLinkBtn to="/User/LogOut" activeStyle={{opacity:'1'}}>
                            <FiLogOut size={18} color="#1B263B" />     
                            Sair 
                        </NavLinkBtn>
                </NavMenuVertical> 
                </> : <Bars/>  }
                </div>             
               
               <NavMenu>
               <NavLink to="/Home" activeStyle={{opacity:'1', fontWeight:'bold'}}>
                       Home
                   </NavLink>
                   <NavLink to="/User/List" activeStyle={{opacity:'1'}}>
                        Usários 
                   </NavLink>
                   <NavLink to="/HeadOffice/List" activeStyle={{opacity:'1'}}>
                        HeadOfficers 
                   </NavLink>
                   <NavLink to="/HeadOffice/Create" activeStyle={{opacity:'1'}}>
                       Adicionar HeadOffice 
                   </NavLink>
                   <NavLink to="/User/Profile" activeStyle={{opacity:'1'}} >
                       Perfil 
                   </NavLink>
                   <NavLinkBtn to="/User/LogOut" activeStyle={{opacity:'1'}}>
                    <FiLogOut size={18} color="#1B263B" />     
                       Sair 
                   </NavLinkBtn>
               </NavMenu>

              
           </Nav>
      
    );

}

export default NavBar;