import React from "react";
import Line from "../Assets/line.png";
import ProjectsTitle from "../Assets/projects-title.png";
import ProjectsBackground from "../Assets/projects-background.png";
import OuterImage from "../Assets/outer-image.png";
import ImageSlider from "./ImageSlider";

const Projects = () => {
    return (
        <div id="projects-component" className="projects-section-container">
            <div>
                <p className="projects-subheading">Crafting solutions through<br></br>code and creativity</p>
            </div>
            <div className="line-separator">
                <img src={Line} alt="" />
            </div>
            <div className="project-heading">
                <img src={ProjectsTitle} alt="" />
            </div>
            <div className="projects-background-image-container">
                <img src={ProjectsBackground} alt="" />
            </div>
            <div className="projects-section-image-container">
                <div className="outer-image">
                    <img src={OuterImage} alt="" className="image" />
                    <div className="image-slider-container">
                        <ImageSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

