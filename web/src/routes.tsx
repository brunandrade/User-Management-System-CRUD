import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ChangePassword from './pages/ChangePassword'

const Routes = () =>{

    return (
    <BrowserRouter>
        <Route component={Login}  path="/" exact/>       
        <Route component={Register}  path="/Register" />       
        <Route component={Home}  path="/Home" />       
        <Route component={ChangePassword}  path="/ChangePassword" />       
    </BrowserRouter>
    )
}

export default Routes;