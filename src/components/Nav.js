import React, { Component } from 'react';

class Nav extends Component {
    render(){
        return(
            <div id="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                </ul><br />
                <h2 class='contact'>Reach me at:</h2>
                <h3 class='contact'>kcbarter@msn.com</h3>
                <h3 class='contact'>(360)402-9986</h3>
            </div> 
        )
    }
}

export default Nav;