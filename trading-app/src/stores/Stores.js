import React from 'react';
import '../styles/Stores.css';


class Stores extends React.Component{
    render() {
        return(
            <section id="team" class="pb-5">
          {/* <Navbar/> */}
          
              <div class="container">
                  <form class="form-inline">
                  </form>
                      <div class ="row">
                          <div class = "col-4">
                              <div class="card">
                                  <div class="card-body text-center">
                                      <h4 class="card-title">Tiffany&Co.</h4>
                                      <p><img class=" img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image" height="100" width="100"></img></p>
                                      <div class="container-fluid">
                                       <div class= "row">
                                         <div id="symbol" class = "col-4">
                                            <i class="fa fa-id-badge" aria-hidden="true"></i>
                                          </div>
                                          <div id="symbol" class = "col-4">
                                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                                          </div>
                                          <div id="symbol" class = "col-4">
                                          <i class="fa fa-map-marker" aria-hidden="true"></i>
                                          </div>
                                         </div>
                                         <div class= "row">
                                         <div class = "col-4">
                                            <a id = "font">123545</a>
                                          </div>
                                          <div  id = "font" class = "col-4">
                                             9 -16
                                          </div>
                                          <div id = "font" class = "col-4">
                                              4-26
                                          </div>
                                         </div>
                                       </div>
                                       <hr></hr>
                                      <a href="/stores/operations" id ="verhcompras" class="btn">Ver historial de ventas</a>
                                        <hr></hr>
                                    <a href="/stores/inventory" id ="verhcompras" class="btn">Catálogo</a>                      
                                      </div>
                                  </div>
                              </div>
                          <div class = "col-8">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div class="mainflip">
                                  {/* <div class="frontside">  */}
                                      <div class="card">
                                          <div class="card-body text-center">
                                              <h4 class="card-title">Mi información</h4>

                                              <div id = "usercont" class="container-fluid">
                                                 <div class ="row">
                                                     <div class ="col-3">
                                                     </div>
                                                    <div class = "col-6">
                                                        <div class="input-group mb-3">
                                                             <div class="input-group-prepend">
                                                                  <span class="input-group-text"  id = "basic-addon1">Nombre</span>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
                                                        </div>  
                                                    </div>
                                                    <div class ="col-3">
                                                     </div>
                                                 </div>
                                                  <hr></hr>
                                                <h4 class="card-title">Información de facturación</h4>
                                                  <div class = "row">
                                                      <div class = "col-3">
                                                      </div>
                                                      <div class = "col-6">
                                                          <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="5180 9200 0034 5656"></input>
                                                                <div class="input-group-append">
                                                                <button id = "creditc" class="btn" type="button">
                                                                  <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                                                                </button>
                                                                </div>
                                                            </div>
                                                      </div>
                                                      <div class = "col-3">
                                                      </div>
                                                  </div>
                                                  .
                                                  <div class = "row">
                                                      <div class = "col-3">
                                                      </div>
                                                      <div class = "col-3">
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon1">CVV</span>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="901" aria-label="Username" aria-describedby="basic-addon1"></input>
                                                        </div>
                                                      </div>
                                                      <div class = "col-3">
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="05/22" aria-label="Username" aria-describedby="basic-addon1"></input>
                                                        </div>
                                                      </div>
                                                      <div class = "col-3">
                                                      </div>
                                                  </div>
                                                  <hr></hr>
                                              </div>
                                            </div>
                                      </div>
                                  {/* </div> */}
                                  {/* <div class="frontside">
                                      <div class="card">
                                          <div class="card-body text-center">
                                          <div class="container-fluid">
                                                  <div class = "row">
                                                      <div class = "col-6">
                                                          Nombre:
                                                      </div>
                                                      <div class = "col-6">
                                                          <input></input>
                                                      </div>
                                                  </div>
                                                  <div class = "row">
                                                      <div class = "col-6">
                                                          Apellido:
                                                      </div>
                                                      <div class = "col-6">
                                                          <input></input>
                                                      </div>
                                                  </div>
                                                  <hr></hr>
                                                  <div class = "row">
                                                      <div class = "col-6">
                                                          Nombre:
                                                      </div>
                                                      <div class = "col-6">
                                                          <input></input>
                                                      </div>
                                                  </div>
                                              </div>
                                               <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>           
                                           </div>
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

export default Stores;