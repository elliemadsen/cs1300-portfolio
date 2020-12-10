import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';



class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <div class="header">
          <Link to="/">
            <h1>
                My Name
            </h1>
          </Link>

            <div>
                <Link to="/#work">Work</Link>
                <Link to="/#about">About</Link>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;