 /* eslint-disable */
import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Catalog from './home/Catalog'
import Home from './home/Home'
import Login from './Login'
import CatalogPurchases from './purchases/CatalogPurchases'
import ProductSelected from './purchases/ProductSelected'
import Signup from './users/Signup'
import SSignup from './stores/SSignup'  
import Stores from './stores/Stores'  
import SInventory from './stores/SInventory'  
import SOperations from './stores/SOperations'
import SEdit from './stores/SEdit'
import SEditinfo from './stores/SEditinfo'  
import SAdd from './stores/SAdd'  
import Users from './users/Users'
import UInfo from './users/UInfo'
import UHistory from './users/UHistory'
import './styles/App.css';

class App extends React.Component{
  
  render(){
      return(            
       <div >
         {/* <Header/> */}
         <BrowserRouter>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/catalog/:id" component = {Catalog} />
              <Route exact path = "/login" component = {Login} />
              <Route exact path = "/purchases/catalog/:uid/:sid" component = {CatalogPurchases} />
              <Route exact path = "/purchases/catalog/product/:uid/:sid/:pid" component = {ProductSelected} />
              <Route exact path = "/signup" component = {Signup} />
              <Route exact path = "/ssignup" component = {SSignup} />
              <Route exact path = "/stores/:id" component = {Stores} />
              <Route exact path = "/stores/inventory/:id" component = {SInventory} />
              <Route exact path = "/stores/operations/:id" component = {SOperations} />
              <Route exact path = "/stores/inventory/edit/:sid/:id"component = {SEdit} />
              <Route exact path = "/stores/edit/:id"component = {SEditinfo} />
              <Route exact path = "/stores/inventory/add/:id" component = {SAdd} />
              <Route exact path = "/users/:id" component = {Users} />
              <Route exact path = "/users/edit/:id" component = {UInfo} />
              <Route exact path = "/users/history/:id" component = {UHistory} />
            </Switch>
          </BrowserRouter>
       </div>   
       
      )
  }
}

export default App
