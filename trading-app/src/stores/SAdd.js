import React from 'react';
import '../styles/Stores.css';


class SAdd extends React.Component{
    render() {
        return(
          <section id="team" class="pb-5">
                   <nav class="navbar navbar-dark">
                <a id = "nav "class="navbar-brand" href="/">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id = "title">Stores Manager</a>
                 </a>
                 <form class="form-inline my-2 my-lg-0">
                     <a href="/login" class="btn"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
                 </form>

            </nav> 
          
              <div class="container">
                  <form class="form-inline">
                  </form>
                  <div class ="row">
                          <div class = "col-4">
                              <div class="card">
                                  <div class="card-body text-center">
                                      <h4 class="card-title">Añadir producto</h4>
                                      <hr></hr>
                                      <div class="container-fluid">
                                         <div class ="form-group-row">  
                                           <input type="text" class="form-control" id="inlineFormInputName" placeholder="Nombre"></input>
                                         .
                                          <div class="form-group row">
                                              <div class = "col-6">
                                              <input type="text" class="form-control" id="inlineFormInputName" placeholder="Stock"></input>
                                              </div>
                                              <div class = "col-6">
                                              <input type="text" class="form-control" id="inlineFormInputName" placeholder="Precio"></input>
                                              </div>
                                           </div>
                                           <input type="text" class="form-control" id="inlineFormInputName" placeholder="Descripción"></input>
                                           .<a href="/stores/operations" id ="verhcompras" class="btn">Guardar</a>
                                            </div>   
                                       </div>                                        
                                      </div>
                                  </div>
                              </div>
                          <div class = "col-8">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div class="mainflip">
                                  {/* <div class="frontside">  */}
                                      <div class="card">
                                          <div class="card-body text-center">
                                              <h4 class="card-title">Catálogo</h4>
                                          <div class = "container-fluid">
                                              <div class = "row">
                                              <div class="input-group">
                                                  <input type="text" class="form-control" placeholder="Buscar un producto por ID"></input>
                                                       <div class="input-group-append">
                                                           <button id = "creditc" class="btn" type="button">
                                                               <i class="fa fa-search" aria-hidden="true"></i>
                                                           </button>
                                                       </div>
                                                </div>
                                              </div>
          
                                          </div>
                                          .
                                              <table class="table">
                                                  <thead >
                                                      <tr id = "head_table" >
                                                          <th scope="col">ID</th>
                                                          <th scope="col">Producto</th>
                                                          <th scope="col">Stock</th>
                                                          <th scope="col">Valor</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr  id = "font" >
                                                          <td>123455</td>
                                                          <td>Collar de perlas</td>
                                                          <td>11</td>
                                                          <td>736</td>
                                                      </tr>
                                                      <tr  id = "font" >
                                                          <td>153494</td>
                                                          <td>Anillo de diamantes</td>
                                                          <td>2</td>
                                                          <td>8550</td>
                                                      </tr>
                                                      <tr  id = "font" >
                                                          <td>128905</td>
                                                          <td>Reloj de rubies</td>
                                                          <td>19</td>
                                                          <td>1894</td>
                                                      </tr>
                                                      <tr  id = "font" >
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
                                              <div class = "row">
                                                  <div class ="col-3">
                                                  </div>
                                                  <div class ="col-3">
                                                  </div>
                                                  <div class ="col-3">
                                                  </div>
                                                  <div class ="col-3 text center">
                                                  <a href="/stores/inventory/edit" class="btn btn-primary">                      
                                                           <i href = "/add" class="fa fa-pencil" aria-hidden="true"></i>
                                                    </a>  
                                                    .  .
                                                    <a href="/stores/inventory/add" class="btn btn-primary">                      
                                                           <i href = "/add" class="fa fa-plus" aria-hidden="true"></i>
                                                    </a>  
                                                 </div>
                                              </div>
                                          </div>
                                      </div>
                                  {/* </div> */}
                                  {/* <div class="backside">
                                      <div class="card">
                                          <div class="card-body text-center">
                                              <h4 class="card-title">Información</h4>
                                              <p class="card-text">Productos exclusivos de diseños especiales directamente dentro del crucero</p>
                                               <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>                                </div>
                                      </div>
                                  </div> */}
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