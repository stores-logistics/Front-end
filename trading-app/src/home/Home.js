import React from 'react';
import '../styles/Home.css';
import Header from '../Header';
import API_URL from '../Server';

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
            headers: {"Public" : true}, 
            query: `query{                
                allStores{
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
                    <br></br>
                    <p><img id="image" src={item.img} height="30" width="30"></img></p>
                    <h4 class="card-title">{item.name}</h4>
                    <strong><p class="card-text">{item.type}</p></strong>
                    <p class="card-text">{item.description}</p>
                </div>
            </div>
        </div>
        <div class="backside">
            <div class="card">
                <div class="card-body text-center mt-4">
                    <h5 class="card-title">Horarios</h5>
                    <p class="card-text">{item.dates}</p>
                    <h4 class="card-title">Ubicación</h4>
                    <p class="card-text">{item.ubication}</p>
                    <a class="btnn"  href={'/catalog/' + item.code} >Ver productos</a>   
                    <h1 className="trans">............................</h1>                    
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
         <Header/>
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