import React from 'react';
import './styles/Login.css';


class Login extends React.Component{
    render() {
        return(
            <section id="team" class="pb-5">
                  <nav class="navbar navbar-dark">
                 <a id = "nav "class="navbar-brand" href="/">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id = "title">Stores Manager</a>
                      </a>
            </nav> 
            <br></br>
            <br></br>
            <div class="row">
                <div class="col-2">                
                </div>
                <div class="col-3">
                    <br></br>
                    <br></br>
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        {/* <div class="frontside">  */}
                            <div class="card">
                                <div class="card-body text-center">
                                    <h4 class="card-title">Acceder</h4>
                                    <div class="container-fluid">
                                           <div class="form-group-row">  
                                             <input type="text" class="form-control" id="test_d" placeholder="Usuario"></input> 
                                             <br></br>               
                                             <input type="password" class="form-control" id="test_d" placeholder="Contraseña"></input>
                                             <br></br>
                                             <hr></hr>
                                               <a href="/stores" id="verhcompras" class="btn">Ingresar</a>
                                            </div>   
                                         </div>   
                                </div>
                            </div>  
                    </div>
                </div>                    
                </div>
                <div class="col-7">
                </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            </section>
        )
    }
}

export default Login;