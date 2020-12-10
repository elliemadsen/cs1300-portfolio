import React, { Component } from "react";
import { NavLink } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <div class="background">
              <h1 class="large">Hi, I'm Ellie.</h1>
              <h1>I'm a student, software engineer, and designer.</h1>
          </div>
      </header>
    );
  }
}

export default Header;