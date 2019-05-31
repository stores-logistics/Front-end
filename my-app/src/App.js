import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Home from './Home'
import Stores from './Stores'
import Users from './Users'
import './styles/App.css';


class App extends React.Component{
  render(){
      return(            
       <div >
         <BrowserRouter>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/stores" component = {Stores} />
              <Route exact path = "/users" component = {Users} />
            </Switch>
          </BrowserRouter>
       </div>   
       
      )
  }
}

export default App
