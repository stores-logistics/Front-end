import React from 'react';
import '../styles/Stores.css';
import API_URL from '../Server';


class NSInventory extends React.Component{
    constructor(props){
        super(props);
        this.state = {prodList:[]}
        this.state = {storeList:[]}
    }


    componentDidMount(){
            const axios = require("axios")
            axios.post(API_URL, {
                query: `query{
                    allProducts{
                      name
                      type
                      quantity
                      cost
                    }
                  }`
            }).then(res => {
                // console.log(res);
                this.setState({
                    prodList:res.data.data.allProducts
                }) 
            })
            axios.post(API_URL, {
                query: `query{
                    storeByCode(code: ${1})
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
            }).then(res => {
                // console.log(res);
                this.setState({
                    storeList:res.data.data.storeByCode
                }) 
            })
            
        };

        displayStoreDetails(){
            return this.state.storeList.map( (item,key) => {
                <div key={key}>
                <p><img class=" img-fluid" src={item.img} alt="card image" height="100" width="100"></img></p>
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
                                 <a id="cat">114234</a>
                                  {/* <a id="cat">{item.code}</a> */}
                                </div>
                                <div  id="font" class="col-4">
                                   <a id="cat">{item.dates}</a>
                                </div>
                                <div id="font" class="col-4">
                                    <a id="cat">{item.ubication}</a>
                                </div>
                               </div>
                             </div>
                            </div>

            })
        }

        displayProducts(){   
            return this.state.prodList.map( (item,key) => {
              return(
                    <tr key = {key}>                     
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.quantity}</td>
                       <td>{item.cost}</td>
                       <td><a id="icon" href="/stores/inventory/edit" class="btn"><i href="/add" class="fa fa-pencil" aria-hidden="true"></i></a></td>
                    </tr>
                )
            })}

    render() { 
        return(
          <section id="team" class="pb-5">
                       <nav class="navbar navbar-dark">
                <a id="nav "class="navbar-brand" href="/">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id="title">Stores Manager</a>
                 </a>
                 <form class="form-inline my-2 my-lg-0">
                     <a href="/login" class="btn"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
                 </form>

            </nav> 
          {/* <Navbar/> */}
          
              <div class="container">
                  <form class="form-inline">
                  </form>
                  <div class="row">
                          <div class="col-4">
                              <div class="card">
                                  <div class="card-body text-center">
                                  <div class="row">
                                        <div class="col-2">
                                        </div>
                                        <div class="col-8">
                                        <h4 class="card-title">Tiffany&Co.</h4>
                                        </div>
                                        <div class="col-2">
                                        <a id="icon"  href="/stores/edit" class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                        {this.displayStoreDetails()}
                                       <hr></hr>
                                      <a href="/stores" id="verhcompras" class="btn">Perfil</a>
                                       <hr></hr>
                                      <a href="/stores/operations" id="verhcompras" class="btn">Ver historial de ventas</a>
                                        <hr></hr>
                                    <a href="/stores/inventory" id="verhcompras" class="btn"><strong>Inventario </strong></a>                      
                                      </div>
                                  </div>
                              </div>
                          <div class="col-8">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div class="mainflip">
                                  {/* <div class="frontside">  */}
                                      <div id="longpage" class="card">
                                          <div class="card-body text-center">
                                          <div class="row">
                                        <div class="col-2">
                                        <a id="icon" href="/stores/inventory/add" class="btn"><i href="/add" class="fa fa-plus" aria-hidden="true"></i></a>  
                                        </div>
                                        <div class="col-8">
                                              <h4 class="card-title">Inventario</h4>
                                        </div>
                                        <div class="col-2">
                                           </div>
                                            </div>
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

export default NSInventory;