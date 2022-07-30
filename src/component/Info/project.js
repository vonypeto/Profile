import React from "react";
import "./projects.css";

const ProjectCardsFlip = (props) => {
  const { data, title, image } = props;
  return (
    <div>
      <h1> Projects</h1>
      <div className="wrapper">
        <div className="cols">
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front">
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Project 1</p>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardsFlip;
