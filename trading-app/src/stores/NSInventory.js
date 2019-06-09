import React from 'react';
import '../styles/Stores.css';
import SProfile from './SProfile'

class NSInventory extends React.Component{
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
                                       <SProfile/>
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
                                      <div class="card">
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
                                          <div class="container-fluid">
                                              <div class="row">
                                              <div class="input-group">
                                                  <input type="text" class="form-control" placeholder="Buscar un producto por ID"></input>
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
                                                          <th scope="col">ID</th>
                                                          <th scope="col">Producto</th>
                                                          <th scope="col">Stock</th>
                                                          <th scope="col">Valor</th>
                                                          <th></th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr  id="font" >
                                                          <td>123455</td>
                                                          <td>Collar de perlas</td>
                                                          <td>11</td>
                                                          <td>736</td>
                                                          <td><a id="icon" href="/stores/inventory/edit" class="btn"><i href="/add" class="fa fa-pencil" aria-hidden="true"></i></a></td>
                                                      </tr>                                                    
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