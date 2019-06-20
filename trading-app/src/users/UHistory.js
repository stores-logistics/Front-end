import React from 'react';
import '../styles/Users.css';
import API_URL from '../Server';
const axios = require("axios");
let tokenStr = localStorage.getItem('user')
import { Route } from "react-router";
{<Route path='/users/history/:id' component={NSHistory}/> }

class NSHistory extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            operList:[],
            userList:[]
        }
        this.getUserbyCode = this.getUserbyCode.bind(this);
        this.getTradings = this.getTradings.bind(this);
    }

    getUserbyCode() {
        const {id} = this.props.match.params
        return(
            axios.post(API_URL, { 
                query: `query{
                  userByCode(code: ${id}){
                    code
                    name
                    lastName
                    cabin
                    creditCard
                    username
                    password
                    phoneNumber
                    address
                    city
                    age
                    avatar
                    type
                    storeId
                  }
                }`
            },
            {headers: {"Authorization" : "Bearer " + tokenStr}}
            ).then(res => {
                var dict = res.data.data.userByCode 
                var array = []
                for(var key in dict) {
                var value = dict[key];
                array.push(value)
                }  
                this.setState({userList: array})
                this.setState({loaded: true})
            })
        )
      };

      displayUserDetails(){
        const si = this.state.userList
        return(
            <div>
                 <div class="row">
                                    <div class="col-2">
                                    </div>
                                    <div class="col-8">
                                    <h4 class="card-title">{si[1]}</h4>
                                    </div>
                                    <div class="col-2">
                                    <a id="icon"  href={'/users/edit/' + si[0]} class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                    </div>
                                </div>
            <p><img class=" img-fluid" src={si[11]}alt="card image" height="100" width="100"></img></p>
              <div id="cat" class="container-fluid">
                         <div class="row">
                           <div id="symbol" class="col-4">
                              <i class="fa fa-id-badge" aria-hidden="true"></i>
                            </div>
                            <div id="symbol" class="col-4">
                              <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                            </div>
                            <div id="symbol" class="col-4">
                              <i class="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                           </div>
                           <div class="row">
                           <div class="col-4">
                             <a id="cat">{si[0]}</a>
                            </div>
                            <div  id="font" class="col-4">
                               <a id="cat">{si[4]}</a>
                            </div>
                            <div id="font" class="col-4">
                                <a id="cat">{si[3]}</a>
                            </div>
                           </div>
                         </div>
                         <hr></hr>
                                  <a href={'/users/' + si[0]}  id="verhcompras" class="btn">Perfil</a>
                              <hr></hr>
                                  <a href={'/users/history/' + si[0]} id="verhcompras" class="btn"><strong>Historial de compras</strong></a>
                        </div>
      
        )
      }

      componentWillMount(){
         this.getUserbyCode()
         this.getTradings()
       };
      
    getTradings(){
            const axios = require("axios")
            const {id} = this.props.match.params
            let tokenStr = localStorage.getItem('user')
            axios.post(API_URL, {   
                headers: {"Authorization" : `Bearer ${tokenStr}`},
                query: ` tradingsByUserId(user_id: ${id})
                {
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
                   <a id="title">Stores Management</a>
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
                                {this.displayUserDetails()}
                            </div>
                        </div>
                    </div>
                <div class="col-8">
                  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        {/* <div class="frontside">  */}
                            <div id ="longpage" class="card">
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
                                <br></br>
                                    <table  id="tab_stores" class="table">
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