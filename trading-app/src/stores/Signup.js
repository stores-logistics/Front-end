import React from 'react';
import '../styles/Login.css';
import API_URL from '../Server'

class Signup extends React.Component{

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
                                    <p class="card-text"><strong>Información personal</strong></p>
                                    <div class="form-group-row">
                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Nombre" onChange={this.updateInput} ></input>
                                        </div> 
                                        <div class="col-6">
                                        <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Apellido" onChange={this.updateInput} ></input>
                                        </div> 
                                      </div>
                                        <input name="indesc" id ="test_d" type="text" class="form-control" placeholder="Dirección" onChange={this.updateInput} ></input>
                                        <br></br>
                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Teléfono" onChange={this.updateInput} ></input>
                                        </div> 
                                        <div class="col-6">
                                             <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Cabina" onChange={this.updateInput} ></input>
                                         </div> 
                                        </div>
                                        <hr></hr>
                                        <p class="card-text"><strong>Elegir un avatar</strong></p>
                                        <p><img class=" img-fluid" src="https://image.flaticon.com/icons/svg/1466/1466118.svg" alt="card image" height="92" width="92"></img></p>

                                            </div>    
                                         </div>   
                                </div>
                            </div>  
                    </div>
                </div>                   
                </div>
                <div class="col-xs-12 col-md-4"> 
                <br></br>    
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                            <div class="card">
                                <div class="card-body text-center">
                                <p class="card-text"><strong>Información de facturación</strong></p>
                                    <div class="container-fluid">
                                    <div class="form-group-row">
                                        <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Número de tarjeta" onChange={this.updateInput} ></input>
                                    <br></br>

                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="CVV" onChange={this.updateInput} ></input>
                                        </div> 
                                        <div class="col-6">
                                             <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Fecha de exp." onChange={this.updateInput} ></input>
                                         </div> 
                                        </div>
                                            </div>    
                                         </div>   
                                </div>
                            </div>  
                    </div>
                </div>  
                <br></br>
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                            <div class="card">
                                <div class="card-body text-center">
                                <p class="card-text"><strong>Información de acceso</strong></p>
                                    <div class="container-fluid">
                                    <div class="form-group-row">
                                        <input name="indesc" id ="test_d" type="text" class="form-control" placeholder="username" onChange={this.updateInput} ></input>
                                        <br></br>
                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="inombre" id ="test_d" type="password" class="form-control" placeholder="contraseña" onChange={this.updateInput} ></input>
                                        </div> 
                                        <div class="col-6">
                                             <input name="inombre" id ="test_d" type="password" class="form-control" placeholder="conf. contraseña" onChange={this.updateInput} ></input>
                                            </div> 
                                        </div>
                                            </div>    
                                         </div>   
                                </div>
                            </div>  
                    </div>
                </div>
                <div class ="row">
                    <div class="col-xs-6 col-md-10">
                    </div>
                    <div class="col-xs-6 col-md-2">
                    
                    <i id ="next" class="fa fa-2x fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                </div>           
                </div>
                <div class="col-xs-0 col-md-2">
                </div>
            </div>

            {/* <div class="row">
                <div class="col-xs-0 col-md-4">
                </div>
                <div class="col-xs-12 col-md-4"> 
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                            <div class="card">
                                <div class="card-body text-center">
                                    <div class="container-fluid">
                                    <div class="form-group-row">
                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Nombre" onChange={this.updateInput} ></input>
                                        </div> 
                                        <div class="col-6">
                                        <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Apellido" onChange={this.updateInput} ></input>
                                        </div> 
                                      </div>
                                        <input name="indesc" id ="test_d" type="text" class="form-control" placeholder="Dirección" onChange={this.updateInput} ></input>
                                        <br></br>
                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Teléfono" onChange={this.updateInput} ></input>
                                        </div> 
                                        <div class="col-6">
                                             <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Cabina" onChange={this.updateInput} ></input>
                                         </div> 
                                        </div>
                                            </div>    
                                         </div>   
                                </div>
                            </div>  
                    </div>
                </div>                 
                </div>
                <div class="col-xs-0 col-md-4">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-md-2">                
                </div>
                <div class="col-xs-6 col-md-4">
                    <br></br>
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                            <div class="card">
                                <div class="card-body text-center">
                                    <div class="container-fluid">
                                    <div class="form-group-row">
                                        <input name="indesc" id ="test_d" type="text" class="form-control" placeholder="username" onChange={this.updateInput} ></input>
                                        <br></br>
                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="inombre" id ="test_d" type="password" class="form-control" placeholder="contraseña" onChange={this.updateInput} ></input>
                                        </div> 
                                        <div class="col-6">
                                             <input name="inombre" id ="test_d" type="password" class="form-control" placeholder="conf. contraseña" onChange={this.updateInput} ></input>
                                         </div> 
                                        </div>
                                            </div>    
                                         </div>   
                                </div>
                            </div>  
                    </div>
                </div>                    
                </div>
                <div class="col-xs-3 col-md-4">
                <br></br>
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                            <div class="card">
                                <div class="card-body text-center">
                                    <div class="container-fluid">
                                    <div class="form-group-row">
                                        <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Número de tarjeta" onChange={this.updateInput} ></input>
                                    <br></br>

                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="CVV" onChange={this.updateInput} ></input>
                                        </div> 
                                        <div class="col-6">
                                             <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Fecha de exp." onChange={this.updateInput} ></input>
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}
            </section>
        )
    }
}

export default Signup;