import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from './ScrollToTop';
import currissues from "./img/curr-issues.svg";
import balsamiq from "./img/balsamiq.svg";
import figma from "./img/figma.svg";
import styleguide from "./img/style-guide.svg";
import oldiphone1 from "./img/old-phone-1.png";
import oldipad1 from "./img/old-ipad-1.png";
import oldipad2 from "./img/old-ipad-2.png";
import newiphone1 from "./img/new-phone-1.png";
import newipad1 from "./img/new-ipad-1.png";
import newipad2 from "./img/new-ipad-2.png";


class WebsiteRedesign extends Component {
    render() {
      return (
    <div>
        {/* <ScrollToTop/> */}
        <Header/>
        <div class="body">
            <div class="title">
                <h1> Responsive Website Redesign </h1>
                <h2>On The Rhode To Freedom</h2>
            </div>
            <div class="section">
                <h2 class="heading">Current Site</h2>
                <p class="btext">On The Road To Freedom is a roadside guide to African American sites in Rhode Island. The resource was created by the Stages of Freedom, a local non-profit organization that promotes black cultural events, and is hosted on their website. The page lists a large number of historic properties, churches, businesses, and burial sites associated with the state’s deeply rooted slave legacy. Organized by municipality, the sheer amount of information included in this guide makes comprehension difficult, but this is exacerbated by the page’s interface design.</p>
                <p class="btext">I redesigned the On The Road To Freedom web page to be responsive across various device sizes while improving the site’s usability and visual design.</p>
                <button class="button" onclick=" window.open('https://www.stagesoffreedom.org/on-the-rhode-to-freedom','_blank')">View the current website ➜</button>
            </div>

            <div class="section">
                <h2 class="heading"> Current Issues </h2>
                <h3 class="btext"> Usability </h3>
                <p class="btext">Performing a heuristic evaluation and analyzing the site based on criteria of usability, learnability, and memorability revealed many issues with the page’s visual design and lack of responsiveness.</p>
                <img src={currissues} alt="Issues associated with the current website." class="image" id="large"/>
                <h3 class="btext"> Accessibility </h3>
                <p class="btext">A Web Accessibility Evaluation Tool resulted in 44 errors on the site (mostly due to empty headings), 1,197 contrast errors (due to the white text on a light colored background) and 47 alerts (due to suspicious links).</p>
                <p class="btext">When using a screen reader to assess the site’s accessibility for people who are visually impaired, the lack of alternative titles made it impossible to understand images. The use of empty headings and lack of hierarchy between headings and text also made comprehension difficult.</p>
            </div>

            <div class="section">
                <h2 class="heading"> Visual Redesign </h2>
                <h3 class="btext"> Low-Fidelity Wireframes </h3>
                <p class="btext">Created with Balsamiq, the following wireframes display a simple low-fidelity representation of the page’s redesign. The annotations describe where and how the wireframes solve the issues associated with the current site.</p>
                <img src={balsamiq} alt="Improved low-fidelity design of web, tablet, and phone interfaces." class="image" id="large"/>
                <h3 class="btext"> High-Fidelity Prototypes </h3>
                <p class="btext">Created with Figma, the following high-fidelity mock-ups realistically prototype the low-fidelity wireframes. The annotations describe how developers can reproduce the elements in HTML and CSS and implement responsiveness across three common device widths.</p>
                <img src={figma} alt="Improved high-fidelity design of web, tablet, and phone interfaces." class="image" id="large"/>
                <h3 class="btext"> Visual Design Style Guide </h3>
                <p class="btext">This guide keeps visual elements consistent across the site while making handoff to developers easier.</p>
                <img src={styleguide} alt="Style guide of typeface, colors, icons, and navbars." class="image" id="guide"/>
            </div>

            <div class="section">
                <h2 class="heading"> Responsive Redesign </h2>
                <p class="btext">Finally I built the responsively redesigned website in HTML and CSS by referring to my prototypes and visual design style guide.</p>
                <button class="button" onclick=" window.open('redesign.html','_blank')">View the redesigned website ➜</button>
                <div class="grid-1by2">
                <div class="block1">
                    <h2 class="btext" id="center">Before</h2>
                    <img src={oldiphone1} class="small" id="iphone" alt="old phone screen display"/>
                    <img src={oldipad1} class="small" alt="old phone screen display"/>
                    <img src={oldipad2} class="small" alt="old ipad screen display"/>
                </div>
                <div class="block2">
                    <h2 class="btext" id="center">After</h2>
                    <img src={newiphone1} class="small" id="iphone" alt="new phone screen display"/>
                    <img src={newipad1} class="small" alt="new phone screen display"/>
                    <img src={newipad2} class="small" alt="new ipad screen display"/>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
      );
    }
  }
  
  export default WebsiteRedesign;