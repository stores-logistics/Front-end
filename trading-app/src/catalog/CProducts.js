import React from 'react';
import '../styles/Catalog.css';
import API_URL from '../Server';
import { Route } from "react-router";
{<Route path='/catalog/:id' component={CProducts}/> }


class CProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cProducts:[]
        } 
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
            const axios = require("axios")
            // const {id} = this.props.match.params
            // console.log(this.props.match.params)
            axios.post(API_URL, {
                query: `query{
                    productsByStore(storeId: ${2})
                    {
                      _id
                      name
                      description
                      type
                      image
                      storeId
                      quantity
                      cost
                    }
                  }`
            }).then(res => {
                console.log(res);
                this.setState({
                    cProducts:res.data.data.productsByStore
                }) 
            })    
        };

        displayCProducts(){   
            return this.state.cProducts.map( (item,key) => {
              return(
                        <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                            <div class="mainflip">
                                <div class="frontside"> 
                                    <div class="card">
                                        <div class="card-body text-center">
                                            <p><img class=" img-fluid" src={item.image} alt="card image"  height="30" width="30"></img></p>
                                            <h4 id="card-titles">{item.name}</h4>
                                            <p class="card-text">330 ml</p>
                                            <h4 id="card-price">$ {item.cost}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card">
                                        <div class="card-body text-center mt-4">
                                            <p class="card-text"><strong>{item.type}</strong></p>
                                            <p class="card-text">{item.description}</p>
                                            <h6 id="card-price">Stock: {item.quantity}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                )
            })};

    render() {
        return(
                <div className="row">
                    {this.displayCProducts()}
                </div>
        )
    }
}

export default CProducts;