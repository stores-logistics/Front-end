import React from 'react';
import '../styles/Users.css';


class UInfo extends React.Component{
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
                  <form class="form-in  line">
                  </form>
                  <div class="row">
                      <div class="col-4">
                      <div class="card">
                                  <div class="card-body text-center">
                                  <div class="row">
                                                <div class="col-1">
                                                <a id="icon" href="/users" class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                                                </div>
                                                <div class="col-10">                                      
                                                    <h4 class="card-title">Pago</h4>
                                                </div>
                                                <div class="col-1">
                                                </div>
                                        </div> 
                                        <br></br>
                                        .
                                      <div id = "edituser" class="container-fluid">
   
                                       </div>                                        
                                      </div>
                                  </div>
                      </div>
                          <div class="col-8">
                              <div className="container" id="contcat">
                                <br></br>
                                  <h4 class="card-title">Información personal</h4>
                                  <br></br>
                                  <br></br>
                                  <br></br>
                                  <div class="row">
                                      <div class="col-3">
                                      </div>   
                                      <div class="col-6">
                                      <div   class="form-group-row">  
                                           <input type="text" class="form-control" id="test_d" placeholder="Nombre"></input>
                                         <br></br>
                                         <input type="text" class="form-control" id="test_d" placeholder="Apellido"></input>
                                          <br></br>
                                          <div class="form-group row">
                                                <div class="col-8">
                                                <input type="text" class="form-control" id="test_d" placeholder="# teléfonico"></input>
                                                </div>
                                                <div class="col-4">
                                                 <input type="text" class="form-control" id="test_d" placeholder="Edad"></input>
                                                </div>
                                            </div>
                                          <input type="text" class="form-control" id="test_d" placeholder="Dirección"></input>
                                          <br></br>
                                          <input type="text" class="form-control" id="test_d" placeholder="Ciudad"></input>
                                          <br></br>                                          
                                            </div>  
                                      </div>     
                                      <div class="col-3">
                                      </div>                                                                            
                                  </div>
                                  <br></br>
                                  <br></br>
                                  <div class="row">
                                    <div class="col-10">
                                    </div>
                                      <div class="col-2">
                                        <a id="icon" href="/users" class="btn"><i class="fas fa-check fa2x"></i></a>
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

export default UInfo;