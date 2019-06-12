import React from 'react';
import '../styles/Users.css';
// import NSHistory from './NSHistory';


class NSHistory extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            operList:[]
        }
    }

    componentDidMount(){
            const axios = require("axios")
            axios.post(`http://54.91.244.215:5000/graphql`, {
                query: `query{
                    allTradings{
                      _id
                      timestamp
                      store_id
                      user_id
                      product_id
                      price
                    }
                  }`
            }).then(res => {
                // console.log(res);
                this.setState({
                    operList:res.data.data.allTradings
                }) 
            })    
        };

        displayOperations(){            
            return this.state.operList.map( tradings => {
              return(
                    <tr>
                     <td>{tradings._id}</td>
                      <td>{tradings.timestamp}</td>
                      <td>{tradings.store_id}</td>
                       <td>{tradings.product_id}</td>
                      <td>{tradings.price}</td>
                    </tr>
                )
            })}
        
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
                               <div id="cat"class="col-4">
                                  11286535
                                </div>
                                <div id="cat" class="col-4">
                                   ***9828
                                </div>
                                <div id="cat" class="col-4">
                                    26E
                                </div>
                               </div>
                             </div>
                             <hr></hr>
                              <a href="/users" id="verhcompras" class="btn">Perfil</a>                      
                              <hr></hr>
                              <a href="/users/history" id="verhcompras" class="btn"><strong>Historial de compras</strong></a>                      
                    
                            </div>
                        </div>
                    </div>
                <div class="col-8">
                  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        {/* <div class="frontside">  */}
                            <div class="card">
                                <div class="card-body text-center">
                                    <h4 class="card-title">Historial de compras</h4>
                                <div class="container-fluid">
                                    <div class="row">
                                    <div class="input-group">
                                        <input id="test_i" type="text" class="form-control" placeholder="Buscar una tienda"></input>
                                             <div class="input-group-append">
                                                 <button id="creditc" class="btn" type="button">
                                                     <i class="fa fa-search" aria-hidden="true"></i>
                                                 </button>
                                             </div>
                                      </div>
                                    </div>

                                </div>
                                .
                                    <table class="table">
                                        <thead >
                                            <tr id="head_table" >
                                                <th scope="col">Operación #</th>
                                                <th scope="col">Hora</th>
                                                <th scope="col">Tienda</th>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.displayOperations()}                              
                                        </tbody>
                                        </table>
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

export default NSHistory;