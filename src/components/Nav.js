import React, { Component } from 'react';

class Nav extends Component {
    render(){
        return(
            <div id="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav;