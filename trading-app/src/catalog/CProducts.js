import React from 'react';
import '../styles/Catalog.css';


class CProducts extends React.Component{
    render() {
        return(
            <section id="sectioncat">
                <div id="smrow" className="row">
                <div class="col xs-12 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside"> 
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image"></img></p>
                                    <h4 class="smcard-title">Bloqueador solar anthelios XL</h4>
                                    <p className="card-text">330ml</p>
                                    <h6 id="card-price"><strong>$32</strong></h6>
                                    {/* <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h5 class="smcard-title">Horarios</h5>
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

            <div class="col-xs-12 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside"> 
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image"></img></p>
                                    <h4 class="smcard-title">Tiffany & Co.</h4>
                                    <p class="card-text">Productos exclusivos de diseños especiales directamente dentro del crucero</p>
                                    {/* <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h5 class="smcard-title">Horarios</h5>
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
            <div class="col-xs-12 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside"> 
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image"></img></p>
                                    <h4 class="smcard-title">Tiffany & Co.</h4>
                                    <p class="card-text">Productos exclusivos de diseños especiales directamente dentro del crucero</p>
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

            </section>
        )
    }
}

export default CProducts;