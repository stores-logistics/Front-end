import React from 'react';
import '../styles/Stores.css';
import NSOperations from './NSOperations';
import SProfile from './SProfile';


class SOperations extends React.Component{
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
                                        <SProfile/>
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
                                              <h4 class="card-title">Historial de ventas</h4>
                                              <br></br>
                                              <NSOperations/>
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

export default SOperations;