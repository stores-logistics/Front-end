import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Home from './Home'
import Stores from './stores/Stores'  
import SInventory from './stores/SInventory'  
import SOperations from './stores/SOperations'  
import Users from './users/Users'
import UHistory from './users/UHistory'
import './styles/App.css';


class App extends React.Component{
  render(){
      return(            
       <div >
         <BrowserRouter>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/stores" component = {Stores} />
              <Route exact path = "/stores/inventory" component = {SInventory} />
              <Route exact path = "/stores/operations" component = {SOperations} />
              <Route exact path = "/users" component = {Users} />
              <Route exact path = "/users/history" component = {UHistory} />
            </Switch>
          </BrowserRouter>
       </div>   
       
      )
  }
}

export default App
