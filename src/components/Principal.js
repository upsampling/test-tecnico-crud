import React from 'react';
import '../styles/styles.css';
import { Add } from './Add';
import { List } from './List';
import 'animate.css';



export const Principal = () => {

    
    return (
        <div className="container animate__animated animate__pulse">
            <h1 className="p-1 text-center"> CRUD Chanchito Feliz </h1>
            <hr/>

            <div className="row">
                <div className="col-sm-12 col-md-5 mb-5">
                    <Add />   
                </div>
                <div className="col-sm-12 col-md-7">
                   <List />
                </div>
            </div>

        </div>
    )
}
