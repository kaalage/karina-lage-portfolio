import React from 'react';
import Navbar2 from './Navbar2';
import StarWarsVehicles from '../Videos/starwars-vehicles-video.mp4';

const ProjectDetail1 = () => {
  return (
    <div>
      <Navbar2 />
      <div className='container'>
        <div className='column'>
          <div className='project-detail-container'>
            <h2>Galactic Rides</h2>
            <h3>Overview</h3>
            <p className='project-detail-overview'>
            Galactic Rides is a personal project that combines the excitement of the Star Wars universe with the convenience of online shopping, and allows users to explore a catalog of iconic vehicles from the Star Wars franchise. 
            </p>
            <p className='project-detail-text'>
            </p>
          <h3>Features</h3>
            <ul>
              <li>Users can see a list of vehicles from Star Wars (data source: https://swapi.dev)</li>
              <li>Users can chose a vehicle to buy and be redirect to checkout</li>
              <li>Users can fill out the forms with personal, address and payment information</li>
            </ul>
          <h3>Technologies</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Axios</li>
              <li>Material UI</li>
            </ul>
            <h3>Challenges and what I learned</h3>
          <p className='challenges-text'>
          Throughout this project, I developed expertise in Node.js for server-side development, enabling me to build essential back-end logic and robust API endpoints. This facilitated seamless data retrieval from external sources using API requests, utilizing real-world data from the Star Wars API.
          Additionally, I refined my skills in React Component Composition, showcasing my capacity to break down intricate applications into reusable, modular components. 
          </p>
          </div>
        </div>
      <div className='column2'>
        <h3>Live Demo</h3>
        <video className='video' controls width="600" height="400">
          <source src={StarWarsVehicles} type="video/mp4" />
        </video>
      </div>
      </div>
    </div>
  )
}

export default ProjectDetail1;