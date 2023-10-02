import React from 'react';
import AboutImage from "../Assets/about-image.png";
import AboutTitle from "../Assets/about-title.png";
import AboutBackground from "../Assets/about-background.png";
import Resume from "../Assets/KarinaLageCV.pdf";
import { SiPostman } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BiLogoReact, BiLogoAngular, BiLogoSpringBoot, BiLogoNodejs, BiLogoBootstrap } from "react-icons/bi";
import { BiLogoJava, BiLogoTypescript, BiLogoJavascript, BiLogoAws, BiLogoFigma } from "react-icons/bi";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <div className='about-heading'>
            <img src={AboutTitle} alt="" />
        </div>
        <p className="primary-text">
        Hello! I'm a LaunchCode alumna and a lifelong learner who might have a thing or two for musical theatre shows (yes, I know how to sing Guns and Ships from Hamilton). 
        With a background in Production Engineering and a passion for <span style={{ textDecoration: 'underline' }}>innovation</span>, 
        I bring a blend of technical, <span style={{ textDecoration: 'underline' }}>problem-solving</span> abilities, and <span style={{ textDecoration: 'underline' }}>adaptability</span> to every role.
        </p>
        <p className="stack-icons">
        <button>
          <BiLogoJavascript className="icon"/>
          <span>Javascript</span>
        </button>
        <button>
          <BiLogoTypescript className="icon"/>
          <span>Typescript</span>
        </button>
        <button>
          <BiLogoJava className="icon"/>
          <span>Java</span>
        </button>
        <button>
          <BiLogoReact className="icon"/>
          <span>React</span>
        </button>
        <button>
          <BiLogoAngular className="icon"/>
          <span>Angular</span>
        </button>
        <button>
          <BiLogoBootstrap className="icon"/>
          <span>Bootstrap</span>
        </button>
        <button>
          <BiLogoSpringBoot className="icon"/>
          <span>Spring Boot</span>
        </button>
        <button>
          <BiLogoNodejs className="icon"/>
          <span>Node.js</span>
        </button>
        <button>
          <BiLogoAws className="icon"/>
          <span>AWS</span>
        </button>
        <button>
          <SiPostman className="icon"/>
          <span>Postman</span>
        </button>
        <button>
          <DiMysql className="icon"/>
          <span>MySQL</span>
        </button>
        <button>
          <BiLogoFigma className="icon"/>
          <span>Figma</span>
        </button>
        </p>
        <div className="about-buttons-container">
          <a href={Resume} download='Karina Lage Resume'>
          <button className="secondary-button">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;