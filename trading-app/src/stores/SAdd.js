import React from 'react';
import '../styles/Stores.css';
import API_URL from '../Server';
let tokenStr = localStorage.getItem('user')
import { Route } from "react-router";
{<Route path='/inventory/add/:sid' component={SAdd}/> }


class SAdd extends React.Component{

 
constructor(props){
    super(props);
    this.state = {
      nombre : '',
      descripcion : '',
      categoria : '',
      imgurl : '',
      cantidad : '',
      precio : '',
      cProducts:[],
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    }

    /*
    reqCardInfo(){
        const {id} = this.props.match.params
        const axios = require("axios")
        axios.post(API_URL, {
            query:  `query{
                productByCode(_id: "${id}")
                {
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
        ).then(res => {
            var dict = res.data.data.productByCode 
                var array = []
                for(var key in dict) {
                var value = dict[key];
                array.push(value)
                console.log(array)
                }   
                this.setState({
                cProducts: array
            }) 
        })
    } 
*/

    displayBack(){
        const {id} = this.props.match.params
        return(
        <div class="row">
            <div class="col-2">
            <a id="icon" href={'/stores/inventory/' + id}class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
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
        this.displayBack()
    };

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
        const {id} = this.props.match.params
        const axios = require("axios")
        axios.post(API_URL, { 
            // headers: {"Authorization" : `Bearer ${tokenStr}`},
            query:  `mutation{
                createProduct(product: {
                  name: "${this.state.nombre}"
                  description: "${this.state.descripcion}"
                  type: "${this.state.categoria}"
                  image: "${this.state.imgurl}"
                  storeId: ${id}
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
        ).then(res =>{ 
            alert("Producto añadido al inventario",4000),
           location.href= '/stores/inventory/' + id 
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
                    <div class="row"> 
                            <div class="col-4">
                                <div class="container" id="contprev">
                                    <br></br>
                                   {this.displayBack()}
                                <div className="row">
                                    <div className="col-1">
                                    </div>          
                                    <div className="col-10">
                                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                <div class="frontside"> 
                                    <div class="card">
                                    <div class="frontside"> 
                                        <div class="card-body text-center">
                                            <p><img class=" img-fluid" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-tpendientes-estilo-barra-wire-62271833_991681_ED.jpg" alt="card image"  height="40" width="40"></img></p>
                                            <h4 id="card-titles">Pendientes estilo barra Wire</h4>
                                             {/* <p className="card-text">330ml</p> */}
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

                                </div>
                                </div>
                            <div  class="col-8">
                              <div id="contcat" className="container">
                                  <br></br>
                                   <div class="row">
                                        <div className="col-2">
                                        </div>
                                        <div className="col-8">
                                            <h1 className="titlec">Añadir Producto </h1>
                                        </div>
                                        <div  className="col-2"> 
                                        {/* <a id="icon"><i class="fa fa-id-card" aria-hidden="true"></i> 124234234</a> */}
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
                                        <div className="col-10">
                                        </div>
                                        <div className="col-2">
                                            <a id="icon"  onClick={this.handleSubmit} class="btn"><i class="fas fa-check fa2x" onChange={this.updateInput} ></i></a>
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

export default SAdd;