import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';

export default class Contact extends Component{
    render(){
        return(
            <div>
                <h1 id="name">Kevan C. Barter</h1>
                <Nav />
                <div id="contactForm">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label for="name">Name</label>
                            <input 
                                type="text"
                                name="name"
                                onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input 
                                type="email"
                                name="email"
                                onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label for="message">Message</label>
                            <input
                                type="textarea"
                                name="message"
                                onChange={this.handleChange}/>
                        </div>

                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}