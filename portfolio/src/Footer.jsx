import React, { Component } from "react";
import github from "./img/github.png"
import twitter from "./img/twitter.png"
import linkedin from "./img/linkedin.png"



class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
          <img src={github} class="logo"
            // onClick={(e) => window.location.href="https://github.com/elliemadsen"}
          />
          <img src={twitter} class="logo"
            // onClick={(e) => window.location.href="https://twitter.com/ellie_madsen"}
            />
          <img src={linkedin} class="logo"
            // onClick={(e) => window.location.href="https://www.linkedin.com/in/ellie-madsen-744565155/"}
            />

      </footer>
    );
  }
}

export default Footer;