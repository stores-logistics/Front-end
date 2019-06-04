import React from 'react';
import './styles/Catalog.css';


class Catalog extends React.Component{
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
                                  <a id="icon" href="/" class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                                  </div>
                                  <div class="col-8">
                                  <h4 class="card-title">Tiffany&Co.</h4>
                                  </div>
                                  <div class="col-2">
                                  </div>
                              </div>
                                <p><img class=" img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image" height="100" width="100"></img></p>
                                <p class="card-text">Productos exclusivos de diseños especiales directamente dentro del crucero</p>
                                <div class="container-fluid">
                                 <div class="row">
                                    <div id="symbol" class="col-6">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    </div>
                                    <div id="symbol" class="col-6">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                   </div>
                                   <div class="row">
                                    <div  id="font" class="col-6">
                                       9:00-16:00
                                    </div>
                                    <div id="font" class="col-6">
                                        P4-L26
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
                                    <h4 class="card-title">Productos disponibles</h4>
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

export default Catalog;