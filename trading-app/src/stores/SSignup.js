import React from 'react';
import '../styles/Login.css';
import API_URL from '../Server'


class SSignup extends React.Component{

    constructor(props){
        super(props);       
        this.state = {
          nombre: '',
          username: '',
          password: '',
          storeid: '',
        }
        this.ProceedSignup = this.ProceedSignup.bind(this);
        this.HandleSignup = this.HandleSignup.bind(this);
    }    

    ProceedSignup(event){
        switch(event.target.name){
            case "nombre":
                this.setState({nombre : event.target.value})
            case "username":
                    this.setState({username : event.target.value})
            case "contra":
                    this.setState({password : event.target.value})
            case "storeid":
                    this.setState({storeid : event.target.value})        
        }            
    }
      
    HandleSignup(){
        const axios = require("axios")
        axios.post(API_URL, {
            headers: {"Public" : `${true}`}, 
            query:  `mutation{
                createUser(user: {
                  name: "${this.state.nombre}"
                  lastName: "null"
                  cabin: "null"
                  creditCard: "null"
                  username: "${this.state.username}"
                  password: "${this.state.password}"
                  storeId: "${this.state.storeid}"
                  phoneNumber: "null"
                  address: "null"
                  city: "null"
                  age: 0
                  avatar: "null"
                  type: "store"
                  storeId: "123"
                }) {
                    code
                    name
                    lastName
                    cabin
                    creditCard
                    username
                    password
                    phoneNumber
                    address
                    city
                    age
                    avatar
                    type
                    storeId
                }
              }`
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
                                         <input name="nombre" id ="test_d" type="text" class="form-control" placeholder="Nombre" onChange={this.ProceedSignup} ></input>
                                        <br></br>
                                        <input name="username" id ="test_d" type="text" class="form-control" placeholder="username" onChange={this.ProceedSignup} ></input>
                                        <br></br>
                                      <div class="form-group row">
                                        <div class="col-6">
                                            <input name="contra" id ="test_d" type="password" class="form-control" placeholder="Contraseña" onChange={this.ProceedSignup} ></input>
                                        </div> 
                                        <div class="col-6">
                                             <input id ="test_d" type="password" class="form-control" placeholder="Repetir contraseña" ></input>
                                         </div> 
                                     </div>
                                     <input name="storeid" id ="test_d" type="text" class="form-control" placeholder="id de la tienda" onChange={this.ProceedSignup} ></input>
                                     <div class ="row">
                                                <div class="col-xs-6 col-md-9">
                                                </div>
                                                <div class="col-xs-6 col-md-3">
                                                   <a onClick={this.HandleSignup}  id="verhcompras" onchange={this.ProceedSignup}class="btn"><i id ="nexte" class="fa fa-2x fa-arrow-circle-right" aria-hidden="true"></i></a>
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

