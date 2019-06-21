import React from 'react';
import '../styles/Stores.css';
import API_URL from '../Server';
const axios = require("axios");
import { Route } from "react-router";
{<Route path='/stores/inventory/:id' component={SInventory}/> }
let tokenStr = localStorage.getItem('user')

class SInventory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            prodList:[],
            storeList:[],
            loaded: false 
    };
    this.getProducts = this.getProducts.bind(this);
    this.getStoreByCode = this.getStoreByCode.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    }


    getProducts() {
        const {id} = this.props.match.params
        return( 
                axios.post(API_URL, { 
                    query: `query{  
                        productsByStore(storeId: ${id})
                        {
                          _id
                          name
                          type
                          quantity
                          cost
                        }
                    }`                    
                },
                {headers: {'authorization' : "Bearer " + tokenStr}}
                ).then(res => {
                    this.state.prodList = res.data.data.productsByStore
                })
            )
      };
      
    getStoreByCode() {
        const {id} = this.props.match.params
        return(
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
            {headers: {'authorization' : "Bearer " + tokenStr}}
                ).then(res => {
                var dict = res.data.data.storeByCode 
                var array = []
                for(var key in dict) {
                var value = dict[key];
                array.push(value)
                }  
                this.setState({storeList: array})
                console.log(array)
                this.setState({loaded: true})
                console.log(this.state.storeList)
            })
        )
      };

    displayAdd(){
        const {id} = this.props.match.params
        return(
            <div className="row">
                        <div class="col-2">
                             <a id="icon" href={'/stores/inventory/add/' + id} class="btn"><i class="fa fa-plus" aria-hidden="true"></i></a>  
                        </div>
                        <div class="col-8">
                            <h4 class="card-title">Inventario</h4>
                        </div>
                        <div class="col-2">
                        </div>
            </div>
        )
    }
    
    closeSession(){
        localStorage.clear()
    }

    async componentWillMount(){
        if(!localStorage.getItem("user")){
            location.href= '/login'
            alert("Por favor inicia sesión",0)
          } 
         await this.getProducts()
         await this.getStoreByCode()
        };
        

        displayStoreDetails(){
            const si = this.state.storeList
            return(
                <div>
                     <div class="row">
                                        <div class="col-2">
                                        </div>
                                        <div class="col-8">
                                        <h4 class="card-title">{si[1]}</h4>
                                        </div>
                                        <div class="col-2">
                                        <a id="icon"  href={'/stores/edit/' + si[0]} class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                <p><img class=" img-fluid" src={si[7]}alt="card image" height="100" width="100"></img></p>
                  <div id="cat" class="container-fluid">
                             <div class="row">
                               <div id="symbol" class="col-4">
                                  <i class="fa fa-id-badge" aria-hidden="true"></i>
                                </div>
                                <div id="symbol" class="col-4">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
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
                                   <a id="cat">{si[5]}</a>
                                </div>
                                <div id="font" class="col-4">
                                    <a id="cat">{si[4]}</a>
                                </div>
                               </div>
                             </div>
                             <hr></hr>
                            <a href={'/stores/' + si[0]}  id="verhcompras" class="btn">Perfil</a>
                        <hr></hr>
                            <a href={'/stores/operations/' + si[0]} id="verhcompras" class="btn">Historial de ventas</a>
                        <hr></hr>
                            <a href={'/stores/inventory/' + si[0]} id="verhcompras" class="btn"><strong>Inventario</strong></a>                 
                            </div>

            ) 
        }

        displayProducts(){   
            const {id} = this.props.match.params
            return this.state.prodList.map( (item,key) => {
              return(
                    <tr key = {key}>                     
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.quantity}</td>
                       <td>{item.cost}</td>
                       <td><a id="icon" href={'/stores/inventory/edit/' + id + '/' + item._id} class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a></td>
                    </tr>
                )
            })}
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
                             {this.displayStoreDetails()}                   
                           </div>
                       </div>
                   </div>
               <div class="col-8">
                 <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                   <div class="mainflip">
                       {/* <div class="frontside">  */}
                           <div id="longpage" class="card">
                               <div class="card-body text-center">
                             {this.displayAdd()}
                               <div id="operations" class="container-fluid">
                                   <div class="row">
                                   <div class="input-group">
                                       <input id ="test_i" type="text" class="form-control" placeholder="Buscar un producto"></input>
                                            <div class="input-group-append">
                                                <button id="creditc" class="btn" type="button">
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                     </div>
                                   </div>

                               </div>
                               .
                                   <table id="cat" class="table">
                                       <thead >
                                           <tr id="head_table" >
                                               <th id="mw" scope="col">Producto</th>
                                               <th scope="col">Tipo</th>
                                               <th scope="col">Stock</th>
                                               <th scope="col">Valor</th>
                                               <th></th>
                                           </tr>
                                       </thead>
                                       <tbody>
                                               {this.displayProducts()}
                                       </tbody>
                                       </table>
                                   <div class="row">
                                       <div class="col-3">
                                       </div>
                                       <div class="col-3">
                                       </div>
                                       <div class="col-3">
                                       </div>
                                       <div class="col-3 text center">                                                 
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

export default SInventory;