import React from 'react';
import '../styles/Stores.css';
import API_URL from '../Server';
import { Route } from "react-router";
{<Route path='/stores/edit/:id' component={SEditinfo}/> }
let tokenStr = localStorage.getItem('user')


class SEditinfo extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          nombre : '',
          descripcion : '',
          categoria : '',
          imgurl : '',
          cantidad : '',
          owner: '',
          type: '',
          storeInfo:[],
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        }

        updateInput(event){
            switch(event.target.name){
                case "inombre":
                        this.setState({nombre : event.target.value})
                case "indesc":
                        this.setState({descripcion : event.target.value})
                case "type":
                        this.setState({type : event.target.value})
                case "inimg":
                        this.setState({imgurl : event.target.value})
                case "inubi":
                        this.setState({ubication : event.target.value})
                case "idates":
                        this.setState({dates : event.target.value})
                case "inown":
                        this.setState({owner : event.target.value})
            }            
        }

        handleSubmit(){
            console.log('Your input value is: ' + this.state.nombre);
            console.log('Your input value is: ' + this.state.descripcion);
            console.log('Your input value is: ' + this.state.categoria);
            console.log('Your input value is: ' + this.state.imgurl);
            console.log('Your input value is: ' + this.state.cantidad);
            console.log('Your input value is: ' + this.state.precio);
            const {id} = this.props.match.params
            const axios = require("axios")
            axios.post(API_URL, {
                query:  `mutation{
                    updateStore(code: ${id}, store: {
                      name: "${this.state.nombre}"
                      type: "${this.state.type}"
                      owner: "${this.state.owner}"
                      ubication: "${this.state.ubication}"
                      dates: "${this.state.dates}"
                      description: "${this.state.descripcion}"
                      img: "${this.state.imgurl}"
                    }) {
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
            {headers: {"Authorization" : "Bearer " + tokenStr}}
            ).then(res =>{ 
                alert("Información modificada",4000),
               location.href= '/stores/' + id 
            });
    }

        getStoreByCode(){
            const axios = require("axios")
            const {id} = this.props.match.params
                axios.post(API_URL, {                        
                    query: `query{
                        storeByCode(code: ${id})
                        {
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
                        var dict = res.data.data.storeByCode 
                        var array = []
                        for(var key in dict) {
                        var value = dict[key];
                        array.push(value)
                        }  
                        console.log(array) 
                        this.setState({
                        storeInfo: array
                    }) 
                })
            };

            displayCard(){
                const si = this.state.storeInfo
                    return(
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                    <div class="frontside"> 
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src={si[7]} alt="card image"  height="30" width="30"></img></p>
                                                <h4 class="card-title">{si[1]}</h4>
                                                <strong><p class="card-text">{si[2]}</p></strong>
                                                <p class="card-text">{si[6]}</p>
                                                <br></br>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h5 class="card-title">Horarios</h5>
                                                <p class="card-text">{si[5]}</p>
                                                <h4 class="card-title">Ubicación</h4>
                                                <p class="card-text">{si[4]}</p>    
                                                <h1 className="trans">......... ..........</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>        
                    </div>
                    )
                };

                displayBack(){
                    const {id} = this.props.match.params
                    return(
                    <div class="row">                                        
                        <div class="col-2">
                        <a id="icon" href={'/stores/inventory/' + id} class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                        </div>
                        <div class="col-8">
                        <h4 class="card-title">Preview</h4>
                        </div>
                        <div class="col-2">
                        <a id="icon" href="/stores/inventory/edit" class="btn"><i class="fa fa-refresh" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    )
                }

                componentWillMount(){
                    if(!localStorage.getItem("user")){
                        location.href= '/login'
                        alert("Por favor inicia sesión",0)
                      } 
                    this.getStoreByCode()
                    this.displayCard()
                    this.displayBack()
               };
    

    render() {
        return(
            <section id="team" class="pb-5">
            <nav class="navbar navbar-dark">
                <a id="nav "class="navbar-brand" href="/">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id="title">Stores Manager</a>
                 </a>
            </nav>             
                <div class="container">
                    <form class="form-inline">
                    </form>
                    <div class="row">
                            <div class="col-4">
                            <div className="container" id="contcate">
                                <br></br>
                                   {this.displayBack()}
                                    <div className="row">
                                        <div className="col-1">
                                        </div>       
                                        <div className="col-10">
                                        {this.displayCard()}
                                        </div>                                 
                                    </div>
                                </div>
                                </div>
                            <div  class="col-8">
                              <div id="contcat" className="container">
                                  <br></br>
                                   <div class="row">
                                        <div className="col-2">
                                        </div>
                                        <div className="col-8">
                                            <h1 className="titlec">Editar Producto </h1>
                                        </div>
                                        <div  className="col-2"> 
                                        <a id="icon"><i class="fa fa-id-card" aria-hidden="true"></i> 124234234</a>                                           
                                        </div>
                                   </div>
                                    <div class="row">
                                    <div class="col-2">
                                        </div>
                                        <div class="col-8">
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                        <div id = "edituser" class="container-fluid">
                                         <div class="form-group-row">  
                                           <input name="inombre" id ="test_d" type="text" class="form-control" placeholder="Nombre" onChange={this.updateInput} ></input>
                                          <br></br>
                                          <input name="indesc" id ="test_dl" type="text" class="form-control" placeholder="Descripción" onChange={this.updateInput} ></input>
                                          <br></br>
                                          <div class="form-group row">
                                              <div class="col-6">
                                                        <select name="incat" id ="test_d" class="form-control" onChange={this.updateInput}>
                                                        <option>Artesanías</option>
                                                        <option>Café y dulcería</option>
                                                        <option>Deportes</option>
                                                        <option>Hogar y decoración</option>
                                                        <option>Joyería y bisutería</option>
                                                        <option>Juguetería y librería</option>
                                                        <option>Maletas y accesorios</option>
                                                        <option>Ropa y moda</option>
                                                        <option>Salud y belleza</option>
                                                        <option>Tecnología</option>
                                                        </select>              
                                             </div> 
                                              <div class="col-6">
                                              <input name="inimg" id ="test_d" type="text" class="form-control"  placeholder="img url" onChange={this.updateInput} ></input>
                                              </div>                                              
                                           </div> <div class="form-group row">
                                              <div class="col-6">
                                                    <input  name="incant" id ="test_d" type="text" class="form-control"  placeholder="Stock" onChange={this.updateInput} ></input>           
                                             </div> 
                                              <div class="col-6">
                                              <input  name="inprec" id ="test_d" type="text" class="form-control"  placeholder="Precio" onChange={this.updateInput} ></input>
                                              </div>                                              
                                           </div>                                          
                                            </div>   
                                       </div> 
                                        </div> 
                                        <div class="col-2">
                                        </div>                                                
                                    </div>  
                                    <br></br>
                                    <br></br>
                                    <br></br>

                                   <div className="row">
                                       <div className="col-1">
                                       </div>
                                        <div className="col-9">
                                        </div>
                                        <div className="col-2">
                                        <a id="icon" onClick={this.handleSubmit}  class="btn"><i class="fas fa-check fa2x" onChange={this.updateInput} ></i></a>
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

export default SEditinfo;