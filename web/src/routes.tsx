import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ChangePassword from './pages/ChangePassword'
import UserList from './pages/User/List'
import Profile from './pages/User/Profile'
import HeadOfficeList from './pages/HeadOffice/List'
import HeadOfficeCreate from './pages/HeadOffice/Create'

const Routes = () =>{

    return (
    <BrowserRouter>
        <Route component={Login}  path="/" exact/>       
        <Route component={Register}  path="/Register" />       
        <Route component={Home}  path="/Home" />       
        <Route component={ChangePassword}  path="/ChangePassword" />   
        <Route component={UserList}  path="/User/List" />      
        <Route component={Profile}  path="/User/Profile" />      
        <Route component={HeadOfficeList}  path="/HeadOffice/List" />      
        <Route component={HeadOfficeCreate}  path="/HeadOffice/Create" />      
    </BrowserRouter>
    )
}

export default Routes;