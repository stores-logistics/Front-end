import React from 'react';
import './styles/Login.css';
import API_URL from './Server'

class Login extends React.Component{

    constructor(props){
        super(props);       
        this.state = {
          username: '',
          password: ''
        }
        this.ProceedLogin = this.ProceedLogin.bind(this);
        this.HandleLogin = this.HandleLogin.bind(this);
    }    

    ProceedLogin(event){
        switch(event.target.name){
            case "username":
                    this.setState({username : event.target.value})
            case "password":
                    this.setState({password : event.target.value})
        }            
    }
     
    HandleLogin(){
        console.log('Your input name value is: ' + this.state.username);
        console.log('Your input value is: ' + this.state.password);

        const axios = require("axios")
        axios.post(API_URL, {
            query:  ``
        });
    
}

    render() {
        return(
            <section id="team" class="pb-5">
                  <nav class="navbar navbar-expand-md navbar-dark">
                 <a id = "nav "class="navbar-brand" href="/">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id = "title">Stores Manager</a>
                      </a>
            </nav> 
            <br></br>
            <br></br>
            <div class="row">
                <div class="col-xs-4 col-md-2">                
                </div>
                <div class="col-xs-4 col-md-3">
                    <br></br>
                    <br></br>
                    <br></br>
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        {/* <div class="frontside">  */}
                            <div class="card">
                                <div class="card-body text-center">
                                    <h4 class="card-title">Acceder</h4>
                                    <div class="container-fluid">
                                           <div class="form-group-row">  
                                             <input type="text" name="username" class="form-control" id="test_d" onChange={this.ProceedLogin} placeholder="Usuario"></input> 
                                             <br></br>               
                                             <input type="password" name="password"  class="form-control" id="test_d" onChange={this.ProceedLogin} placeholder="Contraseña"></input>
                                             <div class ="row">
                                                <div class="col-xs-6 col-md-9">
                                                </div>
                                                <div class="col-xs-6 col-md-3">
                                                   <a onClick={this.HandleLogin}  id="verhcompras" onchange={this.ProceedLogin}class="btn"><i id ="next" class="fa fa-2x fa-arrow-circle-right" aria-hidden="true"></i></a>
                                                </div>
                                            </div> 
                                            </div>   
                                         </div>   
                                </div>
                            </div>  
                    </div>
                </div>                    
                </div>
                <div class="col-xs-4 col-md-7">
                </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            </section>
        )
    }
}

export default Login;