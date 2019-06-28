import React from 'react';
//import '../styles/Stores.css';
import API_URL from './Server';
//import { Route } from "react-router";
//{<Route path='/stores/inventory/edit/:sid/:id' component={SEdit}/> }
//let tokenStr = localStorage.getItem('user')


class Header extends React.Component{   
    render() {
        return(
               <nav class="navbar navbar-dark">
                <a id = "nav "class="navbar-brand" href="#">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id = "title">Test Stores Management</a>
                 </a>
                 <form class="form-inline my-2 my-lg-0">
                 <a href="/login" class="btn">Login</a>
                 </form>
            </nav>             
        )
    }
}

export default Header;