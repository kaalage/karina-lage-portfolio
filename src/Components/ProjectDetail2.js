import React from 'react';
import Navbar2 from './Navbar2';
import InventoryTracker from '../Videos/inventory-tracker-video.mp4';

const ProjectDetail2 = () => {
  return (
    <div>
      <Navbar2 />
      <div className='container'>
        <div className='column'>
          <div className='project-detail-container'>
            <h2>Inventory Tracker</h2>
            <h3>Overview (<a href="https://github.com/kaalage/inventory-tracker-integration">GitHub</a>)</h3>
            <p className='project-detail-overview'>Can you imagine a world without coffee? You just can’t, right? 
            As a small coffee shop owner, there are endless pieces to keep track of in order to succeed, 
            and one of the major parts is ensuring you have enough supply to meet the demand of your loyal customers.
            </p>
            <p className='project-detail-text'>
            With that in mind, our team decided to enhance a currently archaic supply management system from a coffee shop in Illinois, US. 
            This project was our final project for LaunchCode, and consists of an inventory web app with management tools to optimize inventories, and inventory control. 
            </p>
          <h3>Features</h3>
            <ul>
              <li>Users can create an account (with authentication and authorization)</li>
              <li>Users can use a CRUD inventory system linked with a local API</li>
              <li>Users can add, edit, and delete items and manufacturers</li>
              <li>Users can search for items by name, category, description, <br></br>or manufacturer and view results</li>
              <li>Users can view low inventory items in their dashboard</li>
            </ul>
          <h3>Technologies</h3>
            <ul>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      <div className='column2'>
        <h3>Live Demo</h3>
        <video className='video' controls width="600" height="400">
          <source src={InventoryTracker} type="video/mp4" />
        </video>
        <h3>Challenges and what we learned</h3>
          <p className='challenges-text'>
          Our project offered valuable insights and challenges. 
          We learned the importance of setting up a proxy for secure communication. 
          GitHub collaboration taught us pull requests and conflict resolution. 
          Crafting REST API endpoints and sharing data among Angular components improved our development skills. 
          Establishing frontend-backend communication paths enhanced our project's efficiency.
          <a href="">GitHub Project Link</a>
          </p>
      </div>
      </div>
    </div>
  )
}

export default ProjectDetail2;