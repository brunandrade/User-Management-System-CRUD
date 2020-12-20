import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'

const Routes = () =>{

    return (
    <BrowserRouter>
        <Route component={Login}  path="/" exact/>       
        <Route component={Register}  path="/Register" />       
    </BrowserRouter>
    )
}

export default Routes;