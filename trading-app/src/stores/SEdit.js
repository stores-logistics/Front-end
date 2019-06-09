import React from 'react';
import '../styles/Stores.css';


class SEdit extends React.Component{
    render() {
        return(
            <section id="team" class="pb-5">
            {/* <Navbar/> */}
            
                <div class="container">
                    <form class="form-inline">
                    </form>
                    <div class="row">
                            <div class="col-4">
                                 <div class="card">
                                    <div class="card-body text-center">
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

                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                <div class="frontside"> 
                                    <div class="cardem">
                                    <div class="frontside"> 
                                        <div class="card-body text-center">
                                            <br></br>
                                            <p><img class=" img-fluid" src="https://www.laroche-posay.es/site/pages/showImageResized.aspx?EncMediaId=YUV4QXhDWnFSTWZzeDV1Y0U1ekowdz09&ImageFormatAppCode=IMAGEFORMAT_ORIGINAL&v=220196063434" alt="card image"  height="55" width="55"></img></p>
                                            <h4 id="card-titles">Bloqueador Anthelios XL</h4>
                                            {/* <p class="card-texts">Bloqueador solar de amplio espectro, protege las 24 horas por medio de su fòrmula no grasa e hipoalergénica.</p> */}
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
                            <div  class="col-8">
                              <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                    {/* <div class="frontside">  */}
                                        <div id="longpage" class="card">
                                            <div class="card-body text-center">
                                                <h4 class="card-title">Editar producto</h4>
                                               <div className="row">
                                                   <div className="col4">
                                                       .
                                                   </div>
                                               <div class="col-4">
                                               <div class="frontside"> 
                                                    <div class="cardem">
                                                         <div class="card-body text-center">
                                                             <br></br>
                                                              <p><img class=" img-fluid" src="https://www.laroche-posay.es/site/pages/showImageResized.aspx?EncMediaId=YUV4QXhDWnFSTWZzeDV1Y0U1ekowdz09&ImageFormatAppCode=IMAGEFORMAT_ORIGINAL&v=220196063434" alt="card image"  height="65" width="65"></img></p>
                                                              <h4 class="card-title">Bloqueador Anthelios XL</h4>
                                                               <p class="card-text">Bloqueador solar de amplio espectro, protege las 24 horas por medio de su fòrmula no grasa e hipoalergénica.</p>
                                                               <h6 id="card-price"><strong>$32</strong></h6>
                                                       </div>
                                                    </div>
                                                </div>
                                                <div class="backside">
                                                <div class="card">
                                                 <div class="card-body text-center mt-4">
                                          <p className="card-text">Bloqueador solar de amplio espectro, protege las 24 horas por medio de su fòrmula no grasa e hipoalergénica.</p>

                                     </div>
                                </div>
                                    </div>  
                                                </div>
                                                <div className="col4">
                                                         
                                                   </div>
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

export default SEdit;