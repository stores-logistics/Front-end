import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Home from './Home'
import './styles/App.css';


class App extends React.Component{
  render(){
      return(            
       <div >
         <BrowserRouter>
            <Switch>
              <Route exact path = "/" component = {Home} />
            </Switch>
          </BrowserRouter>
       </div>   
       
      )
  }
}

export default App
