import React from 'react';
import '../styles/Stores.css';

class NSOperations extends React.Component{

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
            <div id="operations">
                <div class="container-fluid">
                    <div class="row">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Buscar una operación"></input>
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
                  
        )
    }
}

export default NSOperations;