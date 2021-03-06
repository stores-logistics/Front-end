import React from 'react';
import './styles/Login.css';
import API_URL from './Server'

const crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(text){
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

class Login extends React.Component{

  constructor(props){
    super(props);       
    this.state = {
      username: '',
      password: '',
      href: '',
      errors:{},
      isLoading: false,
      userinfo: []
    }
    this.ProceedLogin = this.ProceedLogin.bind(this);
    this.HandleLogin = this.HandleLogin.bind(this);
}    
    validateUsername(){
        var pattern = /[^a-z]/;
        return !pattern.test(this.username);
    }

    HandleLogin(){
        const axios = require("axios")
        /*
        axios.post(API_URL, { 
            query:  `mutation{
                login(credentials: {
                  username:"${this.state.username}"
                  password:"${encrypt(this.state.password)}"
                })  
              }` 
        },
        */
        axios.post(API_URL, { 
            query: `query{
              userByUsername(username: "${this.state.username}"){
                code
                storeId
                type
                name
              }
            }`
        }).then(res => {
              var dict = res.data.data.userByUsername 
              var array = []
              for(var key in dict) {
              var value = dict[key];
              array.push(value)
              }   
              this.setState({
              storeInfo: array
            }) 
            localStorage.setItem("user", 1);
            localStorage.setItem("type", array[2]);
            localStorage.setItem("Id",array[0]);
            if(array[2] == "Manager"){
              alert("Bienvenido",4000) 
              location.href= '/stores/' + array[0] 
            }else if(array[2] == "Passanger"){
              alert("Bienvenido",4000)
              location.href= '/users/' + array[0]
            }else if(array[2] == "Admin"){
              alert("Bienvenido",4000)
              location.href= '/users/' + array[0]
            }
          else {
            alert("Contraseña/usuario incorrectos, por favor verifica tus credenciales",4000)
          } 
            
        })   
        .then(res => {
            const token = res.data.data.login;
            const array = this.state.storeInfo
            console.log(array)
            console.log(token)
              localStorage.setItem("user", token); 
              
          }).catch(function(error) {
            console.log(error);
          });
    }

    ProceedLogin(event){
        switch(event.target.name){
            case "username":
                    this.setState({username : event.target.value})
            case "password":
                    this.setState({password : event.target.value})
        }              
    }

    render() {   
        return(
            <section id="team" class="pb-5">
    
                  <nav class="navbar navbar-expand-md navbar-dark">
                 <a id = "nav "class="navbar-brand" href="/">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id = "title">Stores Management</a>
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
                                                   <a onClick={this.HandleLogin}  id="verhcompras" onchange={this.ProceedLogin} class="btn"><i id ="next" class="fa fa-2x fa-arrow-circle-right" aria-hidden="true"></i></a>
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