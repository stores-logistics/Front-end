import React from 'react';
import '../styles/Stores.css';


class Stores extends React.Component{
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
                                        <div class="col-2">
                                        </div>
                                        <div class="col-8">
                                        <h4 class="card-title">Tiffany&Co.</h4>
                                        </div>
                                        <div class="col-2">
                                        <a href="/stores/edit" class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                      <p><img class="img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image" height="100" width="100"></img></p>
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
                                          <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
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

export default Stores;