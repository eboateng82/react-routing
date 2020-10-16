import React from 'react';
import '../index.css';

const About = () => {

    return (
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">     
         <h3>React App using Routing  </h3>
        <p>This project was completed by following <strong>
        <a target="_blank"
          href={'https://www.cluemediator.com/routing-react-js'}
          rel="noopener noreferrer">
        Clue Mediator's
        </a>
        </strong> article on Routing with React.</p>
        </div> 
      </div>
    )
}

export default About;