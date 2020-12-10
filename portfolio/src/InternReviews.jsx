import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import design from "./img/design.svg";
import finalsite from "./img/final-site.jpg";

class InternReviews extends Component {
    render() {
      return (
    <div>
        <Header/>

        <div class="body">
            <div class="title">
            <h1> React App Development </h1>
            <h2>Intern Reviews</h2>
            </div>

            <div class="section">
            <h2 class="heading">Approach</h2>
            <h3 class="btext">Goal</h3>
            <p class="btext">I was tasked with using React to create a list interface that aggregates items.</p>
            <p class="btext">I chose to create a site with the theme of “Internship Reviews.” The purpose of this app is to increase transparency within the tech industry and allow Brown students to better select internships and companies that align with their personal values.</p>
            <h3 class="btext">Design</h3>
            <p class="btext">I coded this app using react-javascript. Below is the class hierarchy I designed:</p>
            <img src={design} id="img-design"/>
            <h3 class="btext"> Usability </h3>
            <p class="btext">I made the page responsive to fit different screen widths. To increase the learnability of the site, I made sure that all interactive elements, such as buttons, changed color when moused over to indicate they can be clicked. When favorited, cards are marked with a yellow star both in the list and the favorites section to make it clear to the user that these cards represent the same object. I also included a “reset” button that allows users to easily reset the list to the original state if they make a mistake.</p>

            </div>

            <div class="section">
                <h2 class="heading">Result</h2>
                <p class="btext">Below is a sample of the final site. Each card represents an internship completed by a Brown student, and includes the company, position, location, industry, year and rating. If I were to deploy this site, I would also interview Brown students and include their review of the internship in each card.</p>
                <img src={finalsite} id="img-site"/>
                <button class="button" onClick=" window.open('https://github.com/elliemadsen/internship-review','_blank')">GitHub Repo ➜</button>
                <button class="button" onClick=" window.open('https://internship-review.herokuapp.com/','_blank')">Deployed Site ➜</button>
            </div>

        </div>
        <Footer/>
    </div>
      );
    }
  }
  
  export default InternReviews;