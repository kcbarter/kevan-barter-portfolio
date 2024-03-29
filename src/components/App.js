import React, { Component } from 'react';
import Nav from './Nav';
import Links from './Links';
import Languages from './Languages';
import Resume from '../data/Kevan_Barter_Resume.pdf';

class App extends Component{
 
  render(){
    
    return(
      <div>
        <h1 id="name">Kevan C. Barter</h1>
        <Nav />
        <div id="bio">
          <h2>Software Engineer:
            <a href={Resume} target="_blank">
              <button id="Resume">Resume</button>
            </a> 
            <Links />
          </h2>
          <hr />
          <p id="info">
            <strong>I am a Certified Scrum Master with my Bachelors degree in Software Development. </strong>
            I enjoy all aspects of Software Development, I have a strong foundation in back/front 
            end development. I've worked on projects in an Agile environment and always brought a positive attitude 
            to the team. I also enjoy learning new technologies and solving problems. My Full Stack skills is what sets me apart as I'll be able to solve problems on the front end and back end.
            
            I’m looking for a Software Engineering job where I can continue to develop my skills.
          </p>
          <hr/>
          <h3>Skills: <Languages /></h3>
        </div>
      </div>
    )
  }
}

export default App;
