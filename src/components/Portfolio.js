import React, { Component } from 'react';
import Nav from './Nav';
import Pojects from './Projects';

export default class Portfolio extends Component{

    render(){
        return(
            <div>
                <h1 id="name">Kevan C. Barter</h1>
                <Nav />
                <div id="portfolio">
                    <h2>Here are some of my recent projects:</h2>
                    <hr/> 
                    <Pojects />
                </div>
            </div>
        )
    }
}