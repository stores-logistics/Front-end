import React from 'react';
import '../styles/Stores.css';


class NSInventory extends React.Component{
    render() {
        return(
            <div id = "tabn">
            <ul className="nav nav-tabs justify-content-center navbar-light">
            <div>
            <li className="nav-item">
              <a id = "ppal" className="nav-link " href="/stores" target="_self">Información</a>
            </li>
            </div>  
            <li className="nav-item">
              <a id = "favrt" className="nav-link active" href="/stores/inventory" target="_self">Inventario</a>
            </li>
            <li className="nav-item">
              <a id = "mrcts" className="nav-link" href="/stores/operations" target="_self">Operaciones</a>
            </li>
          </ul>
      </div>
        )
    }
}

export default NSInventory;