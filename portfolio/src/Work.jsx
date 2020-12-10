import React, {Component} from "react";
import DisplayProjects from "./DisplayProjects";

const projects = [
    {name:"Website Redesign", img:"img", link:"https://stark-ocean-08515.herokuapp.com/"},
    {name:"Interface Redesign", img:"img", link:"/projects/personas"},
    {name:"Internship Reviews", img:"img", link:"https://polar-river-78462.herokuapp.com/"}
    // {name:"graphics", img:"img", link:""}
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