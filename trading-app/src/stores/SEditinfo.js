import React from 'react';
import '../styles/Stores.css';
import CProducts from '../catalog/CProducts';


class SEditinfo extends React.Component{
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
              <div class="container">
                  <form class="form-inline">
                  </form>
                  <div class="row">
                          <div class="col-4">
                              <div class="card">
                                  <div class="card-body text-center">
                                  <div class="row">
                                                <div class="col-1">
                                                <a id="icon" href="/stores" class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                                                </div>
                                                <div class="col-10">                                      
                                                    <h4 class="card-title">Editar información</h4>
                                                </div>
                                                <div class="col-1">
                                                </div>
                                                <hr></hr>
                                        </div> 
                                      <div id = "edituser" class="container-fluid">
                                         <div class="form-group-row">  
                                           <input id ="test_i" type="text" class="form-control" placeholder="Nombre"></input>
                                          <br></br>
                                          <div class="form-group row">
                                              <div class="col-6">
                                                        <select id ="test_i" class="form-control" >
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
                                              <input id ="test_i" type="text" class="form-control"  placeholder="Horario"></input>
                                              </div>
                                           </div>
                                           <input id ="test_i" type="text" class="form-control" placeholder="Propietario"></input>
                                              <br></br>
                                           <input id ="test_i" type="text" class="form-control" placeholder="Ubicación"></input>
                                            <br></br>
                                           <div class="row">
                                                <div class="col-10">
                                                </div>
                                                <div class="col-7.5">
                                                </div>
                                                <div class="col-2.5">
                                                   <a id="icon" href="/stores" class="btn"><i class="fas fa-check fa2x"></i></a>
                                                </div>
                                            </div>                                            
                                            </div>   
                                       </div>                                        
                                      </div>
                                  </div>
                              </div>
                          <div class="col-8">
                          <div className="container" id="contcat">
                          <br></br>                          
                            <h2 className="titlec">Mi tienda</h2>                            
                            <br></br>
                            <div class="input-group">
                                <input id ="test_i" type="text" class="form-control" placeholder="Buscar un producto"></input>
                                <div class="input-group-append">
                                    <button id="creditc" class="btn" type="button">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <br></br>
                            <CProducts/>
                      </div>
                        </div>
                      </div>
              </div>
          </section>
        )
    }
}

export default SEditinfo;