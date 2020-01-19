import React, { Component } from 'react';
import SeaJug from '../images/SeaJugProject.PNG';
import Kgc from '../images/KgcProject.JPG';
import StJames from '../images/StJamesOutreach.JPG';

export default class Projects extends Component{

    render(){
        return(
            <div>
                <div id="SeaJug">
                    <h2 class="center">
                        Seattle Java Users Group | 
                        <a href="https://github.com/windust/community-manager" target='_blank'>
                            <button id='GitHub'>GitHub</button> 
                        </a>
                    </h2> 
                    <h3 class="center">January 2019 - June 2019</h3>
                    <p class="description">
                        <a href="https://www.youtube.com/watch?v=m25U7l6kLx8" target='_blank'>
                            <img src={SeaJug} class='project'/>
                        </a>
                        A six month Senior Capstone project were I worked in an agile team of 
                        four. We worked to create a website for the a tech meetup group SeaJug 
                        so they could better schdule venues, speakers, food sponsors, and after 
                        events. I was responsble for helping with fullstack development, 
                        writing unit tests, and implementing the Google OAuth login system. 
                    </p>
                </div>
                <hr />
                <div id="khalsgc">
                    <h2 class="center">
                        Khalsa Gurmat Center | 
                        <a href="https://github.com/JPDvlpr/kgc-crm-portal-team" target='_blank'>
                            <button id='GitHub'>GitHub</button>
                        </a>
                    </h2>
                    <h3 class="center">April 2018 - June 2018</h3>
                    <p class="description">
                        <a href="http://kbarter.greenriverdev.com/kgc-crm-portal-team/" target='_blank'>
                            <img src={Kgc} class='project'/>
                        </a>
                        A three month Project were I worked on an agile team of 4 for the 
                        Khalsa Gurmat Center. We were tasked with helping to build a CRM 
                        add on to the existing site that helped better keep track of 
                        customers and their transactions that was previously done on paper.
                        I was responsble for helping with SQL data base design, 
                        frontend/backend validation, and fullstack development.
                    </p>
                </div>
                <hr/>
                <div id="StJamesOutreach">
                    <h2 class="center">St James Outreach</h2>
                    <h3 class="center">September 2017 - December 2017</h3>
                    <p class="description">
                        <a href="http://teamevergreen.greenrivertech.net/login.php" target='_blank'>
                            <img src={StJames} class='project'/>
                        </a>
                        Worked on an agile team of four for the non profit group St James Outreach. 
                        We worked to help transition the non profit group from a paper based system 
                        to a web based system. I was responsble for helpin with fullstack development, 
                        helping with SQL database design, and validation. We also didn't 
                        have a GitHub Repo for this Project.
                    </p>
                </div>
                <hr />
            </div>
        )
    }
}