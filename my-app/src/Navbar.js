import React from 'react';
import './styles/Navbar.css';

class Users extends React.Component{
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-dark teal mb-4">
              <a class="navbar-brand" href="#">
                  <img src="../accesories/boat-rudder.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                    Stores Manager
                </a>
        </nav>
        )
    }
}

export default Users;