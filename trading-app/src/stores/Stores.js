import React from 'react';
import '../styles/Stores.css';
import CProducts from '../catalog/CProducts';
import API_URL from '../Server';
const axios = require("axios");
let tokenStr = localStorage.getItem('user')


class Stores extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        storeList:[],
};
this.getStoreByCode = this.getStoreByCode.bind(this);
this.componentWillMount = this.componentWillMount.bind(this);
}

getStoreByCode() {
  return(
      axios.post(API_URL, { 
          query: `query{
              storeByCode(code: ${2})
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

async componentWillMount(){
  await this.getStoreByCode()
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
                              <a id="icon"  href="/stores/edit" class="btn"><i class="fa fa-pencil" aria-hidden="true"></i></a>
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
                  </div>

  )
}

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
                                  {this.displayStoreDetails()}
                                       <hr></hr>
                                       <a href="/stores" id="verhcompras" class="btn"><strong>Perfil</strong></a>
                                       <hr></hr>
                                      <a href="/stores/operations" id="verhcompras" class="btn">Ver historial de ventas</a>
                                        <hr></hr>
                                    <a href="/stores/inventory" id="verhcompras" class="btn">Inventario</a>                      
                                      </div>
                                  </div>
                              </div>
                          <div class="col-8">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div class="mainflip">
                                  {/* <div class="frontside">  */}
                                      <div id="longpage" class="card">
                                          <div class="card-body text-center">
                                            <h4 class="card-title">Mi tienda</h4>
                                            <br></br>
                                            <CProducts/>                                
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

export default Stores;