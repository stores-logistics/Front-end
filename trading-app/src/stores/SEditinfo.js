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
                                           <input id ="test_i" type="text" class="form-control" id="inlineFormInputName" placeholder="Nombre"></input>
                                          <br></br>
                                          <div class="form-group row">
                                              <div class="col-6">
                                                        <select id ="test_i" class="form-control" id="exampleFormControlSelect1">
                                                        <option>Souvenirs</option>
                                                        <option>Comidas</option>
                                                        <option>Ropa</option>
                                                        <option>Salud y belleza</option>
                                                        </select>              
                                             </div>
                                              <div class="col-6">
                                              <input id ="test_i" type="text" class="form-control" id="inlineFormInputName" placeholder="Horario"></input>
                                              </div>
                                           </div>
                                           <input id ="test_i" type="text" class="form-control" id="inlineFormInputName" placeholder="Propietario"></input>
                                              <br></br>
                                           <input id ="test_i" type="text" class="form-control" id="inlineFormInputName" placeholder="Ubicación"></input>
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
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div class="mainflip">
                                  {/* <div class="frontside">  */}
                                      <div class="card">
                                          <div class="card-body text-center">
                                          <div class="card-body text-center">
                                            <h4 class="card-title">Mi tienda</h4>
                                            <CProducts/>                                      
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

export default SEditinfo;