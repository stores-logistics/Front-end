import React from 'react';
import '../styles/Stores.css';


class SAdd extends React.Component{
    render() {
        return(
          <section id="team" class="pb-5">
                                         <nav class="navbar navbar-dark">
                <a id="nav "class="navbar-brand" href="/">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id="title">Stores Manager</a>
                 </a>
            </nav> 
            {/* <Navbar/> */}
            
                <div class="container">

                    <div class="row">
                            <div class="col-4">
                                <div class="container" id="contprev">
                                    <br></br>
                                    <div class="row">
                                        <div class="col-2">
                                        <a id="icon" href="/stores/inventory" class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                                        </div>
                                        <div class="col-8">
                                        <h4 class="card-title">Preview</h4>
                                        </div>
                                        <div class="col-2">
                                        <a id="icon" href="/stores/inventory/edit" class="btn"><i class="fa fa-refresh" aria-hidden="true"></i></a>
                                        </div>
                                    </div>

                                <div className="row">
                                    <div className="col-1">
                                    </div>          
                                    <div className="col-10">
                                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                <div class="frontside"> 
                                    <div class="card">
                                    <div class="frontside"> 
                                        <div class="card-body text-center">
                                            <p><img class=" img-fluid" src="https://www.laroche-posay.es/site/pages/showImageResized.aspx?EncMediaId=YUV4QXhDWnFSTWZzeDV1Y0U1ekowdz09&ImageFormatAppCode=IMAGEFORMAT_ORIGINAL&v=220196063434" alt="card image"  height="40" width="40"></img></p>
                                            <h4 id="card-titles">Bloqueador Anthelios XL</h4>
                                             <p className="card-text">330ml</p>
                                            <h6 id="card-price">$32</h6> 
                                            </div>
                                    </div>                              
                                    </div> 
                                    </div>
                                   <div class="backside">
                                  <div class="card">
                                <div class="card-body text-center mt-4">
                                    <br></br>
                                        <p className="card-text"><strong>Salud y belleza</strong></p>
                                        <p className="card-text">Bloqueador solar de amplio espectro, protege las 24 horas por medio de su fòrmula no grasa e hipoalergénica.</p>
                                        <h6 id="card-price">Stock: 55</h6>
                                     </div>
                                </div>
                                    </div>
                                </div>
                            </div>
                                        </div>                          
                                </div>

                                </div>
                                </div>
                            <div  class="col-8">
                              <div id="contcat" className="container">
                                  <br></br>
                                   <div class="row">
                                        <div className="col-2">
                                        </div>
                                        <div className="col-8">
                                            <h1 className="titlec">Añadir Producto </h1>
                                        </div>
                                        <div  className="col-2"> 
                                        {/* <a id="icon"><i class="fa fa-id-card" aria-hidden="true"></i> 124234234</a>                                            */}
                                        </div>
                                   </div>
                                    <div class="row">
                                        <div class="col-2">
                                        </div>
                                        <div class="col-8">
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                        <div id = "edituser" class="container-fluid">
                                         <div class="form-group-row">  
                                           <input id ="test_d" type="text" class="form-control" placeholder="Nombre"></input>
                                          <br></br>
                                          <input id ="test_dl" type="text" class="form-control" placeholder="Descripción"></input>
                                          <br></br>
                                          <div class="form-group row">
                                              <div class="col-6">
                                                        <select id ="test_d" class="form-control" >
                                                        <option>Categoría</option>
                                                        <option>Comidas</option>
                                                        <option>Ropa</option>
                                                        <option>Salud y belleza</option>
                                                        </select>              
                                             </div> 
                                              <div class="col-6">
                                              <input id ="test_d" type="text" class="form-control"  placeholder="img url"></input>
                                              </div>                                              
                                           </div>                                                                               <div class="form-group row">
                                              <div class="col-6">
                                                        <select id ="test_d" class="form-control" >
                                                        <option>Cantidad</option>
                                                        <option>1</option>
                                                        <option>Ropa</option>
                                                        <option>Salud y belleza</option>
                                                        </select>              
                                             </div> 
                                              <div class="col-6">
                                              <input id ="test_d" type="text" class="form-control"  placeholder="Precio"></input>
                                              </div>
                                              
                                           </div>                                          
                                            </div>   
                                       </div> 
                                        </div>
                                        <div class="col-2">
                                        </div>                                            
                                    </div> 
                                    <br></br>
                                    <br></br>
                                    <br></br>

                                   <div className="row">
                                        <div className="col-10">
                                        </div>
                                        <div className="col-2">
                                            <a id="icon" href="/stores" class="btn"><i class="fas fa-check fa2x"></i></a>
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

export default SAdd;