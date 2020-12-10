import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <div class="header">
            <h1>
                Ellie Madsen
            </h1>
            <div>
                <a href="#work">Work</a>
                <Link to="#work">Work</Link>

                <a href="#about">About</a>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;