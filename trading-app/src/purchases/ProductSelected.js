import React from 'react';
import '../styles/Purchases.css';
import API_URL from '../Server';
import { Route } from "react-router";
{<Route path='/purchases/catalog/:uid/:sid/:pid' component={ProductSelected}/> }
let tokenStr = localStorage.getItem('user')
const axios = require("axios")


class ProductSelected extends React.Component{   

    constructor(props){
        super(props); 
        this.state = {
            productInfo: [],
            storeInfo: [],
            loaded: false
    };
    this.getProduct = this.getProduct.bind(this); 
    this.getStoreByCode = this.getStoreByCode.bind(this);
    }



    componentWillMount(){
        const {id} = this.props.match.params    
        if(!localStorage.getItem("user")){
            location.href= '/login'
            alert("Por favor inicia sesión",0)
          } 
          if((localStorage.getItem("type")) != "Passanger"){
            location.href= '/'
            alert("No tienes permiso para acceder a esta sección",0)
          }
          if((localStorage.getItem("Id")) != id){
            location.href= '/'
            alert("No tienes permiso para acceder a esta sección",0)
          }
            this.getStoreByCode()
            this.getProduct()
            this.DisplayTP()
       };

    getProduct(){
        const {pid} = this.props.match.params
        axios.post(API_URL, {
            query:  `query{
                productByCode(_id: "${pid}")
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
                }   
                this.setState({
                productInfo: array
            }) 
        })
    } 

    getStoreByCode() {
        const {sid} = this.props.match.params
        return(
            axios.post(API_URL, { 
                query: `query{
                    storeByCode(code: ${sid})
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
            {headers: {"Authorization" : "Bearer " + tokenStr}}
            ).then(res => { 
                var dict = res.data.data.storeByCode 
                var array = []
                for(var key in dict) {
                var value = dict[key];
                array.push(value)
                }  
                this.setState({storeInfo: array})
                this.setState({loaded: true})
            })
        )
      };


    DisplayTP(){
            const {uid} = this.props.match.params
            const {sid} = this.props.match.params
            const sis = this.state.storeInfo 
            const si = this.state.productInfo 
              return(
                <section id="team" class="pb-5">
                <nav class="navbar navbar-dark">
                    <a id="nav "class="navbar-brand" href="/">
                      <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                       <a id="title">Stores Management</a>
                     </a>
                </nav>             
                    <div class="container">
                        <form class="form-inline">
                        </form>
                        <div class="row">
                            <div class="col-1">
                            </div>
                                <div class="col-xs-10 col-6">
                                <div className="container" id="contcat">
                                    <br></br>
                                <div class="row">
                                    <div class="col-2">
                                        <a id="icon" href={'/purchases/catalog/' + uid + '/' + sid} class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                                    </div>
                                    <div class="col-8">
                                        <h1 id="titleee">{si[1]}</h1>
                                    </div>
                                    <div class="col-2">
                                    </div>
                                </div>
                                <br></br>
                                <img id="img-gg"  src={si[4]} alt="card image" height="400" width="400"></img>
                                    </div>
                                    </div>
                                <div  class="col-xs-10 col-4">
                                  <div id="contcat" className="container">
                                      <br></br>
                                      <p class="card-texttt"><strong>Ofrecido por {sis[1]}</strong></p>
                                       <p><img class="img-fluidit" src={sis[7]} alt="card image"  height="50" width="50"></img></p>
                                       <h4 class="card-title"> </h4> 
                                        <hr></hr>
                                       <p class="card-text">{si[2]}</p>
                                        <hr></hr>
                                       <div class="container-fluid">
                                       <div class="row">
                                        <div class="col-1">                                            
                                        </div>
                                         <div class="col-3">
                                             <p id="card-titleee" class="card-text"><strong>Pagas</strong></p>                                         
                                         </div>          
                                         <div class="col-1">                                            
                                        </div>                               
                                         <div class="col-6"> 
                                            <p class="card-text">$ {si[7]}</p>                                          
                                         </div> 
                                       </div>
                                       <hr></hr>                                       
                                       <div class="row">
                                        <div class="col-1">                                            
                                        </div>
                                         <div class="col-3">
                                             <p class="card-text"><strong>Cantidad</strong></p>                                         
                                         </div>   
                                         <div class="col-1">                                            
                                        </div>                                      
                                         <div class="col-6"> 
                                            <p class="card-text">1</p>                                          
                                         </div>                                        
                                       </div>
                                       <hr></hr>
                                       <div class="row">
                                        <div class="col-1">                                            
                                        </div>
                                         <div class="col-3">
                                             <p class="card-text"><strong>Envío</strong></p>                                         
                                         </div>   
                                         <div class="col-1">                                            
                                        </div>                                      
                                         <div class="col-6"> 
                                            <p class="card-text">normal</p>                                          
                                         </div>                                        
                                        </div>
                                        <hr></hr>
                                       <div class="row">
                                       <div class="col-1">                                            
                                        </div>
                                         <div class="col-3">
                                             <p class="card-text"><strong>Tarjeta</strong></p>                                         
                                         </div>
                                         <div class="col-1">                                            
                                        </div>
                                        <div class="col-1">                                            
                                        </div>
                                         <div class="col-2"> 
                                            <p class="card-text">**3021</p>                                          
                                         </div>
                                         <div class="col-3">
                                            <p><img class=" img-fluid" src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" alt="card image"  height="25" width="25"></img></p>  
                                         </div>
                                       </div>
                                       </div>
                                        <hr></hr>                                       
                                        <button class="btnn" href="/" >Finalizar compra</button>
                              </div>
                            </div>
                    </div>
                </div>
                </section>                
        )
    };
    
    render() {
        return(
          <div>
              {this.DisplayTP()}
          </div>
        )
    }
}

export default ProductSelected;