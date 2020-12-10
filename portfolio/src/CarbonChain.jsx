import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import gif1 from "./img/carbonchain/User Test 1.gif";
import gif2 from "./img/carbonchain/User Test 2.gif";
import gif3 from "./img/carbonchain/Unit Test 3.gif";
import dashboard1 from "./img/carbonchain/dashboard-1.svg";
import dashboard2 from "./img/carbonchain/dashboard-2.svg";
import dashboard3 from "./img/carbonchain/dashboard-3.svg";
import dashboard4 from "./img/carbonchain/dashboard-4.svg";



class CarbonChain extends Component {

    
    render() {
      return (
        <div>
            <Header/>
            <div class="body">
                <div class="title">
                    <h1> Iterative Website Design</h1>
                    <h2>Carbon Chain</h2>
                </div>

                <div class="section">
                <h2 class="heading">Carbon Chain Context</h2>
                <p class="btext">Our startup was Carbon Chain, which provides software for companies to more accurately and 
                    efficiently track their carbon emissions. Carbon Chain’s main users are gas and oil companies, 
                    regulators, and carbon traders. Carbon Chain’s product tracks carbon emissions down to each piece 
                    of equipment used in a supply chain. 
                    <br/>
                    <br/>
                    We decided to design their main product’s interface for a 
                    user to view emissions and supply chains. We imagined that our users would each have custom needs 
                    in terms of what data was most important to them. Companies or regulators are dealing with vast 
                    amounts of data and ever changing regulations, so we wanted our interface to be customizable, 
                    simple, and insightful.
                    <br/>
                    <br/>
                    Read more about Carbon Chain <a href="https://techcrunch.com/2020/08/21/carbonchain-is-using-ai-to-determine-the-emissions-profile-of-the-worlds-biggest-polluters/">here</a>.
                    </p>
                </div>

                <div class="section">
                <h2 class="heading">Design Process</h2>

            <div>
            <h3 class="btext">Wireframes</h3>
            <p class="btext">We first created a wireframe for our design based off four sketches.</p>
            <div class="display">
                <iframe class="iframe" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FsnmtD1Uac7SLiRDbREhEB7%2FWireframes%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
            </div>
            </div>

            <div>
            <h3 class="btext">Hi-fi Mockups</h3>
            <p class="btext"> Once we decided on wireframes we liked, we converted the design into a high fidelity prototype using Figma. </p>
            <h4 class="btext">Crit Feedback</h4>
            <p class="btext"> After our first iteration of our high fidelity prototype, we participated in a critique with around 10 other students and a professional UI/UX designer. The pieces of feedback we received are detailed below:</p>
            <br/>

            <div class="blocks">
                <div class="block1 cc-card">
                    <h5 class="btext">General</h5>
                    <ul>
                        <li class="btext">Make the drop down menu on the supply chains tab appear on hover (rather than click)</li>
                        <li class="btext">Allow users to log out from anywhere on the site (rather than having to go into the account page first)</li>
                        <li class="btext">Logo is simple and works will with the start up</li>
                        <li class="btext">Color family is pleasant and highlights the important info</li>
                    </ul>
                
                </div>

                <div class="block2 cc-card">
                    <h5 class="btext">Dashboard Page</h5>
                    <ul>
                        <li class="btext">“Download report” at bottom of dashboard is good because it encourages users to scroll through the whole dashboard first</li>
                        <li class="btext">Overall design and aesthetic is good but page is long: condense more information above the page fold</li>
                        <li class="btext">Consider making the dashboard more customizable to cater to different types of users</li>
                    </ul>
                </div>

                <div class="block3 cc-card">
                    <h5 class="btext">Supply Chain Pages</h5>
                    <ul>
                        <li class="btext">The “add new” option disappearing from the supply chain drop down menu when you are on the add new supply chain page feels inconsistent</li>
                        <li class="btext">It is hard to distinguish between steps when adding a new supply chain (for example, two extraction steps look identical)</li>
                        <li class="btext">Interface for adding a new supply chain is unique and simple but needs more instructional copy</li>
                    </ul>
                </div>
                <div class="block4 cc-card">
                    <h5 class="btext">Account Page</h5>
                    <ul>
                        <li class="btext">Edit button on account page is not clear what “edit” is referring too</li>
                        <li class="btext">Generally, make the flow of the page more linear</li>
                    </ul>
                </div>
            </div>
            <br/>

            <p class="btext">Based on this feedback, we iterated on our design to address each of the concerns and suggestions while maintaining the aspects of our design that received positive feedback. A few highlights of the design changes we made are:</p>
            <ul>
                <li class="btext">Showing a high level overview of all the key pieces of information on the dashboard above the fold so that users can immediately see the most important metrics</li>
                <li class="btext">Combining the “Adjust Timescale” and “Compare” buttons under the monthly graph on the dashboard to one “Customize Chart” button for better simplicity and clarity</li>
                <li class="btext">Adding location to each step in the supply chain pages so that users can better distinguish between different steps while still maintaining a simple interface</li>
                <li class="btext">Creating a drop down hover menu from the “Account” tab to allow for users to log out from anywhere in the site</li>
            </ul>
            <h4 class="btext">Final Prototype</h4>
            <div class="display">
                <iframe class="iframe" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAH5UgLKXzFH2fxYRsndTS2%2FCarbon-Chain%3Fnode-id%3D20%253A5%26scaling%3Dscale-down-width" allowfullscreen></iframe>
            </div>
            </div>

            
            </div>

            <div class="section">
            <h2 class="heading">User Testing</h2>
            <p class="btext">Next, we gathered more feedback on our interface through user testing. We submitted our prototype, 
                a task, and follow-up questions and got responses from 3 users.</p>
            <h3 class="btext">Taks and Questions for Users</h3>
                <p class="btext">Main Task</p>
                <ul>
                <li class="btext">Imagine you work at an oil company and are a new user of this product. Edit one of your existing supply chains.</li>
                <li class="btext">Users were also given context on the startup and informed that this was a prototype not a website.</li>
                </ul>
                <p class="btext">Subtasks</p>
                <ul>
                <li class="btext">Log in </li>
                <li class="btext">Describe what you can do on this website (do not leave the dashboard)</li>
                <li class="btext">Where would you go to edit a supply chain? Explain what you would expect to see there</li>
                <li class="btext">Modify a specific step in the supply chain</li>
                </ul>
                <p class="btext">Post-test Questions</p>
                <ul>
                <li class="btext">How easy or hard was it to complete the task? (0=Really easy, 6=Really hard) Why?</li>
                <li class="btext">If you had a magic wand, how would you improve this site?</li>
                <li class="btext">What did you like about the site?</li>
                <li class="btext">Would you add anything to the site? Were there any features you wished to see?</li>
                </ul>
            <h3 class="btext">Results</h3>
            <div class="result-grid">
                <div class="result-block1 cc-card">
                <p class="btext">User 1 Answers</p>
                <ul>
                    <li class="btext">3.Because it was confusing to find out where to edit each step of the supply chain </li>
                    <li class="btext">add small images or symbols that go hand to hand and explain the work being done at each step of the supply chain . Better clarify the goal of the website. To reduce the font of the number that tracks total CO2 emissions /year. </li>
                    <li class="btext">I liked the fact that it gives a step wise detailed picture of the process of natural resources extraction and manufacturing. you can see in detail what happens at each step </li>
                    <li class="btext">Maybe more visuals so that the user can get a better idea of what is this website about.</li>
                </ul>
                </div>
                <div class="result-block2 ">
                <img src={gif1} alt="" class="gif"/>
                </div>
                <div class="result-block3 cc-card">
                <p class="btext">User 2 Answers</p>
                <ul>
                    <li class="btext">3 </li>
                    <li class="btext">some icons to illustrate the menus and some info showing from the options when you hover your mouse over it  </li>
                    <li class="btext">its pretty simple not much things to look at </li>
                    <li class="btext">maybe add a comparison between your emissions and the ones of the same industry in different countries</li>
                </ul>
                </div>
                <div class="result-block4">
                <img src={gif2} alt="" class="gif"/>
                </div>
                <div class="result-block5 cc-card">
                <p class="btext">User 3 Answers</p>
                <ul>
                    <li class="btext">0 - very intuitive and the navigation was simple and logical</li>
                    <li class="btext">maybe make the visuals a bit more appealing and provide more functionality with regards to editing the supply chain</li>
                    <li class="btext">simple, easy to navigate and a clean, professional design.</li>
                    <li class="btext">Improve the visuals, make it a more modern and visually attractive page. Increase the functionality on supply chain editing page, such as other parts of the supply chain which could be edited.</li>
                </ul>
                </div>
                <div class="result-block6">
                <img src={gif3} alt="" class="gif"/>
                </div>
            </div>
            <h3 class="btext">Analysis</h3>
            <ul>
                <li class="btext">Two out three users were able to edit a supply chain (the main task) quickly and efficiently. </li>
                <li class="btext">In terms of the sub-tasks, no users struggled with logging in. Most users identified the main tasks you can perform on the site in terms of what information you can view. When users were asked where they would go to edit a supply chain, there was something outside of our expectations. Two users indicated that they thought clicking on the drop down menu on “All Chains” on the dashboard would take them to the supply chain. The only other mistake a user made was a misunderstanding that it was a prototype and not a website. Overall the users did well on the subtasks.</li>
                <ul>
                <li class="btext">The gifs above demonstrate the ways users tried to navigate to the supply chain page</li>
                </ul>
                <li class="btext">One potential interface change could be changing the language on the “You are viewing section.” This was intended to allow users to quickly customize their dashboard view, however, it seemed that users interpreted it more as a navigation. One option could be change the title to “Change View,” add some more instructional copy 
                (at least for first time users) or incorporate it into the customize dashboard button at the top. Based on the written feedback, we also could include more icons and add back in our compare feature.</li>
            </ul>
            </div>
            {/* <script src="app.js"></script> */}

        </div>

        <Footer/>

    </div>
      );
    }
  }
  
  export default CarbonChain;