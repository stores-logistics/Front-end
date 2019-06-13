import React from 'react';
import './styles/Home.css';
import API_URL from './Server';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            storeList:[]
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        
    }

    componentDidMount(){
        const axios = require("axios")
        axios.post(API_URL, {
            query: `query{
                allStores{
                  id
                  name
                  type
                  owner
                  ubication
                  dates
                }
              }`
        }).then(res => {
            // console.log(res);
            this.setState({
                storeList:res.data.data.allStores
            }) 
        })    
    };

    displayStores(){                            
        return this.state.storeList.map( (item,key) => {
          return(
            <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
            <div class="mainflip">
            <div class="frontside"> 
            <div class="card">
                <div class="card-body text-center">
                    <p><img class=" img-fluid" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1475836144/gvs96ywgysb53ivoaxs5.png" alt="card image"></img></p>
                    <h4 class="card-title">{item.name}</h4>
                    <p class="card-text">{item.type}</p>
                </div>
            </div>
        </div>
        <div class="backside">
            <div class="card">
                <div class="card-body text-center mt-4">
                    <h5 class="card-title">Horarios</h5>
                    <p class="card-text">}{item.dates}</p>
                    <h4 class="card-title">Ubicación</h4>
                    <p class="card-text">{item.ubication}</p>
                    <a href="/catalog/1" id="verprod" class="btn">Ver productos</a>                                
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
            )
        })} 

    render() {
        return(
        <section id="team" class="pb-5">
         <nav class="navbar navbar-dark">
                <a id = "nav "class="navbar-brand" href="#">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id = "title">Stores Manager</a>
                 </a>
                 <form class="form-inline my-2 my-lg-0">
                     <a href="/login" class="btn"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
                 </form>

            </nav> 
                <br></br>
    <div class="container">
                <h1 id = "onboard">Bienvenido a bordo</h1>
                <hr id = "hr"></hr>
        <br></br>
        <form class="form-inline">
   
        </form>
        <div class="row">
                         {this.displayStores()};
                </div>
            </div>
    </section>
        )
    }
}

export default Home;