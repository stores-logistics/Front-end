import React from 'react';
import '../styles/Catalog.css';
import CProducts from './CProducts';
import API_URL from '../Server';
import { Route } from "react-router";
{<Route path='/catalog/:id' component={Catalog}/> }

class Catalog extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            storeInfo:[]    
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        
    }

    componentDidMount(){
        const axios = require("axios")
        const {id} = this.props.match.params
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
               {headers: {"Public" : true}}    
            ).then(res => {       
                    var dict = res.data.data.storeByCode 
                    var array = []
                    for(var key in dict) {
                    var value = dict[key];
                    array.push(value)
                    }   
                    this.setState({
                    storeInfo: array
                }) 
            })
        };

        displayStore(){
            const si = this.state.storeInfo
                return(
                    <div>
                        <div class="row">
                            <div class="col-2">
                            <a id="icon" href="/" class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                        </div>
                        <div class="col-8">
                            <h4 class="card-title">{si[1]}</h4>
                        </div>
                        <div class="col-2">
                        </div>
                        </div>
                            <p><img class="img-fluid" src={si[7]} alt="card image" height="100" width="100"></img></p>
                            <p class="card-text">{si[6]}</p>
                        <div class="container-fluid">
                            <div class="row">
                                <div id="symbol" class="col-6">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    </div>
                                    <div id="symbol" class="col-6">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                   </div>
                                   <div class="row">
                                    <div  id="cat" class="col-6">                                      
                                         L-V 14:00-16:00
                                    </div>
                                    <div id="cat" class="col-6">
                                         {si[4]}
                                    </div>
                                   </div>
                                 </div>
                    </div>
                )            
        };

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
                <div class="row">
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body text-center">
                                {this.displayStore()}
                                </div>
                            </div>
                        </div>
                    <div class="col-8">
                      <div className="container" id="contcat">
                          <br></br>                          
                            <h2 className="titlec">Catálogo</h2>                             
                            <br></br>
                            <div class="input-group">
                                <input id ="test_i" type="text" class="form-control" placeholder="Buscar un producto"></input>
                                <div class="input-group-append">
                                    <button id="creditc" class="btn" type="button">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <br></br>
                            <CProducts/>
                      </div>
                  </div>
                </div>
        </div>
    </section>
        )
    }
}

export default Catalog;