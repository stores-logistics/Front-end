import React from 'react';
import '../styles/Stores.css';


class SProfile extends React.Component{
    render() {
        return(
           <div>
            <p><img class=" img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image" height="100" width="100"></img></p>
                            <div id="cat" class="container-fluid">
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
                                            <a id="cat">123545</a>
                                          </div>
                                          <div  id="font" class="col-4">
                                             <a id="cat">9-16</a>
                                          </div>
                                          <div id="font" class="col-4">
                                              <a id="cat">4-26</a>
                                          </div>
                                         </div>
                                       </div>
           </div>
        )
    }
}

export default SProfile;