import React from 'react';
import '../styles/Stores.css';
import API_URL from '../Server';
import { Route } from "react-router";
{<Route path='/stores/inventory/edit/:id' component={SEdit}/> }
let tokenStr = localStorage.getItem('user')



class SEdit extends React.Component{   
    constructor(props){
        super(props);
        this.state = {
          nombre : '',
          descripcion : '',
          categoria : '',
          imgurl : '',
          cantidad : '',
          precio : '',
    
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        updateInput(event){
            switch(event.target.name){
                case "inombre":
                        this.setState({nombre : event.target.value})
                case "indesc":
                        this.setState({descripcion : event.target.value})
                case "incat":
                        this.setState({categoria : event.target.value})
                case "inimg":
                        this.setState({imgurl : event.target.value})
                case "incant":
                        this.setState({cantidad : event.target.value})
                case "inprec":
                        this.setState({precio : event.target.value})
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
                    updateProduct(_id: "${id}", product: {
                      name: "${this.state.nombre}"
                      description: "${this.state.descripcion}"
                      type: "${this.state.categoria}"
                      image: "${this.state.imgurl}"
                      storeId: 2
                      quantity: ${this.state.cantidad}
                      cost: ${this.state.precio}
                    }) {
                      _id
                      name
                      description
                      type
                      image
                      storeId
                      quantity
                      cost
                    }
                  }`
            },
            {headers: {"Authorization" : "Bearer " + tokenStr}}
            );
        
    }


    handleDeletion(){
        const axios = require("axios")
        const {id} = this.props.match.params
        axios.post(API_URL, {
            query:  `mutation{
                 deleteProduct(_id: "${id}")
               }`
        });
    }
    
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
                            <div className="container" id="contcat">
                                    <div class="row">
                                        <div class="col-2">
                                        <a id="icon" href="/stores/inventory" class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                                        </div>
                                        <div class="col-8">
                                        <h4 class="card-title">Preview</h4>
                                        </div>
                                        <div class="col-2">
                                        <a id="icon" href="/stores/inventory/edit" class="btn"><i class="fa fa-refresh" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                <div class="frontside"> 
                                    <div class="cardem">
                                    <div class="frontside"> 
                                        <div class="card-body text-center">
                                            <br></br>
                                            <p><img class=" img-fluid" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-tpendientes-estilo-barra-wire-62271833_991681_ED.jpg" alt="card image"  height="85" width="85"></img></p>
                                            <h4 id="card-titles">Pendientes estilo barra Wire</h4>
                                            <br></br>
                                            <h6 id="card-price">$4150</h6>
                                            </div>
                                          </div>                              
                                       </div>  
                                     </div>
                                   <div class="backside">
                                  <div class="card">
                                <div class="card-body text-center mt-4">
                                    <br></br>
                                        <p className="card-text"><strong>Salud y belleza</strong></p>
                                        <p className="card-text">Bloqueador solar de amplio espectro, protege las 24 horas por medio de su fòrmula no grasa e hipoalergénica.</p>
                                        <h6 id="card-price">Stock: 55</h6>
                                     </div>
                                </div>
                                    </div>
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
                                        <td><a id="icon" onClick={this.handleDeletion}  class="btn"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                                        </div>
                                        <div className="col-2">
                                        <a id="icon" onClick={this.handleSubmit} class="btn"><i class="fas fa-check fa2x" onChange={this.updateInput} ></i></a>
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

export default SEdit;