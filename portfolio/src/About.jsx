import React, {Component} from "react";

class Body extends Component {

  render() {
    return (
      <div className="App-body" id="about">
        <h1 class="large">About</h1>
        <div class="paragraph">
            <p>I'm an undergraduate student at Brown Unviersity studying Computer Science with focuses in ethics and design, and Environmental Studies with a focus in equity.</p>
            <p>My work experience includes being an Energy Data Analyst for the City of Providence Office of Sustainability, a Software Engineering Intern at Pinterest, and a Socially Responsible Computing Teaching Assistant within Brown's Department of Computer Science.</p>
            <p>Outside of academia and industry, my interests include fashion design, cooking and reading.</p>
        </div>

      </div>
    );
  }
}

export default Body;