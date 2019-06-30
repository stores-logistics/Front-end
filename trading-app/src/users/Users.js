import React from 'react';
import '../styles/Users.css';
import API_URL from '../Server';
const axios = require("axios");
let tokenStr = localStorage.getItem('user')
import { Route } from "react-router";
{<Route path='/users/:id' component={Users}/> }


class Users extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
        userList:[],
        storeList:[]
};
this.getUserbyCode = this.getUserbyCode.bind(this);
this.getStores = this.getStores.bind(this);
this.componentWillMount = this.componentWillMount.bind(this);
}

getUserbyCode() {
  const {id} = this.props.match.params
  return(
      axios.post(API_URL, { 
            query: `query{
              userByCode(code: 3){
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
      },
      {headers: {"Authorization" : "Bearer " + tokenStr}}
      ).then(res => {
          var dict = res.data.data.userByCode 
          var array = []
          for(var key in dict) {
          var value = dict[key];
          array.push(value)
          }  
          this.setState({userList: array})
          console.log(array)
          this.setState({loaded: true})
          console.log(this.state.userList)
      })
  )
};

getStores(){
  console.log("getstores")
  const axios = require("axios")
  axios.post(API_URL, {
      query: `query{                
          allStores{
              code
              name
              type
              owner
              ubication
              dates
              description
              img
          }
        }`
  },
  {headers: {"Public" : true}} 
  ).then(res => {
      // console.log(res);
      this.setState({
          storeList:res.data.data.allStores
      }) 
  })     
};

async componentWillMount(){
  const {id} = this.props.match.params
  if(!localStorage.getItem("user")){
    location.href= '/login'
    alert("Por favor inicia sesión",0)
  }else{
    if((localStorage.getItem("type")) != "Passanger"){
      location.href= '/'
      alert("No tienes permiso para acceder a esta sección",0)
    }
    if((localStorage.getItem("Id")) != id){
      location.href= '/'
      alert("No tienes permiso para acceder a esta sección",0)
    }
  await this.getUserbyCode()
  await this.getStores()
  }
 };

 displayUserDetails(){
  const si = this.state.userList
  return(
      <div>
           <div class="row">
                              <div class="col-2">
                              </div>
                              <div class="col-8">
                              <h4 class="card-title">{si[1]}</h4>
                              </div>
                              <div class="col-2">
                              <a id="icon"  href={'/users/edit/' + si[0]} class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                              </div>
                          </div>
      <p><img class=" img-fluid" src={si[11]}alt="card image" height="100" width="100"></img></p>
        <div id="cat" class="container-fluid">
                   <div class="row">
                     <div id="symbol" class="col-4">
                        <i class="fa fa-id-badge" aria-hidden="true"></i>
                      </div>
                      <div id="symbol" class="col-4">
                        <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                      </div>
                      <div id="symbol" class="col-4">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                      </div>
                     </div>
                     <div class="row">
                     <div class="col-4">
                       <a id="cat">{si[0]}</a>
                      </div>
                      <div  id="font" class="col-4">
                         <a id="cat">{si[4]}</a>
                      </div>
                      <div id="font" class="col-4">
                          <a id="cat">{si[3]}</a>
                      </div>
                     </div>
                   </div>
                   <hr></hr>
                            <a href={'/users/' + si[0]}  id="verhcompras" class="btn"><strong>Perfil </strong></a>
                        <hr></hr>
                            <a href={'/users/history/' + si[0]} id="verhcompras" class="btn">Historial de compras</a>
                  </div>

  )
}

displayStores(){
  const si = this.state.userList
  return this.state.storeList.map( (item,key) => {
    return(
              <div class="col-xs-12 col-sm-6 col-md-4">
                  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                      <div class="mainflip">
                          <div class="frontside"> 
                              <div class="card">
                                  <div class="card-body text-center">
                                      <p><img src={item.img} alt="card image"  height="20" width="20"></img></p>
                                      <strong><h3 id="card-titles">{item.name}</h3></strong>
                                      <br></br>
                                      <p class="card-text"> {item.type}</p>
                                  </div>
                              </div>
                          </div>
                          <div class="backside">
                              <div class="card">
                                  <div class="card-body text-center mt-4">
                                      <p class="card-text">{item.description}</p>
                                      <h4 id="card-titles">Ubicación</h4>
                                      <p class="card-text">{item.ubication}</p>
                                      <a button class="btnn"  href={'/purchases/catalog/' + si[0] + '/' + item.code}>Comprar  </a>   
                                  </div>
                              </div>
                          </div>
                      </div> 
                  </div>
          </div>
      )
  })
}

closeSession(){
  localStorage.clear()
}

    render() {
        return(
          <section id="team" class="pb-5">
                   <nav class="navbar navbar-dark">
                <a id="nav "class="navbar-brand" href="/">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id="title">Stores Management</a>
                 </a>
                 <form class="form-inline my-2 my-lg-0">
                     <a href="/" onClick={this.closeSession} class="btn"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
                 </form>
            </nav>           
              <div class="container">
                  <form class="form-inline">
                  </form>
                      <div class="row">
                          <div class="col-4">
                              <div class="card">
                                  <div class="card-body text-center">
                                    {this.displayUserDetails()}
                                    </div>
                                  </div>
                              </div>
                          <div class="col-8">
                            <div class="container" id="contcat">
                              <br></br>                          
                                <h2 className="titlec">Comprar</h2>                            
                              <br></br>
                              <div class="container-fluid">
                                                        <div class="row">
                                                            <div class="input-group">
                                                                <input id ="test_i" type="text" class="form-control" placeholder="Buscar una tienda"></input>
                                                                <div class="input-group-append">
                                                                    <button id="creditc" class="btn" type="button">
                                                                        <i class="fa fa-search" aria-hidden="true"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>          
                                                    </div>
                                                    <br></br>
                                    <div className="row">
                                      {this.displayStores()}
                                    </div>
                            </div>                    
                        </div>
                      </div>
              </div>
          </section>
            )
    }
}

export default Users;