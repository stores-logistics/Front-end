import React from 'react';
import '../styles/Stores.css';
import API_URL from '../Server';
const axios = require("axios");
import { Route } from "react-router";
{<Route path='/stores/operations/:id' component={SOperations}/> }
let tokenStr = localStorage.getItem('user')

class SOperations extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            storeList:[],
            operList:[],
            cons1:[]
    };
    this.getStoreByCode = this.getStoreByCode.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    }
    
    getStoreByCode() {
        if(!localStorage.getItem("user")){
            location.href= '/login'
            alert("Por favor inicia sesión",0)
          } 
      const {id} = this.props.match.params
      return(
          axios.post(API_URL, { 
              query: `query{
                  storeByCode(code: ${id})
                  {
                    code
                    name
                    type
                    owner
                    ubication
                    dates 
                    description
                    img
                  }
                }`
          },
          {headers: {"Authorization" : "Bearer " + tokenStr}}
          ).then(res => {
              var dict = res.data.data.storeByCode 
              var array = []
              for(var key in dict) {
              var value = dict[key];
              array.push(value)
              }  
              this.setState({storeList: array})
              console.log(array)
              this.setState({loaded: true})
              console.log(this.state.storeList)
          })
      )
    };

    getOperationsbyId(){
      const axios = require("axios")
      const {id} = this.props.match.params
      let tokenStr = localStorage.getItem('user')
      axios.post(API_URL, { 
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
      },
      {headers: {'authorization' : "Bearer " + tokenStr}}
      ).then(res => {
          this.setState({
              operList:res.data.data.allTradings
          }) 
      }) 
    };

    closeSession(){
        localStorage.clear()
    }

    async componentWillMount(){
        const {id} = this.props.match.params
        if(!localStorage.getItem("user")){
            location.href= '/login'
            alert("Por favor inicia sesión",0)
          }else{
            if((localStorage.getItem("type")) != "Manager"){
                location.href= '/'
                alert("No tienes permiso para acceder a esta sección",0)
              }
              if((localStorage.getItem("Id")) != id){
                location.href= '/'
                alert("No tienes permiso para acceder a esta sección",0)
              }
        await this.getStoreByCode()
        await this.getOperationsbyId()
        await this.translateCodes()
          }
       };

       displayStoreDetails(){
        const si = this.state.storeList
            // console.log(this.state.storeInfo)
        return(
            <div>
                 <div class="row">
                    <div class="col-2">
                      </div>
                        <div class="col-8">
                            <h4 class="card-title">{si[1]}</h4>
                        </div>
                        <div class="col-2">
                           <a id="icon"  href={'/stores/edit/' + si[0]} class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                          </div>
                         </div>
            <p><img class=" img-fluid" src={si[7]}alt="card image" height="100" width="100"></img></p>
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
                             <a id="cat">114234</a>
                            </div>
                            <div  id="font" class="col-4">
                               <a id="cat">L-V 14:00-16:00</a>
                            </div>
                            <div id="font" class="col-4">
                                <a id="cat">{si[4]}</a>
                            </div>
                           </div>
                         </div>
                         <hr></hr>
                            <a href={'/stores/' + si[0]}  id="verhcompras" class="btn">Perfil</a>
                        <hr></hr>
                            <a href={'/stores/operations/' + si[0]} id="verhcompras" class="btn"><strong>Historial de ventas</strong></a>
                        <hr></hr>
                            <a href={'/stores/inventory/' + si[0]} id="verhcompras" class="btn">Inventario</a>                 
                        </div>
      
        )
      }

    //   translateCodes(){
    //     cons1 = this.state.operList
    //     console.log("cons1" + cons1)
    //   }

    // getOperationsbyId(){
    //     const axios = require("axios")
    //     const {id} = this.props.match.params
    //     let tokenStr = localStorage.getItem('user')
    //     axios.post(API_URL, { 
    //         query: `query{
    //           allTradings{
    //             _id
    //             time  componentWillMount(){
        //     if(!localStorage.getItem("user")){
        //         location.href= '/login'
        //         alert("Por favor inicia sesión",0)
        //       } 
        //         this.reqCardInfo()
        //         this.displayCard()
        //         this.displayBack()
        //    };stamp
    //             store_id 
    //             user_id
    //             product_id
    //             price
    //           }
    //         }`
    //     },
    //     {headers: {'authorization' : "Bearer " + tokenStr}}
    //     ).then(res => {
    //         this.setState({
    //             operList:res.data.data.allTradings
    //         }) 
    //     }).then(
    //       this.state.operList.map( (item) => {
    //           axios.post(API_URL, { 
    //               query: `query{
    //                   userByCode(code: ${item.user_id}){
    //                     name
    //                   }
    //                 }`
    //           },
    //           {headers: {"Authorization" : "Bearer " + tokenStr}}
    //           ).then(res => {
    //               var dict = res.data.data.userByCode 
    //               var array = []
    //               for(var key in dict) {
    //               var value = dict[key];
    //               array.push(value)
    //               }  
    //               this.setState({userList: array})
    //               console.log(array)
    //               this.setState({loaded: true})
    //               console.log(this.state.userList)
    //           })
    //           }
    //         })
    //     ) 
    //   };

      displayOperations(){
        return this.state.operList.map( (item,key) => {
          return(
                <tr key = {key}>
                 <td>{item._id}</td>
                  <td>{item.timestamp}</td>
                  <td>{item.user_id}</td>
                   <td>{item.product_id}</td>
                  <td>{item.price}</td>
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
                     <a href="/" onClick={this.closeSession} class="btn"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
                 </form>


            </nav> 
              <div class="container">
                  <form class="form-inline">
                  </form>
                  <div class="row">
                          <div class="col-4">
                              <div class="card">
                                  <div class="card-body text-center">
                                  {this.displayStoreDetails()}     
                                      </div>
                                  </div>
                              </div>
                          <div class="col-8">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div class="mainflip">
                                  {/* <div class="frontside">  */}
                                      <div id="longpage" class="card">
                                          <div class="card-body text-center">
                                              <h2 class="card-title">Historial de ventas</h2>
                                              <div id="operations">
                                                    <div class="container-fluid">
                                                        <div class="row">
                                                            <div class="input-group">
                                                                <input id ="test_i" type="text" class="form-control" placeholder="Buscar una operación"></input>
                                                           <div class="input-group-append">
                                                                    <button id="creditc" class="btn" type="button">
                                                                        <i class="fa fa-search" aria-hidden="true"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>          
                                                    </div>
                                                    <br></br>
                                                    <table id="tab_stores" class="table">
                                                        <thead >
                                                            <tr id="head_table" >
                                                                <th scope="col">Operación #</th>
                                                                <th scope="col">Hora</th>
                                                                <th scope="col">Cliente</th>
                                                                <th scope="col">Producto</th>
                                                                <th scope="col">Valor</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>                    
                                                            {this.displayOperations()}
                                                        </tbody>
                                                    </table>
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

export default SOperations;