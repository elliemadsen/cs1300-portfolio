import React, {Component} from "react";
import DisplayProjects from "./DisplayProjects";

const projects = [
    {name:"Website Redesign", link:"/WebsiteRedesign"},
    {name:"Interface Redesign", link:"/InterfaceRedesign"},
    {name:"Internship Reviews", link:"/InternReviews"},
    {name:"Carbon Chain", link:"/CarbonChain"}
]

class Body extends Component {

  render() {
    return (
      <div className="App-body" id="work">
        <h1 class="large">Work</h1>
        <DisplayProjects list={projects}/>
      </div>
    );
  }
}

export default Body;