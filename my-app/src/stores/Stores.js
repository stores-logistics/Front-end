import React from 'react';
import '../styles/Stores.css';
import NSInfo from './NSInfo.js';


class Stores extends React.Component{
    render() {
        return(
            <div id = "tabn">
                <NSInfo/>
            </div>
        )
    }
}

export default Stores;