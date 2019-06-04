import React from 'react';
import '../styles/Stores.css';


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
                                        <a href="/stores/edit" class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                      <p><img class=" img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image" height="100" width="100"></img></p>
                                      <div class="container-fluid">
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
                                            <a id="font">123545</a>
                                          </div>
                                          <div  id="font" class="col-4">
                                             9 -16
                                          </div>
                                          <div id="font" class="col-4">
                                              4-26
                                          </div>
                                         </div>
                                       </div>
                                       <hr></hr>
                                      <a href="/stores/operations" id="verhcompras" class="btn">Ver historial de ventas</a>
                                        <hr></hr>
                                    <a href="/stores/inventory" id="verhcompras" class="btn">Inventario</a>                      
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
                                        </div>
                                        <div class="col-8">
                                              <h4 class="card-title">Inventario</h4>
                                        </div>
                                        <div class="col-2">
                                              <a href="/stores/inventory/edit" class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
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
                                              <table class="table">
                                                  <thead >
                                                      <tr id="head_table" >
                                                          <th scope="col">ID</th>
                                                          <th scope="col">Producto</th>
                                                          <th scope="col">Stock</th>
                                                          <th scope="col">Valor</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr  id="font" >
                                                          <td>123455</td>
                                                          <td>Collar de perlas</td>
                                                          <td>11</td>
                                                          <td>736</td>
                                                      </tr>
                                                      <tr  id="font" >
                                                          <td>153494</td>
                                                          <td>Anillo de diamantes</td>
                                                          <td>2</td>
                                                          <td>8550</td>
                                                      </tr>
                                                      <tr  id="font" >
                                                          <td>128905</td>
                                                          <td>Reloj de rubies</td>
                                                          <td>19</td>
                                                          <td>1894</td>
                                                      </tr>
                                                      <tr  id="font" >
                                                          <td>123455</td>
                                                          <td>Collar de perlas</td>
                                                          <td>11</td>
                                                          <td>736</td>
                                                      </tr>
                                                      <tr>
                                                          <td>123455</td>
                                                          <td>Collar de perlas</td>
                                                          <td>11</td>
                                                          <td>736</td>
                                                      </tr>
                                                      <tr>
                                                          <td>123455</td>
                                                          <td>Collar de perlas</td>
                                                          <td>11</td>
                                                          <td>736</td>
                                                      </tr>
                                                      <tr>
                                                          <td>123455</td>
                                                          <td>Collar de perlas</td>
                                                          <td>11</td>
                                                          <td>736</td>
                                                      </tr>
                                                      <tr>
                                                          <td>123455</td>
                                                          <td>Collar de perlas</td>
                                                          <td>11</td>
                                                          <td>736</td>
                                                      </tr>
                                                      <tr>
                                                           <td>123455</td>
                                                          <td>Collar de perlas</td>
                                                          <td>11</td>
                                                          <td>736</td>
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
                                                    <a href="/stores/inventory/add" class="btn btn-primary">                      
                                                           <i href="/add" class="fa fa-plus" aria-hidden="true"></i>
                                                    </a>  
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