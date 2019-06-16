import React from 'react';
import '../styles/Login.css';
import API_URL from '../Server'

class SSignup extends React.Component{

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
            <h1 id = "onboard">Registro</h1>
            <div class="row">
                <div class="col-xs-0 col-md-2">
                </div>
                <div class="col-xs-12 col-md-4">
                    <br></br>
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                            <div class="card">
                                <div class="card-body text-center">
                                    <div class="container-fluid">
                                        <h4 className="card-title">Información de acceso</h4>
                                    <hr></hr>
                                    <div class="form-group-row">
                                         <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Nombre" onChange={this.updateInput} ></input>
                                        <br></br>
                                        <input name="indesc" id ="test_d" type="text" class="form-control" placeholder="username" onChange={this.updateInput} ></input>
                                        <br></br>
                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="inombre" id ="test_d" type="password" class="form-control" placeholder="Contraseña" onChange={this.updateInput} ></input>
                                        </div> 
                                        <div class="col-6">
                                             <input name="inombre" id ="test_d" type="password" class="form-control" placeholder="Repetir contraseña" onChange={this.updateInput} ></input>
                                         </div> 
                                     </div>
                                     <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="id de la tienda" onChange={this.updateInput} ></input>
                                     <div class ="row">
                                                <div class="col-xs-6 col-md-9">
                                                </div>
                                                <div class="col-xs-6 col-md-3">
                                                   <a onClick={this.HandleLogin}  id="verhcompras" onchange={this.ProceedLogin}class="btn"><i id ="nexte" class="fa fa-2x fa-arrow-circle-right" aria-hidden="true"></i></a>
                                                </div>
                                            </div> 
                                            </div>    
                                         </div>   
                                </div>
                            </div>  
                    </div>
                </div>                   
                </div>
            </div>
            </section>
        )
    }
}

export default SSignup;