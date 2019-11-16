import React, { Component } from 'react';
import Nav from './Nav';
import Links from './Links';

class App extends Component{
 
  render(){
    
    return(
      <div>
        <h1 id="name">Kevan Barter</h1>
        <Links />
        <div id="nav">
          <Nav />
        </div>
        <div id="bio">
          <p id="info">
            I am a Certified Scrum Master with my Bachelors degree in Software Development. 
            I enjoy all aspects of Software Development, I have a strong foundation in back/front 
            end development. I've worked on projects in an Agile environment and always brought a positive attitude 
            to the team. I also enjoy learning new technologies and solving problems. My Full Stack skills is what sets me apart as I'll be able to solve problems on the front end and back end.
            
            I’m looking for a Software Engineering job where I can continue to grow my skills.
          </p>
        </div>
      </div>
    )
  }
}

export default App;
