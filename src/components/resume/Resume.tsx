import React from "react";
import "./Resume.scss";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <div className="bg-image-jpmc" />
        <div className="resume-card-bg jpmc"></div>
        <div className="resume-card-front">
          <h2>Add Info</h2>
        </div>
        <div className="resume-card-back">
          <div className="resume-firm">
            <h1>JPMorgan Chase</h1>
          </div>
          <div className="resume-title">
            <h2>Software Engineer</h2>
          </div>
          <div className="resume-dates">
            <h3>Nov 2022 to Present</h3>
          </div>
        </div>
      </div>
      <div className="resume-card">
        <div className="bg-image-stn" />
        <div className="resume-card-bg stn"></div>
        <div className="resume-card-front">
          <h2>Add Info</h2>
        </div>
        <div className="resume-card-back">
          <div className="resume-firm">
            <h1>Stantec</h1>
          </div>
          <div className="resume-title">
            <h2>Application Developer</h2>
          </div>
          <div className="resume-dates">
            <h3>Jan 2021 to Nov 2022</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
