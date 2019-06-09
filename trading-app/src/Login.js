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
                 <form class="form-inline my-2 my-lg-0">
                     <a href="/login" class="btn"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
                 </form>
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
                                    <h4 class="card-title">Login</h4>
                                    <div class="container-fluid">
                                           <div class="form-group-row">  
                                             <input type="text" class="form-control" id="inlineFormInputName" placeholder="Usuario"></input> 
                                             <br></br>               
                                             <input type="text" class="form-control" id="inlineFormInputName" placeholder="Contraseña"></input>
                                             <br></br>
                                                  {/* Aquí va el captcha */}
                                             <br></br>
                                               <a href="/stores" id="verhcompras" class="btn">Ingresar</a>
                                            </div>   
                                         </div>   
                                    {/* <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> */}
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