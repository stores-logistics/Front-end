import React from 'react';
import '../styles/Stores.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class NSOperations extends React.Component{

        // const RequestQL = gql` 
        // query{
        //     allTradings{
        //       user_id
        //     }
        //   }
        // `
        // ReturnData = graphql(
        //     RequestQL,
        //     {

        //     }
        // )


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
                            <th scope="col">Cliente</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>                    
                        <tr>
                            <td>179452</td>
                            <td>Camilo Nieto</td>
                            <td>Bloqueador solar</td>
                            <td>7.55</td>
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