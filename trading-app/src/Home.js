import React from 'react';
import './styles/Home.css';
// import Navbar from './stores/NSInfo.js';
 /* eslint-disable */

class Home extends React.Component{
    render() {
        return(
        <section id="team" class="pb-5">
         <nav class="navbar navbar-dark">
                <a id = "nav "class="navbar-brand" href="#">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id = "title">Stores Manager</a>
                 </a>
                 <form class="form-inline my-2 my-lg-0">
                     <a href="/login" class="btn"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
                 </form>

            </nav> 
                <br></br>
    <div class="container">
                <h1 id = "onboard">Bienvenido a bordo</h1>
                <hr id = "hr"></hr>
        <br></br>
        <form class="form-inline">
   
        </form>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside"> 
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image"></img></p>
                                    <h4 class="card-title">Tiffany & Co.</h4>
                                    <p class="card-text">Productos exclusivos de diseños especiales directamente dentro del crucero</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h5 class="card-title">Horarios</h5>
                                    <p class="card-text">Abierto de lunes a jueves 9:00 a.m - 5:00 p.m</p>
                                    <h4 class="card-title">Ubicación</h4>
                                    <a href="/catalog" id="verprod" class="btn">Ver productos</a>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://www.zilliondesigns.com/images/portfolio/gift-souvenir-shop/Logo-for-modern-online-gift-store-726668.png" alt="card image"></img></p>
                                    <h4 class="card-title">LUDI</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                    {/* <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h5 class="card-title">Horarios</h5>
                                    <p class="card-text">Abierto de lunes a jueves 9:00 a.m - 5:00 p.m</p>
                                    <h4 class="card-title">Ubicación</h4>
                                    <p class="card-text">Ubicado en el local 4-136</p>
                                    <a href="/catalog" id ="verhcompras" class="btn">Ver productos</a>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://cdn.palbin.com/users/31359/images/dolce-gabbana-logo-1547642202.jpg" alt="card image"></img></p>
                                    <h4 class="card-title">Dolce&Gabbana</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                    {/* <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h5 class="card-title">Horarios</h5>
                                    <p class="card-text">Abierto de lunes a jueves 9:00 a.m - 5:00 p.m</p>
                                    <h4 class="card-title">Ubicación</h4>
                                    <p class="card-text">Ubicado en el local 4-136</p>
                                    <a href="/catalog" id ="verhcompras" class="btn">Ver productos</a>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://www.easyparapharmacie.es/media/easysoft/home/manufacturer/logo_lrp.jpg" alt="card image"></img></p>
                                    <h4 class="card-title">La Roche-Posay</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                    {/* <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h5 class="card-title">Horarios</h5>
                                    <p class="card-text">Abierto de lunes a jueves 9:00 a.m - 5:00 p.m</p>
                                    <h4 class="card-title">Ubicación</h4>
                                    <p class="card-text">Ubicado en el local 4-136</p>
                                    <a href="/catalog" id ="verhcompras" class="btn">Ver productos</a>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="http://www.centenariocc.com/wp-content/uploads/2014/05/rivera-05-800x588.jpg" alt="card image"></img></p>
                                    <h4 class="card-title">La Riviera</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                    {/* <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h5 class="card-title">Horarios</h5>
                                    <p class="card-text">Abierto de lunes a jueves 9:00 a.m - 5:00 p.m</p>
                                    <h4 class="card-title">Ubicación</h4>
                                    <p class="card-text">Ubicado en el local 4-136</p>
                                    <a href="/catalog" id ="verhcompras" class="btn">Ver productos</a>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="http://atlantisplaza.com/wp-content/uploads/2015/07/ATLANTIS-logo-pep.jpg" alt="card image"></img></p>
                                    <h4 class="card-title">Pepe Ganga</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                    {/* <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h5 class="card-title">Horarios</h5>
                                    <p class="card-text">Abierto de lunes a jueves 9:00 a.m - 5:00 p.m</p>
                                    <h4 class="card-title">Ubicación</h4>
                                    <p class="card-text">Ubicado en el local 4-136</p>
                                    <a href="/catalog" id ="verhcompras" class="btn">Ver productos</a>                                
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

export default Home;