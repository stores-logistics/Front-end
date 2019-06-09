import React from 'react';
import '../styles/Users.css';

class Users extends React.Component{
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
                                        <h4 class="card-title">Iván Herrera</h4>
                                        </div>
                                        <div class="col-2">
                                        <a id="icon" href="/users/edit" class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                      <p><img class=" img-fluid" src="https://image.flaticon.com/icons/svg/1816/1816075.svg " alt="card image" height="100" width="100"></img></p>
                                      <div class="container-fluid">
                                       <div class="row">
                                         <div id="symbol" class="col-4">
                                            <i class="fa fa-id-badge" aria-hidden="true"></i>
                                          </div>
                                          <div id="symbol" class="col-4">
                                             <i class="fa fa-credit-card" aria-hidden="true"></i>
                                          </div>
                                          <div id="symbol" class="col-4">
                                              <i class="fa fa-bed" aria-hidden="true"></i>
                                          </div>
                                         </div>
                                         <div class="row">
                                         <div class="col-4">
                                            <a id="font">18293</a>
                                          </div>
                                          <div  id="font" class="col-4">
                                             ***9828
                                          </div>
                                          <div id="font" class="col-4">
                                              26E
                                          </div>
                                         </div>
                                       </div>
                                       <hr></hr>
                                      <div className="container">
                                      <div className="row">
                                          <div className="col-4">
                                           <a href="/users/history" id="btnprinc" class="btn"><i class="fas fa-history"></i></a>                      
                                          </div>
                                          <div className="col-4">
                                          <a href="/users/history" id="btnprinc" class="btn"><i class="fas fa-history"></i></a>                      
                                          </div>
                                          <div className="col-4">
                                          <a href="/users/history" id="btnprinc" class="btn"><i class="fas fa-history"></i></a>                      
                                          </div>
                                       </div>
                                      </div>
                                      <a href="/users/history" id="verhcompras" class="btn">Ver historial de compras</a>                      
                                      </div>
                                  </div>
                              </div>
                          <div class="col-8">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div class="mainflip">
                                  {/* <div class="frontside">  */}
                                      <div class="card">
                                          <div class="card-body text-center">
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           <br></br>
                                           
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

export default Users;