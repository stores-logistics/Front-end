import React from 'react';
import '../styles/Stores.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import axios from "axios";


class NSOperations extends React.Component{

        componentDidMount(){
            const axios = require("axios")
            axios.post(`http://54.167.116.21:5000/graphql`, {
                query: `query{
                    tradingsByStoreId(store_id: ${1})
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
              console.log(this.setState(res));
            }).catch(function(error) {
                console.log(error);
            })    
        };

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
                        <tr>
                            <td>5cf5ddfde65d16001d96c536</td>
                            <td>2012-03-20</td>
                            <td>2</td>
                            <td>12ujashd1221dssadsa</td>
                            <td>12.2</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
                  
        )
    }
}

export default NSOperations;