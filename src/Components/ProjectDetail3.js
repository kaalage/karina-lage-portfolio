import React from 'react';
import Navbar2 from './Navbar2';
import TechJobs from '../Videos/techjobs-video.mp4';

const ProjectDetail3 = () => {
  return (
    <div>
    <Navbar2 />
    <div className='container'>
      <div className='column'>
        <div className='project-detail-container'>
          <h2>Tech Jobs</h2>
          <h3>Overview (<a href="https://github.com/St-Louis-Women-March-2022/java-assignment-4-techjobs-persistent-edition-kaalage">GitHub</a>)</h3>
          <p className='project-detail-text'>
          Tech Jobs is a user-friendly web application designed to simplify the job search process for prospective employees. 
          The main goal is to provide job seekers with an efficient platform to browse and search job listings with ease. 
          </p>
        <h3>Features</h3>
          <ul>
            <li>Users can browse and search listings of jobs</li>
            <li>Users can add skills and jobs</li>
            <li>ORM functionality</li>
          </ul>
        <h3>Technologies</h3>
          <ul>
            <li>Spring Boot MVC</li>
            <li>Java 11 </li>
            <li>Gradle 6.0.1</li>
            <li>JPA Buddy</li>
            <li>Unit testing</li>
            <li>TDD</li>
            <li>MySQL</li>
          </ul>
        <h3>Challenges and what I learned</h3>
        <p>
        During this project, I improved my unit testing skills to ensure the reliability of Job class constructors and equals methods.
        I also embraced Test-Driven Development (TDD) when creating a custom toString method, promoting thoughtful planning and cleaner code.
        To reduce redundancy, I applied inheritance to follow the "Don't Repeat Yourself" (DRY) principle, enhancing code maintainability.
        I gained experience in database persistence by connecting to MySQL, highlighting the importance of data integrity, security, and efficient data management in real-world applications.
        <a href="">GitHub Project Link</a>
        </p>
        </div>
      </div>
    <div className='column2'>
      <h3>Live Demo</h3>
      <video className='video' controls width="600" height="400">
        <source src={TechJobs} type="video/mp4" />
      </video>
    </div>
    </div>
  </div>
  )
}

export default ProjectDetail3;