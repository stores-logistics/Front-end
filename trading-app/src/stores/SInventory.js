import React from 'react';
import '../styles/Stores.css';
import NSInventory from './NSInventory';


class SInventory extends React.Component{
    render() {
        return(
            <div id="tabn">
                <NSInventory/>
            </div>
        )
    }
}

export default SInventory;